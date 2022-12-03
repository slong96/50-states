<template>
  <div id="block-header">
    <h1 id="title">Have you visited every state?</h1>
  </div>
</template>

<script>
  
  export default {
    name: 'PageHeader',

  }
</script>

<style scoped>

#block-header {
  padding: 70px;
  margin-bottom: 2px;
  border-radius: 5px;
  background-color: rgb(255, 145, 167);
  background-image: url('~@/assets/map_header.jpg');
  background-position: center;
  background-size: cover;
}

#title {
  font-weight: 500;
  color: white;
  font-style: italic;
  text-shadow: 2px 2px black;
}
</style>