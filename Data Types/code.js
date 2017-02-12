'use strict'

module.exports = {
	dataTypes:function(param){
		if (typeof param === "number"){
			if (param < 100){
				return 'less than 100';
			}
			else if (param > 100){
				return 'more than 100';
			}
			else{
				return 'equal to 100';
			}
		}	

		if (typeof param === "string"){
			return param.length;
		}

		if (typeof param === "undefined" || param == null){
			return 'no value';
		}

		if (typeof param === "boolean"){
			return param;
		}

		if (param instanceof Array){
			if (param.length >= 3){
				return param[2];
			}
			return undefined;
		}

		if (typeof param === 'function'){
			var callback = function(param, callback){
        		callback.call();
    		}
    		return 'called callback';
		}
 	}

}
