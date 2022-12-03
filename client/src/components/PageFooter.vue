<template>

  <div>
    
    <div id="navigation-link">

      <span class="nav-link">
        <router-link v-bind:to="{ name: 'StateList'}">Home</router-link>
      </span>

      <span class="nav-link">
        <router-link v-bind:to="{ name: 'AboutSite'}">About this site</router-link>
      </span>

    </div>

    <p>Header image by <a href="https://unsplash.com/photos/o0l-M8W_7wA">Chris Lawton on Unsplash</a></p>

    <p><a target="_blank" href="https://icons8.com/icon/42925/map">Map</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>

  </div>

</template>

<script>
export default {
  name: 'PageFooter'
}
</script>

<style scoped>

.nav-link {
  margin: 1rem;
}

</style>