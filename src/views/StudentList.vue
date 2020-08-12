<template>
    <div class="tab-content-item show-list student-list" id="student-list">
        <student-search></student-search>
        <student-table></student-table>
        <student-turn-page :totalPage="totalPage" :now="now" :cb="cb" ></student-turn-page>
        <transition >
            <student-modal></student-modal>
        </transition>
    </div>
</template>

<script>
    import StudentSearch from './student/StudentSearch';
    import StudentTable from './student/StudentTable';
    import StudentModal from './student/StudentModal';
    import StudentTurnPage from './student/StudentTurnPage';


    export default {
        components: {
            StudentSearch,
            StudentTable,
            StudentModal,
            StudentTurnPage
        },
        created() {
            this.$store.dispatch('getStudentList', 1);
        },
        computed: {
            totalPage() {
                return this.$store.state.totalPage;
            },
            now() {
                return this.$store.state.nowPage;
            }
        },
        methods: {
            cb(i) {
                this.$store.dispatch('turnPage', i);
            }
        }
    }
</script>
<style>
    .v-enter {
        top: -100%;
        opacity: 0;
    }
    
    .v-enter-to {
        top: 0;
        opacity: 1;
    }
    
    .v-enter-active {
        transition: all .5s;
    }
    
    .v-leave-to {
        opacity: 1;
        left: 0%;
    }
    
    .v-leave {
        transition: all .5s;
    }
    
    .v-leave-active {
        opacity: 0;
        left: -100%;
    }
</style>