<template>
  <v-data-table
    :headers="headers"
    :items="skillsget"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Skills</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="#66BB6A"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <!-- <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Id"
                    ></v-text-field>
                  </v-col> -->
                  <!-- <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.calories"
                      label="Id"
                    ></v-text-field>
                  </v-col> -->
                  <v-col
                    
                    cols="12" md="8"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12" md="8"
                  >
                    <v-text-field
                      v-model="editedItem.description"
                      label="Description"
                    ></v-text-field>
                  </v-col>
                  <!-- <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.protein"
                      label="Protein (g)"
                    ></v-text-field>
                  </v-col> -->
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save() + addSkills()"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        medium
        color="info"
        class="mr-22"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon> &nbsp;
      <v-icon
        color="red"
        medium
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
      
    </template>
    <template v-slot:no-data>
     
      <v-btn
        color="primary"
        @click="actionSkillsGet"
      >
        Reset
      </v-btn>
       
    </template>
    
  </v-data-table>

</template>

<script>
// import axios from 'axios'
import { mapActions, mapState } from 'vuex'
export default {
    name:'Skills',
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        // {
        //   text: 'Dessert (100g serving)',
        //   align: 'start',
        //   sortable: false,
        //   value: 'name',
        // },
        // { text: 'Id', value: 'calories' },
        { text: 'Name ', value: 'name' },
        { text: 'Description ', value: 'description' },
       
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      // skillsget: [],
      editedIndex: -1,
      editedItem: {
        // name: '',
        // calories: 0,
        name: null,
        description: null,
        // protein: 0,
      },
      defaultItem: {
        // name: '',
        // calories: 0,
        name: "",
        description:"",
        // protein: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Add Item' : 'Edit Item'
      },
      ...mapState({
        skillsget:(state)=> state.auth.skillsget,
      })
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      // this.initialize(),
      
      this.actionSkillsGet()
    },

    methods: {
      ...mapActions([
        'actionSkillsGet'
      ]),
       addSkills() {
        //  debugger;
         this.$store.dispatch('actionSkills',
      { 
        obj0 : this.editedItem,
        obj1 : this.editedItem.name,
        obj2 : this.editedItem.description,
        
      })
        // const response = await axios.post("http://localhost:2222/addSkills",
        //  {
        //   name: this.editedItem.name,
        //   description: this.editedItem.description
        // });
        //  this.skillsget.push(this.editedItem);

        // console.log(response);
        this.close();
      },
      // async initialize () {
      //   const response = await axios.get("http://localhost:2222/getSkills");
      //   this.skillsget = response.data.skillls;
      // },

      editItem (item) {
        this.editedIndex = this.skillsget.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.skillsget.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.skillsget.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.skillsget[this.editedIndex], this.editedItem)
        } else {
          this.skillsget.push(this.editedItem)
        }
        this.close()
      },
    },

}
</script>

<style>

</style>