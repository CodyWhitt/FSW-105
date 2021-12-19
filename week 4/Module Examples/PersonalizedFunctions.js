function capitalizeName(a){
    b = a.slice(0, 1)
    b = b.toUpperCase()
    a = a.slice(1)
    console.log(b + a)
}

function welcome(a){
    b = ("Hey there ")
    c = ("! Welcome home!")
    console.log(b + a + c)
}

module.exports = {
    welcome,
    capitalizeName
} 