let ApiRootUrl = '';


if(process.env.NODE_ENV === 'development'){
	ApiRootUrl = 'http://localhost:6061/'
	
}else{
	if(process.env.env_config =="production"){
		//生产线
		ApiRootUrl = 'https://ly.chenrd.com/api/';
	}else{
		//测试线
		ApiRootUrl = 'https://ly.chenrd.com/api/';
	}
}

export default{
  ApiRootUrl
}