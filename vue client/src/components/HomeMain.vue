/* eslint-disable */
<template>
  <div id="head">
    <v-app-bar app>
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

      <v-spacer> </v-spacer>

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
        <router-link to="">App</router-link> &nbsp; &nbsp;&nbsp;

        <router-link to="/">Logout</router-link>
      </h3>
    </v-app-bar>
    <v-app absolute>
      <!-- expand-on-hover -->

      <div>
        <v-card>
          <v-navigation-drawer app expand-on-hover permanent>
            <router-link to="/HomeMain">
            <v-avatar color="info">
              <v-icon dark> mdi-home </v-icon>

            </v-avatar>
            </router-link>
            <br />

            <br />

            <div>
              <router-link to="/Courseplan">
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-folder-multiple</v-icon>
                </v-list-item-icon>
                <v-list-item-title> Course Plan </v-list-item-title>
                 
                <v-row justify="center">
                  <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        class="mx-0"
                        fab
                      >
                        <v-icon >mdi-plus</v-icon>
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="text-h5">Add New Course Plan</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container justify-md-center>
                          <v-row>
                            <v-col cols="12" sm="8">
                              <v-text-field
                                label="Name*"
                                v-model="cname"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="8">
                              <v-text-field
                                label="Description"
                                v-model="cdesc"
                                hint=""
                              ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="8">
                              <v-autocomplete
                                :items="itemLevel"
                                label="Level*"
                                v-model="clevel"
                                multiple
                              ></v-autocomplete>
                            </v-col>
                               <v-col cols="12" sm="8">
                              <v-autocomplete
                                :items="itemSubjects"
                                label="Subjects*"
                                v-model="csub"
                                multiple
                              ></v-autocomplete>
                            </v-col>
                            
                          </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="dialog = false"
                        >
                          Close
                        </v-btn>
                        <v-btn color="blue darken-1" text @click=addCourse()>
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-row>
              </v-list-item>
              </router-link>

              <v-divider></v-divider>
              <v-list nav dense>
                <router-link to="/Level">
                  <v-list-item link>
                    <v-list-item-icon>
                      <v-icon>mdi-shovel</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title> LEVEL </v-list-item-title>
                  </v-list-item>
                </router-link>

                <router-link to="/Subject">
                  <v-list-item link>
                    <v-list-item-icon>
                      <v-icon>mdi-book-open-page-variant</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>SUBJECTS</v-list-item-title>
                  </v-list-item>
                </router-link>
                <router-link to="/Skills">
                  <v-list-item link>
                    <v-list-item-icon>
                      <v-icon>mdi-desktop-mac</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>SKILLS </v-list-item-title>
                  </v-list-item>
                </router-link>
              </v-list>
            </div>
          </v-navigation-drawer>
        </v-card>
      </div>

      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- <div id="sample">
  
  <router-view class="router-view"></router-view>
  <div class="info">
    {{routerFrom}}<br/>
    {{routerTo}}
  </div>
</div> -->
        <br />

        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <h2>Welcome Note!!!</h2>
          <h3>Hi There,</h3>
         
          <h4>
              <li v-for="courses in course" :key="courses">
            {{ courses }}
              </li>
            
            </h4>

          <!-- If using vue-router -->
          <br />
          <div class="main-content">
            <router-view />
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
import { mapState, mapActions } from "vuex";
export default {
  name: "HomeMain",

  computed: {

    ...mapState({
      itemLevel: (state) => state.auth.levelget,
      itemSubjects: (state) => state.auth.subjectsget,
      
      course: (state) => state.auth.course,
    }),
    
  },
  created() {
      // this.initialize()
      

      this.actionCourseGet()
    },

  data: () => ({
    dialog: false,
    return:{
      cname: " ",
    cdesc: " ",
    clevel: "",
    csub: ""
    },
    cname: null,
    cdesc: " ",
    clevel: "",
    csub: ""
  }),
  methods: {
    ...mapActions(["actionCourseGet"]),

   

    addCourse() {
       debugger;
      this.$store.dispatch("actionCourse", {
        // obj0 : this.editedItem,
        obj1: this.cname,
        obj2: this.cdesc,
        obj3: this.clevel,
        obj4: this.csub,
      }
      
      );
      this.dialog=false
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}

div.main-content {
  width: 250;
  height: 400;
  border-radius: 7px;
  padding: auto;
  border: 4px solid #2c5c2e;
  /* padding: 25px 50px 75px 100px; */
}
v-list-item-title {
  font-weight: 20px;
  font-size: 20px;
}

</style>
