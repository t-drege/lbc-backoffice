<template>
  <div class="col-auto mb-3">
    <div class="card card-size">
      <img class="card-img-top card-size-image" :src="(imageUrl) ? imageUrl :require('@/static/no-image.png')"
           alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ description }}</p>
        <div class="d-flex justify-content-end text-secondary">
          <small>{{date}}</small>
        </div>
        <div class="d-flex justify-content-end text-dark mb-2 mt-1">
          <small>{{author}}</small>
        </div>
        <div class="container-fluid card-footer p-0 bg-white">
          <div class="row">
            <div class="d-flex col-sm-7 ml-1 mt-2">
              <div v-for="iconButton in iconButtons">
                <component class="mr-3"
                           :is="iconButton.component"
                           v-bind="iconButton.props"
                           :modalId="iconButton.props.modalId+'-'+elementId"
                           :element-id="elementId"
                           :parameters="{'id': elementId}"/>
              </div>
            </div>
            <div class="d-flex ml-3 mt-2">
              <div v-for="element in elementsRight">
                <component class="mr-3"
                           v-bind="element.props"
                           :is="element.component"
                           :id="newspaperStatusId"
                           :text="newspaperStatus"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TextInfo from "../Text/TextInfo";

  export default {
    name: "ImageCard",
    components: {TextInfo},
    props: {
      elementId: Number,
      title: String,
      description: String,
      date: String,
      imageUrl: String,
      iconButtons: Array,
      elementsRight: Array,
      rights: Boolean,
      newspaperStatus: String,
      newspaperStatusId: Number,
      author:String
    }
  }
</script>

<style scoped>

  .card-size {
    width: 280px;
  }

  .card-size-image {
    height: 380px;
  }

</style>
