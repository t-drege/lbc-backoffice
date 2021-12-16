<template>
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text">@</span>
    </div>
    <b-form-input class="rounded-right"
                  v-model="email"
                  :state="valid"
                  :placeholder="placeholder"
                  name="email"
                  :size="size"/>
    <b-form-invalid-feedback :state="valid">
      <p class="ml-1 mt-1 font-weight-bold error-email">Email non valide</p>
    </b-form-invalid-feedback>
  </div>
</template>

<script>
  export default {
    name: "InputMail",
    props: {
      placeholder: String,
      isRequired: Boolean,
      size: Number
    },
    data() {
      return {
        email: "",
        valid: null,
        placeholder: "Email"
      }
    },
    methods: {
      isValid: function () {
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
            this.valid = true
          } else {
            this.valid = false
          }
      }
    }
  }
</script>

<style scoped>
  .error-email {
    font-size: 14px;
  }
</style>
