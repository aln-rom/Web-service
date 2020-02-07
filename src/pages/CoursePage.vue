<template>
  <q-page>
    <q-card class="my-card q-ma-lg text-dark flex justify-center">
      <q-card-section class="q-py-lg column q-col-gutter-sm">
        <div class="text-h3 ">Информация o направлении Front-end</div>
        <div class="text-h5" align="center"> Чему научат </div>
        <div class="text-h5 " align="center" > Преподаватели </div>
        <div class="text-h5 " align="center"> Стоимость </div>
        <q-btn class="bg-yellow text-dark q-my-sm" label="Записаться на курс" />
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
.column {
  flex-flow: column;
  justify-content: center;
  display: flex;
}
</style>
