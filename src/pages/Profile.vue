<template>
  <div class="row q-ma-lg">
    <div class="col-3  q-ma-lg">
      <div class="q-ma-md">
        <img class="photo" :src="users[0].avatar_url">
      </div>
      <div class="text-h5 q-ma-md"> {{users[0].first_name}} {{users[0].last_name}}
      </div>
      <div class="text-sublime1 text-dark q-ma-md" >{{users[0].email}}
      </div>
      <div class="row">
          <q-btn color="yellow" outline class="q-mx-md q-my-md" to="/edit" style="width: 100%" label="Редактировать" />
        <q-separator class="q-ma-md"/>
      </div>
      <div class="text-h6 q-mx-md"> Последние достижения</div>
      <q-btn color="yellow" flat no-caps class="q-my-lg" @click="logoutUser" label="Выйти" />
    </div>
    <div class="col-8 q-ma-lg q-my-lg q-py-xl">
      <div class="row">
        <div class="col-6">
          <q-tabs
              v-model="tab"
              class="text-yellow"
              active-color="yellow"
              indicator-color="yellow"
              align="justify"
          >
            <q-tab name="courses" label="Курсы" />
            <q-tab name="favorites" label="Сохранённые статьи" />
            <q-tab name="progress" label="Достижения" />
          </q-tabs>
        </div>
      </div>

      <q-tab-panels v-model="tab" animated class=" col-7">
      <q-tab-panel name="courses">
        <q-card class="my-card q-my-lg text-dark">
          <q-card-section class="q-pa-md">
            <div class="text-h5 txt">{{users[0].courses}}</div>
            <div class="text-sublime2 txt"></div>
          </q-card-section>
        </q-card>
      </q-tab-panel>

      <q-tab-panel name="progress">
        <q-stepper
            v-model="step"
            ref="stepper"
            animated
            active-color="purple">
          <q-step
              :name="1"
              prefix="1"
              title="Новичок"
          > </q-step>
          <q-step
              :name="2"
              prefix="2"
              title="Знаток"
          > </q-step>
          <q-step
              :name="3"
              prefix="3"
              title="Профи"
          > </q-step>
        </q-stepper>
      </q-tab-panel>

      <q-tab-panel name="favorites">
        <div class="q-pa-md">
          <div class="row q-gutter-sm">
            <q-card class="q-ma-sm col-5" v-for="index in 2" :key="index">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">
              <q-card-section>
                <div class="text-h6">Cтатья </div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      tab: 'courses',
      splitterModel: 20
    }
  },
  computed: {
    ...mapGetters({
      users: 'user/users'
    })
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout',
      getUser: 'user/getUser'
    }),
    logoutUser () {
      if (localStorage.getItem('user-token')) {
        this.logout(this.user)
          .then(() => {
            this.$router.push('/login')
          })
      }
    }
  },
  mounted () {
    this.getUser()
  }
}
</script>

<style>
  .photo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid black;
  }
</style>
