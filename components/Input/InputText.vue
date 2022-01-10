<template>
  <div>
    <b-form-input class="rounded-right"
                  v-model="text"
                  :state="valid"
                  :placeholder="placeholder"
                  :name="text"
                  :size="size"/>
    <b-form-invalid-feedback :state="valid">
      <p class="ml-1 mt-1 font-weight-bold error-email">{{error}}</p>
    </b-form-invalid-feedback>
  </div>
</template>

<script>
  export default {
    name: "InputText",
    props: {
      placeholder: String,
      isRequired: Boolean,
      size: Number,
      error:String
    },
    data() {
      return {
        text: "",
        valid: null,
      }
    },
    methods: {
      isValid: function () {
        if (this.text != null && this.text !== "") {
          this.valid = true
        } else {
          this.valid = false
        }
      }
    }
  }
</script>

<style scoped>

</style>
