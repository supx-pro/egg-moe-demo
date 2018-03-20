'use strict';
const { ActiveRecord, Validate, Field } = require('imoe-query');
const { Rule } = Validate;
module.exports = app => {
	class Model extends ActiveRecord{
		constructor(){
			super();
		}

		tableName(){
			return 'user';
		}

		fields(){
			return {
				username: new Field('username').label('用户名').string(64).unique(this),
				password: new Field('password').label('密码').string(64)
			}
		}

		labels(){
			// 会覆盖fields中设置的label
			return {
				name: '姓名'
				// loginname: '用户名',
				// pass: '密码'
			};
		}

		extras(){
			return {
				son: function(){
					// 如果返回null，则不会设置该属性
					return this.Son || []
				}
			}
		}

		rules(){
			return [
				// 第一种写法，直接使用定义好的field
				new Rule(this.field.loginname),
				// 第二种写法
				new Rule('name').required(),
				// 
				// **自定义validate
				// new Rule('test').validate({
				//     message: '错误提示',
				//     validate: function(value, row, field){
				//         value为当前field值，row为当前数据对象，如果当前field不存在，返回null
				//     }
				// })
				// 
				// on方法传参说明
				// 可接受传参: ['insert', 'update', 'delete']
				// 默认: ['insert', 'update']
				// 传入方式1：rule.on('delete')
				// 传入方式2：rule.on(['update', 'delete'])
				new Rule(this.field.password).required().on(['insert']),
				// 使用场景
				// 1.如果是注册/新增用户，需校验密码
				// new Rule(this.field.password).required().on(['insert']),
				// 此时新增数据中必须包含password属性，当事件为update时则不需包含
				// 2.删除用户时如果该用户有关联子用户，提示无法删除
				// new Rule('Son').validate({
				// 	message: function(){
				// 		return '该用户下还有子用户未删除，请删除子用户后操作';
				// 	},
				// 	validate: function(value, row){
				// 		if( value ){
				// 			return false;
				// 		}
				// 	}
				// }).on('delete')
				// new Rule('password').required().on(['insert']),
				// new Rule('email').email()
			];
		}

		relation(){
			return {
				Son: this.hasMany(app.model.Son, {
					//原表字段->目标表字段
					id: 'userid'
				})
			}
		}

		master(){
			return app.db;
		}
	};
	return Model;
};