<script>

import Sidebar from '../components/Sidebar.vue';
import HeaderVue from '../components/Header.vue';
import FooterVue from '../components/Footer.vue';
export default {
  name: "LayoutView",
  components: { Sidebar, HeaderVue, FooterVue }
}
</script>

<template>
  <section class="d-flex flex-row">
    <div>
      <Sidebar />
    </div>
    <div class="d-flex flex-column flex-grow-1">
      <HeaderVue />
      <div class="flex-grow-1 mx-5 mb-5 mt-3">
        <RouterView />
      </div>
      <FooterVue />
    </div>
  </section>
</template>