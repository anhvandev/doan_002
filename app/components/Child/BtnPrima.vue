<template>
    <Button :text="text" v-on="$listeners" class="btn" :isEnabled="dis"></Button>
</template>

<script>
    export default {
        name: "BtnPrima",
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
        background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
        border-radius: 25%;
        width: auto;
        color: #ffffff;
        margin: 0 auto;
        font-family: "Montserrat-Bold";
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
    }
</style>