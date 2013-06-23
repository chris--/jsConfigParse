function parseOptions(_options, _defaults, _mandatory) {
    function checkMandatory(_options, _mandatory) {
        for (var val in _mandatory) {
            if (!_options[val]) {
                return false;
            } else if (_mandatory[val] instanceof Object) {
                // use recursion to deep equal
                return checkMandatory(_options[val], _mandatory[val]);
            }
        }
        return true;
    }
    function setDefaults(_options, _defaults) {
        for (var val in _defaults) {
            if (_defaults[val] instanceof Object) {
                // use recursion to deep equal
                _defaults[val] = setDefaults(_options[val], _defaults[val]);
            } else {
                _defaults[val] = _options[val] || _defaults[val];
            }
        }
        return _defaults;
    }
    if(!checkMandatory(_options, _mandatory)) throw Error();
    return setDefaults(_options, _defaults);
}