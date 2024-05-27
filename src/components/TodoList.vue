<template>
  <div class="container">
    <h3>Todo List (TPM-3)</h3>
    <div>
      <p><strong>Todo list:</strong></p>
      <ol>
        <li v-for="(item, index) in todoList" :key="index">
          <span v-if="editingIndex !== index">
            {{ item.name }}
            <button @click="editItem(index)">Edit</button>
            <button @click="deleteItem(index)">Delete</button>
          </span>
          <span v-else>
            <input type="text" v-model="editedItem.name" placeholder="Edit item name.."/>
            <button @click="saveItem(index)">Save</button>
            <button @click="cancelEdit">Cancel</button>
          </span>
        </li>
      </ol>
    </div>

    <form v-on:submit.prevent="addItem">
      <p>
        <input type="text" required placeholder="item name.." v-model="itemName"/>
        <button type="submit">Add item</button>
      </p>
    </form>
    <p>{{ isHebat }}</p>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      itemName: null,
      todoList: [],
      editingIndex: null,
      editedItem: {},
    };
  },
  methods: {
    addItem() {
      let item = { name: this.itemName };
      this.todoList.push(item);
      this.itemName = null;
    },
    deleteItem(index) {
      this.todoList.splice(index, 1);
    },
    editItem(index) {
      this.editingIndex = index;
      this.editedItem = { ...this.todoList[index] };
    },
    saveItem(index) {
      this.todoList[index] = this.editedItem;
      this.editingIndex = null;
      this.editedItem = {};
    },
    cancelEdit() {
      this.editingIndex = null;
      this.editedItem = {};
    },
  },
  computed: {
    isHebat() {
      return this.todoList.length >= 4 ? 'Hebat!' : '';
    },
  },
};
</script>

<style scoped>
.container {
  width: 60%;
  border: 1px solid black;
  margin: auto;
  text-align: left;
  padding-left: 20px;
}
</style>
