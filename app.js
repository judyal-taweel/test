'use strict';

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
let container = document.getElementById('container');
let table = document.createElement('table');
container.appendChild(table); 

let hours=['8am','9am','10am','11am','12pm','1pm'];

let totalArr=[0,0,0,0,0,0];

function Cookie(location,min,max,avg){
    this.location=location;
    this.min=min;
    this.max=max;
    this.avg=avg;
    this.cookieperhour=[];
    this.dailysails=0;
}


function header(){
let trEl = document.createElement('tr');
table.appendChild(trEl);
let thEl =document.createElement('th');
trEl.appendChild(thEl);
thEl.textContent= ' ';

let thEl2;
for (let index = 0; index < hours.length; index++) {
    thEl2= document.createElement('th');
    trEl.appendChild(thEl2);
    thEl2.textContent= hours[index];
}
let thEl3 =document.createElement('th');
trEl.appendChild(thEl3);
thEl3.textContent= 'daily Sails';

}
header();

Cookie.prototype.render=function (){

    let tr2 =document.createElement('tr');
    table.appendChild(tr2);
    let th4 = document.createElement('th');
    tr2.appendChild(th4);
    th4.textContent = this.location;

    for (let i = 0; i < hours.length; i++) {
       this.cookieperhour.push(getRandomIntInclusive(this.min,this.max))*this.avg;
       this.dailysails += this.cookieperhour[i];
       totalArr[i] += this.cookieperhour[i];

       let td1 = document.createElement('td');
       tr2.appendChild(td1);
       td1.textContent=this.cookieperhour[i];
        }
        let td2 = document.createElement('td');
        tr2.appendChild(td2);
        td2.textContent=this.dailysails;
}
// render();

let seattle = new Cookie('seattle',23,65,6.3);
seattle.render();

function footer(){
 let globalTotal = 0;
 
 let tr3 = document.createElement('tr');
 table.appendChild(tr3);
 let th5 = document.createElement('th');
 tr3.appendChild(th5);
 th5.textContent= 'Total';

 let td3; 
 for (let x = 0; x < seattle.cookieperhour.length; x++) {
     td3 = document.createElement('td');
     tr3.appendChild(td3);
     td3.textContent= totalArr[x];
     
     
 }
}
footer();


