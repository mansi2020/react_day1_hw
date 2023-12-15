let root = ReactDOM.createRoot(document.getElementById("root"));
console.log("mansi");

// <------------------------------br tag----------------------------------------->
let br = React.createElement("br",null,null);

// <-------------------------------Heading----------------------------------------->
let heading = React.createElement("h1",{class:"heading"},"Topics Covered");
let para = React.createElement("p",{class:"para"},"The following is a list of allthe topics we cover in the MDN learning area.");

// <------------------------Section1 => Getting started with web---------------------------------------->
let anchor1 = React.createElement("a",{href:"",class:"links"},"Getting Started with the web");
let para1 = React.createElement("p",{class:"para"},"Provides practical introduction to web development for complete beginners.")
let section1 = React.createElement("section",null,anchor1,br,para1);

// <------------------------Section2 => HTML structuring the web---------------------------------------->
let anchor2 = React.createElement("a",{href:"",class:"links"},"HTML - Structuring the web");
let para2 = React.createElement("p",{class:"para"},"HTML (HyperText Markup Language) is a markup language that tells web browsers how to structure the web pages you visit. It can be as complicated or as simple as the web developer wants it to be. HTML consists of a series of elements, which you use to enclose, wrap, or mark up different parts of content to make it appear or act in a certain way. The enclosing tags can make content into a hyperlink to connect to another page, italicize words, and so on.");
let section2 = React.createElement("section",null,anchor2,br,para2);

// <------------------------Section3 => css styling the web---------------------------------------->
let anchor3 = React.createElement("a",{href:"",class:"links"},"CSS - Styling the web");
let para3 = React.createElement("p",{class:"para"},"CSS (Cascading Style Sheets) allows you to create great-looking web pages, but how does it work under the hood? This article explains what CSS is with a simple syntax example and also covers some key terms about the language.")
let section3 = React.createElement("section",null,anchor3,br,para3);

// <------------------------------main section----------------------------------------->
let mainSection  = React.createElement("main",null,heading,para,br,section1,br,section2,br,section3);

// <-----------------------------add main section to react----------------------------------------->
root.render(mainSection);