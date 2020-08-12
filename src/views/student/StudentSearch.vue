<template>
    <div class="search-msg">
        <label for="search-inp">关键字查询：</label>
        <input type="text" id="search-inp" v-model="value">
        &nbsp;
        <button id="search-btn" @click="search">搜索</button>
        <span id="tipEmail" class="tip tip2">只能搜索学号、邮箱、地址</span>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: ''
            }
        },
        methods: {
            search() {
                this.$store.commit('setKeyword', this.value);
                this.$store.dispatch('turnPage', 1);
            }
        }
    }
</script>
<style scoped>
    .tip2 {
        height: 1.7rem;
        line-height: 1.7rem;
        margin-left: 10px;
        margin-top: -2px;
        font-size: 14px;
        width: 170px;
    }
</style>