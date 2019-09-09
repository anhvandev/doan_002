<template>
    <Button :text="text" v-on="$listeners" class="btn" :isEnabled="dis"></Button>
</template>

<script>
    export default {
        name: "BtnDefault",
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
        background: linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%);
        border-radius: 25%;
        width: auto;
        color: #ffffff;
        margin: 0 auto;
        font-family: "Montserrat-Bold";
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
    }
</style>