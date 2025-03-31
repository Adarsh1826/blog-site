import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import{decode,sign,verify} from "hono/jwt"
export const userRoute = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SEC:string
    }
}>()
userRoute.post('/signup',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate());
      const body = await c.req.json()
      const{email,name,password} = body
      const isOk = await prisma.user.findUnique({
        where:{
            email:email
        }
      })
      if(isOk){
        return c.json({
            "msg":"Already registered"
        })
      }
      const user =await prisma.user.create({
        data: {
          email: email,
          name:name,
          password:password
        },
      })
      const token = await sign({id:user.id},c.env.JWT_SEC)
      return c.json({
        "msg":"Registered Successfully",
        token
      })  
})
userRoute.post('/sigin',async (c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const body = await c.req.json()
    const{email,password} = body;
    const user = await prisma.user.findUnique({
      where:{
        email:email,
        password:password
      }
    })
    if(!user){
      c.status(403)
      return c.json({
        "msg":"Register first"
      })
    }
    const token = await sign({id:user.id},c.env.JWT_SEC)
    return c.json({
      token,
    })
})
