'use strict';

const { Controller } = require('egg');

class AboutController extends Controller {
  async index() {
    const { ctx } = this;

    const locals = {
      title: '关于我们',
    };

    // const viewOptions = {
    //   layout: 'public/layout.ejs',
    // };

    await ctx.render('about.ejs', locals);
  }
}

module.exports = AboutController;
