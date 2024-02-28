
function createId(
    length= 24,    
    base=16,
    characters="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
){

    const str = characters.slice(0, base);

    const startNum = new Date().valueOf();
    var id = startNum.toString(base);

    while(id.length < length){
        id += str[Math.floor(Math.random() * str.length)];
    }

    return `0${characters[base]}${id}`;
}

module.exports = createId;