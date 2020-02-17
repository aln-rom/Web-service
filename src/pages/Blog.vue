<template>
  <div class="q-pa-md row">
    <div class="q-gutter-y-md col-8 offset-2" >
        <q-tabs
            v-model="tab"
            class="text-grey "
            active-color="dark"
            indicator-color="yellow"
            align="justify"
             >
          <q-tab name="articles" label="Статьи" />
          <q-tab name="tran" label="Трансляции" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="articles">
            <div class="q-pa-sm">
              <div class="row justify-between q-gutter-sm">
                <div class="col-3">
                  <div class="row">
                    <q-select class="col-12" outlined v-model="model"
                              :options="options"
                              label="Выберите направление" />
                  </div>
                </div>
                <div class="col-8">
                  <div class="row">
                    <q-card class="q-my-sm col-12" v-for="index in 4" :key="index"
                    >
                      <img src="https://cdn.quasar.dev/img/mountains.jpg"
                           style="max-height: 200px">
                      <q-card-section>
                        <div class="text-h6">Cтатья </div>
                        <div class="text-subtitle2">by John Doe</div>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="tran">
            <div class="q-pa-sm">
              <div class="row justify-between q-gutter-sm">
                <div class="col-3">
                  <div class="row">
                    <q-select class="col-12" outlined v-model="model"
                              :options="options"
                              label="Выберите направление" />
                  </div>
                </div>
                <div class="col-8">
                  <div class="row">
                <q-card class="q-ma-sm col-12" v-for="index in 4" :key="index">
                  <q-video src="https://www.youtube.com/watch?v=msJfQsxJvVc&list=PLu_62Q68DvTrWAR_3-iOfIdbqKU912i3z&index=3" />

                  <q-card-section>
                    <div class="text-subtitle2">by John Doe</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </q-card-section>
                </q-card>
                  </div>
                </div>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="mails">
            <div class="q-pa-md">
                  <q-card-section class="q-pt-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </q-card-section>
            </div>
          </q-tab-panel>
        </q-tab-panels>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tab: 'articles',
      model: null,
      options: [
        'Front-end', 'Back-end', 'Mobile', 'Design', 'SMM'
      ]
    }
  }
}
</script>
