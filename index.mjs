//imported the dependencies
import inquirer from "inquirer";
import fs from "fs/promises";

//Prompt the user questions to populate the README.md
let {title,description,installation,usage,license,contributing,test,github,email}=await inquirer
.prompt([
   { type: 'input',
    name: 'title',
    message:'Input title of the project: ',
   },
   { type: 'input',
     name: 'description',
     message:'Input the project description: ',
  },
  
  { type: 'input',
   name: 'installation',
   message:'Input the installation methods: ',
  },
  { type: 'input',
   name: 'usage',
   message:'Input the usage instruction: ',
  },
 {
   type: 'list',
   name: 'license',
   message: 'Select the licence you need:',
   choices:['Apache 2.0 License','Boost Software License 1.0','BSD 3-Clause License'],
   filter(val){

    return val.toLowerCase();

},
},
  { type: 'input',
   name: 'contributing',
   message:'Input the contributing guidelines: ',
  },
  { type: 'input',
   name: 'test',
   message:'Input the test instruction: ',
  },
  { type: 'input',
  name: 'github',
  message:'Enter your github username: ',
 },
 { type: 'input',
  name: 'email',
  message:'Enter your email-id: ',
 },

])
//console.log(title+" "+description);

let readmetxt=
`
# 📖${title}              ${generatelicense(license)}


## 📝Description

${description}


## 📑Table of Contents

- [Installation](#install)
- [Usage](#use)
- [License](#license)
- [Contributing](#contrbute)
- [Tests](#test)
- [Questions](#question)

## 🧑‍🏫Installation <a id="install"></a>

${installation}

## 👤Usage <a id="use"></a>

${usage}

## 🎖️License <a id="license"></a>

This project is licensed under ${license} ${generatelicense(license)}

## 👤Contributing <a id="contrbute"></a>

${contributing}

## 📝Tests <a id="test"></a>

${test}

## ❔Questions <a id="question"></a>

For questions or feedback, please contact me at ${email}. You can also find my other work on GitHub at https://github.com/${github}.
`





fs.writeFile("README1.md",readmetxt)



function generatelicense(license){
if (license="Apache 2.0 License")
{
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
} 
else if(license="Boost Software License 1.0"){
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
}
else {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
}
}