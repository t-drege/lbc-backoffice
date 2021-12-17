<template>
  <div>
    <small :class="[colorFinal !== '' ? colorFinal :color, 'font-weight-bold']">
      {{text}}
    </small>
  </div>
</template>

<script>
  export default {
    name: "TextInfo",
    props: {
      id: String,
      text: String,
      color: String,
      hasValuesCompare: Boolean,
      valuesCompare: Array, // format [{'id': '1', color:'text-color'},{'id': '2', color:'text-color'}]
      rights: Boolean,
    },
    data() {
      return {
        colorFinal: ''
      }
    },
    mounted() {
      if (this.valuesCompare !== undefined) {
        let color = this.colorFinal
        let values = this.valuesCompare
        let id = this.id

        values.forEach(function (value) {
          if (value.id === id) {
            color = value.color
          }
        })
        this.colorFinal = color
      }
    }
  }
</script>

<style scoped>

</style>
