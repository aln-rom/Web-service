<template>
  <q-page>
    <div class="row flex justify-center">
      <div class="col-4">
        <q-card class="my-card col-4 q-col-gutter-md q-my-lg">
          <div class="text-h6 rus text-grey-8" align="center">Вход</div>
          <div class="q-mx-lg">
            <q-input outlined type="text" class=" q-ma-md" v-model="user.email" placeholder="e-mail" />
            <q-input outlined type="text" class="q-ma-md" v-model="user.password" placeholder="Пароль" />
            <q-btn color="dark" class="q-mx-md q-my-xs" @click="loginUser" style="width: 93%" label="Войти" />
            <q-btn color="dark" class="q-mx-md q-my-md" to="/registration" style="width: 93%" label="Зарегистрироваться" />
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'PageIndex',
  data () {
    return {
      user: {
        password: null,
        email: null
      }
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/login',
      logout: 'auth/logout'
    }),
    loginUser () {
      this.login(this.user)
        .then(() => {
          this.$router.push('/profile')
        })
    },
    logoutUser () {
      if (localStorage.getItem('user-token')) {
        this.logout(this.user)
      }
    }
  }
}
</script>
