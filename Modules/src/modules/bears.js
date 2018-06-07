// Define what you want requiring

// A first way
// Just return String object
module.exports.strBears = 'bears!';

// A second way
// Note:
// At the moment we used a class instance
module.exports.classBears = function() {
    var phrase = 'bears!';

    return {
        sayBears: function() { return phrase; }
    };
}();