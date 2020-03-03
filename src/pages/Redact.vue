<template>
  <q-page>
    <q-splitter
        v-model="splitterModel"
        style="height: auto"
        class="col-2 flex justify-center"
    >

      <template v-slot:before class="q-my-lg">
        <q-tabs
            v-model="tab"
            vertical
            class="text-teal q-my-lg q-ma-lg bg-grey-3 shadow-2"
            active-color="yellow"
            indicator-color="yellow"
        >
          <q-tab name="info" class="text-black" no-caps label="Личная информация" />
          <q-tab name="pass" class="text-black"  no-caps label="Смена пароля" />
          <q-tab name="delete" class="text-black"  no-caps label="Удалить аккаунт" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
        >
          <q-tab-panel name="info">
            <div class="row flex justify-center">
              <div class="col-5">
                <q-card flat class="my-card q-my-md q-mx-md">
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

                  <q-uploader
                      url="http://localhost:4444/upload"
                      label="Выберите фото"
                      color="yellow"
                      text-color="black"
                      flat
                      bordered
                      style="max-width: 200px"
                  />
                </q-card>
                </div>
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
          </q-tab-panel>

          <q-tab-panel name="pass">
            <div class="row flex justify-center">
              <div class="col-5">
                <q-card flat class="my-card q-my-md q-mx-md">
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
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
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
      tab: 'info',
      splitterModel: 20,
      dialog: false,
      isPwd: true
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
      update: 'user/updateUser'
    }),
    updateUser () {
      this.update(this.client)
        .then(() => {
          this.dialog = true
        })
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
