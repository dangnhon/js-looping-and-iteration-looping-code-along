// Code your solutions in this file
function writeCards(arrayNames, event) {
    let messages = [];
    for (let i = 0; i < arrayNames.length; i++) {
        messages.push(`Thank you, ${arrayNames[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

function countDown(number) {
    let i = -1; 
    while (number > i) {
        console.log(number --);
    }
}