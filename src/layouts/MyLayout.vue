<template>
  <q-layout view="hHh lpR fFf" class="q-my-lg">
    <q-header bordered class="bg-yellow text-dark q-py-sm" >
      <q-toolbar class="row" >
        <q-btn-group class="col-5 flex justify-between" unelevated>
          <q-btn no-caps flat to="/" color="dark" label="SpinIT" size="lg"/>
          <q-btn flat no-caps to="/courses" color="dark" label="Курсы" size="lg"/>
          <q-btn flat no-caps  to="/blog" color="dark" label="Блог" size="lg"/>
          <q-btn flat no-caps to="/about" color="dark" label="О нас" size="lg"/>
        </q-btn-group>
        <q-btn-group class="col-7 flex justify-end" unelevated>
          <q-btn flat no-caps  to="/contacts" color="dark" label="Контакты" size="lg"/>
        <q-btn flat no-caps color="dark" to="/profile" label="Личный кабинет" size="lg"/>
        </q-btn-group>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
<style>
  .text {
    background: url(../statics/830f849e-1495-4da9-a99d-c7758df0d509.jpg);
    opacity: 0.7;
    -webkit-background-clip:text;
    -webkit-text-fill-color: transparent;
    font-size: 100px;
    font-weight: 900;
  }
  router-link {
    text-decoration: none;
  }
</style>
