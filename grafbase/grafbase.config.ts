import { g, auth, config } from '@grafbase/sdk'


const User=g.model('User',{
  name:g.string().length({min:2,max:20}),
  email:g.string().unique(),
  avatar:g.url(),
  des:g.string().optional(),
  githubUrl:g.url().optional(),
  linkedinUrl:g.url().optional(),
  projects:g.relation(()=>Project).list().optional(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
})
const Project=g.model('Project',{
title:g.string(),
des:g.string(),
image: g.url(),
liveSiteUrl: g.url(), 
githubUrl: g.url(), 
})
export default config({
  schema: g
 
})
