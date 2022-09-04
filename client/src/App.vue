<template>
  <HomeView />
</template>

<script>
import axios from "axios";
import HomeView from "@/views/HomeView.vue";

export default {
  name: "App",
  components: {
    HomeView,
  },
  data() {
    return {
      todos: [],
      description: "",
      name: "",
    };
  },
  async mounted() {
    const response = await axios.get("/api/meals");
    this.todos = response.data;
  },
  methods: {
    async addTodo(e) {
      e.preventDefault();
      const response = await axios.post("api/meals", {
        name: this.name,
        description: this.description,
      });
      this.todos.push(response.data);
      this.name = "";
      this.description = "";
    },
    async removeTodo(item, i) {
      await axios.delete("api/meals" + item._id);
      this.todos.splice(i, 1);
    },
  },
};
</script>
