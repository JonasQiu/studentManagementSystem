import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api'
// import { NEW_COUNT } from './mutation-type';

Vue.use(Vuex);
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        studentList: [],
        size: 3,
        modal: false,
        curStudent: {},
        totalPage: 1,
        nowPage: 1,
        value: ''
    },
    mutations: {
        setStudentList(state, list) {
            state.studentList = list;
        },
        chooseModal(state, show) {
            state.modal = show
        },
        setStudent(state, item) {
            state.curStudent = item;
        },
        setNowPage(state, page) {
            state.nowPage = page;

        },
        setTotalPage(state, count) {
            state.totalPage = Math.ceil(count / state.size);
        },
        setKeyword(state, value) {
            state.value = value;
        }
    },
    actions: {
        getStudentList({ commit, state }, page) {
            api.findByPage(page, state.size).then(data => {
                commit('setStudentList', data.data.data.findByPage);
                commit('setTotalPage', data.data.data.cont);
            })
        },
        updataStu({ commit, dispatch }, stu) {
            return api.studentUpdata(stu).then(data => {
                if (data.data.status === 'success') {
                    dispatch('getStudentList', 1);
                    commit('chooseModal', false);
                    return {
                        type: 1,
                        msg: data.data.msg
                    }
                }
                return {
                    type: 2,
                    msg: data.data.msg
                }

            }).catch(err => console.log(err))
        },
        turnPage({ state, commit, dispatch }, i) {
            commit('setNowPage', i);
            if (state.value === '') {
                dispatch('getStudentList', i);
            } else {
                dispatch('searchList', i)
            }
        },
        deleteStudent({ dispatch, state }, sNo) {
            api.studentDelete(sNo).then(res => {
                if (state.studentList.length <= 1) {
                    if (state.nowPage < state.totalPage) {
                        dispatch("turnPage", state.nowPage);
                    } else {
                        dispatch("turnPage", state.nowPage - 1);
                    }
                } else {
                    dispatch('turnPage', state.nowPage);
                }
                return {
                    msg: res.data.msg,
                    type: 1
                }
            })
        },
        searchList({ commit, state }, i) {
            api.stundentSearch({ search: state.value, sex: -1, page: i, size: state.size }).then(data => {
                commit('setStudentList', data.data.data.searchList);
                commit('setTotalPage', data.data.data.cont);
            })
        }
    }
})