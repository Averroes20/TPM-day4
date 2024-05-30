<template>
    <div>
      <h1>News API</h1>
      <NewsDetail />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NewsDetail from '@/components/NewsDetail.vue'
  
  export default {
    components: {
      NewsDetail
    }
  }
  </script>