
export function index(req, res, next) {
    var value = req.query.num;
    var error_msg = "Please provide a positive number";
    var errors = [];
    var return_list = [];

    if (req.query.num === undefined) {
        value = '';
        errors.push(error_msg);
    } else if (req.query.num.length == 0 || isNaN(req.query.num)) {
        errors.push(error_msg);
    } else if (req.query.num < 0) {
        errors.push(error_msg);

    } else {
        return_list = get_median_primes(value);
    }
    var value_list = { num: value, list: return_list, errors: errors };
    res.json(value_list);
};

export function get_median_primes(value) {
    var prime_list = get_all_primes(value);
    var return_list = get_median(prime_list);
    return return_list;
}

//get a list of prime numbers up to value
export function get_all_primes(value) {
    //allow floats
    value = Math.ceil(value);
    //generate a list of booleans representing all integers less than value
    //by default, even numbers > 2 are not prime, so they're set to false
    var default_list = [];
    for (var i = 0; i < value - 1; i++) {
        if ((i + 1 > 2) && ((i + 1) % 2 == 0)) {
            default_list.push(false);
        } else {
            default_list.push(true);
        }
    }
    default_list[0] = false; //1 isn't a prime number
    
    //list containing all prime numbers up to value
    var prime_list = [];

    //base cases
    if (default_list.length < 2) {
        return prime_list;
    } else {
        prime_list.push(2);
    }

    //add primes to the list and mark their multiples as false
    for (var j = 2; j < Math.sqrt(default_list.length); j += 2) {
        if (default_list[j] == true) {
            for (var k = Math.pow((j + 1), 2) - 1; k < default_list.length; k += j + 1) {
                default_list[k] = false;
            }
            prime_list.push(j + 1); 
        }
    }

    //at this point, j >= sqrt(value)
    //this loop looks for primes >= sqrt(value)
    for (var l = j; l < default_list.length; l++) {
        if (default_list[l] == true) {
            prime_list.push(l + 1);
        }
    }

    return prime_list;
}

//Get the median of a list
export function get_median(prime_list) {
    var median_list = [];
    if (prime_list.length > 0) {
        median_list.push(prime_list[Math.floor((prime_list.length - 1) / 2)]);
        if (prime_list.length % 2 == 0) {
            median_list.push(prime_list[Math.floor((prime_list.length - 1) / 2) + 1]);
        }
    }
    return median_list;
}