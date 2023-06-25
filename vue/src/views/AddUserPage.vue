<script>

import { mapActions } from 'pinia';
import FormVue from '../components/Form.vue';
import { useUserStore } from '../stores/store';
export default {
  name: "AddUserPage",
  components: { FormVue },
  methods: {
    ...mapActions(useUserStore, ['addUser'])
  }
}
</script>

<template>
  <FormVue :type="'Add'" @submitFunction="addUser" />
</template>