<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '../stores/store';

import { RouterLink } from 'vue-router';
export default {
  name: "HomePage",
  computed: {
    ...mapState(useUserStore, ["users", "isLoading"])
  },
  methods: {
    ...mapActions(useUserStore, ["getUsers", "deleteUser"])
  },
  created() {
    this.getUsers();
  },
  components: { RouterLink }
}
</script>

<template>
  <div className="d-flex flex-row flex-wrap gap-4 justify-content-center">

    <h3 v-if="isLoading">Loading...</h3>

    <div v-else className="card mb-3 shadow-sm" style="width: 540px" v-for="user in users" :key="user.id">
      <div className="row g-0">
        <div className="col-md-4">
          <img :src="user.image" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {{ user.firstName }} {{ user.lastName }}
            </h5>
            <div className="card-text">Age: {{ user.age }}</div>
            <div className="card-text">Gender: {{ user.gender }}</div>
          </div>
          <div className="card-body">
            <RouterLink className="btn btn-secondary" :to="`/edit/${user.id}`">
              Edit
            </RouterLink>
            <button className="btn btn-danger ms-2" @click="deleteUser(user.id)">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
