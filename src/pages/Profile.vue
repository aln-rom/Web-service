<template>
  <div>
    <q-splitter
        v-model="splitterModel"
        style="height: auto">

      <template v-slot:before>
        <q-tabs
            v-model="tab"
            vertical
            class="text-dark">
          <q-tab name="prof" label="Профиль" no-caps/>
          <q-tab name="course" label="Курсы"  no-caps/>
          <q-tab name="progress" label="Достижения" no-caps/>
          <q-tab name="like" label="Избранное" no-caps/>
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
            v-model="tab"
            animated
            transition-prev="jump-up"
            transition-next="jump-up"
        >
          <q-tab-panel name="prof">
            <div class="text-h4 q-mb-md"> {{users[0].first_name}} {{users[0].last_name}}</div>
            <p class="text-h6">О себе</p>
            <q-btn color="dark" class="q-mx-md q-my-md" @click="logoutUser" style="width: 93%" label="Выйти" />
          </q-tab-panel>

          <q-tab-panel name="course">
            <div class="text-h4 q-mb-md">Выбранные курсы</div>
            <q-card class="my-card q-my-lg text-dark">
              <q-card-section class="q-py-xl flex justify-center">
                <div class="text-h4 txt">Front-end</div>
              </q-card-section>
            </q-card>
          </q-tab-panel>

          <q-tab-panel name="progress">
            <div class="text-h4 q-mb-md">Достижения</div>
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

          <q-tab-panel name="like">
            <div class="q-pa-md">
              <div class="row justify-center q-gutter-sm">
                  <q-card class="q-ma-sm col-5" v-for="index in 4" :key="index">
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
      </template>

    </q-splitter>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      tab: 'prof',
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
