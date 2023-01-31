//je créer un element de type main (<main></main>)
const main = document.createElement("main");
//je lui attribue un id
main.setAttribute("id", "idDepuisJs");
//je peux l'ajouter a mon body du coté HTML
document.body.append(main)

const nouvelleBalise = document.createElement("nouvelleBalise");
document.body.append(nouvelleBalise)