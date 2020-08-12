<template>
    <div class="modal" v-if="$store.state.modal">
        <div class="mask" @click="$store.commit('chooseModal',false)"></div>
        <div class="modal-content">
            <h3>编辑表单</h3>
            <form id="student-editor-form">
                <div><label for="modal-name">姓名</label><input type="text" name="name" :value='curStudent.name'
                        @input="edit('name',$event.target.value)" ref="name"></div>
                <div><label for="sex">性别</label><input type="radio" name="sex" :checked="curStudent.sex=='0'" ref="sex">
                    <label for="modal-male" class="sex">男</label><input type="radio" name="sex"
                        :checked="curStudent.sex=='1'">
                    <label for="modal-female" class="sex">女</label>
                </div>
                <div><label for="modal-email">邮箱</label><input type="text" name="email" :value="curStudent.email"
                        @input="edit('email',$event.target.value)" ref="email"></div>
                <div><label for="modal-number">学号</label><input type="text" readonly name="sNo" :value="curStudent.sNo"
                        @input="edit('sNo',$event.target.value)" ref="sNo"></div>
                <div><label for="modal-birth">出生年</label><input type="text" name="birth" :value="curStudent.birth"
                        @input="edit('birth',$event.target.value)" ref="birth"></div>
                <div><label for="modal-phone">手机号</label><input type="text" name="phone" :value="curStudent.phone"
                        @input="edit('phone',$event.target.value)" ref="phone"></div>
                <div><label for="modal-address">住址</label><input type="text" name="address" :value="curStudent.address"
                        @input="edit('address',$event.target.value)" ref="address"></div>
                <div><label for=""></label>
                    <input type="submit" class="editor btn btn3" value="提交" @click.prevent="commit">
                    <input type="button" class="editor btn btn3" value="重置" @click.prevent="reset">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                stu: {}
            }
        },
        methods: {
            edit(key, value) {
                this.stu[key] = value;
            },
            commit() {
                const newStu = Object.assign({}, this.curStudent, this.stu);
                this.$store.dispatch('updataStu', newStu).then(data => {
                    alert(data.msg)
                });
            },
            reset() {
                for (let prop in this.$refs) {
                    if (prop === 'sex') {
                        continue;
                    }
                    this.$refs[prop].value = '';
                    this.stu[prop] = '';
                }
                this.$refs.sex.checked = true;
                this.stu.sex = 0;
                alert('重置成功');
            }
        },
        computed: {
            curStudent() {
                return this.$store.state.curStudent;
            },

        }
    }
</script>