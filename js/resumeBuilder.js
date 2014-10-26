var bio = {
    "name" : "Christos Balafoutis",    
    "role":"Web Developer" ,
    "WelcomeMessage":"1+1=10.......What? Is there something wrong? ",
    "image":"images/fry.jpg",
    "Contact":{
        "email":"chrisbalaf1987@gmail.com",
        "mobile":"999999999",
        "github":"git-chris",
        "location":"Patras"           //Did not include skills in bio because I used seperate graph
    }         
};



var work={"jobs":[{
            "employer":"OTE AE",
            "title":"Telephone Assistance",
            "dates":"4/2008-8/2008",
            "description":"I was part of the Telephone directories and Listings department.",
            "location":"Patras"
            },
            {
            "employer":"Myself",
            "title":"Pc SetUp and Repairs",
            "dates":"2010-Present",
            "description":"I repair old pc's(hardware and software) and set up new systems.",
            "location":"Patras"
            }        
]
};



var education={"schools":[{
            "name":"5th Public Highschool of Patras",
            "location":"Patra,Achaia",
            "degree":"Highschool Diploma",
            "major":"None",
            "dates":"2002-2005",
            "url":" "},
        {
            "name":"Polytechnic School of University of Patras",
            "location":"Patras",
            "degree":"Diploma(5 year Studies)",
            "major":"Electrical Engineering and Computers Technology",
            "dates":"2006-2013",
            "url":"http://www.ece.upatras.gr/"
        } 
],
            "onlineCourses":[{
                "title":"Front-end Web Development",
                "school":"Udacity",
                "dates":"10/2014-Present",
                "url":"http://www.udacity.com"
            }
        ]
};

var projects ={"projects":[{
            "title":"Portofolio",
            "dates":"10/2014",
            "description":"An html page where my work is presented!",
            "images":""
            },
            {
                "title":"CV Web Page",
                "dates":"10/2014",
                "description":"My personalised CV!",
                "images":""
            }
        
]};


bio.display=function(){
    var formattedName=HTMLheaderName.replace("%data%",bio.name);
    var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
    $("#header").append(formattedName,formattedRole);              
    $("#header").append(HTMLWelcomeMsg.replace("%data%",bio.WelcomeMessage)); 
    $("#header").prepend(HTMLbioPic.replace("%data%",bio.image));    
    $("#letsConnect").append(HTMLemail.replace("%data%",bio.Contact.email));
    $("#letsConnect").append(HTMLmobile.replace("%data%",bio.Contact.mobile));
    $("#letsConnect").append(HTMLgithub.replace("%data%",bio.Contact.github));
};

education.display=function(){
 for(var school in education.schools){
    $("#education").append(HTMLschoolStart);
    var formattedName=HTMLschoolName.replace("%data%",education.schools[school].name);
    var formattedDegree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    var formattedMajor=HTMLschoolMajor.replace("%data%",education.schools[school].major);
    $(".education-entry:last").append(formattedName,formattedDegree,formattedMajor);
    var formattedDates=HTMLschoolDates.replace("%data%",education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedLocation=HTMLschoolLocation.replace("%data%",education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);
};   
};

work.display=function(){
for(var job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedEmployerTitle=formattedEmployer+formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formatteddescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formatteddescription);
};
};



projects.display=function(){
    for(var project in projects.projects){
    $("#projects").append(HTMLprojectStart);    
    var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);    
    $(".project-entry:last").append(formattedTitle);
    var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formatteddescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    $(".project-entry:last").append(formatteddescription);
    }
};

bio.display();
education.display();
projects.display();
work.display();


$("#mapDiv").append(googleMap);
