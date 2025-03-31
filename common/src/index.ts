import z from "zod"
export const signupInput = z.object({
    email:z.string().email(),
    password:z.string().min(4).max(20),
    name:z.string().min(4).max(20).optional(),

})
export const blogInput = z.object({
    title:z.string(),
    content:z.string()
})
export const signinInput = z.object({
    email:z.string().email(),
    password:z.string().min(4).max(20)
})
export const updateblogInput = z.object({
    id:z.string(),
    title:z.string(),
    content:z.string()
})
export type SignupInput = z.infer<typeof signupInput>
export type BlogInput = z.infer<typeof blogInput>
export type SigninInput = z.infer<typeof signinInput>
export type UpdateBlogInput = z.infer<typeof updateblogInput>