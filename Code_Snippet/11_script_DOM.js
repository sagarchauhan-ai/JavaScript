const bg = ()=>{
    document.body.firstElementChild.style.backgroundColor = "grey"
}
let b = document.getElementsByTagName('div')[0]
console.log("First child of b is :", b.firstChild)
console.log("First element child of b is :", b.firstElementChild)
bg()


// let t = document.body.firstElementChild.firstElementChild
// console.log(t)
// console.log(t.rows)
// console.log(t.caption)
// console.log(t.tHead)
// console.log(t.Foot)
// console.log(t.tBodies)
// console.log(t.rows.cells)
// console.log(t.rows.sectionRowIndex)
// console.log(t.rows[1].rowIndex)

let x = document.getElementsByTagName('div')[2]
x.innerHTML = x.innerHTML + '<h1>Hello World</h1>'

let div = document.createElement('div') 
div.innerHTML = '<h1>Element Created</h1>'

// x.append(div)
// x.prepend(div) 
// x.after(div)
// x.before(div)
// x.replaceWith(div)

// b.insertAdjacentElement( 'beforebegin', div )
// b.insertAdjacentElement( 'beforeend', div )
// b.insertAdjacentElement( 'afterbegin', div )
// b.insertAdjacentElement( 'afterend', div )
// b.remove(div)





