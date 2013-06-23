var assert = require('assert');

var options_only_mandatory = {
    canvasId: 'tes',
    renderer: {
        svg: 1
    }
};

var options_defaults_changed = {
    canvasId: 'tes',
    width: 9,
    renderer: {
        svg: 1
    }
};

var options_deep_defaults_changed = {
    canvasId: 'tes',
    width: 9,
    renderer: {
        svg: 1,
        fps: 9
    }
};

var options_mandatory_not_set = {
    width: 9,
    renderer: {
        svg: 1,
        fps: 9
    }
};

var options_deep_mandatory_not_set = {
    canvasId: 'tes',
    width: 9,
    renderer: {
        fps: 9
    }
};

var defaults = {
    width: 10,
    renderer: {
        fps: 10
    },
    somethingElse: 'dsa'
};

var mandatory = {
    canvasId: null,
    renderer: {
        svg: null
    }
};

// assert options_only_mandatory
var options = parseOptions(options_only_mandatory, defaults, mandatory);
assert.equal(options.canvasId, defaults.options_only_mandatory);
assert.equal(options.width, defaults.width);

// assert options_defaults_changed
options = parseOptions(options_defaults_changed, defaults, mandatory);
assert.equal(options.width, options_defaults_changed.width);

// assert options_deep_defaults_changed
options = parseOptions(options_deep_defaults_changed, defaults, mandatory);
assert.equal(options.renderer.fps, options_deep_defaults_changed.renderer.fps);

// assert options_mandatory_not_set throws error
assert.throws(function(){
    parseOptions(options_mandatory_not_set, defaults, mandatory);
}, Error);

// assert options_deep_mandatory_not_set throws error
assert.throws(function(){
    parseOptions(options_deep_mandatory_not_set, defaults, mandatory);
}, Error);