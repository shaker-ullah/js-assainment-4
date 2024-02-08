function calculateMoney(tickerSale) {
    const perTicketPrice = 120;
    const securityBill = 500;
    const stapBill = 50;
    const stapCount = 8;

    if (tickerSale < 0) {
        return 'Please give me a positive number'
    }

    const totalTicketSell = tickerSale * perTicketPrice;
    const stapCast = stapCount * stapBill;
    const totalCast = stapCast + securityBill;
    const bakerHas = totalTicketSell - totalCast;
    return bakerHas;
}

const total = calculateMoney(10)
console.log(total)




// 2 number

function checkName(name) {
    const first = 'a'
    const second = 'y'
    const third = 'i'
    const fourth = 'e'
    const fifth = 'o'
    const sixth = 'u'
    const seventh = 'w'

    if (typeof name !== 'string') {
        return 'please give me a string'
    }
    else {
        if ((name[name.length - 1] === first) || (name[name.length - 1] === second) || (name[name.length - 1] === third) || (name[name.length - 1] === fourth) || (name[name.length - 1] === fifth) || (name[name.length - 1] === sixth) || (name[name.length - 1] === seventh)) {
            return 'good name'
        }
        else {
            return ' bad name'
        }
    }


}

const check = checkName('shakera')
console.log(check)


// 3 number

const numbers = [2, 5, 3,'5', 'NaN', 'undefined', 100, 6,-2]

function deleteInvalids(array) {
    const newArr = [];
    if (Array.isArray(array) === false) {
        return 'you should give an array'
    }
    else {
        for (const num of array) {
            // console.log(num)
            if (typeof num === 'number') {
                newArr.push(num)
            }      
        }
    }

    return newArr
}

const number = deleteInvalids(numbers)
console.log(number)


// 4 number

const createPass = {
    name: 'shaker',
    birthYear: '1999',
    siteName: 'google'
}


function password(generatePassword) {

    if (generatePassword.name === 'undefined') {
        return 'Give a Object'
    }
    else if (generatePassword.birthYear.length < 4) {
        return 'Invalid Birth Year'
    }
    else {
        return generatePassword.name+'#'+generatePassword.siteName+'@'+generatePassword.birthYear
    }
    }

  

const create = password(createPass);
console.log(create)

