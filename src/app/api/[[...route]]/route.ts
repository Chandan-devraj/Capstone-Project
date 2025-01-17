// import {Hono} from 'hono';
// import {handle} from 'hono/vercel'

// const app=new Hono().basePath('/api');

// app.get('/hello',(c)=>{
//     return c.json({hello:'World'})
// })

// app.get('/project/:projectId',(c)=>{
//     const {projectId}=c.req.param()
//     return c.json({project:projectId});
// })
// export const GET =handle(app);
import { Hono } from "hono";
import { handle } from "hono/vercel";
import auth from '@/features/auth/server/route';

const app = new Hono().basePath("/api");
 const routes = app
 .route('/auth',auth);
export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes; // holds entire API routes