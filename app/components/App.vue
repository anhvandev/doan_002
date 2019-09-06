<template>
    <Page actionBarHidden="true">
        <login/>
    </Page>
</template>

<script>
    import Login from "./Layouts/Login";

    export default {
        data() {
            return {
                msg: 'Hello World!',
            }
        },
        components: {
            login: Login
        }
    }
</script>

<style scoped>

</style>
