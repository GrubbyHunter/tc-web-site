'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    const locals = {
      title: '首页',
      key: 'index',
    };

    // const viewOptions = {
    //   layout: 'public/layout.ejs',
    // };

    await ctx.render('index.ejs', locals);
  }
}

module.exports = HomeController;
