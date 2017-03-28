/*

    getPerson

    Ecrire une fonction "getPerson", prenant en paramètre:

    "firstName": pour le prénom ("toto"),
    "lastName": pour le nom de famille ("tata"),
    "age": pour l'age (45)

    Nous attendons un objet comme valeur de retour.

    Cet objet contiendra:

        - un attribut "fullName" pour le prénom et le nom ensemble "toto tata"
        - un attribut "age" pour l'age de la personne
        - une fonction "isAdult" pour tester si la personne est majeur;

*/
var person = {
    fullName: {
        firstName: "toto",
        lastName: "tata"
    },

    age: "45"

}
function isAdult(age) {
    if (nb >= 18) {
        return "majeur";
    }
}

function getPerson()
{
    return this.fullName + this.age;
}
