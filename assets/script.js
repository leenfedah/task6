fetch("https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/")
.then (res=>res.json())
.then (res=>first(res))

let Div = document.getElementById('root')
function  first(res){
    console.log(res);


    for(let index=42; index < res.length ;index++){
    Div .innerHTML += `
    <div class="card" >
    <img style="width:200px;" src="${res[index].simple_thumb}"/>
    <h3>${res[index].title}</h3>
    <span>${res[index].author}</span>
    </div>

    `
}
}
fetch("https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/")
.then (res2=>res2.json())
.then (res2=>second(res2))

let Div2 = document.getElementById('root2')
function  second(res2){
    console.log(res2);


    for(let index=0; index < 8 ;index++){
    Div2 .innerHTML += `
    <div class="card2" >
    <img style="width:200px;" src="${res2[index].simple_thumb}"/>
    <h3>${res2[index].title}</h3>
    <span>${res2[index].author}</span>
    </div>

    `
}
}
fetch("https://wolnelektury.pl/api/books/studnia-i-wahadlo/")
.then(res3=>res3.json())
.then(res3=>third(res3))
let Div3 = document.getElementById('root3')
function  third(res3){
    console.log(res3);


    
    Div3 .innerHTML = `
    <div class="card3" >
    <img style="width:300px;" src="${res3.simple_thumb}"/>
    </div>
    
    `
}

