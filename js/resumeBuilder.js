/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("Armaan Goyal");
 var myName = "Armaan Goyal";
 var awsomeThoughts = "I am awsome";
 console.log (awsomeThoughts + myName);
 var funThoughts = awsomeThoughts.replace("awsome", "FUNNY");
 var formattedName = HTMLheaderName.replace("%data%","Armaan Goyal");
 var formattedRole = HTMLheaderRole.replace("%data%","Software Developer");

 
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
