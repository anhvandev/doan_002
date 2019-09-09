<template>
    <Page :actionBarHidden="actBar">
        <FlexboxLayout class="wrapper" flexDirection="column">
            <Image src="~/assets/images/logo.png" class="logo"/>
            <TextField class="input-prima" hint="Nhập tên đăng nhập" v-model="username"/>
            <TextField class="input-prima" hint="Nhập mật khẩu" v-model="password" secure/>
            <TextField class="input-prima" hint="Nhập lại mật khẩu" v-model="repassword" secure/>
            <BtnDefault text="Đăng Ký" @tap="register"/>
            <BtnPrimaTran text="Đăng Nhập" @tap="$navigateBack"/>
        </FlexboxLayout>
    </Page>
</template>

<script>
    import * as Toast from 'nativescript-toast';
    import BtnDefaultTran from '../Child/BtnDefaultTran';
    import BtnPrimaTran from "../Child/BtnPrimaTran";
    import BtnDefault from "../Child/BtnDefault";
    import Login from './Login';

    export default {
        name: "Register",
        data() {
            return {
                username: '',
                password: '',
                repassword: ''
            }
        },
        props: {
            actBar: {
                default: true
            }
        },
        components: {
            BtnDefaultTran,
            BtnPrimaTran,
            BtnDefault,
            Login
        },
        methods: {
            register() {
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        padding: 50 20;
        background-image: url('~/assets/images/bg-login1-opa.png');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .logo {
        width: 100%;
        height: 20%;
        display: block;
        margin-bottom: 30;
    }
</style>