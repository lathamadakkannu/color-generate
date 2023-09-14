let colour=["Blue","Black","Green","Yellow","Red","Orange","White","Pink","Brown","Grey"];

let collection=document.getElementById("collection")
console.log(collection);

let btn=document.getElementById("btn")
console.log(btn);

let list=document.createElement("li")
        list.style.color="red"
        collection.append(list);
        console.log(list);

btn.addEventListener('click',generate);
function generate(){
    colour.forEach(function(){
        
        let result=(Math.floor(Math.random()*colour.length))
        list.innerHTML=colour[result];
        console.log(result);
        })
}

    