import inquirer from "inquirer";
import fs from "fs/promises";


let {title,description,table,installation,usage,license,contributing,test,questions}=await inquirer
.prompt([
   { type: 'input',
    name: 'title',
    message:'Input title of the project: ',
   },
   { type: 'input',
     name: 'description',
     message:'Input the project description: ',
  },
  {  type: 'input',
     name: 'table',
    message:'Input the tabele of contents: ',
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
   message:'Input the usage instruction: ',
  },
  { type: 'input',
   name: 'test',
   message:'Input the test instruction: ',
  },
  { type: 'input',
  name: 'questions',
  message:'Ask any questions: ',
 },

])
console.log(title+" "+description);

let readmetxt=
`
# Project Title
${title}

## Description
${description}


## Table of Contents
${table}

## Installation
${installation}

## Usage

${usage}

## License
${generatelicense(license)}

## Contributing
${contributing}

## Tests
${test}

## Questions
${questions}



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