<template>
  <div>
    <b-form-input :type="'number'"
                  min="1"
                  class="rounded-right"
                  v-model="text"
                  :state="valid"
                  :placeholder="placeholder"
                  :name="text"
                  :size="size"/>
    <b-form-invalid-feedback :state="valid">
      <p class="error-message-feedback ml-1 mt-1 font-weight-bold error-email">{{ error }}</p>
    </b-form-invalid-feedback>
  </div>
</template>

<script>
import CheckElementForm from "@/utils/CheckElementForm";

export default {
  name: "InputNumber",
  props: {
    placeholder: String,
    isRequired: Boolean,
    size: Number,
    error: String
  },
  data() {
    return {
      text: "",
      valid: null,
    }
  },
  methods: {
    isValid() {
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
  .error-message-feedback {
    font-size: medium !important;
  }
</style>
