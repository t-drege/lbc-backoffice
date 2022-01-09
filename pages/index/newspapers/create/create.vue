<template>
  <div class="container-fluid">
    <SubHeaderButtons :buttons="buttons"/>
    <div class="card p-4 mt-4 ju">
      <div class="row justify-content-center">
        <form class="w-75">
          <div>
            <div class="form-group">
              <InputText :is-required="true" :placeholder="'Nom'" :size="'lg'" ref="name"/>
            </div>
            <div class="form-group">
              <InputText :placeholder="'Prénom'" :size="'lg'" ref="lastname"/>
            </div>
            <div class="form-group">
              <InputText :placeholder="'Prénom'" :size="'lg'" ref="lastname"/>
            </div>
            <div class="form-group">
              <InputText :placeholder="'Prénom'" :size="'lg'" ref="lastname"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import InputText from "@/components/Input/InputText";
  import SubHeaderButtons from "@/components/SubHeader/SubHeaderButtons";
  export default {
    name: "create",
    comments: [SubHeaderButtons,InputText]
  }
</script>

<style scoped>

</style>

<router>
  {
  path: '/newspapers/create',
  alias: [
  'journaux/creer'
  ]
  }
</router>
