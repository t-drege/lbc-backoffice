<template>
  <div class="container-fluid">
    <SubHeaderButtons :buttons="buttons"/>
    <div class="container-fluid mt-4">
      <div class="row justify-content-start">
        <div class="col-auto mb-3">
          <ImageCard :element-id="2" :title="'LBC 35'" :description="'Bernanos'" :icon-buttons="iconButtons"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeaderButtons from "@/components/SubHeader/SubHeaderButtons";
import ButtonCallModal from "@/components/Button/ButtonCallModal";
import IconButtonModal from "~/components/Icon/IconButtonModal";
import Create from "@/components/Modal/Newspaper/Create";
import ImageCard from "../../components/Image/ImageCard";

export default {
  name: "theme",
  components: {ImageCard, SubHeaderButtons},
  data() {
    return {
      buttons: [],
      iconButtons: []
    }
  },
  mounted() {
    this.getSubButtons();
    this.getIconButtons();
  },
  methods: {
    getSubButtons: function () {
      this.buttons.push(
        {
          component: ButtonCallModal,
          props: {
            modalId: 'modal-create-newspaper',
            title: "Ajouter Journal",
            modalTitle: "Ajouter un journal",
            modalTarget: Create,
            modalCancelButton: "Annuler",
            modalValidationButton: "Ajouter",
          }
        })
    },
    getIconButtons: function () {
      this.iconButtons.push({
          component: IconButtonModal,
          props: {
            modalId: 'modal-delete-newspaper',
            icon: 'pen',
            color: 'text-secondary'
          }
        },
        {
          component: IconButtonModal,
          props: {
            modalId: 'modal-edit-newspaper',
            icon: 'trash',
            color: 'text-danger'
          }
        })
    }
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
