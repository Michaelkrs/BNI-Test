<script>
export default {
  name: "FormComponent",
  data() {
    return {
      formData: {
        firstName: null,
        lastName: null,
        age: null,
        gender: null
      },
      formErrors: {
        firstName: null,
        lastName: null,
        age: null,
        gender: null
      }
    }
  },
  props: ['type', 'user'],
  emits: ['submitFunction'],
  computed: {
    hasEmptyInputs() {
      return Object.values(this.formData).some(value => !value);
    }
  },
  methods: {
    submitHandler() {
      this.formErrors.firstName = this.formData.firstName ? null : "First Name is required.";
      this.formErrors.lastName = this.formData.lastName ? null : "Last Name is required.";
      this.formErrors.age = this.formData.age ? null : "Age is required.";
      this.formErrors.gender = this.formData.gender ? null : "Gender is required.";

      const hasErrors = Object.values(this.formErrors).some(error => error !== null);

      if (!hasErrors) {
        if (this.type === 'Add') {
          this.$emit('submitFunction', this.formData);
        } else {
          this.$emit('submitFunction', this.formData, this.$route.params.id);
        }
      }
    }
  },
  updated() {
    if (this.user) this.formData = this.user
  }
}
</script>

<template>
  <h1>{{ type }} User</h1>
  <div class="border rounded shadow-sm p-3 mt-3" style="width: 500px">
    <form action="" @submit.prevent="submitHandler">
      <div>
        <label htmlFor="firstName" class="form-label">
          First Name
        </label>
        <input type="text" id="firstName" name="firstName" class="form-control" v-model="formData.firstName" />
        <div v-if="formErrors.firstName" class="text-danger">{{ formErrors.firstName }}</div>
      </div>

      <div class="mt-2">
        <label htmlFor="lastName" class="form-label">
          Last Name
        </label>
        <input type="password" id="lastName" name="lastName" class="form-control" v-model="formData.lastName" />
        <div v-if="formErrors.lastName" class="text-danger">{{ formErrors.lastName }}</div>
      </div>

      <div class="mt-2">
        <label htmlFor="age" class="form-label">
          Age
        </label>
        <input type="number" id="age" name="age" class="form-control" v-model="formData.age" />
        <div v-if="formErrors.age" class="text-danger">{{ formErrors.age }}</div>
      </div>

      <div class="mt-2">
        <label htmlFor="gender" class="form-label">
          Gender
        </label>
        <select name="gender" id="gender" class="form-select" v-model="formData.gender">
          <option value="" selected>--SELECT--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <div v-if="formErrors.gender" class="text-danger">{{ formErrors.gender }}</div>
      </div>

      <button class="btn btn-primary mt-4" type="submit" :disabled="hasEmptyInputs">
        {{ type }} User
      </button>
    </form>
  </div>
</template>