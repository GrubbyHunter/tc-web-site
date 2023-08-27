'use strict';

const { Controller } = require('egg');

class ProjectController extends Controller {
  async index() {
    const { ctx } = this;

    const locals = {
      title: '公司项目',
      key: 'project',
    };

    // const viewOptions = {
    //   layout: 'public/layout.ejs',
    // };

    await ctx.render('project.ejs', locals);
  }
}

module.exports = ProjectController;
