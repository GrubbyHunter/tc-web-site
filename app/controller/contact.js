'use strict';

const { Controller } = require('egg');

class ContactController extends Controller {
  async index() {
    const { ctx } = this;

    const locals = {
      title: '联系我们',
      key: 'contact',
    };

    // const viewOptions = {
    //   layout: 'public/layout.ejs',
    // };

    await ctx.render('contact.ejs', locals);
  }
}

module.exports = ContactController;
