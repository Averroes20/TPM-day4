<template>
    <div>
      <h1>News API</h1>
      <NewsApi />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NewsApi from '@/components/NewsApi.vue'
  
  export default {
    components: {
      NewsApi
    }
  }
  </script>