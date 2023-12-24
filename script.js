//const/let variablename=documnet.createElement(htmltag)

// const divison=document.createElement("div");
// console.log(divison);
// divison.innerHTML="Hi this is div tag created by dom"
// document.body.append(divison);

// Text

// const divison=document.createElement("div");
// divison.innerHTML="<span>Hi this is dynamic span tag</span>";
// document.body.append(divison);

// Creating multiple elements

// const div=document.createElement("div");
// const span=document.createElement("span");
// span.innerHTML="This is span tag";
// const heading=document.createElement("h1");
// heading.innerHTML="This is Heading Tag"
// div.append(heading,span);
// document.body.append(div);

// Task

const div=document.createElement("div");
const header=document.createElement("header");
const h1=document.createElement("h1");
h1.innerText="This is Heading";
header.appendChild(h1);
div.appendChild(header);
// document.body.append(div);

const section=document.createElement("section");
const span=document.createElement("span");
span.innerText="This is span Tag";
section.appendChild(span);
div.appendChild(section);
// document.body.append(div);

const article=document.createElement("article");
const p=document.createElement("p");
p.innerText="This is Paragraph Tag";
article.appendChild(p);
div.appendChild(article);
// document.body.append(div);

div.append(header,section,article);
document.body.append(div);

div.className="container";
header.setAttribute("style","background-color: brown");
h1.setAttribute("style","background-color: yellow");
section.setAttribute("style","background-color: green");
span.setAttribute("style","background-color: red");
article.setAttribute("style","color:orange !important");
p.setAttribute("style","background-color: black ");


// Selectors

const qs=documnet.QuerySelectorAll()


