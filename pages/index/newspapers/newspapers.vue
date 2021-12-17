<template>
  <div class="container-fluid">
    <SubHeaderButtons :buttons="buttons"/>
    <div class="container-fluid mt-4">
      <div class="row justify-content-center">
        <ImageCard :element-id="1" :title="'LBC 35'"
                   :description="'Bernanos'"
                   :icon-buttons="iconButtons"
                   :elements-right="elementsRight"/>
      </div>
    </div>
  </div>
</template>

<script>
  import SubHeaderButtons from "@/components/SubHeader/SubHeaderButtons";
  import ButtonCallModal from "@/components/Button/ButtonCallModal";
  import IconButtonModal from "~/components/Icon/IconButtonModal";
  import Create from "@/components/Modal/Newspaper/Create";
  import ImageCard from "@/components/Image/ImageCard";
  import IconLink from "@/components/Icon/IconLink";
  import TextInfo from "@/components/Text/TextInfo";

  export default {
    name: "theme",
    components: {ImageCard, SubHeaderButtons},
    data() {
      return {
        buttons: [],
        iconButtons: [],
        elementsRight: []
      }
    },
    mounted() {
      this.getSubButtons();
      this.getIconButtons();
      this.getElementsRight()
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
              url: '/journaux/:id/chemin-de-fer'
            }
          }, {
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
      },
      getElementsRight: function () {
        this.elementsRight.push({
          component: TextInfo,
          props: {
            id: 1,
            text: 'publié',
            hasValuesCompare: true,
            /*valuesCompare: [
              {
                'id': 1,
                'color': 'text-success'
              }, {
                'id': 2,
                'color': 'text-warning'
              }, {
                'id': 3,
                'color': 'text-danger'
              }
            ],*/
            color:'text-danger',
            rights: true,
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
