<template>
  <div class="col-auto mb-3">
    <div class="card card-size">
      <img class="card-img-top card-size-image" :src="(imageUrl) ? imageUrl :require('@/static/no-image.png')"
           alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ description }}</p>
        <footer>
        <div class="d-flex p-2">
          <div v-for="iconButton in iconButtons">
            <component class="mr-3"
                       :is="iconButton.component"
                       v-bind="iconButton.props"
                       :modalId="iconButton.props.modalId+'-'+elementId"
                       :element-id="elementId"/>
          </div>
        </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageCard",
  props: {
    elementId: Number,
    title: String,
    description: String,
    imageUrl: String,
    iconButtons: Array,
    rights: Boolean
  }
}
</script>

<style scoped>

.card-size {
  width: 230px;
}

.card-size-image {
  height: 320px;
}

</style>
