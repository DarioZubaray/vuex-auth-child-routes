<template>
    <div>
        <login-form :user="user"></login-form>
    </div>
</template>

<script>
import LoginForm from '@/components/authentication/login'
export default {
    components: {
        LoginForm
    },
    data() {
        return {
            user: {
                email:'',
                password: ''
            }
        }
    }
}
</script>
