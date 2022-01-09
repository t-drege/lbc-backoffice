<template>
  <div>
    <b-form-input :type="'number'" min="0" class="rounded-right"
                  v-model="text"
                  :state="valid"
                  :placeholder="placeholder"
                  :name="text"
                  :size="size"
                  :required="true"/>
    <b-form-invalid-feedback :state="valid">
      <p class="ml-1 mt-1 font-weight-bold error-email">Email non valide</p>
    </b-form-invalid-feedback>
  </div>
</template>

<script>
export default {
  name: "InputNumber",
  props: {
    placeholder: String,
    isRequired: Boolean,
    size: Number
  },
  data() {
    return {
      text: "",
      valid: null,
    }
  },
  methods: {
    isValid: function () {

    }
  }
}
</script>

<style scoped>

</style>
