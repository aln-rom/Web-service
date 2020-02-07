<template>
  <q-page>
    <div class="row justify-around">
      <div class="col-3">
        <div class="row">
          <div class="filter-block col-12">
          <div class="price-choice q-pa-sm">
            <div class="text-h6 col-12">Выберите цену:</div>
            <div class="range-wrapper q-my-md q-mx-sm" >
              <q-range
                  v-model="priceRange"
                  :min="0"
                  :max="10000"
                  label-always
                  label
                  drag-range
                  color="yellow"
              />
            </div>
          </div>
        </div>
            <div class="q-gutter">
              <div class="q-mx-sm text-h6 col-12">Способ обучения:</div>
              <q-radio color="yellow" v-model="shape" val="line" label="Очное" />
              <q-radio color="yellow" v-model="shape" val="rectangle" label="Дистанционное" />
            </div>
          </div>
      </div>
      <div class="col-7">
        <div class="row">
          <div class="col-12" v-for="(course, index) in courses" :key="index">
            <CourseName :course="course" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import CourseName from '../components/courseName.vue'
export default {
  name: 'PageIndex',
  components: {
    CourseName
  },
  data () {
    return {
      courses: [
        { name: 'Front-end' },
        { name: 'Back-end' },
        { name: 'Design' },
        { name: 'SMM' },
        { name: 'Mobile' }
      ],
      shape: 'line'
    }
  }
}
</script>
