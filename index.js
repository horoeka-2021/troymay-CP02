const cowsay = require('cowsay')

const cowTalk = cowsay.say({
    text : "My first mooooo moooodule",
    e : "oO",
    T : "WW "
})

console.log(cowTalk)

// or cowsay.think()