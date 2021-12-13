<template>
        <div id="app">
          <!-- <div>
            <ul>
              <li v-for="(todoValue,index) in todoList" :key="index">
                   {{todoValue.value}}
              </li>
              </ul>
              <v-text-field v-model="myInp"></v-text-field>
              <v-btn @click="addMe">Call Mutation Add To St shw in Gettes</v-btn>
          </div> -->
         
            <h2 >Welcome To The Login Page</h2>
     
      <v-app id="inspire">
        <v-form class="form1" ref="form" v-model="valid" lazy-validation>
          <v-text-field
          prepend-icon="mdi-account"
            v-model="name"
            :rules="nameRules"
            label="Username"
            required
            
          ></v-text-field>

          <v-text-field
            v-model="password"
             prepend-icon="mdi-lock"
            label="Password"
            :rules="passrules"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : 'password'"
             @click:append="show2 = !show2"
            
            required
          ></v-text-field>

          <!-- <v-checkbox v-model="checkbox" label="Remember Me!"></v-checkbox> -->

          <v-btn
            :disabled="!valid"
            
            color="success"
            class="mr-4"
            @click="newFun"
          >
            Login </v-btn
          ><br /><br />
          <router-link to="/Register">
          <h4>Not Have a Account yet? Create One!</h4>
          </router-link> 
         
          
         
        </v-form>
      </v-app>
    </div>
</template>

<script>
import { mapState, mapActions,mapMutations,mapGetters } from "vuex";
// mapGetters
// mapMutations
// mapState
// mapActions
export default {
    name: "Login",
  
 computed: {
    ...mapState({
      // name: (state) => state.auth.name,
      nameRules: (state) => state.auth.nameRules,
      // password: (state) => state.auth.password,
      passrules: (state) => state.auth.passrules,
               }),

    ...mapGetters(['todoList']),
   

  },
  data() {return{
  valid: false,  
  checkbox: true,
  show2:false,
  name:"",
  password:"",
  myInp:"",
  }
 

  },

 
  methods:{
    // VALIDATE() {
    // if (this.name == "rajavel" && this.password == "1999") {
    //   // window.location.href = this.sucessLog;
    //   // window.location.href = '/HomeMain'
    //   // window.location = "./HomeMain.vue";
     
    //  this.$router.push("HomeMain");
      
    //   // console.log("welcome")
    //   // alert("Login sucessed welcome")
    // } 
    // else {
    //   alert("Check The Username And Password ");
      
    // }
    // },
    // addMe(){
    //   this.$store.commit('MUT_VAl', this.myInp)

    // },
    addMe(){
      this.$store.dispatch('myAction', this.myInp)

    },
    newFun(){
      this.$store.dispatch('myActionPass',
      {objOne:this.name,objTwo:this.password}
      )
      // this.$store.dispatch('myActionPass',this.password)
    },
    
   
      
         Register() {
             
        this.$router.push("Register");
      } ,
      // VALIDATE(){
      //   this.$router.push("HomeMain");
      // },
     
    
      ...mapMutations([
        '',
        ]),
      ...mapActions(['firstAction']),

  }
}
</script>


<style>
.lab{
   color: rgb(68, 99, 34);
   text-emphasis: bold;
   text-shadow: black;
  
}
.form1 {
  background: lightblue(-90deg, #849f6a, #16c0b0);

  /*   border-style: solid; */
  margin: 50px 150px 75px 150px;

  border-radius: 25px;

  padding: 20px;
  border: 5px solid #2c5c2e;
}
h2{
    color: cadetblue;
    
}
h4{
  text-decoration: none;
}
li{
list-style: none ;
}

</style>