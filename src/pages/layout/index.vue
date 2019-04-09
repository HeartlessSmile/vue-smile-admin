
<template>
      <Layout class="layout-box">
        <Navbar></Navbar>
        <Layout class="layout-container">
            <Sidebar hide-trigger></Sidebar>
            <Content>Content</Content>
        </Layout>
    </Layout>
</template>

<script>
    import Navbar from './navBar'
    import Sidebar from './siderBar'
    // import appMain from './appMain'
    // import crumbs from './crumbs'
    // import meetNav from './meetNav'
    export default {
        name: 'layoutIndex',
        components: {
            Navbar,
            Sidebar
        },
        data() {
            return {
                msg: '',
                crumbsFlag: false
            }
        },
        computed: {},
        methods: {},
        watch: {
            '$route' (to) {},
        },
        created() {
            // this.$sloading.show()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
