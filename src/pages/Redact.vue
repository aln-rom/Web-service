<template>
  <q-page>
    <div class="row flex justify-center">
      <div class="col-4">
        <q-card flat class="my-card col-4 q-col-gutter-md q-my-md q-py-xl q-mx-md">
          <div class="q-gutter-sm">
            <q-radio keep-color clearable v-model="user.gender" val="male" label="Мужской" color="yellow" />
            <q-radio keep-color clearable v-model="user.gender" val="female" label="Женский" color="yellow" />
          </div>
          <q-input clearable  outlined v-model="user.first_name" label="Имя" />
          <q-input clearable  outlined v-model="user.last_name" label="Фамилия" />
          <q-input clearable  outlined v-model="user.email" label="E-mail" />
          <q-input clearable  outlined v-model="user.phone_number" label="Телефон" />
          <q-input clearable type="date" outlined v-model="user.birth_date" />
          <q-btn color="yellow" class="q-my-md q-mx-md" size="16px" @click="updateUser" style="width: 100%" label="Сохранить изменения" />
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
      user: {
        email: null,
        first_name: null,
        last_name: null,
        phone_number: null,
        birth_date: null,
        gender: null
      }
    }
  },
  computed: {
    ...mapGetters({
      users: 'user/users'
    })
  },
  methods: {
    ...mapActions({
      getUser: 'user/getUser',
      update: 'user/updateUser'
    }),
    updateUser () {
      this.update(this.user)
    }
  },
  mounted () {
    this.getUser()
      .then(() => {
        this.user.gender = this.users[0].gender
        this.user.first_name = this.users[0].first_name
        this.user.last_name = this.users[0].last_name
        this.user.email = this.users[0].email
        this.user.phone_number = this.users[0].phone_number
        this.user.birth_date = this.users[0].birth_date
        this.user.gender = this.users[0].gender
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
