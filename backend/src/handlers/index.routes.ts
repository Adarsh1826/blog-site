import { Hono } from "hono";
const router = new Hono()
router.post('/api/v1/sigup',(c)=>{
    return c.text('Hello')
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
export default router;
