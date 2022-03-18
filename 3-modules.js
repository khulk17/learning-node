// CommonJS , every file is module (by default )
// Modules - Encapsulated code (only share minimum OR We are only sharing the code which is needed only)
const sayi = require("./5-utils")
const names = require("./4-names")
const data = require('./6-alternative flavor');
sayi("keerthi"); 
require('./7-mind-grenade');
sayi(names.keerti);
sayi(names.kiran);
sayi(data.items);
sayi(data.singlePerson.name);  