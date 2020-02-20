<template>
  <q-page>
    <div class="row flex justify-center">
      <div class="col-4">
        <q-card flat class="my-card col-4 q-col-gutter-xs q-my-md q-py-xl q-mx-md">
          <div class="text-h5 q-my-md">Заполнение данных</div>
          <div class="text-mini q-my-md">Чтобы продолжить работу с платформой, заполните свои личные данные</div>
          <div class="text-mini q-my-md">Ваш пол</div>
          <div class="q-my-md">
            <q-radio keep-color v-model="shape" val="m" label="Мужской" color="yellow" />
            <q-radio keep-color v-model="shape" val="w" label="Женский" color="yellow" />
          </div>
          <q-input outlined type="text" class=" q-my-md" v-model="user.first_name" placeholder="Имя..." />
          <q-input outlined type="text" class=" q-my-md" v-model="user.last_name" placeholder="Фамилия..." />
          <q-input outlined type="text" class=" q-my-md" v-model="user.birth_date" placeholder="Дата рождения.." />
          <q-input outlined type="text" class=" q-my-md" v-model="user.phone_number" placeholder="Телефон..." />
          <q-btn color="yellow" class="q-my-md q-mx-xs" size="16px" @click="registerUser" style="width: 100%" label="Завершить регистрацию" />
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
      isPwd: false,
      color: 'cyan'
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
