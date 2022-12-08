<template>
<div>
  <h1>Page not found</h1>
  
  <div id="go-home-link">
  <!-- Navigation link with route name -->
  Would you like to <router-link v-bind:to="{ name: 'StateList' }">go to the home page?</router-link>
  <!-- Or we can use the path directly -->
  <!-- Would you like to <router-link to="/">go to the home page?</router-link> -->
  </div>

</div>
</template>
  
  <script>
  export default {
  name: 'NotFound',
  }
  </script>

<style scoped>
#go-home-link {
  margin: 3em;
  font-weight: bold;
}
</style>