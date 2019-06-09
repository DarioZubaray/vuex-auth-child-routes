import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import validatorEs from 'vee-validate/dist/locale/es'

Vue.use(VeeValidate, {
    fieldsBagName: 'veeFields'
})

Validator.localize('es', validatorEs)

Validator.extend('strength_password', {
    getMessage: field => `El campo ${field} debe tener al menos: 1 letra mayúscula, 1 letra minúscula, 1 número y 1 carácter especial (Por ejemplo,. _ & Etc.)`,
    validate: value => {
        let strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
        return strongPassword.test(value)
    }
})