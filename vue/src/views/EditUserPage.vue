<script>

import { mapActions, mapState } from 'pinia';
import FormVue from '../components/Form.vue';
import { useUserStore } from '../stores/store';
export default {
  name: "EditUserPage",
  components: { FormVue },
  methods: {
    ...mapActions(useUserStore, ['getUserDetail', 'editUser'])
  },
  computed: {
    ...mapState(useUserStore, ['user'])
  },
  created() {
    this.getUserDetail(this.$route.params.id)
  }
}
</script>

<template>
  <FormVue :type="'Edit'" @submitFunction="editUser" :user="user" />
</template>