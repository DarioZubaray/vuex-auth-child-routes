<template>
  <div id="app">
    <loading :active.sync="loading"></loading>
    <b-container>
      <navigation-logged v-if="isLogged"></navigation-logged>
      <navigation-guest v-else></navigation-guest>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import NavigationLogged from '@/components/navigations/logged'
import NavigationGuest from '@/components/navigations/guest'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  components: {
    NavigationLogged, NavigationGuest, Loading
  },
  computed: {
    ...mapState('auth', ['isLogged']),
    ...mapState(['loading'])
  }
}
</script>
