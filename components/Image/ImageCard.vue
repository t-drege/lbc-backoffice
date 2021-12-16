<template>
  <div class="card card-size">
    <img class="card-img-top card-size-image" :src="(imageUrl) ? imageUrl :require('@/static/no-image.png')" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">{{description}}</p>
      <div class="d-flex justify-content-end p-2">
        <font-awesome-icon :icon="'train'"/>
        <font-awesome-icon :icon="'trash'" class="ml-3"/>
        <font-awesome-icon :icon="'upload'" class="ml-3"/>
        <font-awesome-icon :icon="'pen'" class="ml-3"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ImageCard",
    props: {
      title: String,
      description: String,
      imageUrl:String
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
