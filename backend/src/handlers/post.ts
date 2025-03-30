import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import{decode,sign,verify} from "hono/jwt"
export const postRoute = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SEC:string
        
    },
    Variables:{
        userId:string;
    }
}>()
postRoute.use('/*', async (c, next) => {
    try {
      const authHeader = c.req.header("Authorization") || "";
      const res = await verify(authHeader, c.env.JWT_SEC);
      if (res?.id) {
        c.set("userId", res.id as string);
        await next();
      } else {
        return c.json({ "msg": "Unauthorized: Invalid Token" }, 401);
      }
    } catch (error) {
     console.log(error);
     
    }
  });

postRoute.post('/create',async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate());
      const body = await c.req.json()
      try {
        const userId = await c.get("userId")
        const {title,content}=body;
        const post = await prisma.post.create({
          data:{
              title,
              content,
              authorId:userId
          }
        })
        return c.json({
          id:post.id
        })
      } catch (error) {
        console.log(error);
        
      }
    
})
postRoute.get('/',async (c)=>{

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate());
    //const postId = c.req.query("id");  
    const body = await c.req.json()
    try {
        const post = await prisma.post.findFirst({
            where:{
                id:body.id
            },
        })
        return c.json({
            post
        })
    } catch (error) {
        return c.json({
            "msg":"create first post"
        })
    }
})
postRoute.get('/bulk',async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate());
      const posts = await prisma.post.findMany()
      return c.json({
        posts,
      })

})