<template>
  <b-form-select class="form-select"
                 :size="'lg'"
                 v-model="value">
    <b-select-option
      :value="model.id"
      v-bind:key="model.id"
      v-for="model in models">
      {{ model.value.toUpperCase() }}
    </b-select-option>
  </b-form-select>
</template>

<script>
export default {
  name: "SelectForm",
  props: {
    models: Array,
    value: Number,
    isRequired:Boolean
  },
  mounted() {
    console.log("sfdsqddfqsfds")
  }
}
</script>

<style scoped>

</style>
