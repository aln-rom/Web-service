<template>
  <q-page>
    <div class="row flex justify-center">
      <div class="col-4">
        <q-card flat class="my-card col-4 q-col-gutter-xs q-my-md q-py-xl q-mx-md">
          <div class="text-h5 q-my-md">Установка пароля</div>
          <div class="text-mini q-my-md">Введите пароль для доступа к нашим образовательным курсам</div>
          <q-input v-model="user.password"  :type="isPwd ? 'password' : 'text'"
                   placeholder="Введите пароль..."
                   outlined
                   class="q-my-md">
            <template v-slot:append>
              <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-input v-model="user.password_confirmation"  :type="isPwd ? 'password' : 'text'"
                   placeholder="Повторите пароль..."
                   outlined
                   class="q-my-md">
            <template v-slot:append>
              <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-btn color="yellow" class="q-my-md q-mx-xs" size="16px" @click="registerUser" style="width: 100%" label="Продолжить" />
        </q-card>
        {{error}}

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
        email: null,
        error: null
      },
      tab: 'login',
      isPwd: false
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/login'
    }),
    loginUser () {
      this.login(this.user)
        .then(() => {
          this.$router.push('/profile')
        })
        .catch(() => {
          this.show = true
        })
    }
  }
}
</script>
<style>
  .title-button{
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0.18px;
  }
  .text-mini, .text-mini-y{
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
  }
  .text-mini-y{
    color: #FFA000;
  }
  .text-mini{
    color: rgba(0, 0, 0, 0.6);
  }
</style>
