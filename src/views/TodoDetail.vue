<template>
  <div class="container">
    <h3>Todo Detail</h3>
    <p>{{ todoItem.name }}</p>
    <router-link to="/">Back to list</router-link>
  </div>
</template>

<script>
export default {
  name: "TodoDetail",
  props: ['index'],
  computed: {
    todoItem() {
      return this.$store.getters.todoItem(this.index);
    }
  }
};
</script>

<style scoped>
.container {
  width: 60%;
  border: 1px solid black;
  margin: auto;
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
