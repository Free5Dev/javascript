// alert boite de dialogue 
alert("Hello Word");
// console
console.log("Hello Console");
/*---------------------------------------------Les variables en js--------------------------------------------*/
// les chaines de carateres
var nom="said soumah" ;
var x=14;
console.log(nom);//affichage du contenu de la variable
console.log(nom.toUpperCase());//majuscule
console.log(nom+" est de longueur:"+nom.length);//longueur
console.log(nom.indexOf('soumah'));//position
console.log(nom.replace("said","saidou"));//replace
console.log(x.toString());
// les entiers
var a=12;
var b="13";
console.log(a);
console.log(typeof a);

console.log(parseInt(b));
// les booleans 
var bol=true;
console.log(bol);
// les float
var c=12.3;
console.log(c);
console.log(parseFloat(c));
/*---------------------------------------------Les operateurs, boooleans , comparaison en js--------------------------------------------*/
var o=2;
console.log(o++);
console.log(++o);
/*------------------------------------------------les conditions---------------------------------------------*/
var amount=500;
if(amount>1000){
    console.log("Amount est superrieir à 1000");
} else{
    console.log("Amount est inferieir à 1000");
}
var lg="en";
switch(lg){
    case"en":
    console.log("Hello");break;
    case"fr":
    console.log("Bonjour");break;
    case"ds":
    console.log("geutu");break;
    default:
    console.log("Inconnue");
}
/*---------------------------------------------------------les boucles-----------------------------------*/
var i=1;
while(i<6){
    console.log(i);
    i++;
} 
console.log("Fin de boucle");
/*--------------------------------------------------boucle do while--------------------------------------------------*/
var ii=1; 
do{
    console.log(ii);
    ii++;
} while(ii<6);
console.log("Fin de boucle");
/*--------------------------------------------------for--------------------------------------------------*/
for(var iii=1;iii<6;iii++){
    console.log(iii);
    iii++;
} 
console.log("Fin de boucle");
/*---------------------------------------les functions en js-----------------------------------------------------------*/ 
function moyenne(a,b){
    var moy=(a+b)/2;
    return moy;
}
var calcul=moyenne(4,6);
console.log(" la moyenne est:"+calcul);
/*-----------------------------------------------les array en js--------------------------*/ 
var array=["pomme",true,10,2.3,"orange"];//un array en js peut avoir plusieurs format string int bol etc...
console.log(array);
console.log(array[0]);
console.log(array.push("coco"));//ajout un element du tableau
console.log(array);
console.log(array.length);//longueur du tableau
console.log(array.pop());//supprime le dernier element du tableaux
console.log(array);
var doubleArray=[[0,1],[2,3],[4,5],[5,6]];
console.log(doubleArray[1,1]);
console.log(doubleArray.lenght);
/*----------------------------------------Les object en js--------------------------------------*/
var dog={//premiere maniere de declaration d'un objet
    nom:"choupette",
    couleur:"black"
     
   
}; 
console.log(dog);//affiche tout l'objet sous forme de array
console.log(dog.nom);//affiche la valuer de l'objet sous forme d'attrribut
console.log(dog['couleur']);//une autre maniere d'acceder aux proprietes d'un objects
for(var property in dog){//boucle pour parcourir tout un objet
    console.log(dog[property]);
}

var dogg=new Object();//deuxieme maniere de declaration d'un objet
dogg.nom="chch";
dogg.age=12;

dogg.aboyer=function(number){
    while(number>0){
        console.log(number.toString()+" wouah");
        number--;
    }
}

dogg.aboyer(4);
/*-------------------------------------------------Les functions constructeurs-----------------------------------------------------*/ 
function Chat(nom,couleur,age){//fucntion constructeur avec des parametres
    this.nom=nom;
    this.couleur=couleur;
    this.age=age;
    this.miyol=function(){
        console.log("Mioouh "+this.nom);
    }
}
var petitChat=new Chat("cc","black",12);//creation d'un chat 
console.log(petitChat);//affichage de tout le contenu de l'objet chat
console.log(petitChat.nom);//affichage d'un valeur spécifique chat
var grosChat=new Chat("gros","jaune",1);
console.log(grosChat);
petitChat.miyol();
grosChat.miyol();