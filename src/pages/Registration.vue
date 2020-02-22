<template>
  <q-page>
    <div class="row flex justify-center">
      <div class="col-4">
        <q-card flat class="my-card col-4 q-col-gutter-xs q-my-md q-py-xl q-mx-md">
          <div class="text-h5 q-my-md">Заполнение данных</div>
          <div class="text-mini q-my-md">Чтобы продолжить работу с платформой, заполните свои личные данные</div>
          <div class="text-mini q-my-md">Ваш пол</div>
          <div class="q-gutter-sm">
            <q-radio keep-color v-model="color" val="male" label="Мужской" color="yellow" />
            <q-radio keep-color v-model="color" val="female" label="Женский" color="yellow" />
          </div>
          <q-input outlined type="text" class=" q-my-md" v-model="user.email" placeholder="Введите ваш е-mail" />
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
          <q-input outlined type="text" class=" q-my-md" v-model="user.first_name" placeholder="Имя..." />
          <q-input outlined type="text" class=" q-my-md" v-model="user.last_name" placeholder="Фамилия..." />
          <q-input outlined type="date" class=" q-my-md" v-model="user.birth_date" placeholder="Дата рождения.." />
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
        password_confirmation: null,
        first_name: null,
        last_name: null,
        birth_date: null,
        phone_number: null
      },
      tab: 'login',
      isPwd: false,
      color: 'cyan'
    }
  },
  methods: {
    ...mapActions({
      register: 'auth/register'
    }),
    registerUser () {
      this.register(this.user)
      this.$router.push('/registration_continue')
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
  .text-mini{
    color: rgba(0, 0, 0, 0.6);
  }
</style>
