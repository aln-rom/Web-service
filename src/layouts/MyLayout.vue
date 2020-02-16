<template>
  <q-layout view="hHh lpR fff" class="">
    <q-header bordered class="bg-dark text-white" >
      <q-toolbar class="row" >
        <q-btn-group class="spin col-2 flex justify-between" unelevated>
          <q-btn no-caps flat to="/" class="spin" label="SpinIT" />
        </q-btn-group>
        <q-tabs class="text flex justify-between">
          <q-btn-group class="spin col-5 flex justify-between" unelevated>
            <q-route-tab to="/" label="ГЛАВНАЯ" size="md" />
            <q-route-tab  to="/courses"  label="КУРСЫ" size="md"/>
            <q-route-tab  to="/blog"  label="БЛОГ" size="md"/>
            <q-route-tab  to="/about"  label="О НАС" size="md"/>
            <q-route-tab  to="/about"  label="КОНТАКТЫ" size="md"/>
          </q-btn-group>
          <q-btn-group class=" col-7 flex justify-end q-px-md" unelevated>
            <q-route-tab to="/" class=" flex justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.375 14.5H15.3875L15.0375 14.1625C16.2625 12.7375 17 10.8875 17 8.875C17 4.3875 13.3625 0.75 8.875 0.75C4.3875 0.75 0.75 4.3875 0.75 8.875C0.75 13.3625 4.3875 17 8.875 17C10.8875 17 12.7375 16.2625 14.1625 15.0375L14.5 15.3875V16.375L20.75 22.6125L22.6125 20.75L16.375 14.5ZM8.875 14.5C5.7625 14.5 3.25 11.9875 3.25 8.875C3.25 5.7625 5.7625 3.25 8.875 3.25C11.9875 3.25 14.5 5.7625 14.5 8.875C14.5 11.9875 11.9875 14.5 8.875 14.5Z" fill="white"/>
              </svg>
            </q-route-tab>
            <q-route-tab to="/profile" class="col-3 flex justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 10C12.7625 10 15 7.7625 15 5C15 2.2375 12.7625 0 10 0C7.2375 0 5 2.2375 5 5C5 7.7625 7.2375 10 10 10ZM10 12.5C6.6625 12.5 0 14.175 0 17.5V20H20V17.5C20 14.175 13.3375 12.5 10 12.5Z" fill="white"/>
              </svg>
            </q-route-tab>
          </q-btn-group>
        </q-tabs>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class=" foot bg-grey text-white">
      <q-toolbar>
        <q-toolbar-title>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

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
  router-link {
    text-decoration: none;
  }
  .spin, .text {
    font-style: normal;
    font-weight: 500;
    display: flex;
    align-items: center;
    letter-spacing: 0.0125em;
  }
  .spin {
    font-size: 28px;
  }
.foot {
  height: 181px;
}
</style>
