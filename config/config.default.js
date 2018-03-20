'use strict';

module.exports = appInfo => {
	const config = exports = {};
	config.db = {
    // database configuration 
    client: {
    	configs: {
    		common: {
    			hostname : '127.0.0.1',
    			database : 'moe-test',
    			username : 'root',
    			password : '',
    			tablepre : 'moe_',
    			charset : 'utf-8',
    			type : 'mysql',
    			debug : false
    		}
    	},
    },
		app: true,
		agent: false,      
	};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1521515629546_2917';

  // add your config here
  config.middleware = [];

  return config;
};
