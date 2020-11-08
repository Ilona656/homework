function makeLoud(str) {
    return str.toUpperCase()

}

function capsify(names) {
    const bigNames = names.map(makeLoud)

    return bigNames
}
 const myNames = ['Ilona', 'Tanja']

 console.log(capsify(myNames))