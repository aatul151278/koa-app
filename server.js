"use strict";
//to get .env variables
import * as dotenv from 'dotenv'
dotenv.config();

import Koa from 'Koa';
import Router from '@koa/router';
import serve from 'koa-static'
import mount from 'koa-mount'
//middleware lib for template load
import render from 'koa-ejs';
import path from 'path';
import { initService, getSliderImages, getProductsWithImages } from './services/unsplash.js';


//to resolve this error : ReferenceError: __dirname is not defined in ES module scope, add this three line of code
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = new Koa();
const router = new Router();
const PORT = process.env.PORT;

//static file path
app.use(mount('/services', serve('./services')));

//Handle global error
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log(err)
    ctx.status = err.status || 500;
    ctx.body = err.message;
  }
});

//to render context body as a html page in koa application
render(app, {
  root: path.join(__dirname, "pages"),
  layout: "home",
  viewExt: "html",
  cache: false,
});

//default render home page when app load url : http://localhost:${PORT}
router.get("/", async (ctx) => {

  return ctx.render("home", {
    sliderImages: await getSliderImages(),
    products: await getProductsWithImages(),
    dogImage: []
  });
});

//configure route of the application
app.use(router.routes()).use(router.allowedMethods());

//listen app in configure port
app.listen(PORT, () => {
  initService()
  console.log(`server running on port: http://localhost:${PORT}`);
});
