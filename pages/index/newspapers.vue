<template>
  <div class="container-fluid">
    <SubHeaderButtons :buttons="buttons"/>
    <div class="container-fluid mt-4">
      <div class="row justify-content-start">
        <div class="col-auto mb-3">
          <ImageCard :title="'LBC 35'" :description="'Bernanos'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SubHeaderButtons from "@/components/SubHeader/SubHeaderButtons";
  import ButtonCallModal from "@/components/Button/ButtonCallModal";
  import Create from "@/components/Modal/Newspaper/Create";
  import ImageCard from "../../components/Image/ImageCard";

  export default {
    name: "theme",
    components: {ImageCard, SubHeaderButtons},
    data() {
      return {
        buttons: []
      }
    },
    mounted() {
      this.buttons.push(
        {
          component: ButtonCallModal,
          props: {
            title: "Ajouter Journal",
            modalTitle: "Ajouter un journal",
            modalTarget: Create,
            modalCancelButton: "Annuler",
            modalValidationButton: "Ajouter",
          }
        })
    }
  }
</script>

<style scoped>

</style>

<router>
  {
  path: '/newspapers',
  alias: [
  '/journaux'
  ]
  }
</router>
