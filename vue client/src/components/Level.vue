  <template>
<div>
     <!-- <button @click="addLevel">Add temp</button> -->
  <v-data-table

    :headers="headers"
    :items='levelget'
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Level</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        >
        </v-divider>
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
              dialog=true
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
                      v-model="editedItem.type"
                      label="Type"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12" md="8"
                  >
                    <v-text-field
                      v-model="editedItem.identifier"
                      label="Identifier"
                    ></v-text-field>
                  </v-col>
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
                @click="save() + addLevel()"
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
        class="mr-22"
        color="info"
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
        @click="actionLavelGet()"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
  <!-- testing :
  
  <h2>{{ levels }}</h2> -->
</div>

</template>

<script>
import {mapActions, mapState} from 'vuex'
// import axios from 'axios'

export default {
    name:'Level',
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
        { text: 'Type ', value: 'type' },
        { text: 'Identifier', value: 'identifier' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      // levels:[],
      // levelget: [],
      editedIndex: -1,
      editedItem: {
        // name: '',
        // calories: 0,
        name: "",
        type: "",
        identifier: "",
      },
      defaultItem: {
        // name: '',
        // name: 0,
        name: "",
        type: "",
        identifier: "",
      },
      
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Add Item' : 'Edit Item'
      },
      ...mapState({
     
      levelget: (state) => state.auth.levelget,
      // levels: (state) => state.auth.levels,
     
      
               }),
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
      // this.initialize()
      this.actionLavelGet()
    },

    methods: {
    ...mapActions([
      'actionLavelGet',
    ]),

     addLevel() {
      
        this.$store.dispatch('actionLavel',
      { 
        obj0 : this.editedItem,
        obj1 : this.editedItem.name,
        obj2 : this.editedItem.type,
        obj3 : this.editedItem.identifier
      })

      //   const response = await axios.post("http://localhost:1111/addLevel",
      //    {
      //     name: this.editedItem.name,
      //     type: this.editedItem.type,
      //     identifier: this.editedItem.identifier
      //   });
      //    this.levelget.push(this.editedItem);

      //   console.log(response);
      //   this.close();
      
      },
      // async initialize () {

       
      //   const response = await axios.get("http://localhost:1111/getLevels")
      //   // console.log(response.data);
      //   this.levels = response.data.levels;
      //   // const myval1 = "rajavel";
      //   // this.levels =' key checking hello'
      //   this.levelget = this.levels;
        
      // },

      editItem (item) {
        this.editedIndex = this.levelget.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.levelget.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.levelget.splice(this.editedIndex, 1)
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
        //    const response = await axios.post("http://localhost:1111/addLevel",
        //  {
        //   name: this.editedItem.name,
        //   type: this.editedItem.type,
        //   identifier: this.editedItem.identifier
        // });

        if (this.editedIndex > -1) {
          Object.assign(this.levelget[this.editedIndex], this.editedItem)
      
        console.log(this.editItem);
        } 
        else {
          this.levelget.push(this.editedItem)
        }
        this.close()
      },

    //   async getlevels() {
    //    const response = await axios.get("http://localhost:1111/getLevels")
    //      this.levels = response.data.levels;
    // },




},

}
</script>

<style>

</style>