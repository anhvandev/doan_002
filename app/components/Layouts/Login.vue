<template>
    <Page :actionBarHidden="actBar">
        <FlexboxLayout class="wrapper" flexDirection="column">
            <Image src="~/assets/images/logo.png" class="logo"/>
            <TextField class="input-prima" hint="Tên đăng nhập" v-model="username"/>
            <TextField class="input-prima" hint="Mật khẩu" v-model="password" secure/>
            <BtnDefault text="Đăng Nhập" @tap="login"/>
            <BtnPrimaTran text="Đăng Ký" @tap="register"/>
            <AwesomeLoaders width="60" height="60" indicator="Pacman" indicatorColor="#FFEB3B" />
        </FlexboxLayout>
    </Page>
</template>

<script>
    import * as Toast from 'nativescript-toast';
    import BtnDefaultTran from '../Child/BtnDefaultTran';
    import BtnPrimaTran from '../Child/BtnPrimaTran';
    import BtnDefault from '../Child/BtnDefault';
    import Register from './Register';

    export default {
        name: 'Login',
        data() {
            return {
                username: '',
                password: ''
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
            Register,
            BtnDefault
        },
        methods: {
            login() {
                /*var toast = Toast.makeText("Hello World");
                toast.show();*/
                /*if (this.username === '') {
                    alert('Bạn chưa nhập tên đăng nhập');
                }
                if (this.password === '') {
                    alert('Bạn chưa nhập mật khẩu');
                }*/

            },
            register() {
                this.$navigateTo(Register);
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