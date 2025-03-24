import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/extension'
import { withAccelerate } from '@prisma/extension-accelerate'
import{decode,sign,verify} from "hono/jwt"
const router = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SEC:string
    }
}>()
router.post('/api/v1/sigup',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate());
      const body = await c.req.json()
      const{email,name,password} = body
      const isOk = await prisma.user.findOne({
        where:{
            email:email
        }
      })
      if(isOk){
        if (isOk.length > 0) {
            return c.json({
                "msg": "Email already registered"
            })
        }
      }
      const user =await prisma.user.create({
        data: {
          email: email,
          name:name,
          password:password
        },
      })
      const token = sign({id:user.id},c.env.JWT_SEC)
      console.log(token);
      return c.json({
        "msg":"Registered Successfully",
        jwt:token
      })
      
})
router.post('/api/v1/sigin',(c)=>{
    return c.text('Hello')
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
