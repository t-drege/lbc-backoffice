<template>
  <div class="card card-size">
    <img class="card-img-top card-size-image" :src="(imageUrl) ? imageUrl :require('@/static/no-image.png')" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">{{description}}</p>
      <div class="d-flex justify-content-end p-2">
        <div v-for="iconButton in iconButtons">
          <component class="mr-3" :is="iconButton.component" v-bind="iconButton.props" :element-id="elementId"/>
        </div>
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
      imageUrl:String,
      iconButtons: Array
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
