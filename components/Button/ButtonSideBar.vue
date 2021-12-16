<template>
  <li class="nav-item p-2" @click="sendIndexClick(index, name)" :class="{active_background: index === currentIndex}">
    <NuxtLink class="nav-link" :to="{path: url}">
      <div class="container">
        <div class="row">
          <div class="col-1 px-0">
            <font-awesome-icon :icon="icon"/>
          </div>
          <div class="col-1">{{ name }}</div>
        </div>
      </div>
    </NuxtLink>
  </li>
</template>

<script>
export default {
  name: "ButtonSideBar",
  props: {
    name: String,
    url: String,
    index: Number,
    currentIndex: Number,
    icon: String
  },
  methods: {
    sendIndexClick(index, name) {
      this.$emit("receivedIndex", index)
      this.$root.$emit("receivedName", name)
    }
  }
}
</script>

<style scoped>
.nav-link {
  color: white;
  text-transform: uppercase;
  font-family: 'Quicksand', sans-serif;
}

.nav-link:hover {
  color: white;
}

.nav-link:focus {
  color: white;
}

.active_background {
  background-color: #1C2E4A;
}
</style>
