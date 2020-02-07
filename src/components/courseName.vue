<template>
  <router-link :to="{name: 'course.page', params: {id: course.name}}" class="txt">
    <q-card class="my-card q-ma-lg text-dark">
      <q-card-section class="q-py-xl flex justify-center">
        <div class="text-h4 ">{{course.name}}</div>
      </q-card-section>
    </q-card>
  </router-link>
</template>

<script>
export default {
  name: 'toggle',
  props: [
    'course'
  ],
  data: function () {
    return {
      inputCheck: false
    }
  }
}
</script>

<style>
.txt {
  text-decoration: none;
}
</style>
