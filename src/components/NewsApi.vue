<template>
  <div class="news-container">
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">{{ error.message }}</div>
    <div v-else class="content">
      <div v-for="article in data" :key="article.url" class="article-card">
        <img :src="article.urlToImage" :alt="article.title" class="article-image" />
        <div class="article-content">
          <h2>{{ article.title }}</h2>
          <p><strong>By:</strong> {{ article.author }}</p>
          <button @click="goToDetail(article.url)">Read more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "NewsApi",
  computed: {
    ...mapState('newsapi', ['data', 'loading', 'error']),
    isLoading() {
      return this.loading;
    },
  },
  methods: {
    ...mapActions('newsapi', ['fetchData']),
    goToDetail(url) {
      this.$router.push({ name: 'NewsDetail', params: { id: url } });
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
.news-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.article-card {
  width: 47%;
  height: 250px;
  margin-bottom: 20px;
  margin-right: 10px;
  border: 1px solid #ccc;
  padding: 10px;
	align-items: center;
  text-align: left;
  display: flex;
  flex-direction: row;
  cursor: pointer; 
}

.article-image {
  max-width: 100%;
  height: 200px;
  display: block;
  margin-bottom: 10px;
}

.article-content {
  flex: 1;
}
</style>
