<template>
  <div>
    <h2>States you have visited:</h2>
    <p class="visited-container" v-for="visit in visited" v-bind:key="visited.name">{{visit.name}}</p>
  </div>

</template>

<script>

export default {
  name: 'StatesVisited',

  data() {
    return {
      visited: []
    }
  },

  mounted() {
    this.fetchVisitedStates()
  },

  methods: {
    fetchVisitedStates() {
      this.$stateService.getVisitedStates().then( visited => {
        this.visited = visited
      })
    }
  }
}
</script>

<style scoped>
.visited-container {
  margin: 1rem;
  font-size: 18px;
}
</style>