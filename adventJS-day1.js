
const gifts = ['book', 'game', 'socks', 'toys']
const wrapped = wrapping(gifts)

console.log(wrapped)


function wrapping(gifts) {
    trineo = []
    for (let i=0; i < gifts.lengt; ++i) {
        let jugueteEnvuelto = `****${gifts[i]}****`
        trineo.push(jugueteEnvuelto)
    }
    
    
    return trineo
}