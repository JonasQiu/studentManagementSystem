<template>
    <div class="tab-content-item" id="student-add">
        <form id="student-add-form">
            <div>
                <label for="name">姓名</label><input id="name" type="text" name="name" v-model="user.name">
                <span id="tipName" class="tip">请输入姓名</span>
            </div>
            <div><label for="sex">性别</label>
                <input type="radio" name="sex" id="male" value="0" checked v-model="user.sex"><label for="male" class="sex">男</label>
                <input type="radio" name="sex" value="1" id="female" v-model="user.sex"><label for="female" class="sex">女</label>
            </div>
            <div>
                <label for="email">邮箱</label><input type="text" id="email" name="email" v-model="user.email">
                <span id="tipEmail" class="tip">请输入邮箱地址</span>
            </div>
            <div>
                <label for="number">学号</label><input type="text" id="number" name="sNo" v-model="user.sNo">
                <span id="tipSNo" class="tip">4位数字以上的学号</span>
            </div>
            <div>
                <label for="birth">出生年</label><input type="text" id="birth" name="birth" v-model="user.birth">
                <span id="tipBirth" class="tip">请输入出生年份</span>
            </div>
            <div>
                <label for="phone">手机号</label><input type="text" id="phone" name="phone" v-model="user.phone">
                <span id="tipPhone" class="tip">请输入11位数字</span>
            </div>
            <div>
                <label for="address">住址</label><input type="text" id="address" name="address" v-model="user.address">
                <span id="tipAddress" class="tip">请输入地址</span>
            </div>
            <div><label for=""></label>
                <input type="submit" id="submit-list" class="btn btn1" value="提交" @click.prevent='commit'>
                <input type="reset" id="reset-list" class="btn btn2" value="重置" @click="reset">
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    name: "",
                    sex: "0",
                    birth: "",
                    email: "",
                    sNo: "",
                    phone: "",
                    address: "",
                }
            }
        },
        methods: {
            reset() {
                this.user = {
                    name: "",
                    sex: "0",
                    birth: "",
                    email: "",
                    sNo: "",
                    phone: "",
                    address: "",
                };
                alert('重置成功')
            },
            commit() {
                this.$api.studentAdd(this.user).then(data => {
                    if (data.data.status === 'fail') {
                        alert(data.data.msg)
                    } else {
                        let flag = window.confirm("添加成功，是否继续添加??");
                        if (!flag) {
                            this.$router.push('/StudentList');
                        }
                    }
                })
            }
        }
    }
</script>