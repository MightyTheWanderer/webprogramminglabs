/**
 * TODO: Fix this function to protect `name` and `state` so that
 *       we cannot modify them from outside the `next` method.
 *       When you are done the `next` method will be a closure.
 * HINT: Use local variables `_name` and `_state` to store the name and state.
 *       Also remove any references to`this` and use the bound variables instead.
 **/
function makeTrafficLight(name) {
    let _name=name;
    let _state='red';
    let light = {
        next: function () {
            switch (_state) {
                case 'red':
                    _state = 'green';
                    break;
                case 'green':
                    _state = 'yellow';
                    break;
                case 'yellow':
                    _state = 'red';
                    break;
                default:
                    throw new Error('why is the state =', _state);
            }
        },
        toString: function () {
            return `${_name} is ${_state}`;
        }
    };
    return light;
}

// NOTE: you shouldn't need to change any of the code below.
try {
    let mainAndFirst = makeTrafficLight('Main Street and First Ave.');

    console.log(mainAndFirst.toString());   // red
    mainAndFirst.next();
    console.log(mainAndFirst.toString());   // green

    mainAndFirst.state = 'purple';          // trouble?
    console.log(mainAndFirst.toString());   // purple???
    mainAndFirst.next();                    // throws an Error
    console.log(mainAndFirst.toString());   // we never get here
    mainAndFirst.next();
    console.log(mainAndFirst.toString());
} catch (error) {
    console.log('ERROR:', error.message);
}
