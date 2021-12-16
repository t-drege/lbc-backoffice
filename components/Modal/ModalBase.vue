<template>
  <div>
    <b-modal
      :id="id"
      :size="'lg'"
      :centered="true"
      :button-size="'lg'"
      :hide-footer="true"
      :hide-header-close="false"
      :title="headerTitle">
      <b-form @submit.prevent="validation">
        <component :is="component" ref="content"/>
        <footer class="modal-footer mt-3">
          <b-button size="lg"
                    :variant="(colorCancel != null) ? colorCancel : 'secondary'"
                    @click="$bvModal.hide(id)">
            {{ titleCancel }}
          </b-button>
          <b-button type="submit"
                    size="lg"
                    :variant="(colorValidation != null) ? colorValidation: 'primary'">
            {{titleValidation}}
          </b-button>
        </footer>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
  export default {
    name: "ModalBase",
    props: {
      id: String,
      elementId:Number,
      headerTitle: String,
      component: Object,
      titleValidation: String,
      titleCancel: String,
      colorValidation: String,
      colorCancel: String,
    },
    methods: {
      validation: function () {
        // validation mehthos must be insert each content from modal child
        this.$refs.content.validation();
      }
    }
  }
</script>

<style scoped>

</style>
