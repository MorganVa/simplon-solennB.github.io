var nouveauContact;
var valeur;

var gestionnaireContact = {
  contacts:[],

  ajouteContact:function( nom, prenom, mail ){
    //console.log('ajoute');
    //  créer un objet nouveauContact avec les valeurs transmises
     nouveauContact = {
      mail:mail,
      nom:nom,
      prenom:prenom,
    };
    //  ajoute nouveauContact à contacts
    if(this.contacts.length == 0) { // Si le tableau contacts est vide
      this.contacts.push(nouveauContact); // on push le premier contact puisque le mail ne peut pas etre déjà présent
      document.getElementById('mon_tableau').style.visibility='visible';
      return returnCourse();  // on arrete la fonction

    };
    var noDouble = false;
    for (var i=0; i<this.contacts.length; i++){ // on parcourt tous les objets contenus dans contacts
      if(nouveauContact.mail == this.contacts[i].mail) { // si le mail saisi est déjà présent dans le tableau contacts et mail
        alert("mail deja renseigné");
        noDouble = true; // on passe le noDouble a true comme ca ca ne l'ajoute pas dans la tableau et ne le push pas
        break;
      }else {
        noDouble = false; // on passe le noDouble a false pour pouvoir l'ajouter dans la tableau et le pusher
      }
    }
    if(!noDouble) { // si noDouble = false
      // console.log(gestionnaireContact.contacts);
      // console.log(JSON.stringify(gestionnaireContact.contacts));
      this.contacts.push(nouveauContact); // on push le contact dans le tableau
      returnCourse();
       // on ajoute le contact dans le tableau sur la page
    }
  },

}

function returnCourse() { //on verifie si un choix a bien été fait
  if (document.getElementById('chpChoix1').checked==false&&document.getElementById('chpChoix2').checked==false) {
    alert ("Vous n'avez pas séléctionné de course !")
    return;
  }
  else if (document.getElementById('chpChoix1').checked) {
    valeur = document.getElementById('chpChoix1').value;
    ajouteTableau();
  } else { // si ce n'est pas l'un, c'est l'autre
    valeur = document.getElementById('chpChoix2').value;
    ajouteTableau();
  }
}


function ajouteTableau() {

  var table = document.getElementById('mon_tableau');
   tablebody = document.createElement("tbody");
   tr = document.createElement('tr');



    td = document.createElement('td');//ajout colonne
    td.innerHTML+= nouveauContact.nom.toUpperCase();//on ecrit dans la cellule
    tr.appendChild(td); // rattache la colonne td au parent tr


    td = document.createElement('td');
    td.innerHTML+= nouveauContact.prenom;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML+= nouveauContact.mail;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML+= valeur;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML +=
    "<input type='button' value='modifier' onclick='modifier(this.parentNode.parentNode.rowIndex);'/>"

    td.innerHTML +=
    "<input type='button' value='supprimer' onclick='supprimer(this.parentNode.parentNode.rowIndex);'/>"
    /*var suppression = document.createElement('button');
    suppression.innerHTML= "supprimer";
    suppression.onclick="supprime(this.parentNode.rowIndex)";
    var modification = document.createElement('button');
    modification.innerHTML= "modifier";
    modification.onclick=modifier();
    td.appendChild(modification);
    td.appendChild(suppression);*/
    tr.appendChild(td);

  tablebody.appendChild(tr); // rattache ligne au parent tablebody
  table.appendChild(tablebody); // rattache table body au parent tableau


    //var nouveau = document.getElementById("texte");
    //nouveau.innerHTML +="Nom : "+ nouveauContact.nom;
    //nouveau.innerHTML +="  Prénom : "+ nouveauContact.prenom;
    //nouveau.innerHTML +="  Mail : "+ nouveauContact.mail+ "</br>";
}

function supprimer(num) {
  	document.getElementById("mon_tableau").deleteRow(num);
  }

  function modifier() {
    var arrayLignes = document.getElementById("mon_tableau").rows;
    console.log(arrayLignes);
    // var longueur = arrayLignes.length-2;//on peut donc appliquer la propriété length
    // console.log(longueur);
    //this.arrayLignes.cells[1].innerHTML;
    //document.getElementById("mon_tableau").rows(num).cell[0].innerHTML;
  }
