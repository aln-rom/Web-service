<template>
  <q-page>
      <q-card class="my-card q-my-lg text-dark">
        <q-card-section class="q-py-xl flex justify-center">
          <div class="text-h3 txt">Информация о SpinIT</div>
        </q-card-section>
      </q-card>
    <router-link class="txt" to="/courses">
      <q-card class="my-card q-my-lg text-dark" to="/courses">
        <q-card-section class="q-py-xl flex justify-center" >
          <div class="text-h3" >Направления курсов</div>
        </q-card-section>
      </q-card>
    </router-link>
      <q-card class="my-card q-my-lg text-dark">
        <q-card-section class="q-py-xl flex justify-center">
          <div class="text-h3 ">Система образования</div>
        </q-card-section>
      </q-card>
      <q-card class="my-card q-my-lg text-dark">
        <q-card-section class="q-py-xl flex justify-center">
          <div class="text-h3 ">Примеры курсов</div>
        </q-card-section>
      </q-card>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'PageIndex',
  data () {
    return {
      href: null,
      index: null,
      url: null
    }
  },
  mounted () {
    this.href = location.href
    this.index = this.href.split('=')
    this.url = this.index.splice(1, 2)
    this.url = this.url[0].slice(0, -2)
    console.log(this.url)
    this.registerUserVK()
    this.registerUserGoogle()
  },
  methods: {
    ...mapActions({
      registerVK: 'auth/registerVK',
      registerGoogle: 'auth/registerGoogle'
    }),
    registerUserVK () {
      this.registerVK(this.user)
        .then(() => {
          this.$router.push('/profile')
        })
    },
    registerUserGoogle () {
      this.registerGoogle(this.user)
        .then(() => {
          this.$router.push('/profile')
        })
    }
  }
}
</script>

<style>
.txt {
  text-decoration: none;
}
</style>
