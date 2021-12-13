const axios = require('axios');

const actions = {
 myAction(context,value){
   setTimeout(()=>
   context.commit('MUT_VAl',value),1000)

 },
async myActionPass(context,value){
   if(value.objOne =="rajavel" && value.objTwo =="1999"){
    context.commit('NEW_MUT')
            
   }
   else{
    alert("Check The Username And Password !! ");
   }
  
 },
 async actionLavel(context,value){
  const response = await axios.post("http://localhost:7777/addLevel",
         {
          name: value.obj1,
          type: value.obj2,
          identifier:value.obj3 
        });
        
        console.log(response);
        context.commit('LEV_POST_MUT',value);
        // this.close(); 
 },

 async actionLavelGet({commit}){
 
  const response = await axios.get("http://localhost:7777/getLevels")

  commit('LEV_GET_MUT', response.data.levels)
  // const val=response.data.levels;
  // console.log(val);
  // state.desserts.push(val) 
  // context.commit('LEV_GET_MUT',val);
  // state.desserts.push({events:val})
  // const val=response.data.level;
  // state.desserts.push(val)
  // state.desserts.push(response.data.levels)
  // state.desserts.push({response.data.levels})
  // state.desserts.push({events: response.data.levels})
  // debugger;

  // var rep= response.data.levels;
  // context.commit('LEV_GET_MUT',value(rep));
 
},



// async getUser({commit}) {
//   try {
//       const currentUser = await axios.post("http://localhost:7777/addLevel",{name:'rajavel',type:'new',identifier:'rv'})
//       console.log(currentUser)
//       // commit(' LEV_POST_MUT', currentUser)
//       // return currentUser
//   } catch (err) {
//       commit('LEV_POST_MUT', null)
//       throw 'Unable to fetch current user'
//   }
// },
async actionSubjects(context,value){
  const response = await axios.post("http://localhost:7777/addSubjects",
         {
          displayname: value.obj1,
          identifier: value.obj2,
         
        });
        
        console.log(response);
        context.commit('SUB_POST_MUT',value);
        // this.close(); 
 },
 async actionSubjectsGet({commit}){
 
  const response = await axios.get("http://localhost:7777/getSubjects")

  commit('SUB_GET_MUT', response.data.subjects)
 },
  
 // Action Post And Gets Start for Skills


 async actionSkills(context,value){
  const response = await axios.post("http://localhost:7777/addSkills",
         {
          name: value.obj1,
          description: value.obj2,
         
        });
        
        console.log(response);
        context.commit('SKILLS_POST_MUT',value);
        // this.close(); 
 },
 async actionSkillsGet({commit}){
 
  const response = await axios.get("http://localhost:7777/getSkills")

  commit('SKILLS_GET_MUT', response.data.skills)
 },
 
 
};

 module.exports = { actions };
// export default { actions };















 
  // firstAction({commit}) {
  //   setTimeout(()=>
  //     commit('VALIDATE'),3000)
    
  //     // Store.dispatch('firstAction')
      
  //   },