<template>
  <div id="app">
        <navBar/>
        <router-view/>
  </div>
</template>
<script>
// @ is an alias to /src
import navBar from '@/components/navBar.vue'
export default {
  name: 'App',
  components: {
    navBar
  }
}
</script>
