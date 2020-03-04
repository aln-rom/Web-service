<template>
  <q-page>
    <div class="row flex justify-center">
      <q-tabs
          vertical
          class="text-teal q-my-lg q-ma-lg bg-grey-3 col-2 shadow-2"
          active-color="yellow"
          indicator-color="yellow"
          style="max-height: 150px"
      >
        <q-tab @click="showInfo"  class="text-black" no-caps label="Личная информация" />
        <q-tab @click="showPass" class="text-black" no-caps label="Смена пароля" />
        <q-tab @click="showDel" class="text-black" no-caps label="Удалить аккаунт" />
      </q-tabs>

      <div v-if="info" class="flex justify-center">
          <q-card flat class="q-my-md q-mx-md" style="width: 400px">
            <div class="q-col-gutter-md">
              <div class="q-gutter-sm">
                <q-radio keep-color clearable v-model="client.gender" val="male" label="Мужской" color="yellow" />
                <q-radio keep-color clearable v-model="client.gender" val="female" label="Женский" color="yellow" />
              </div>
              <q-input clearable  outlined v-model="client.first_name" label="Имя" />
              <q-input clearable  outlined v-model="client.last_name" label="Фамилия" />
              <q-input clearable  outlined v-model="client.email" label="E-mail" />
              <q-input clearable  outlined v-model="client.phone_number" label="Телефон" />
              <q-input clearable type="date" outlined v-model="client.birth_date" />
            </div>
            <q-btn color="yellow" class="q-my-lg " size="16px" @click="updateUser" style="width: 100%" label="Сохранить изменения" />
            <q-input type="file" v-model="avatar" name="picture"/>
            <q-btn color="yellow" class="q-my-lg " size="16px" @click="Avatar" style="width: 100%" label="Avatar" />
          </q-card>
      </div>

      <q-dialog v-model="dialog">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Данные успешно изменены!</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
          </q-card-section>
        </q-card>
      </q-dialog>

      <div v-if="pass" class="flex justify-center">
          <q-card flat class="my-card q-my-md q-mx-md" style="width: 400px">
            <div class="q-col-gutter-xs">
              <q-input v-model="client.password"  :type="isPwd ? 'password' : 'text'"
                       placeholder="Старый пароль..."
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
              <q-input v-model="client.password_confirmation"  :type="isPwd ? 'password' : 'text'"
                       placeholder="Новый пароль..."
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
              <q-input v-model="client.password_confirmation"  :type="isPwd ? 'password' : 'text'"
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
            </div>
            <q-btn color="yellow" class="q-my-lg " size="16px" @click="updateUser" style="width: 100%" label="Сохранить изменения" />

          </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      client: {
        email: null,
        first_name: null,
        last_name: null,
        phone_number: null,
        birth_date: null,
        gender: null,
        password_confirmation: null,
        password: null
      },
      file: null,
      avatar: null,
      dialog: false,
      isPwd: true,
      info: true,
      pass: false,
      del: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/user'
    })
  },
  methods: {
    ...mapActions({
      getUser: 'user/getUser',
      update: 'user/updateUser',
      updateAvatar: 'user/updateAvatar'
    }),
    updateUser () {
      this.update(this.client)
        .then(() => {
          this.dialog = true
        })
    },
    Avatar () {
      this.file = this.avatar[0]
      this.updateAvatar(this.avatar)
      console.log(this.file)
        .then(() => {
          this.dialog = true
        })
    },
    showInfo () {
      this.info = true
      this.pass = false
      this.del = false
    },
    showPass () {
      this.info = false
      this.pass = true
      this.del = false
    },
    showDel () {
      this.info = false
      this.pass = false
      this.del = true
    }
  },
  mounted () {
    this.getUser()
      .then(() => {
        this.client.gender = this.user.gender
        this.client.first_name = this.user.first_name
        this.client.last_name = this.user.last_name
        this.client.email = this.user.email
        this.client.phone_number = this.user.phone_number
        this.client.birth_date = this.user.birth_date
        this.client.gender = this.user.gender
      })
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
