/**
 * 存储localStorage
 */
export const setLocalStorage = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getLocalStorage = name => {
	if (!name) return;
	return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeLocalStorage = name => {
	if (!name) return;
	window.localStorage.removeItem(name);
}




/**
 * 存储sessionStorage
 */
export const setSessionStorage = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.sessionStorage.setItem(name, content);
}

/**
 * 获取sessionStorage
 */
export const getSessionStorage = name => {
	if (!name) return;
	return window.sessionStorage.getItem(name);
}

/**
 * 删除sessionStorage
 */
export const removeSessionStorage = name => {
	if (!name) return;
	window.sessionStorage.removeItem(name);
}

//格式化时间
export const formatDate = (date, pattern) =>{
	var SIGN_REGEXP = /([yMdhsm])(\1*)/g;
	var DEFAULT_PATTERN = 'yyyy-MM-dd';
	function padding(s, len) {
		var len = len - (s + '').length;
		for (var i = 0; i < len; i++) { s = '0' + s; }
			return s;
	};
	pattern = pattern || DEFAULT_PATTERN;
	return pattern.replace(SIGN_REGEXP, function ($0) {
		switch ($0.charAt(0)) {
			case 'y': return padding(date.getFullYear(), $0.length);
			case 'M': return padding(date.getMonth() + 1, $0.length);
			case 'd': return padding(date.getDate(), $0.length);
			case 'w': return date.getDay() + 1;
			case 'h': return padding(date.getHours(), $0.length);
			case 'm': return padding(date.getMinutes(), $0.length);
			case 's': return padding(date.getSeconds(), $0.length);
		}
	});
}

//格式化年级
export const gradeFormat = (grade)=>{
	let i = parseInt(grade);
	let str = "";
	if(i){		
		switch(i){
			case 1: str = "一年";break;
			case 2: str = "二年";break;
			case 3: str = "三年";break;
			case 4: str = "四年";break;
			case 5: str = "五年";break;
			case 6: str = "六年";break;
		}
	}
	return str;
}