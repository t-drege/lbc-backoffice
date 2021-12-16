<template>
  <div>
    <InputMail :is-required="true" :placeholder="'email'" :size="'lg'" ref="email"/>
    <InputText :is-required="true" :placeholder="'Nom'" :size="'lg'" ref="name"/>
    <InputText :placeholder="'Prénom'" :size="'lg'" ref="lastname"/>
  </div>
</template>

<script>
  import InputMail from "../../Input/InputMail";
  import CheckElementForm from "../../../utils/CheckElementForm";
  import InputText from "../../Input/InputText";
  import ImageCard from "../../Image/ImageCard";

  export default {
    name: "Create",
    components: {ImageCard, InputText, InputMail},
    props: {
      titleValidation: String
    },
    methods: {
      validation: function () {
        CheckElementForm.execute(this.$refs)
      }
    }
  }
</script>

<style scoped>
  .btn-secondary {
    color: #fff;
    background-color: rgb(213, 213, 213);
    border-color: rgb(213, 213, 213);
  }
</style>
