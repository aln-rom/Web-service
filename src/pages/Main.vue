<template>
  <q-page>
      <q-card class="my-card q-my-lg text-dark">
        <q-card-section class="q-py-xl flex justify-center">
          <div class="text-h3 txt">Информация о SpinIT</div>
        </q-card-section>
      </q-card>
    <router-link class="txt" to="/courses">
      <q-card class="my-card q-my-lg text-dark" to="/courses">
        <q-card-section class="q-py-xl flex justify-center" >
          <div class="text-h3" >Направления курсов</div>
        </q-card-section>
      </q-card>
    </router-link>
      <q-card class="my-card q-my-lg text-dark">
        <q-card-section class="q-py-xl flex justify-center">
          <div class="text-h3 ">Система образования</div>
        </q-card-section>
      </q-card>
      <q-card class="my-card q-my-lg text-dark">
        <q-card-section class="q-py-xl flex justify-center">
          <div class="text-h3 ">Примеры курсов</div>
        </q-card-section>
      </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style>
.txt {
  text-decoration: none;
}
</style>
