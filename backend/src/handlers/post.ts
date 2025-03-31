import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import{decode,sign,verify} from "hono/jwt"
import {blogInput,updateblogInput} from "ads-blog-common"
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
      const {success} = blogInput.safeParse(body)
      if(!success){
        return c.json({
          "msg":"Invalid inputs",
        })
      }
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
postRoute.put('/update',async(c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  //const id = await c.req.param("id")
  const body = await c.req.json()
  const {success} = updateblogInput.safeParse(body)
      if(!success){
        return c.json({
          "msg":"Invalid inputs",
        })
      }
  const {title,content} = body;
  const post = await prisma.post.update({
    where:{
      id:body.id
    },
    data:{
      title,
      content
    }
  })
  return c.json({
    post
  })
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
postRoute.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  try {
    const postId = c.req.param("id");  

    const post = await prisma.post.findFirst({
      where: { id: postId },
    });

    if (!post) {
      return c.json({ msg: "Post not found" }, 404);
    }

    return c.json({ post });
  } catch (error) {
    console.error("Error fetching post:", error);
    return c.json({ msg: "Something went wrong" }, 500);
  }
})