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

 var bio = {
 	"name":myName,
 	"age":32,
 	"role":"Software Developer",
 	"contactInfo":"7264329772",
 	"pictureUrl":"#",
 	"skills":["java","php","c++"],
 	"welcomeMessage":"Ola"
 }
var work = {
	jobs:[
	{
		"employer":"Infosys Limited",
		"title":"Systems Engineer",
		"dates":"March 2013-April 2015",
		"description":"Worked as a developed and later as a Business Analyst for 3 major US based Clients, namely, AMEX, Boeing and Aetna Inc."
	},
	{
		"employer":"University at Buffalo",
		"title":"Graduate Researcher",
		"dates":"May 2016-Present",
		"description":"Working on a Research project to collect cellular data through crowdsourcing by building and deploying an Android app"
	}]
}