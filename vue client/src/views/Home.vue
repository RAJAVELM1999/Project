<template>
  <div class="home">
    <Login/>
    <!-- <HelloWorld /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Login from "@/components/Login.vue";
// import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Login,
  },
};
</script>
