import Vue from 'vue';
import VeeValidate, {validator} from 'vee-validate';
import validatorEs from 'vee-validate/dist/locale/es'

Vue.use(VeeValidate, {
    fieldsBagName: 'veeFields'
})

validator.localize('es', validatorEs)