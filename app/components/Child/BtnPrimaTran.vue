<template>
    <Button :text="text" v-on="$listeners" class="btn" :isEnabled="dis"></Button>
</template>

<script>
    export default {
        name: "BtnPrimaTran",
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
        border-width: 2;
        border-color: #6FCF97;
        border-radius: 25%;
        background-color: transparent;
        color: #ffffff;
        font-family: "Montserrat-Bold";
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        margin-top: 10;
        margin-bottom: 10;
    }
</style>