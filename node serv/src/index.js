const express = require("express");
var cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors());
require("./config/db");
const { Level } = require("./models/level");
const { Subjects } = require("./models/subjects");
const { Skills } = require("./models/skills");
const { Course } = require("./models/courseplan");

app.get('/', (req, res) => {
    console.log('/');
    return res.send('Hello world included With Welcome');
});

//  Express Methods for Level it include the 
// POST => create Data
// Get => acess the data which are inserted using an POST method
// PUT => Put Method is On of the expression that help to update the existing content in an DB usin "findoneandupdate()" or findbyidanddelete() 
// DELETE => Del Method in express whic is help to dele the existing data whic avilable in db using "fineoneanddelete()" or findbyidanddelete()

// *** Starting of Course

app.post('/addCourse', async (req, res) => {
    console.log(req.body);

    const course = await Course.create({
        name: req.body.name,
        description: req.body.description,
        level: req.body.level,
        subjects: req.body.subjects,
    });
    console.log('addCourse');

    return res.json(course);
})
//below for Get => find()=============

app.get('/getCourse', async (req, res) => {
    console.log('/getCourse');
    const course = await Course.find({});
    console.log(course);

    return res.json({
        course: course
    });
})
// *** Engind of Course

app.get('/updateCourse', async (req, res) => {
    const course = await Course.updateOne({})



    console.log(course);

    return res.json({
        course: course
    });
})
// Below for post => create()=============================================================

app.post('/addLevel', async (req, res) => {
    console.log(req.body);

    const level = await Level.create({
        name: req.body.name,
        type: req.body.type,
        identifier: req.body.identifier,
    });
    console.log('addLevel');

    return res.json(level);
})
//below for Get => find()====================================================================

app.get('/getLevels', async (req, res) => {
    console.log('/getLevels');
    const levels = await Level.find({});
    console.log(levels);

    return res.json({
        levels: levels
    });
})

//below for put => FindByIDAndUpdate() / FindOneAndUpdate()========================================

app.put('/getLevels', async (req, res) => {
    console.log('Updating Levels');
    const levels = await Level.findOneAndUpdate({ name: "Rajavel" }, { name: "RAJAVEL M" }, { overwrite: false },
        async (err, doc) =>
            console.log(doc)
    )
    return res.json({
        levels: levels
    });

})

//below for Delete => FindByIDAndDelete() / FindOneAndDelete()========================================
// app.delete('/getLevels',async(req,res)=>{
//     console.log('Updating Levels');
//     const levels= await Level.findByIdAndDelete({_id:"61b87a0d6c8ffe893f665b47"},

//     function(err,doc){
//         console.log(doc);
//     })
//     return res.json({
//         levels: levels
//     });

// }






// app.get('/getSubjects', (req, res) => {
//     console.log('/getSubjects');
//     // Get from Mongo DB
//     // const levels = await Level.find({});

//     return res.json({
//         subjects: [
//             {
//                 id: '1',
//                 name: 'English',
//                 identifier: 'eng'
//             }
//         ]
//     });
// })




app.get('/getSubjects', async (req, res) => {
    console.log('/getSubjects');
    // Get from Mongo DB
    // const levels = await Level.find({});
    const subjects = await Subjects.find({});
    console.log(subjects);

    return res.json({
        subjects: subjects
    });

    // return res.json({
    //     subjects: [
    //         {

    //            displayname: 'English',
    //             identifier: 'eng'
    //         },
    //         {

    //             displayname: 'Computer Science',
    //              identifier: 'Cs'
    //          }

    //     ]
    // });
})
app.post('/addSubjects', async (req, res) => {
    console.log(req.body);

    const subjects = await Subjects.create({
        displayname: req.body.displayname,
        identifier: req.body.identifier,
    });
    console.log('addSubjects');
    return res.json(subjects);
})

app.get('/getSkills', async (req, res) => {
    console.log('/getSkills');
    // Get from Mongo DB
    // const levels = await Level.find({});
    const skills = await Skills.find({});
    console.log(skills);

    return res.json({
        skills: skills
    });

})
app.post('/addSkills', async (req, res) => {
    console.log(req.body);
    const skills = await Skills.create({
        name: req.body.name,
        description: req.body.description,
    });
    console.log('addSkills');
    return res.json(skills);
})

const PORT = 2222;
app.listen(PORT, () => {
    console.log(`Server started in http://localhost:${PORT}`);
});