<!-- StateDetail has the checkboxes of states -->

<template>

<div class="state-info">

  <span class="state-name">{{ state.name }}</span>

  <div>
    <input class="visit-state" type="checkbox" v-model="visited" v-on:change="visitedChanged">
  </div>

  <div>
    <!-- example: /map/Iowa -->
    <router-link v-bind:to=" {name: 'StateMap', params: {state: state.name} } ">
      <img class="map-icon" src="@/assets/map_icon.png">
    </router-link>
  </div>

</div>

</template>

<script>

export default {
  name: 'StateDetail',
  emits: ['updated-visited'],
  props: {
    state: Object // don't modify props
  },
  data() {
    return {
      // visited value from state: Object
      visited: this.state.visited // okay to modify data
    }
  },
  methods: {
    visitedChanged() {
      // this.visited is v-model's visited
      this.$emit('update-visited', this.state.name, this.visited)
    }
  }
}
</script>

<style scoped>

.state-info {
  padding: 1rem;
  height: 8rem;
  width: 10rem;
  border-radius: .3rem;
  border: 1px lightgray solid;
  background-color: rgb(247, 247, 247);
}

.visit-state {
  margin: 1rem;
  text-align: center;
}

.map-icon {
  width: 2rem;
  height: 2rem;
}

</style>