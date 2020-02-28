console.log('ITEMS'. items)

/*
.forEach
.map
.filter
.reduce
*/

1)
var avg = items.reduce(function(a,b){
    return a + b.price
}, 0)/items.length

    items.reduce((a,b)) => a + b.price)/items.lenghth

})

2)
var between = items.filter(function(item){
    return item.price > 14 && item.price < 18
}) item.map(function(item){
    return item.title
}) .joint('\n\n')

3)
var gbp = items.filter(function(item){
    return item.currencyCode === "GBP"
    [0]
})

4)
var madeOfWood = items
.filter(function(item){
    return  item.materials.includes('wood')
})
.map(function(item) {
    return item.title
}) .join("\n\n")

[1,2,3].forEach(function(item){
    console.log('function called')
    console.log(item)
})

/*var between = items.filter(function(item)) {
    return item.price > 14 && item.price < 18
} .map(function(item) {
    return item.title
})
document.querySelector("#answer2").innnerHTML=*/


var code = items

var currencycode = code.filter(function (items){
    return item.name, item.price (item === "GBP")
})


