<template>
    <div class='table-div'>
        <table id="student-list-table" class="clearfix">
            <thead>
                <tr>
                    <th>学号</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>邮箱</th>
                    <th>年龄</th>
                    <th>手机号</th>
                    <th>住址</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody id="tbody">
                <tr v-for="(item,index) in studentList" :key="index">
                    <td>{{item.sNo}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.sex==='0'?'男':'女'}}</td>
                    <td>{{item.email}}</td>
                    <td>{{new Date().getFullYear()-item.birth}}</td>
                    <td>{{item.phone}}</td>
                    <td>{{item.address}}</td>
                    <td>
                        <button class="btn editor" @click='edit(item)'>编辑</button>&nbsp;
                        <button class="btn delete" @click='delStd(item.sNo)'>删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import {
        mapState,
        mapMutations,
    } from 'vuex';
    export default {
        computed: {
            ...mapState(['studentList'])
        },
        methods: {
            ...mapMutations(['chooseModal', 'setStudent']),
            edit(item) {
                this.chooseModal(true);
                this.setStudent(item);
            },
            delStd(sNo) {
                let flag = window.confirm('你确定删除吗???');
                if (flag) {
                    this.$store.dispatch('deleteStudent', sNo);
                    alert('删除成功');
                }
            }
        }
    }
</script>