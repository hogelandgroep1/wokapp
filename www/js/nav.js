var i=0;

this.subjects=
         [
        {"id": 1, "hoofdstuk":1,"par":"1", "name": "De leefwijze van jagers-verzamelaars ", "r": true, "t":false, "i":false, "isdoener":true,"isdromer":false,"isdenker":false,"isbeslisser":false,
            "repro":"1,2,3a,4,5","toep":"","inzicht":"3","vaard":"","doener":"Educrations","denker":"De hersenen van een Neanderthaler","beslisser":"De hersenen van een Neanderthaler","bezinner":"Casus Otzi"},
        {"id": 2, "hoofdstuk":1,"par":"1","name": "Het ontstaan van landbouw en landbouwsamenlevingen", "r": true, "t":false, "i":false,"isdoener":true,"isdromer":false,"isdenker":false,"isbeslisser":false,
            "repro":"7","toep":"8,11,13","inzicht":"10.14","vaard":"","doener":"Educrations","denker":"Examenopgaven landbouwsamenleving","beslisser":"Examenopgaven landbouwsamenleving","bezinner":"Casus Otzi"},
        {"id": 3, "hoofdstuk":1,"par":"2", "name": "Het ontstaan van de eerste stedelijke gemeenschappen", "r": true, "t":false, "i":false,"isdoener":true,"isdromer":false,"isdenker":false,"isbeslisser":false,
            "repro":"1,2,5,6","toep":"3,4,7,8,10,11,15,16,17","inzicht":"9,12,13","vaard":"","doener":"Mindmap","denker":"Examenopgaven stedelijke samenleving","beslisser":"Examenopgaven stedelijke samenleving","bezinner":"Casus Otzi"},
        {"id": 4, "hoofdstuk":1,"par":"3","name": "Het ontstaan van de eerste stedelijke gemeenschappen", "r": true, "t":false, "i":false,"isdoener":true,"isdromer":false,"isdenker":false,"isbeslisser":false,
            "repro":"1,2,3,6,10,12","toep":"5,8,11,13","inzicht":"4,7,9","vaard":"","doener":"Mindmap","denker":"Examenopgaven Egypte","beslisser":"Examenopgaven Egypte","bezinner":""},
        {"id": 5, "hoofdstuk":2,"par":"1","name": "De ontwikkeling van het wetenschappelijk denken en het denken over burgerschap en politiek in de Griekse stadstaat", "r": true, "t":false, "i":false,"isdoener":true,"isdromer":false,"isdenker":false,"isbeslisser":false,
            "repro":"1,2,3,6,8","toep":"","inzicht":"9 t/m 14","vaard":"","doener":"Schema Atheense democratie","denker":"Bronvragen wetenschappelijk denken","beslisser":"Bronvragen politiek","bezinner":""},
        {"id": 6, "hoofdstuk":2,"par":"2","name": "De klassieke vormentaal van de Grieks-Romeinse cultuur", "r": true, "t":false, "i":false,"isdoener":true,"isdromer":false,"isdenker":false,"isbeslisser":false,
            "repro":"6","toep":"","inzicht":"","vaard":"","doener":"Akropolis","denker":"","beslisser":"","bezinner":"Alexander de Grote"},
        {"id": 7, "hoofdstuk":2,"par":"2","name": "De groei van het Romeins imperium, waardoor de Grieks-Romeinse cultuur zich in Europa verspreidde", "r": true, "t":false, "i":false,"isdoener":true,"isdromer":false,"isdenker":false,"isbeslisser":false,
            "repro":"1 t/m 5","toep":"11","inzicht":"","vaard":"","doener":"Mindmap","denker":"Bronvragen Romanisering","beslisser":"Sudoku Romanisering","bezinner":""},
        {"id": 8, "hoofdstuk":2,"par":"3","name": "De ontwikkeling van het jodendom en christendom als eerste monotheïstische godsdiensten", "r": true, "t":false, "i":false,"isdoener":true,"isdromer":false,"isdenker":false,"isbeslisser":false,
            "repro":"1,2,4,5,8a,9","toep":"6,10,12a,14","inzicht":"7,11,15","vaard":"","doener":"Mindmap","denker":"Sudoku christendom","beslisser":"Sudoku christendom","bezinner":""},
        {"id": 9, "hoofdstuk":2,"par":"4","name": "De confrontatie tussen de Grieks-Romeinse cultuur en de Germaanse cultuur van Noord-West Europa", "rtti": "Reproductie", "leerstijl":"Doener" ,
            "repro":"1,2,3,4,6","toep":"","inzicht":"5","vaard":"","doener":"Mindmap","denker":"Bronvragen confrontatie Romeinen-Germanen","beslisser":"","bezinner":"Kwadrant Romeinen-Germanen"},
        {"id": 10,"hoofdstuk":3,"par":"1", "name": "De vrijwel volledige vervanging in West-Europa van de agrarisch-urbane cultuur door een zelfvoorzienende agrarische cultuur, georganiseerd via hofstelsel en horigheid", "r": true, "t":false, "i":false,"isdoener":true,"isdromer":false,"isdenker":false,"isbeslisser":false,
            "repro":"5.9","toep":"4,6,7,8,10,11","inzicht":"","vaard":"","doener":"Kwadrant Romeinen-Germanen","denker":"Sudoku hofstelstel","beslisser":"Sudoku hofstelstel","bezinner":"Boer Walfrid"},
        {"id": 11, "hoofdstuk":3,"par":"2","name": "De verspreiding van het christendom in heel Europa", "rtti": "Reproductie", "leerstijl":"Doener" ,
            "repro":"1,4,9","toep":"2.3","inzicht":"7","vaard":"","doener":"Mindmap","denker":"Bronvragen christendom en hofstelsel","beslisser":"Bronvragen christendom en hofstelsel","bezinner":"Wees een heiden!"},
        {"id": 12, "hoofdstuk":3,"par":"3","name": "Het ontstaan van feodale verhoudingen in het bestuur", "r": true, "t":false, "i":false,"isdoener":true,"isdromer":false,"isdenker":false,"isbeslisser":false,
            "repro":"1,3,4,5","toep":"2,6,7,8abcd,9","inzicht":"8e","vaard":"","doener":"Mindmap","denker":"Bronvragen politiek","beslisser":"Bronvragen politiek","bezinner":""},
        {"id": 13, "hoofdstuk":3,"par":"4","name": "Het ontstaan en de verspreiding van de islam", "r": true, "t":false, "i":false,"isdoener":true,"isdromer":false,"isdenker":false,"isbeslisser":false,
            "repro":"3,5,7,8","toep":"1,2,4,10,11,12","inzicht":"6,9,13","vaard":"","doener":"Jaartallenpuzzel","denker":"Bronvragen islam","beslisser":"Bronvragen islam","bezinner":""}
    ];


function next() {

    if (i<subjects.length - 1) {
        i++;
    }
    showSelection();
}

function previous() {
    if (i>0) {
        i--;
    }
    showSelection();
}


function showSelection() {
    document.getElementById('subject').innerHTML=(i+1)+") "+subjects[i].name;
    document.getElementById("body1").style.display="block";
    document.getElementById("body2").style.display="none";
    document.getElementById("Doener").checked = subjects[i].isdoener;
    document.getElementById("Dromer").checked = subjects[i].isdromer;
    document.getElementById("Beslisser").checked = subjects[i].isbeslisser;
    document.getElementById("Denker").checked = subjects[i].isdenker;
    document.getElementById("Reproductie").checked = subjects[i].r;
    document.getElementById("Inzicht").checked = subjects[i].i;
    document.getElementById("Toepassing").checked = subjects[i].t;
}
function storeLeerstijl( ){
    subjects[i].isdoener = document.getElementById("Doener").checked;
    subjects[i].isdromer = document.getElementById("Dromer").checked;
    subjects[i].isdenker = document.getElementById("Denker").checked;
    subjects[i].isbeslisser = document.getElementById("Beslisser").checked;
}

function storeRtti( ){
    subjects[i].r = document.getElementById("Reproductie").checked;
    subjects[i].t = document.getElementById("Toepassing").checked;
    subjects[i].i = document.getElementById("Inzicht").checked;
}

function showOpdrachtenRtti(){
    var line="";
    var s="";
    for(j=0; j<subjects.length; j++){
        var subject = subjects[j];
        line=subject.hoofdstuk+"-"+subject.par+": ";
        if(subject.r){
            line=line+"/"+subject.repro;
        }
        if(subject.i){
            line=line+"/"+subject.inzicht;
        }
        if(subject.t){
            line = line+"/"+subject.toep;
        }
        s=s+line+"\n";
        line="";
    }
    document.getElementById("vragen").innerHTML=s;
    document.getElementById("body1").style.display="none";
    document.getElementById("body2").style.display="block";
}

function showOpdrachtenLeerstijlen(){
    var line="";
    var s="";
    for(j=0; j<subjects.length; j++){
        var subject = subjects[j];
        line=subject.hoofdstuk+"-"+subject.par+": ";
        //TODO als opdracht voor doener en denker etc hetzelfde is, dan niet dubbel toevoegen
        if(subject.isdoener){
            line=line+"/"+subject.doener;
        }
        if(subject.isdenker){
            line=line+"/"+subject.denker;
        }
        if(subject.isbeslisser){
            line = line+"/"+subject.beslisser;
        }
        if(subject.isdromer){
            line = line+"/"+subject.bezinner;
        }
        s=s+line+"\n";
        line="";
    }
    document.getElementById("vragen").innerHTML=s;
    document.getElementById("body1").style.display="none";
    document.getElementById("body2").style.display="block";
}

function showHome(){
    document.getElementById("body1").style.display="block";
    document.getElementById("body2").style.display="none";

}
