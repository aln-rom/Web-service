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
        <div class="flex justify-center row" v-if="!cur">
          <div class="text-h5 choise col-12 text-black q-my-lg flex justify-center">
            <b>К сожалению, вы пока не выбрали ни одного нашего курса </b>
          </div>
          <div class=" flex justify-center">
            <q-btn color="yellow" class="q-my-lg q-mx-lg" size="16px" style="" label="Выбрать курс" />
          </div>
         </div>
      </q-tab-panel>

      <q-tab-panel name="progress">
        <q-stepper
            flat
            alternative-labels
            active-color="grey-7"
            v-model="step"
        >
          <q-step
              :name="1"
              title="Смотри видео и выполняй задания "
              prefix="1"/>
          <q-step
              :name="2"
              title="Зарабатывай достижения"
              prefix="2"/>
          <q-step
              :name="3"
              title="Получай важные знания"
              prefix="2" />
        </q-stepper>
      </q-tab-panel>

      <q-tab-panel name="favorites">
        <div class="">
          <div class="row">
            <Article v-for="index in 4" :key="index" class="q-ma-xs"/>
          </div>
        </div>
      </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import Article from '../components/articleCard.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Article
  },
  data () {
    return {
      tab: 'courses',
      splitterModel: 20,
      cur: null,
      avatar: false,
      step: 1
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
    console.log(navigator.userAgent)
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
  .choise {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;
  }
</style>
