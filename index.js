
    const userInput = prompt("Submit a list of comma seperated froyo flavors:", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");


const flavorArray = userInput.split(",");
console.log(getOrder(flavorArray));

function getOrder(flavors) {
const froyoOrder = {};
for (const flavor of flavors) {
    if (flavor in froyoOrder) {
        froyoOrder[flavor] += 1;
    } else {
        froyoOrder[flavor] = 1;
    }
}
return froyoOrder; 
}