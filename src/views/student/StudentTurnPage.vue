<template>
    <ul class="page-ul">
        <li class="prev-page" v-if='nowPage >1' @click="turnPage('prev')">上一页</li>
        <li class="num" :class="{'current':nowPage===1}" @click='turnPage(1)'>1</li>
        <span v-if="nowPage>4">...</span>
        <template v-for="i in 5" >
<li class="num" :key='i' @click='turnPage(nowPage-2+i)' :class="{'current':nowPage===nowPage-2+i}" v-if="nowPage-2+i>1 && nowPage-2+i<totalPage">{{nowPage-2+i}}</li>
        </template>
<span v-if="nowPage<totalPage-3">...</span>
<li class="num" v-if="totalPage!=1" :class="{'current':nowPage===totalPage}" @click='turnPage(totalPage)'>{{totalPage}}</li>
<li class="next-page" v-if="nowPage<totalPage" @click="turnPage('next')" :class="{'current':nowPage===totalPage}">下一页</li>
</ul>
</template>

<script>
    export default {
        data() {
            return {
                nowPage: this.now,
            }
        },
        props: {
            now: {
                type: Number,
                default: 1
            },
            totalPage: {
                type: Number,
                default: 1
            },
            cb: {
                type: Function,
                default () {

                }
            }
        },
        computed: {

        },
        methods: {
            turnPage(n) {
                if (n === 'prev') {
                    if (this.nowPage > 1) {
                        this.nowPage--;
                        this.cb(this.nowPage);
                    }
                } else if (n === 'next') {
                    if (this.nowPage < this.totalPage) {
                        this.nowPage++;
                        this.cb(this.nowPage);
                    }
                } else {
                    this.nowPage = n;
                    this.cb(n);
                }
            },
        },
        watch: {
            now() {
                this.nowPage = this.now;
            }
        }
    }
</script>
<style>
    ul,
    li {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    
    ul.page-ul li,
    ul.page-ul span {
        float: left;
        padding: 10px;
        border: 1px solid #ddd;
        color: #666;
        margin-right: 10px;
        cursor: pointer;
    }
    
    ul.page-ul span {
        cursor: none;
        border: none;
    }
    
    ul.page-ul li.current {
        color: #fff;
        background-color: #428bca;
    }
</style>