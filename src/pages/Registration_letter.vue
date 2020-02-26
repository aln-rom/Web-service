<template>
  <q-page class="q-col-gutter-sm q-ma-lg q-my-lg">
    <div class="row flex justify-center">
      <div class="q-ma-lg col-10 txt">
        Поздравляем! Ваш аккаунт SpinIT активирован
      </div>
    </div>
    <div class="row flex justify-center">
      <div class="grey-txt q-ma-lg col-7">
        Изучай новые темы, получай баллы и зарабатывай бонусы, читай статьи в блоге и смотри трансляции!
      </div>
    </div>
    <div class="row flex justify-center">
      <div class="col-3">
        <q-btn color="yellow" class="q-my-md q-mx-xs" size="16px" to="/profile" style="width: 100%" label="Завершить регистрацию" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'PageIndex',
  mounted () {
    this.register2()
  },
  methods: {
    ...mapActions({
      register2: 'auth/register_continue'
    })
  }
}
</script>

<style>
  .txt {
    text-align: center;
    font-size: 60px;
    line-height: 72px;
  }
  .grey-txt {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 24px;
    /* or 100% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.18px;

    /* Black - Medium Emphasis */

    color: rgba(0, 0, 0, 0.6);
  }
</style>
