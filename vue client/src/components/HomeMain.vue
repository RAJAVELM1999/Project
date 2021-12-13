/* eslint-disable */
<template>

<div id="head">
   
 
  <v-app-bar app >
    
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/HomeMain">HomeMai</router-link> |
      <router-link to="/Login">Login</router-link> | 
      <router-link to="/Register">Register</router-link> |
      <router-link to="/Skills">Skills</router-link>  |
      <router-link to="/Subject">Subject</router-link> |
       <router-link to="/Sample">Sample</router-link> 
    </div> -->
    
  
    
    <!-- <v-app-bar
      absolute
      color="#6A76AB"
      dark
      
      prominent
      
      scroll-target=""
    > -->
      <!-- <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template> -->

      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <!-- <v-app-bar-title>Title</v-app-bar-title> -->

      <v-spacer>
        
      </v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->

      <!-- <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn> -->

      <!-- <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->

      <!-- <template v-slot:extension>
        <v-tabs 
        v-model="tabs"
          centered
        background-color="indigo"
        
        dark>
          <v-tab>SUBJECTS</v-tab>
          <v-tab>STANDARDS</v-tab>
          
        </v-tabs>
      </template> -->
    <!-- </v-app-bar> -->
    <h3>

    
    <router-link to=""  >App</router-link> &nbsp; &nbsp;&nbsp;

    <router-link to="/">Logout</router-link>
  
    </h3>
  </v-app-bar> 
<v-app absolute>
  

 
 <!-- expand-on-hover -->

      <div >
    <v-card>
      <v-navigation-drawer app
   expand-on-hover permanent > 

      
        <v-avatar color="info">
      <v-icon dark>
        mdi-home
      </v-icon>
    </v-avatar> 
      
      <div>
    <v-list
          nav
          dense
        > <router-link to="/Level" >
         <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-shovel</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              
             LEVEL
              
              </v-list-item-title>
          </v-list-item>
        </router-link> 
         
          <router-link to="/Subject" >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-book-open-page-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>SUBJECTS</v-list-item-title>
          </v-list-item>
          
          
          </router-link>
          <router-link to="/Skills" >
           <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-desktop-mac</v-icon>
            </v-list-item-icon>
            <v-list-item-title>SKILLS </v-list-item-title>
          </v-list-item>
          
          </router-link>
          
         
         
         
          
        </v-list></div>
      
    
        
      </v-navigation-drawer>
    </v-card>
  </div>
  
         
         
    
  
  

        <v-divider></v-divider>

        


  
  <!-- Sizes your content based upon application components -->
  <v-main>
      <!-- <div id="sample">
  
  <router-view class="router-view"></router-view>
  <div class="info">
    {{routerFrom}}<br/>
    {{routerTo}}
  </div>
</div> -->
     <br>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <h2>Welcome Note!!! </h2>
      <h3>Hi There, </h3> 
      <!-- If using vue-router -->
      <br>
      <div class="main-content">
       <router-view/>
     </div>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
    <h2>Footer!! For Future Use</h2>
    
  </v-footer>
</v-app>


</div>


</template>
<script>
export default {
    name:'HomeMain',

    
}
</script>


<style>


a { 
  text-decoration: none;
   }

 div.main-content{
    width: 250;
    height: 400;
    border-radius: 7px;
    padding: auto;
   border: 4px solid #2c5c2e;
    /* padding: 25px 50px 75px 100px; */
    
  }
  v-list-item-title{
    font-weight: 20px;
    font-size: 20px;
  }

</style>