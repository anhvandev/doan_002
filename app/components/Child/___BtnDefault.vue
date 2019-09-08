<template>
    <Button :text="text" v-on="$listeners" class="btn" :isEnabled="dis"></Button>
</template>

<script>
    export default {
        name: "___BtnDefault",
        props: {
            text: {
                type: String
            },
            dis: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style scoped>
    .btn {
        clip-path: polygon(0% 0%, 0% 100%, 1% 100%, 1% 5%, 99% 5%, 99% 95%, 1% 95%, 1% 100%, 100% 100%, 100% 0%);
        background: linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%);
        width: auto;
        color: #ffffff;
        margin: 0 auto;
        font-family: "Montserrat-SemiBold";
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
    }
</style>