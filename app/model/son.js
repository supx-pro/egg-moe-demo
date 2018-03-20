'use strict';

const { ActiveRecord, Validate, Field } = require('imoe-query');
const { Rule } = Validate;
module.exports = app => {
	class Model extends ActiveRecord{
		constructor(){
			super();
		}

		extras(){
			return {
			};
		}

		fields(){
			return {
			};
		}

		labels(){
			return {
				name: '姓名'
			}
		}

		rules(){
			return [
				new Rule('name').required()
			];
		}

		tableName(){
			return 'user_son';
		}

		relation(){
			return {
			}
		}

		master(){
			return app.db;
		}

	};
	return Model;
};