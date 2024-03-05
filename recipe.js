
function hummus (factor) {
    function ingredient (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += 's';
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    }
    ingredient(1, "can", "chickpeas");
    ingredient(2.5, "bottle", "soysauce");
};

console.log(hummus(3));