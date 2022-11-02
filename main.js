let messWith = document.querySelector('.mess-with-me')
messWith.style.fontsize = '40px'

let paraMess = document.querySelector('p.mess-with-me')
paraMess.style.background = "green";

let secondDino = document.querySelector('#hide-me')
secondDino.style.display = 'none'

let firstDino = document.querySelector('#triceratops')
firstDino.style.width = '324px'

let feathers = document.querySelector('#feathers')

messWith.addEventListener('click', function(){
    messWith.style.color = 'orange';
})

firstDino.addEventListener('click',function(){
    firstDino.style.border = '4px solid red'
})

feathers.addEventListener('click', function(){
    feathers.style.opacity = '.5'
})

let row = document.querySelector('#row')
let switchColor = document.querySelector('#toggle')
switchColor.addEventListener('click', function(){
    if (row.style.backgroundColor === ''){
        row.style.backgroundColor = 'gray';
    }    else{
        row.style.backgroundColor = ''
    
    }
})


let biggify = document.querySelector('#biggify')
biggify.addEventListener('mousemove',function(){
    if(biggify.style.width === ''){
        biggify.style.width = '200px';
}       else{
    biggify.style.width = ''
    }
})
