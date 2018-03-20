'use strict';

const Controller = require('egg').Controller;

class ViewController extends Controller {
	constructor(ctx){
		super(ctx);
		const User = this.ctx.Model('User');
		this.userid = 1;
		this.User = User;
	}

	async list(){
		const list = await this.User.find().all();
		this.ctx.body = list;
	}

	async index() {
		const user = await this.User.fetch(this.userid);
		if( user.not('exists') ){
			return this.ctx.body = '用户不存在';
		}
		return {user};
	}

	async create(){
		const user = this.User.create({
			name: '测试用户' + this.app.datetime.time(),
			password: '123456'
		});

		const validate = await user.validate();
		if( validate && await user.save() ){
			return this.ctx.body = {
				message: 'create user success',
				user
			};
		}else{
			return this.ctx.body = {
				message: 'create user failed',
				errors: user.errors
			};
		}
	}

	async edit(){
		const user = await this.User.fetch(this.userid);
		if( user.not('exists') ){
			return this.ctx.body = '用户不存在';
		}
		user.name = 'test';

		const validate = await user.validate('update');
		if( validate && await user.save() ){
			return this.ctx.body = {
				message: 'update user success',
				user
			};
		}else{
			return this.ctx.body = {
				message: 'update user failed',
				errors: user.errors
			};
		}
	}

	async delete(){
		const user = await this.User.fetch(this.userid);
		if( user.not('exists') ){
			return this.ctx.body = '用户不存在';
		}

		const validate = await user.validate('delete');
		if( validate && await user.delete() ){
			return this.ctx.body = {
				message: 'delete user success',
				user
			};
		}else{
			return this.ctx.body = {
				message: 'delete user failed',
				errors: user.errors
			};
		}
	}

}

module.exports = ViewController;
