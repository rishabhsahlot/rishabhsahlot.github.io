let languages = [
    {
        language:"Java",
        proficiency : 90
    }, 
    {
        language:"Python",
        proficiency : 90
    },
    {
        language:"C++",
        proficiency : 80
    },
    {
        language:"Javascript",
        proficiency : 85
    },
    {
        language:"SQL",
        proficiency : 85
    },
    {
        language:"MongoDB",
        proficiency : 80
    },
    {
        language:"Cypher",
        proficiency : 50
    },    
    {
        language:"Php",
        proficiency : 50
    },
    {
        language:"HTML",
        proficiency:85
    },
    {
        framework : "CSS",
        proficiency : 85
    },    
    {
        language:"XML",
        proficiency : 85
    },    
    {
        language:"MATLAB",
        proficiency : 80
    }
];

let frameworks = [
    {
        framework : "Django",
        proficiency : 80
    },
    {
        framework : "Flask",
        proficiency : 70
    },
    {
        framework : "Node.js",
        proficiency : 80
    },
    {
        framework : "React.js",
        proficiency : 90
    },
    {
        framework : "Spring Boot",
        proficiency : 60
    },
    {
        framework : "Android(Java)",
        proficiency: 60
    },
    {
        framework : "Bootstrap",
        proficiency : 80
    }
];

let tools = [
    {
        tool: "Android Studio",
        proficiency : 80
    },
    {
        tool: "Weka",
        proficiency: 80
    },
    {
        tool: "Tableau",
        proficiency : 80
    },
    {
        tool: "Git/Github",
        proficiency : 70
    },
    {
        tool: "Firebase",
        proficiency : 70
    },
    {
        tool: "Docker",
        proficiency : 60
    }
];


let libraries = [
    {
        library : "scikit-learn",
        proficiency : 80
    },
    {
        library : "pandas",
        proficiency : 85
    },
    {
        library : "numpy",
        proficiency : 85
    },
    {
        library : "tensorflow",
        proficiency : 70
    },
    {
        library : "keras",
        proficiency : 80
    },
    {
        library : "pytorch",
        proficiency : 85
    },
    {
        library : "geometric-pytorch",
        proficiency : 70
    },
    {
        library : "matplotlib",
        proficiency : 85
    }
];

const reducer = (g, item, gtype)=>{
	if(g[item.proficiency]!== undefined)
  	g[item.proficiency]+=(", "+item[gtype]);
  else
  	g[item.proficiency]=item[gtype];
   return g
};

languages = languages.reduce((g,item)=>reducer(g,item,"language"),{});
frameworks = frameworks.reduce((g,item)=>reducer(g,item,"framework"),{});
tools = tools.reduce((g,item)=>reducer(g,item,"tool"),{});
libraries = libraries.reduce((g,item)=>reducer(g,item,"library"),{});


// console.log(languages);
// console.log(frameworks);
// console.log(tools);
// console.log(libraries);

let profs = {
    languages:languages, frameworks:frameworks, tools:tools, libraries:libraries
};

// export {languages, frameworks, tools, libraries};

export default profs;