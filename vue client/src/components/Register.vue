<template>
   <div id="app">
   <h2>Create A New Account</h2>
   <v-app id="inspire">
   <v-form class="form1" ref="form" v-model="valid" lazy-validation >
        <v-row
         >
             <v-col
            cols="12"
            sm="6"
          >
          <v-text-field
          prepend-icon="mdi-account"
            v-model="firstname"
            :rules="fRules"
            label="Firstname"
            clearable
             outlined
                        
          >
          </v-text-field>
            </v-col>
             <v-col
            cols="12"
            sm="6"
          >
           <v-text-field
           
            v-model="lastname"
            :rules="lRules"
            label="Lastname"
            clearable
             outlined
          >
          </v-text-field>
           </v-col>
             </v-row>
        <v-text-field
        prepend-icon="mdi-account"
            v-model="username"
            :rules="unRules"
            label="Username"
           clearable
          >
          </v-text-field>
             
           <v-text-field
           prepend-icon="mdi-email"
            v-model="email"
            :rules="eRules"
            label="Email"
            clearable
            
          >
          </v-text-field>
           <v-text-field
           prepend-icon="mdi-phone"
            v-model="phno"
            :rules="phnor"
            label="Contact Number"
            clearable
         
          >
          </v-text-field>
           <v-text-field
            v-model="password1"
             prepend-icon="mdi-lock"            
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="pRules"
              :type="show1 ? 'text' : 'password'"
              counter=""
              clearable
             @click:append="show1 = !show1"
            label="Password"
            
            required
          >
          </v-text-field>
           <v-text-field
            v-model="confirmpass"
             prepend-icon="mdi-lock"
             :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[cpRules, CONFIRM_PASS] "
            :type="show2 ? 'text' : 'password'"
             @click:append="show2 = !show2"
             counter=""
             clearable
            label="Confirm Password"
           
            required
          >       
          </v-text-field>
           <v-file-input
          :rules="rules"
          accept="image/png, image/jpeg, image/bmp"
          
          prepend-icon="mdi-camera"
         label="Upload A Photo"
           >
         </v-file-input>
          <v-file-input
    
    placeholder="Upload your documents"
    label="Biodata / Proof's"
    multiple
    prepend-icon="mdi-paperclip"
  >
    <template v-slot:selection="{ text }">
      <v-chip
        small
        label
        color="primary"
      >
        {{ text }}
      </v-chip>
    </template>
  </v-file-input>
          <v-btn 
          :disabled="!valid" 
          color="info"
          class="mr-4"
          @click="dummy">Create A Account</v-btn>
           <router-link to="/">
          <v-btn>Login</v-btn>
          </router-link> 
   </v-form>
   </v-app>

   </div> 
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    name:'Register',
    computed:{
      ...mapState({
        username: (state) => state.auth.username,
      unRules: (state) => state.auth.unRules,
      firstname:(state)=>state.auth.firstname,
      fRules: (state) => state.auth.fRules,
      lastname:(state)=>state.auth.lastname,
      lRules: (state) => state.auth.lRules,
      email:(state)=>state.auth.email,
      eRules: (state) => state.auth.eRules,
      // password1:(state)=>state.auth.password1,
      pRules: (state) => state.auth.pRules,
      // confirmpass:(state)=>state.auth.confirmpass,
      cpRules: (state) => state.auth.cpRules,
      rules:(state)=> state.auth.rules,
      phno:(state)=> state.auth.phno,
      phnor:(state)=> state.auth.phnor,
      
      }),
      CONFIRM_PASS(){
    return () => (this.password1 === this.confirmpass) || 'Password must be match'
      }
      
    },
    data:()=>({
         valid:true,
        //  file:[],
         show1: false,   
         show2:false,     
         password1:"",
         confirmpass:"",  
         username:"",
        //  email:"",
              }),
          
        methods:{
        dummy(){
          if(this.username =="" || this.password1 =="")
          
          {
            alert(" Please Check Form!! Some Of The  Fields Are Not Filled Yet!!!");
            
          } 
          else{
            alert("Account Created Sucessfullly  ");
          }
            
        },
         ...mapMutations([
        "CONFIRM_PASS",
        ])

    },
 
}
</script>

<style>


</style>