const calculator = (function() {
    return {
        add: function(a, b) {
            return a + b;
        },
        multiply: function(a, b) {
            return a * b;
        }
    }
})();

const spriteHelpers = (function() {
    return {
        loadFile: function(filename) {
            return filename;
        },
        setPoint: function(x, y) {
            return {x: x, y: y}
        }
    }
})();

let sprite = {
    sheet: spriteHelpers.loadFile('test.png'),
    point: spriteHelpers.setPoint(20, 30),
}

console.log(calculator.add(4, 3));
console.log(sprite.point);
console.log(sprite.sheet);