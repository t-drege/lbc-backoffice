<template>
  <table class="table">
    <thead class="background-header-table text-white">
    <tr>
      <th scope="col" v-if="draggable"></th>
      <th scope="col" v-for="header in headers">{{ header }}</th>
      <th scope="col" v-if="hasActions">actions</th>
    </tr>
    </thead>
    <draggable v-model="datas"
               tag="tbody"
               v-bind="dragOptions"
               :handle="(draggable) ? '.drag' : 'disabled'"
               @start="drag=true"
               @end="drag=false"
               class="bg-white">

      <tr v-for="(data, index) in datas" v-bind:key="index">
        <td>
          <div class="col-sm-1 drag ml-3" v-if="draggable"><a
            href="javascript:">
            <font-awesome-icon icon="bars" class="mx-auto"/>
          </a>
          </div>
        </td>
        <td v-for="object in data">{{ object }}</td>
        <td>
          <div class="d-flex d-inline-flex mr-3" v-for="iconButton in iconButtons">
            <component :is="iconButton.component" v-bind="iconButton.props"/>
          </div>
        </td>
      </tr>
    </draggable>
  </table>
</template>

<script>
  import draggable from 'vuedraggable'

  export default {
    name: "Table",
    components: {
      draggable
    },
    props: {
      headers: Array,
      datas: Array,
      draggable: Boolean,
      hasActions: Boolean,
      iconButtons: Array,
      exclude: Array
    },
    methods: {
      dragOptions() {
        return {
          animation: 200,
        };
      }
    }

  }
</script>

<style scoped>
  .background-header-table{
    background-color: #7f828b;
  }
</style>
