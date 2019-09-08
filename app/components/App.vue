<template>
    <login actBar="true"/>
</template>

<script>
    import Login from "./Layouts/Login";

    export default {
        data() {
            return {
                actBar: true,
            }
        },
        components: {
            login: Login
        },
        methods: {
            changeActionbar(stt) {
                this.actBar = stt;
            }
        }
    }
</script>
