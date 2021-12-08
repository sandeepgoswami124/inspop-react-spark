//literals : strings - "",'',``

var firstName = "Subramanian";
let lastName = 'Murugan'

console.log("Name " + firstName + lastName)
console.log("Name ", firstName, lastName)
//es 6 `` -string concatation
console.log(`Name ${firstName} ${lastName}`)
//multi line strings using es 5 pattern:
let title = 'Google'
let doc = "<html>" +
    "<head>" +
    "<title>" + title + "</title>" +
    "</head>" +
    "<body>" +
    "<h1>Hello</h1>" +
    "</body>";
console.log(doc)

let docOne = `<html>
           <head>
            <title>${title}</title>
            </head>
          <body>
            <h1>Hello</h1>
          </body>
        `;
console.log(docOne)