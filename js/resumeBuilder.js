var bio = {
    "name" : "Christos Balafoutis",
    "role":"Web Developer" ,
    "WelcomeMessage":"About me:<br>After I finished my Studies in Electrical engineering I have been focusing on Web Development and Web app Security. Hopefully, I will be able to master both at a respectable level and develop complete Websites and apps!",
    "image":"images/fry.jpg",
    "Contact":{
        "email":"chrisbalaf1987@gmail.com",
        "mobile":"999999999",
        "github":"https://github.com/git-chris",
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
            },
            {"employer":"PTA-PDE",
             "title":"IT Technician - Administrator",
             "dates":"11/2014-7/2015",
             "description":"I was providing tech support plus I was network administrator and built the website for the 'BIG-PROJECT' ",
             "location":"Patras"}
]
};

var education={"schools":[{
            "name":"5th Public Highschool of Patras",
            "location":"Patras",
            "degree":"Highschool Diploma",
            "dates":"2002-2005",
            "url":" "},
        {
            "name":"Polytechnic School of University of Patras",
            "location":"Patras",
            "degree":"Diploma in Electrical Engineering and Computers Technology(5 year Studies)",
            "dates":"2006-2013",
            "url":"http://www.ece.upatras.gr/"
        }
],
            "onlineCourses":[{
                "title":"Intro to Html/CSS",
                "school":"Udacity",
                "dates":"10/2014",
                "url":"https://www.udacity.com"
            },
            {
                "title":"Javascript Basics",
                "school":"Udacity",
                "dates":"10/2014",
                "url":"https://www.udacity.com"
            },
            {
                "title":"Object-Oriented JavaScript",
                "school":"Udacity",
                "dates":"12/2014",
                "url":"https://www.udacity.com"
            },
            {
                "title":"JavaScript Design Patterns",
                "school":"Udacity",
                "dates":"2/2015",
                "url":"https://www.udacity.com"
            },
            {
                "title":"Website Performance Optimization",
                "school":"Udacity",
                "dates":"2/2015",
                "url":"https://www.udacity.com"
            },

        ]
};

var projects ={"projects":[{
            "title":"Portofolio",
            "dates":"10/2014",
            "description":"An html page where my work is presented!",
            "link":" http://git-chris.github.io/Portofolio"
            },
            {
                "title":"Interactive Resume",
                "dates":"10/2014",
                "description":"My personalised CV!",
                "link":"http://git-chris.github.io/frontend-nanodegree-resume"
            },
            {
                "title":"Frogger",
                "dates":"1/2015",
                "description":"My version of Frogger. Beware of the BUGS!!!",
                "link":" http://git-chris.github.io/frontend-nanodegree-arcade-game"
            },
            {"title":"City-Map",
             "dates":"2/2015",
             "description":"A map with various spots in Patras",
             "link":"http://git-chris.github.io/Map/public_html"
            }

]};

bio.display=function(){
 var formattedName=HTMLheaderName.replace("%data%",bio.name);
    var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
    $("#header").append(formattedName,formattedRole);
    $("#header").append(HTMLWelcomeMsg.replace("%data%",bio.WelcomeMessage));
    $("#header").prepend(HTMLbioPic.replace("%data%",bio.image));
    $("#letsConnect").append(HTMLemail.replace("%data%",bio.Contact.email));
    $("#letsConnect").append(HTMLgithub.replace("%data%",bio.Contact.github));
    $("#letsConnect").append(HTMLmobile);
    $( "#mobileNumber" ).click(function() {
      swal({title:"Mobile-Number:" + bio.Contact.mobile,text:"Call me from 09:00 to 14:00 Eastern EU time.",
          type:"info"
      });
    });
};

education.display=function(){
 for(var school in education.schools){
    $("#education").append(HTMLschoolStart);
    var formattedName=HTMLschoolName.replace("%data%",education.schools[school].name);
    var formattedDegree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    $(".education-entry:last").append(formattedName,formattedDegree);
    var formattedDates=HTMLschoolDates.replace("%data%",education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedLocation=HTMLschoolLocation.replace("%data%",education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);
};
     $("#education").append(HTMLonlineClassesStart);
     for(var course in education.onlineCourses){
     var formattedtittle=HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
     var formattedschool=HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
     var formattedurl=HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
     var formattedDates=HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
     $(".education-entry:last").append(formattedtittle,formattedschool,formattedDates,formattedurl);
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
  $("#mapDiv").append(googleMap);
};

projects.display=function(){
 for(var project in projects.projects){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedlink=HTMLprojectLink.replace("%data%",projects.projects[project].link);
    $(".project-entry:last").append(formattedlink);
    var formatteddescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    $(".project-entry:last").append(formatteddescription);    
    }
};

bio.display();
education.display();
projects.display();
work.display();
