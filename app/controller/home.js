'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
	constructor(ctx){
		super(ctx);
	}
	async index() {
		return this.ctx.body = '';
	}
}

module.exports = HomeController;
