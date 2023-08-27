'use strict';

const { Controller } = require('egg');

class ServiceController extends Controller {
  async index() {
    const { ctx } = this;

    const locals = {
      title: '招标公示',
      key: 'service',
    };

    // const viewOptions = {
    //   layout: 'public/layout.ejs',
    // };

    await ctx.render('service.ejs', locals);
  }
}

module.exports = ServiceController;
