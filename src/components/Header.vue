<template>
    <header>
        <div class="logo">
            <img src="../assets/images/logo.png" alt="">
            <span>渡</span>
            <span>一</span>
            <span>教</span>
            <span>育</span>
        </div>
        <div class="logo-btn" @click="!show">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="drop-list" v-if="show">
            <ul>
                <router-link to='/StudentList' class="list-item student-list" data-id="student-list" tag='li'>学生列表</router-link>
                <router-link to='/studentAdd' class="list-item student-add" data-id="student-add" tag='li'>新增学生</router-link>
                <router-link to='/StudentEcharts' class="list-item student-echarts" data-id="student-echarts" tag='li'>统计图表</router-link>
            </ul>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                show: false
            }
        },
    }
</script>