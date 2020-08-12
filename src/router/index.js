import Vue from 'vue';
import VueRouter from 'vue-router';
import StudentList from '../views/StudentList';
Vue.use(VueRouter);

const routes = [{
    path: '',
    redirect: '/StudentList'
}, {
    path: '/studentAdd',
    component: () =>
        import ('../views/StudentAdd')
}, {
    path: '/StudentList',
    component: StudentList
}, {
    path: '/StudentEcharts',
    component: () =>
        import ('../views/StudentEcharts')
}]

export default new VueRouter({
    mode: 'history',
    routes,
    linkExactActiveClass: "active"
});