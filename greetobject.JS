const greet = require('./greet.js');
const goodbye = require('./goodbye.js')
const nameObj = {
    name1: "james",
    name2: "kyoka",
    name3: "simp",
    name4: "cooligan",
    name5: "grant"
}
function people(obj) {
    for (let name in obj) {
        greet(obj[name]);
        goodbye(obj[name]);
    }

};
