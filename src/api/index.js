import fetch from '@/config/fetch'

/**
 * 登陆
 */
export function login(data) {
    return fetch({
        url: '/login',
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        params: data,
    });
};

/**
 * 登出
 */
export function logout(data) {
    return fetch({
        url: '/logout',
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        params: data,
    });
};

/**
 * 获取当前登陆的用户信息
 */
export function getAdminInfo(data) {
    return fetch({
        url: '/admin/getAdminInfo',
        method: 'GET',
        params: data,
    });
};

/**
 * 获取当前用户所管理的班级
 */
export function getClassesList(data) {
    return fetch({
        url: '/classes/getClassesList',
        method: 'GET',
        params: data,
    });
};

/**
 * 新增或者编辑班级
 */
export function addClasses(data) {
    return fetch({
        url: '/classes/addClasses',
        method: 'POST',
        data: data,
    });
};

/**
 * 班级升级
 */
export function upClasses(data) {
    return fetch({
        url: '/classes/upClasses',
        method: 'POST',
        data: data,
    });
};


/**
 * 查询班级学校名录
 */
export function getStudentList(data) {
    return fetch({
        url: '/student/getStudentList',
        method: 'GET',
        params: data,
    });
};

/**
 * 新增学生
 */
export function addStudent(data) {
    return fetch({
        url: '/student/addStudent',
        method: 'POST',
        data: data,
    });
};

/**
 * 删除学生
 */
export function delStudent(params,data) {
    return fetch({
        url: '/student/delStudent',
        method: 'POST',
        params:params,
        data: data,
    });
};


/**
 * 查询班级考试记录
 */
export function getExamList(data) {
    return fetch({
        url: '/exam/getExamList',
        method: 'GET',
        params: data,
    });
};

/**
 * 查询班级历史考试及格人数
 */
export function getPassingNumber(data) {
    return fetch({
        url: '/exam/getPassingNumber',
        method: 'GET',
        params: data,
    });
};

/**
 * 新增学生
 */
export function addExam(data) {
    return fetch({
        url: '/exam/addExam',
        method: 'POST',
        data: data,
    });
};

/**
 * 查询班级学生考试成绩
 */
export function getScoreList(data) {
    return fetch({
        url: '/score/getScoreList',
        method: 'GET',
        params: data,
    });
};

/**
 * 新增学生成绩
 */
export function addScore(data) {
    return fetch({
        url: '/score/addScore',
        method: 'POST',
        data: data,
    });
};