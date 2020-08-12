<template>
    <div class="left-menu">
        <h5 class='title'>学生管理</h5>
        <ul>
            <router-link to="/StudentList" class="list-item student-list " data-id="student-list" tag='li'>学生列表</router-link>
            <router-link to="/StudentAdd" class="list-item student-add" data-id="student-add" tag='li'>新增学生</router-link>
            <router-link to="/StudentEcharts" class="list-item student-echarts" data-id="student-echarts" tag='li'>统计图表</router-link>
        </ul>
    </div>
</template>