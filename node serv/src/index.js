const express = require("express");
var cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors());
require("./config/db");
const {Level} = require("./models/level");
const { Subjects } = require("./models/subjects");
const { Skills } = require("./models/skills");

app.get('/', (req, res) => {
    console.log('/');
    return res.send('Hello world included With Welcome');
});

app.get('/getLevels',async (req, res)  => {
    console.log('/getLevels');
    const levels = await Level.find({});
    console.log(levels);

    return res.json({
        levels: levels
    });
})

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
app.post('/addSubjects', async(req, res) => {
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

const PORT = 7777;
app.listen(PORT, () => {
    console.log(`Server started in http://localhost:${PORT}`);
});
