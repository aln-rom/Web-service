<template>
  <q-page>
    <div class="row flex justify-center">
      <div class="col-4">
        <q-card class="my-card col-4 q-col-gutter-md q-my-lg">
          <div class="text-h6 rus text-grey-8" align="center">Регистарция</div>
          <div class="q-mx-lg">
            <q-input outlined type="text" class=" q-ma-md" v-model="user.first_name" placeholder="Имя" />
            <q-input outlined type="text" class="q-ma-md" v-model="user.last_name" placeholder="Фамилия" />
            <q-input outlined type="text" class=" q-ma-md" v-model="user.email" placeholder="E-mail" />
            <q-input outlined type="text" class="q-ma-md" v-model="user.password" placeholder="Пароль" />
            <q-input outlined type="text" class="q-ma-md" v-model="user.password_confirmation" placeholder="Подтверждение пароля" />
            <q-btn color="dark" class="q-mx-md q-my-xs" @click="registerUser" style="width: 93%" label="Зарегестрироваться" />
            <a class="txt" href="https://oauth.vk.com/authorize?client_id=7315382&redirect_uri=http%3A%2F%2F127.0.0.1%3A8081&scope=email&response_type=code">
              <q-btn color="dark" class="q-mx-md q-my-xs" style="width: 93%" label="ВК" />
            </a>
            <a class="txt" href="https://accounts.google.com/signin/oauth/oauthchooseaccount?client_id=217991563041-24mhrqea2jnlv4gjrgbddrfqhdqoo84v.apps.googleusercontent.com&as=HIo9zz6tmoJunPwhM1vRWQ&destination=http%3A%2F%2F127.0.0.1%3A8081&approval_state=!ChRwSVpfcFpyQkJqS29JZGh2ZUJfdhIfQXpHeEduT2p3dUVjOERFdWhZOThQY19WVUZKWUF4Yw%E2%88%99AJDr988AAAAAXkREe11iKAd4yRMzzmSerysIgEXZGPJ_&oauthgdpr=1&xsrfsig=ChkAeAh8TzUrt8tCd6Rxl_1Akn9Hh_xhUUu1Eg5hcHByb3ZhbF9zdGF0ZRILZGVzdGluYXRpb24SBXNvYWN1Eg9vYXV0aHJpc2t5c2NvcGU&flowName=GeneralOAuthFlow">
              <q-btn color="dark" class="q-mx-md q-my-xs" style="width: 93%" label="ГУГЛ" />
            </a>
            <q-btn color="dark" class="q-mx-md q-my-md" to="/login" style="width: 93%" label="Вход" />
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
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        password_confirmation: null
      }
    }
  },
  methods: {
    ...mapActions({
      register: 'auth/register',
      registerVK: 'auth/vk'
    }),
    registerUser () {
      this.register(this.user)
        .then(() => {
          this.$router.push('/')
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
