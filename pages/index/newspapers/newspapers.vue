<template>
  <div class="container-fluid">
    <SubHeaderButtons :buttons="buttons"/>
    <div class="container-fluid mt-4">
      <div class="row justify-content-center">
          <ImageCard :element-id="1" :title="'LBC 35'" :description="'Bernanos'" :icon-buttons="iconButtons"/>
          <ImageCard :element-id="2" :title="'LBC 35'" :description="'Bernanos'" :icon-buttons="iconButtons"/>
          <ImageCard :element-id="3" :title="'LBC 35'" :description="'Bernanos'" :icon-buttons="iconButtons"/>
          <ImageCard :element-id="4" :title="'LBC 35'" :description="'Bernanos'" :icon-buttons="iconButtons"/>
          <ImageCard :element-id="5" :title="'LBC 35'" :description="'Bernanos'" :icon-buttons="iconButtons"/>
          <ImageCard :element-id="6" :title="'LBC 35'" :description="'Bernanos'" :icon-buttons="iconButtons"/>
          <ImageCard :element-id="9" :title="'LBC 35'" :description="'Bernanos'" :icon-buttons="iconButtons"/>
          <ImageCard :element-id="10" :title="'LBC 35'" :description="'Bernanos'" :icon-buttons="iconButtons"/>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeaderButtons from "@/components/SubHeader/SubHeaderButtons";
import ButtonCallModal from "@/components/Button/ButtonCallModal";
import IconButtonModal from "~/components/Icon/IconButtonModal";
import Create from "@/components/Modal/Newspaper/Create";
import ImageCard from "../../../components/Image/ImageCard";
import IconLink from "../../../components/Icon/IconLink";

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
          component: IconLink,
          props: {
            icon: 'train',
            color: 'text-secondary',
            rights: true,
            url:'/newspapers/:id/railways'
          }
        },{
          component: IconButtonModal,
          props: {
            modalId: 'modal-delete-newspaper',
            icon: 'pen',
            color: 'text-secondary',
            rights: true
          }
        },
        {
          component: IconButtonModal,
          props: {
            modalId: 'modal-edit-newspaper',
            icon: 'trash',
            color: 'text-danger',
            rights: true
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
