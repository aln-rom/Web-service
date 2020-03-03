<template>
  <q-card flat class="my-card col-4 q-col-gutter-sm q-my-sm">
    <img src="../statics/images/Rectangle 12.png">
    <q-card-section class="q-col-gutter-sm">
      <div class="text-h5 zglvk q-ma-sm"> <b>Имя его Debater, и он пришел побеждать в спорах </b></div>
      <div class="article-txt q-ma-sm">Кембриджский дискуссионный клуб провёл очередной эксперимент. В ходе...</div>
      <div class="article-data q-ma-sm">28 февраля 2020</div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'toggle',
  props: [
    'course'
  ]
}
</script>

<style>
  .zglvk {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;
  }
  .article-txt {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: rgba(0, 0, 0, 0.6);
  }
  .article-data {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: rgba(0, 0, 0, 0.6);
  }
</style>
