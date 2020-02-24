<template>
  <div class="row q-ma-lg">
    <div class="col-3  q-ma-lg">
      <div class="q-ma-md ellipse" >
        <div class="border-photo" v-if="avatar">
          <img class="photo q-ma-xs" :src="avatar" >
        </div>
        <div class="border-photo" v-else>
          <img class="photo q-ma-xs" src="../statics/images/avatar.png" >
        </div>
      </div>
      <div class="text-h5 q-ma-md"> {{user.first_name}} {{user.last_name}}
      </div>
      <div class="text-sublime1 text-dark q-ma-md" >{{user.email}}
      </div>
      <div class="text-sublime1 text-dark q-ma-md" >{{user.phone_number}}
      </div>
      <div class="row">
          <q-btn color="yellow" outline class="q-mx-md q-my-md" to="/redact" style="width: 100%" label="Редактировать" />
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
        <q-card inline class="my-card q-my-lg text-dark" v-for="(course, index) in user.courses" :key="index">
          <div class="row q-pa-md">
            <div>
              <div class="kvadrat"></div>
            </div>
            <div class=" col-8 q-mx-md">
              <div class="text-h4 text-black">{{course.title}}</div>
              <div class="text-sublime1 text-dark q-my-sm">Продолжай обучение!</div>
            </div>
          </div>
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
      splitterModel: 20,
      courses: [
        { id: 1, title: 'Design' },
        { id: 2, title: 'Back-end' }
      ],
      cur: null,
      avatar: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/user'
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
      .then(() => {
        this.cur = this.user.courses
        if (this.user.avatar_url !== null) {
          this.avatar = this.user.avatar_url
        } else {
          this.avatar = false
        }
      })
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
  .border-photo {
    width: 101px;
    height: 101px;
    border-radius: 50%;
    border: 1px solid #ffffff00;
  }
  .ellipse {
    background-image: url("../statics/images/Ellipse 15.png");
    background-repeat: no-repeat;
    width: 110px;
    height: 110px;
  }
  .kvadrat {
    width: 83px;
    height: 88px;
    background: rgba(0, 0, 0, 0.6);
  }
</style>
