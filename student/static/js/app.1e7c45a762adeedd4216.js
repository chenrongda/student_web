webpackJsonp([1],{"2E6H":function(e,t){},"3PGg":function(e,t){},"6w26":function(e,t){},BXvE:function(e,t){},JQA1:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},i,!1,function(e){a("jOUh")},null,null).exports,l=a("NYxO"),r=function(e){var t=parseInt(e),a="";if(t)switch(t){case 1:a="一年";break;case 2:a="二年";break;case 3:a="三年";break;case 4:a="四年";break;case 5:a="五年";break;case 6:a="六年"}return a};s.default.use(l.a);var o=new l.a.Store({state:{userInfo:""},getters:{getUserInfo:function(e){return e.userInfo}},mutations:{setUserInfo:function(e,t){e.userInfo=t}},actions:{}}),c=a("/ocq"),d={ApiRootUrl:(Object({NODE_ENV:"production"}).env_config,"https://ly.chenrd.com/api/")},u=a("zL8q"),m=a.n(u),h=a("mtWM"),p=a.n(h),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v=p.a.create({withCredentials:!0,baseURL:d.ApiRootUrl,timeout:5e4});v.interceptors.request.use(function(e){return e},function(e){console.log(e),Promise.reject(e)}),v.interceptors.response.use(function(e){return void 0!=f(e.data.code)&&-1e4==e.data.code?(W.replace({path:"/login",query:{redirect:W.currentRoute.fullPath}}),Promise.reject(e.data.resultMsg)):e},function(e){return Object(u.Message)({message:e.message,type:"error",duration:5e3}),Promise.reject(e)});var g=v;function b(e){return g({url:"/classes/getClassesList",method:"GET",params:e})}function _(e){return g({url:"/exam/getExamList",method:"GET",params:e})}function x(e){return g({url:"/score/getScoreList",method:"GET",params:e})}var y={data:function(){return{user:{name:"",pwd:""},rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}],pwd:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){var a;e&&(a=t.user,g({url:"/login",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},params:a})).then(function(e){1==e.data.code?(t.$message({message:"登陆成功",type:"success"}),t.$router.push({path:"/"})):t.$message({message:e.data.message,type:"error"})})})}}},S={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("div",{staticClass:"login-contain"},[a("div",{staticClass:"message"},[e._v("系统登录")]),e._v(" "),a("div",{attrs:{id:"darkbannerwrap"}}),e._v(" "),a("el-form",{ref:"ruleForm",attrs:{model:e.user,rules:e.rules}},[a("el-form-item",{attrs:{prop:"name"}},[a("el-input",{attrs:{placeholder:"用户名"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"pwd"}},[a("el-input",{attrs:{placeholder:"密码",type:"password"},model:{value:e.user.pwd,callback:function(t){e.$set(e.user,"pwd",t)},expression:"user.pwd"}})],1),e._v(" "),a("el-form-item",[a("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("登陆")])],1)],1)],1)])},staticRenderFns:[]};var I=[{name:"登陆页",path:"/login",component:a("VU/8")(y,S,!1,function(e){a("BXvE")},null,null).exports,meta:{}}],k=[];if(I.length>0)for(var w=0;w<I.length;w++)k.push(I[w].path),I[w].meta.isVisit=!0;var C={data:function(){return{userInfo:this.$store.getters.getUserInfo}},methods:{handleCommand:function(e){var t,a=this;"logout"==e&&g({url:"/logout",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},params:t}).then(function(e){1==e.data.code?(a.$message({message:"退出成功",type:"success"}),a.$router.push({path:"/login"})):a.$message({message:e.data.message,type:"error"})})}}},E={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"system-login"},[e._v("\n\t\t\t\t后台管理系统\n\t\t\t")])]),e._v(" "),a("el-col",{attrs:{span:6,offset:6}},[a("el-dropdown",{staticClass:"user-info",on:{command:e.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[e._v("\n\t\t\t\t\t"+e._s(e.userInfo.nickname)),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"changePwd"}},[e._v("修改密码")]),e._v(" "),a("el-dropdown-item",{attrs:{command:"logout"}},[e._v("退出")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var $={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"aside"},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.menuActive,"background-color":"#393D49","text-color":"#fff","active-text-color":"#ffd04b",router:""}},[a("el-menu-item",{attrs:{index:"/index"}},[a("i",{staticClass:"el-icon-menu"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("首页")])]),e._v(" "),a("el-menu-item",{attrs:{index:"/class"}},[a("i",{staticClass:"el-icon-menu"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("班级管理")])]),e._v(" "),a("el-menu-item",{attrs:{index:"3",disabled:""}},[a("i",{staticClass:"el-icon-menu"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("导航三")])]),e._v(" "),a("el-menu-item",{attrs:{index:"4",disabled:""}},[a("i",{staticClass:"el-icon-setting"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("导航四")])])],1)],1)},staticRenderFns:[]};var V={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sub-title"},[a("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.subList,function(t,s){return a("el-breadcrumb-item",{key:s,attrs:{to:{path:t.path}}},[e._v(e._s(t.name))])}),1)],1)},staticRenderFns:[]};var N={components:{HEADER:a("VU/8")(C,E,!1,function(e){a("enid")},null,null).exports,ASIDE:a("VU/8")({data:function(){return{menuActive:"/index"}},created:function(){this.initDefaultActive()},methods:{initDefaultActive:function(){var e=this.$route.fullPath.split("/");this.menuActive="/"+e[1]}}},$,!1,function(e){a("JQA1")},null,null).exports,SUBTITLE:a("VU/8")({data:function(){return{subList:[]}},created:function(){this.getBreadcrumb()},methods:{getBreadcrumb:function(){if(this.$route.matched){for(var e=[],t=0;t<this.$route.matched.length;t++)this.$route.matched[t].name&&e.push({name:this.$route.matched[t].name,path:this.$route.matched[t].redirect?this.$route.matched[t].redirect:this.$route.matched[t].path});this.subList=e}}},watch:{$route:function(e,t){this.getBreadcrumb()}}},V,!1,function(e){a("2E6H")},null,null).exports}},T={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticStyle:{height:"100%"}},[a("el-header",[a("HEADER")],1),e._v(" "),a("el-container",[a("el-aside",{attrs:{width:"200px"}},[a("ASIDE")],1),e._v(" "),a("el-main",[a("SUBTITLE"),e._v(" "),a("keep-alive",[e.$route.meta.keepAlive?a("router-view"):e._e()],1),e._v(" "),e.$route.meta.keepAlive?e._e():a("router-view")],1)],1)],1)},staticRenderFns:[]};var O=a("VU/8")(N,T,!1,function(e){a("6w26")},null,null).exports,L=a("XLwt"),A=a.n(L),H={data:function(){return{containHeight:0,classList:[],defaultClass:"",scoreEchart:"",peopleEchart:"",radarEchart:""}},created:function(){this.init()},methods:{init:function(){var e=this,t=document.body.clientHeight;this.containHeight=t-140,b().then(function(t){if(t.data){for(var a=0;a<t.data.length;a++)0==a&&(e.defaultClass=t.data[a].id),t.data[a].className=r(t.data[a].grade)+t.data[a].className;e.classList=t.data,e.initEchart()}})},initEchart:function(){var e=this;this.$nextTick(function(t){e.scoreEchart=A.a.init(document.getElementById("score-echart")),e.peopleEchart=A.a.init(document.getElementById("people-echart"),"light"),e.radarEchart=A.a.init(document.getElementById("radar-echart"),"light"),e.buildEchart()})},buildEchart:function(){this.getAvgScore(),this.getScorePeople()},getAvgScore:function(){var e=this,t={title:{text:"班级平均分趋势"},tooltip:{trigger:"axis"},grid:{left:"3%",right:"1%",bottom:"36"},toolbox:{show:!0,feature:{dataView:{readOnly:!1},magicType:{type:["line","bar"]},restore:{},saveAsImage:{}}},legend:{data:["数学平均分","语文平均分","英语平均分"]},xAxis:{data:[]},yAxis:{},series:[{name:"数学平均分",type:"line",data:[]},{name:"语文平均分",type:"line",data:[]},{name:"英语平均分",type:"line",data:[]}]};_({classesId:this.defaultClass}).then(function(a){if(a.data){for(var s=0;s<a.data.length;s++)t.xAxis.data.push(a.data[s].examName),t.series[0].data.push(a.data[s].mathAvgScore),t.series[1].data.push(a.data[s].chineseAvgScore),t.series[2].data.push(a.data[s].englishAvgScore);e.scoreEchart.setOption(t)}})},getScorePeople:function(){var e,t=this,a={classesId:this.defaultClass},s={title:{text:"班级各科及格人数"},tooltip:{trigger:"axis"},toolbox:{show:!0,feature:{dataView:{readOnly:!1},magicType:{type:["line","bar"]},restore:{},saveAsImage:{}}},grid:{left:"3%",right:"1%",bottom:"36"},legend:{data:["数学","语文","英语"]},xAxis:{data:[],axisPointer:{type:"shadow"}},yAxis:{},series:[{name:"数学",type:"bar",data:[]},{name:"语文",type:"bar",data:[]},{name:"英语",type:"bar",data:[]}]},i={title:{text:"偏科情况"},grid:{left:"3%",right:"1%",bottom:"36"},legend:{data:["预算分配"],bottom:"0"},radar:{indicator:[{name:"数学",max:0},{name:"语文",max:0},{name:"英语",max:0}]},series:[{type:"radar",data:[{value:[]}]}]};(e=a,g({url:"/exam/getPassingNumber",method:"GET",params:e})).then(function(e){if(e.data){for(var a=0,n=0,l=0,r=0,o=0;o<e.data.length;o++)s.xAxis.data.push(e.data[o].examName),s.series[0].data.push(e.data[o].mathNum),s.series[1].data.push(e.data[o].chineseNum),s.series[2].data.push(e.data[o].englishNum),a+=Number(e.data[o].mathNum),n+=Number(e.data[o].chineseNum),l+=Number(e.data[o].englishNum),r+=Number(e.data[o].examNum);i.radar.indicator[0].max=r,i.radar.indicator[1].max=r,i.radar.indicator[2].max=r,i.series[0].data[0].value.push(a),i.series[0].data[0].value.push(n),i.series[0].data[0].value.push(l),t.peopleEchart.setOption(s),t.radarEchart.setOption(i)}})}}},q={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"index"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix index-title",attrs:{slot:"header"},slot:"header"},[a("span",[a("el-select",{attrs:{placeholder:"请选择",size:"mini"},on:{change:e.buildEchart},model:{value:e.defaultClass,callback:function(t){e.defaultClass=t},expression:"defaultClass"}},e._l(e.classList,function(e){return a("el-option",{key:e.id,attrs:{label:e.className,value:e.id}})}),1),e._v("\n\t\t\t\t\t\t情况统计分析\n\t\t\t\t\t")],1)]),e._v(" "),a("div",{style:{height:.4*e.containHeight+"px"},attrs:{id:"score-echart"}})])],1)],1),e._v(" "),a("el-row",{staticStyle:{"margin-top":"20px"},attrs:{gutter:20}},[a("el-col",{attrs:{sm:24,md:18}},[a("el-card",{staticClass:"box-card"},[a("div",{style:{height:.4*e.containHeight+"px"},attrs:{id:"people-echart"}})])],1),e._v(" "),a("el-col",{staticClass:"hidden-sm-only",attrs:{md:6}},[a("el-card",{staticClass:"box-card"},[a("div",{style:{height:.4*e.containHeight+"px"},attrs:{id:"radar-echart"}})])],1)],1)],1)},staticRenderFns:[]};var z=a("VU/8")(H,q,!1,function(e){a("zlEB")},null,null).exports,U={data:function(){return{classesList:[],dialogVisible:!1,classes:{},upDialogVisible:!1,upClasses:{},oldUpClasses:{}}},created:function(){this.getClassesList()},methods:{getClassesList:function(){var e=this;b().then(function(t){t.data&&(e.classesList=t.data)})},addClass:function(){this.classes={},this.dialogVisible=!0},submitClasses:function(){var e,t=this;(e=this.classes,g({url:"/classes/addClasses",method:"POST",data:e})).then(function(e){1==e.data.code?(t.$message({message:"操作成功",type:"success"}),t.dialogVisible=!1,t.getClassesList()):t.$message({message:e.data.message,type:"error"})})},editClass:function(e){this.classes=e,this.dialogVisible=!0},urlToPath:function(e,t){e&&this.$router.push({path:e,query:t})},upClass:function(e){this.upDialogVisible=!0,this.upClasses={},this.oldUpClasses=e},submitUpClasses:function(){var e,t=this,a={oldUpClasses:this.oldUpClasses,upClasses:this.upClasses};(e=a,g({url:"/classes/upClasses",method:"POST",data:e})).then(function(e){1==e.data.code?(t.$message({message:"操作成功",type:"success"}),t.dialogVisible=!1,t.getClassesList()):t.$message({message:e.data.message,type:"error"})})},gradeFormat:r}},F={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"class-index"},[a("div",{staticClass:"top-btn"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.addClass()}}},[e._v("新增班级")])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},e._l(e.classesList,function(t){return a("el-col",{key:t.id,attrs:{span:6}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v(e._s(e.gradeFormat(t.grade)+t.className))]),e._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(a){e.editClass(t)}}},[e._v("编辑")])],1),e._v(" "),a("div",{staticClass:"class-prop"},[a("table",{staticClass:"stTable"},[a("thead",[a("tr",[a("th",{attrs:{colspan:"2"}},[e._v("功能列表")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("el-button",{attrs:{type:"primary",plain:"",size:"small"},on:{click:function(a){e.urlToPath("student",t)}}},[e._v("学生名录")])],1),e._v(" "),a("td",[a("el-button",{attrs:{type:"primary",plain:"",size:"small"},on:{click:function(a){e.urlToPath("score",t)}}},[e._v("考试成绩")])],1)]),e._v(" "),a("tr",[a("td",[a("el-button",{attrs:{type:"primary",plain:"",size:"small",disabled:""}},[e._v("班级干部")])],1),e._v(" "),a("td",[a("el-button",{attrs:{type:"primary",plain:"",size:"small"},on:{click:function(a){e.upClass(t)}}},[e._v("班级升学")])],1)])])])])])],1)}),1),e._v(" "),a("el-dialog",{attrs:{title:"新增/编辑班级",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"classes",attrs:{model:e.classes,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"年级"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择年级",disabled:e.classes.id&&e.classes.id>0},model:{value:e.classes.grade,callback:function(t){e.$set(e.classes,"grade",t)},expression:"classes.grade"}},[a("el-option",{attrs:{label:"一年级",value:1}}),e._v(" "),a("el-option",{attrs:{label:"二年级",value:2}}),e._v(" "),a("el-option",{attrs:{label:"三年级",value:3}}),e._v(" "),a("el-option",{attrs:{label:"四年级",value:4}}),e._v(" "),a("el-option",{attrs:{label:"五年级",value:5}}),e._v(" "),a("el-option",{attrs:{label:"六年级",value:6}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"班级名称"}},[a("el-input",{model:{value:e.classes.className,callback:function(t){e.$set(e.classes,"className",t)},expression:"classes.className"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{model:{value:e.classes.bz,callback:function(t){e.$set(e.classes,"bz",t)},expression:"classes.bz"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"权限"}},[a("el-input",{model:{value:e.classes.sortOrder,callback:function(t){e.$set(e.classes,"sortOrder",t)},expression:"classes.sortOrder"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.submitClasses}},[e._v("提 交")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"班级升学",visible:e.upDialogVisible,width:"30%"},on:{"update:visible":function(t){e.upDialogVisible=t}}},[a("el-form",{attrs:{model:e.upClasses,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"年级"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择年级",disabled:e.upClasses.id&&e.upClasses.id>0},model:{value:e.upClasses.grade,callback:function(t){e.$set(e.upClasses,"grade",t)},expression:"upClasses.grade"}},[a("el-option",{attrs:{label:"一年级",value:1}}),e._v(" "),a("el-option",{attrs:{label:"二年级",value:2}}),e._v(" "),a("el-option",{attrs:{label:"三年级",value:3}}),e._v(" "),a("el-option",{attrs:{label:"四年级",value:4}}),e._v(" "),a("el-option",{attrs:{label:"五年级",value:5}}),e._v(" "),a("el-option",{attrs:{label:"六年级",value:6}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"班级名称"}},[a("el-input",{model:{value:e.upClasses.className,callback:function(t){e.$set(e.upClasses,"className",t)},expression:"upClasses.className"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{model:{value:e.upClasses.bz,callback:function(t){e.$set(e.upClasses,"bz",t)},expression:"upClasses.bz"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"权限"}},[a("el-input",{model:{value:e.upClasses.sortOrder,callback:function(t){e.$set(e.upClasses,"sortOrder",t)},expression:"upClasses.sortOrder"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.upDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.submitUpClasses}},[e._v("提 交")])],1)],1)],1)},staticRenderFns:[]};var P=a("VU/8")(U,F,!1,function(e){a("gmhb")},null,null).exports,M={data:function(){return{classInfo:this.$route.query,studenList:[],studentInfo:{},dialogVisible:!1,tableHeight:0}},created:function(){this.init(),this.getStudent()},methods:{gradeFormat:r,init:function(){var e=document.body.clientHeight;this.tableHeight=e-200},getStudent:function(){var e,t=this,a=this.classInfo;(e=a,g({url:"/student/getStudentList",method:"GET",params:e})).then(function(e){t.studenList=e.data})},addStudent:function(){this.studentInfo={},this.dialogVisible=!0},editStudent:function(e){this.studentInfo=e,this.dialogVisible=!0},submitStudent:function(){var e,t=this;switch(this.classInfo.grade){case 1:this.studentInfo.grade1Id=this.classInfo.id;break;case 2:this.studentInfo.grade2Id=this.classInfo.id;break;case 3:this.studentInfo.grade3Id=this.classInfo.id;break;case 4:this.studentInfo.grade4Id=this.classInfo.id;break;case 5:this.studentInfo.grade5Id=this.classInfo.id,break5;case 6:this.studentInfo.grade6Id=this.classInfo.id}(e=this.studentInfo,g({url:"/student/addStudent",method:"POST",data:e})).then(function(e){1==e.data.code?(t.$message({message:"操作成功",type:"success"}),t.dialogVisible=!1):t.$message({message:e.data.message,type:"error"})})},formatterTime:function(e,t){return function(e,t){function a(e,t){t-=(e+"").length;for(var a=0;a<t;a++)e="0"+e;return e}return(t=t||"yyyy-MM-dd").replace(/([yMdhsm])(\1*)/g,function(t){switch(t.charAt(0)){case"y":return a(e.getFullYear(),t.length);case"M":return a(e.getMonth()+1,t.length);case"d":return a(e.getDate(),t.length);case"w":return e.getDay()+1;case"h":return a(e.getHours(),t.length);case"m":return a(e.getMinutes(),t.length);case"s":return a(e.getSeconds(),t.length)}})}("birth"==t.property?new Date(e.birth):new Date(e.startSchool),"yyyy-MM-dd")},exportStudent:function(){window.location.href=d.ApiRootUrl+"student/exportStudent?grade="+this.classInfo.grade+"&id="+this.classInfo.id+"&className="+this.classInfo.className},delStudent:function(e){var t=this;this.$confirm("是否确定要删除该学生?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a,s,i={grade:t.classInfo.grade};(a=i,s=e,g({url:"/student/delStudent",method:"POST",params:a,data:s})).then(function(e){1==e.data.code?(t.$message({message:"删除成功",type:"success"}),t.getStudent()):t.$message({message:e.data.message,type:"error"})})})}}},R={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"student"},[a("h1",[e._v(e._s(e.gradeFormat(e.classInfo.grade)+e.classInfo.className)+"——学生名录")]),e._v(" "),a("div",{staticClass:"top-btn"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.addStudent()}}},[e._v("新增学生")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.exportStudent()}}},[e._v("导出")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.studenList,height:e.tableHeight,border:"",size:"mini",id:"studentList"}},[a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n\t\t\t\t"+e._s(1==t.row.sex?"男":"女")+"\n\t\t\t")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"birth",label:"出生日期",width:"100",formatter:e.formatterTime}}),e._v(" "),a("el-table-column",{attrs:{prop:"nation",label:"民族",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"联系电话",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"parentName",label:"家长姓名",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"startSchool",label:"入学时间",width:"100",formatter:e.formatterTime}}),e._v(" "),a("el-table-column",{attrs:{prop:"hukou",label:"户口所在地",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"家庭住址"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.editStudent(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.delStudent(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-dialog",{attrs:{title:"新增/编辑学生",visible:e.dialogVisible,width:"35%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"studentInfo",attrs:{model:e.studentInfo,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"学生姓名"}},[a("el-input",{model:{value:e.studentInfo.name,callback:function(t){e.$set(e.studentInfo,"name",t)},expression:"studentInfo.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"学生性别"}},[a("el-radio-group",{model:{value:e.studentInfo.sex,callback:function(t){e.$set(e.studentInfo,"sex",t)},expression:"studentInfo.sex"}},[a("el-radio",{attrs:{label:0}},[e._v("女生")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("男生")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"出生日期"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.studentInfo.birth,callback:function(t){e.$set(e.studentInfo,"birth",t)},expression:"studentInfo.birth"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"民族"}},[a("el-input",{model:{value:e.studentInfo.nation,callback:function(t){e.$set(e.studentInfo,"nation",t)},expression:"studentInfo.nation"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"家庭住址"}},[a("el-input",{model:{value:e.studentInfo.address,callback:function(t){e.$set(e.studentInfo,"address",t)},expression:"studentInfo.address"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系电话"}},[a("el-input",{model:{value:e.studentInfo.phone,callback:function(t){e.$set(e.studentInfo,"phone",t)},expression:"studentInfo.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"家长姓名"}},[a("el-input",{model:{value:e.studentInfo.parentName,callback:function(t){e.$set(e.studentInfo,"parentName",t)},expression:"studentInfo.parentName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"入学时间"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.studentInfo.startSchool,callback:function(t){e.$set(e.studentInfo,"startSchool",t)},expression:"studentInfo.startSchool"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"户口所在地"}},[a("el-input",{model:{value:e.studentInfo.hukou,callback:function(t){e.$set(e.studentInfo,"hukou",t)},expression:"studentInfo.hukou"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.submitStudent}},[e._v("提 交")])],1)],1)],1)},staticRenderFns:[]};var B=a("VU/8")(M,R,!1,function(e){a("f8et")},null,null).exports,D={data:function(){return{scoreTableHeight:"",classInfo:this.$route.query,examVisible:!1,examInfo:{},examList:[],scoreVisible:!1,scoreList:[],scoreTitle:"考试成绩",quickly:{indexNum:"",mathScore:"",chineseScore:"",englishScore:""},countTitle:"考试成绩",countVisible:!1,isFirstOpenCount:!0,countList:[],mathEchartOption:{},chineseEchartOption:{},englishEchartOption:{},mathEchart:"",chineseEchart:"",englishEchart:""}},created:function(){this.init(),this.getExamList()},methods:{gradeFormat:r,init:function(){var e=document.body.clientHeight;this.scoreTableHeight=e-240},getExamList:function(){var e=this;_({classesId:this.classInfo.id}).then(function(t){e.examList=t.data})},addExam:function(){this.examVisible=!0,this.examInfo={}},editExam:function(e){this.examVisible=!0,this.examInfo=e},submitExam:function(){var e,t=this;this.examInfo.classesId=this.classInfo.id,(e=this.examInfo,g({url:"/exam/addExam",method:"POST",data:e})).then(function(e){1==e.data.code?(t.$message({message:"操作成功",type:"success"}),t.examVisible=!1):t.$message({message:e.data.message,type:"error"})})},recordScore:function(e){var t=this;this.scoreTitle=e.examName,this.scoreVisible=!0,x({classesId:this.classInfo.id,grade:this.classInfo.grade,examId:e.id}).then(function(a){if(t.quickly={},a.data){for(var s=0;s<a.data.length;s++)null==a.data[s].examId&&(a.data[s].examId=e.id);t.scoreList=a.data}})},saveScore:function(){var e,t=this;(e=this.scoreList,g({url:"/score/addScore",method:"POST",data:e})).then(function(e){1==e.data.code?(t.$message({message:"保存成功",type:"success"}),t.scoreVisible=!1):t.$message({message:e.data.message,type:"error"})})},scoreClose:function(){this.getExamList()},quickAddScore:function(){var e=this.quickly.indexNum;this.scoreList[e].mathScore=this.quickly.mathScore,this.scoreList[e].chineseScore=this.quickly.chineseScore,this.scoreList[e].englishScore=this.quickly.englishScore},initEchart:function(){this.mathEchart=A.a.init(document.getElementById("math-echart"),"light"),this.chineseEchart=A.a.init(document.getElementById("chinese-echart"),"light"),this.englishEchart=A.a.init(document.getElementById("english-echart"),"light"),this.mathEchartOption={title:{subtext:"数学成绩"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"数学成绩",type:"pie",radius:"55%",center:["50%","50%"],data:[]}]},this.chineseEchartOption={title:{subtext:"语文成绩"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"语文成绩",type:"pie",radius:"55%",center:["50%","50%"],data:[]}]},this.englishEchartOption={title:{subtext:"英语成绩"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"英语成绩",type:"pie",radius:"55%",center:["50%","50%"],data:[]}]}},countScore:function(e){var t=this;this.countTitle=e.examName,this.countVisible=!0,1==this.isFirstOpenCount&&(this.$nextTick(function(e){t.initEchart()}),this.isFirstOpenCount=!1),x({classesId:this.classInfo.id,grade:this.classInfo.grade,examId:e.id}).then(function(e){if(e.data){for(var a=[{value:0,name:"90分以上"},{value:0,name:"80-89分"},{value:0,name:"70-79分"},{value:0,name:"60-69分"},{value:0,name:"不及格"}],s=[{value:0,name:"90分以上"},{value:0,name:"80-89分"},{value:0,name:"70-79分"},{value:0,name:"60-69分"},{value:0,name:"不及格"}],i=[{value:0,name:"90分以上"},{value:0,name:"80-89分"},{value:0,name:"70-79分"},{value:0,name:"60-69分"},{value:0,name:"不及格"}],n=0;n<e.data.length;n++)e.data[n].totalScore=e.data[n].mathScore+e.data[n].chineseScore+e.data[n].englishScore,e.data[n].mathScore&&(e.data[n].mathScore>=90?a[0].value+=1:e.data[n].mathScore<90&&e.data[n].mathScore>=80?a[1].value+=1:e.data[n].mathScore<80&&e.data[n].mathScore>=70?a[2].value+=1:e.data[n].mathScore<70&&e.data[n].mathScore>=60?a[3].value+=1:a[4].value+=1),e.data[n].chineseScore&&(e.data[n].chineseScore>=90?s[0].value+=1:e.data[n].chineseScore<90&&e.data[n].chineseScore>=80?s[1].value+=1:e.data[n].chineseScore<80&&e.data[n].chineseScore>=70?s[2].value+=1:e.data[n].chineseScore<70&&e.data[n].chineseScore>=60?s[3].value+=1:s[4].value+=1),e.data[n].englishScore&&(e.data[n].englishScore>=90?i[0].value+=1:e.data[n].englishScore<90&&e.data[n].englishScore>=80?i[1].value+=1:e.data[n].englishScore<80&&e.data[n].englishScore>=70?i[2].value+=1:e.data[n].englishScore<70&&e.data[n].englishScore>=60?i[3].value+=1:i[4].value+=1);t.countList=e.data,t.mathEchartOption.series[0].data=a,t.chineseEchartOption.series[0].data=s,t.englishEchartOption.series[0].data=i,t.mathEchart.setOption(t.mathEchartOption),t.chineseEchart.setOption(t.chineseEchartOption),t.englishEchart.setOption(t.englishEchartOption)}})},getAvgScore:function(e){e.columns;for(var t=e.data,a=0,s=0,i=0,n=0,l=0,r=0,o=0,c=0,d=["平均分"],u=0;u<t.length;u++)t[u].mathScore&&(a++,l+=t[u].mathScore),t[u].chineseScore&&(s++,r+=t[u].chineseScore),t[u].englishScore&&(i++,o+=t[u].englishScore),(t[u].mathScore||t[u].chineseScore||t[u].englishScore)&&(n++,c+=t[u].mathScore+t[u].chineseScore+t[u].englishScore);return a>0&&d.push(l/a),s>0&&d.push(r/s),i>0&&d.push(o/i),n>0&&d.push(c/n),d}}},j={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"score"},[a("h1",[e._v(e._s(e.gradeFormat(e.classInfo.grade)+e.classInfo.className)+"——考试成绩")]),e._v(" "),a("div",{staticClass:"top-btn"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.addExam()}}},[e._v("新增考试")])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},e._l(e.examList,function(t){return a("el-col",{key:t.id,staticClass:"exam-card",attrs:{span:6}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v(e._s(t.examName))]),e._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(a){e.editExam(t)}}},[e._v("编辑")]),e._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 10px"},attrs:{type:"text"},on:{click:function(a){e.recordScore(t)}}},[e._v("成绩录入")])],1),e._v(" "),a("div",{staticClass:"box-card-score",on:{click:function(a){e.countScore(t)}}},[a("p",[e._v("数学平均分："+e._s(t.mathAvgScore))]),e._v(" "),a("p",[e._v("语文平均分："+e._s(t.chineseAvgScore))]),e._v(" "),a("p",[e._v("英语平均分："+e._s(t.englishAvgScore))])])])],1)}),1),e._v(" "),a("el-dialog",{attrs:{title:"考试操作",visible:e.examVisible,width:"30%"},on:{"update:visible":function(t){e.examVisible=t}}},[a("el-form",{ref:"examInfo",attrs:{model:e.examInfo,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"考试统称"}},[a("el-input",{model:{value:e.examInfo.examName,callback:function(t){e.$set(e.examInfo,"examName",t)},expression:"examInfo.examName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"考试时间"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.examInfo.examTime,callback:function(t){e.$set(e.examInfo,"examTime",t)},expression:"examInfo.examTime"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.examVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.submitExam}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.scoreTitle,visible:e.scoreVisible,width:"60%",top:"40px","close-on-press-escape":!1,"close-on-click-modal":!1},on:{"update:visible":function(t){e.scoreVisible=t},close:e.scoreClose}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:16}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.scoreList,height:e.scoreTableHeight,border:"",size:"mini"}},[a("el-table-column",{attrs:{prop:"studentName",label:"姓名",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{label:"数学成绩"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{placeholder:"请输入",size:"mini"},model:{value:t.row.mathScore,callback:function(a){e.$set(t.row,"mathScore",a)},expression:"scope.row.mathScore"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"语文成绩"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{placeholder:"请输入",size:"mini"},model:{value:t.row.chineseScore,callback:function(a){e.$set(t.row,"chineseScore",a)},expression:"scope.row.chineseScore"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"英语成绩"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{placeholder:"请输入",size:"mini"},model:{value:t.row.englishScore,callback:function(a){e.$set(t.row,"englishScore",a)},expression:"scope.row.englishScore"}})]}}])})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("h1",[e._v("快速录入")]),e._v(" "),a("el-form",{attrs:{model:e.quickly,"label-width":"70px"}},[a("el-form-item",{attrs:{label:"学生姓名",prop:"studentId"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"请选择",size:"mini"},model:{value:e.quickly.indexNum,callback:function(t){e.$set(e.quickly,"indexNum",t)},expression:"quickly.indexNum"}},e._l(e.scoreList,function(e,t){return a("el-option",{key:e.studentId,attrs:{label:e.studentName,value:t}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"数学成绩",prop:"mathScore"}},[a("el-input",{attrs:{placeholder:"请输入",size:"mini"},model:{value:e.quickly.mathScore,callback:function(t){e.$set(e.quickly,"mathScore",t)},expression:"quickly.mathScore"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"语文成绩",prop:"chineseScore"}},[a("el-input",{attrs:{placeholder:"请输入",size:"mini"},model:{value:e.quickly.chineseScore,callback:function(t){e.$set(e.quickly,"chineseScore",t)},expression:"quickly.chineseScore"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"英语成绩",prop:"englishScore"}},[a("el-input",{attrs:{placeholder:"请输入",size:"mini"},model:{value:e.quickly.englishScore,callback:function(t){e.$set(e.quickly,"englishScore",t)},expression:"quickly.englishScore"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.quickAddScore("ruleForm")}}},[e._v("添 加")])],1)],1)],1)],1),e._v(" "),a("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.saveScore}},[e._v("保 存")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.countTitle,visible:e.countVisible,width:"60%",top:"40px"},on:{"update:visible":function(t){e.countVisible=t}}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:16}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.countList,height:e.scoreTableHeight,border:"",size:"mini","show-summary":"","sum-text":"平均分","summary-method":e.getAvgScore}},[a("el-table-column",{attrs:{prop:"studentName",label:"姓名",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mathScore",label:"数学成绩",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"chineseScore",label:"语文成绩",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"englishScore",label:"英语成绩",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"totalScore",label:"总分",sortable:""}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("div",{style:{height:e.scoreTableHeight/3+"px",width:"100%"},attrs:{id:"math-echart"}}),e._v(" "),a("div",{style:{height:e.scoreTableHeight/3+"px",width:"100%"},attrs:{id:"chinese-echart"}}),e._v(" "),a("div",{style:{height:e.scoreTableHeight/3+"px",width:"100%"},attrs:{id:"english-echart"}})])],1)],1)],1)},staticRenderFns:[]};var G=[{name:"首页",path:"/",component:O,redirect:"/index",children:[{path:"index",component:z,meta:{}}]},{name:"班级管理",path:"/class",component:O,redirect:"/class/index",children:[{name:"班级列表",path:"index",component:P,meta:{}},{name:"学生名录",path:"student",component:B,meta:{}},{name:"考试成绩",path:"score",component:a("VU/8")(D,j,!1,function(e){a("3PGg")},null,null).exports,meta:{}}]}];if(G.length>0)for(var J=0;J<G.length;J++)if(G[J].children)for(var X=0;X<G[J].children.length;X++)G[J].children[X].meta.isVisit=!0;s.default.use(c.a);var Q=new c.a({mode:"history",routes:I.concat(G)});Q.beforeEach(function(e,t,a){var s;k.indexOf(e.path)>=0?a():""!=o.getters.getUserInfo?a():g({url:"/admin/getAdminInfo",method:"GET",params:s}).then(function(e){o.commit("setUserInfo",e.data),a()}).catch(function(e){a(!1)})}),Q.beforeResolve(function(e,t,a){1==e.meta.isVisit?a():(Object(u.Message)({message:"您没有访问权限",type:"warning"}),a(!1))});var W=Q;a("j1ja");s.default.use(m.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:W,store:o,components:{App:n},template:"<App/>"})},enid:function(e,t){},f8et:function(e,t){},gmhb:function(e,t){},jOUh:function(e,t){},zlEB:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.1e7c45a762adeedd4216.js.map