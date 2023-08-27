'use strict';

const { Controller } = require('egg');

class BlogController extends Controller {
  async index() {
    const { ctx } = this;

    const locals = {
      title: '公司动态',
      key: 'blog',
    };

    // const viewOptions = {
    //   layout: 'public/layout.ejs',
    // };

    await ctx.render('blog.ejs', locals);
  }
}

module.exports = BlogController;
