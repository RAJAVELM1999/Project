
// import Vue from "vue";
// import VueRouter from "vue-router";
// import HomeMain from "../../../components/HomeMain.vue";
// Vue.use(VueRouter);
// const routess = [
// {
//   path:"/homemain",
//   name:"HomeMain",
//   component: HomeMain,
// },

const { default: router } = require("../../../router");



// ];
// const router = new VueRouter({
// routess
// });


const mutations = {

  MUT_VAl(state, value) {
    state.todoList.push({ value: value })
  },
  NEW_MUT() {
    // alert("the action worked")
    router.push("HomeMain")

  },
  CRS_POST_MUT(state, value) {

    state.course.push(value)
    // state.desserts.push({value:value})
  },
  CRS_GET_MUT(state, value) {

    // state.desserts.push({value:val})
    // state.desserts.push({value:levels})
    state.course = value

  },

  LEV_POST_MUT(state, value) {

    state.levelget.push(value)
    // state.desserts.push({value:value})
  },

  LEV_GET_MUT(state, val) {

    // state.desserts.push({value:val})
    // state.desserts.push({value:levels})
    state.levelget = val

  },
  // subject part start here


  SUB_POST_MUT(state, value) {

    state.subjectsget.push(value)
    // state.desserts.push({value:value})
  },
  SUB_GET_MUT(state, value) {

    // state.desserts.push({value:val})
    // state.desserts.push({value:levels})
    state.subjectsget = value

  },


  // skills part start here

  SKILLS_POST_MUT(state, value) {

    state.skillsget.push(value)

  },
  SKILLS_GET_MUT(state, value) {

    state.skillsget = value

  },




  //   VALIDATE(state) {
  //     if (state.name == state.nameVal && state.password == state.passVal) {
  //       // window.location.href = this.sucessLog;
  //       // window.location.href = "@/components/HomeMain.vue";
  //       // routes.push("HomeMain")

  //         // this.$routes['HomeMain'].nextStep()

  //       console.log("welcome")
  //       // alert("Login sucessed welcome")
  //     } 
  //     else {
  //       alert("Check The Username And Password "+ state.name);

  //     }

  //     // this.$refs.form.validate()
  //   },
  //   // CONFIRM_PASS(state){
  //   //   return () => (state.password1 === state.confirmpass) || 'Password must match'
  //   // }
};

module.exports = { mutations };
