'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    await ctx.render('hello.ejs', {
      data: 'world',
    });
  }
}

module.exports = HomeController;
