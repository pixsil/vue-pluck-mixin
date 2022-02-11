// version 1
module.exports = {

    methods: {
        pluck(array, value, key = null) {

            // if is an object cast it
            if (typeof array == 'object') {

                // make array
                array = Object.values(array)
            }

            if (key != null) {

                // last character will be used as init, in this case an object. init will be set in acc wish is first param
                return array.reduce(function(o, val) { o[val[key]] = val[value]; return o; }, {});
            } else {

                // last character will be used as init, in this case an array. init will be set in acc wish is first param
                return array.reduce(function(a, val) { a.push(val[value]); return a}, []);
            }
        },
    }
}
