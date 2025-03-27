import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import{decode,sign,verify} from "hono/jwt"
const router = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SEC:string
    }
}>()
router.use('api/v1/blog/*',async(c,next)=>{
  const header = c.req.header("authhorization") || ""
  const res =  await verify(header,c.env.JWT_SEC)
  if(res.id){
    await next()
  }
  else {return c.json({
    "msg":"Unauthorized access",
  })
}
})
router.post('/api/v1/signup',async (c)=>{
   
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate());
      //console.log(c.env.DATABASE_URL);
      
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
      console.log(token);
      return c.json({
        "msg":"Registered Successfully",
        jwt:token
      })
      
})
router.post('/api/v1/sigin',async (c)=>{
  const prisma = new PrismaClient()
  const body = await c.req.json()
  const{email,password} = body;
  const user = await prisma.user.findUnique({
    where:{
      email:email,
      password:password
    }
  })
  if(!user){
    return c.json({
      "msg":"Register first"
    })
  }
  const token = await sign({id:user.id},c.env.JWT_SEC)
  return c.json({
    token
  })

   
})
router.post('/api/v1/blog',(c)=>{
    return c.text('Hello')
})
router.put('/api/v1/blog',(c)=>{
    return c.text('Hello')
})
router.post('/api/v1/blog/:id',(c)=>{
    return c.text('Hello')
})
router.get('/',(c)=>{
    return c.text('Hello ji')
})
export default router;
