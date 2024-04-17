#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
    USD: 1,
    EUR: 0.94,
    GBP: 0.80,
    PKR: 277.30, 
    JPY: 0.88,
    AED: 3.67,
    CAD: 1.24,
    CHF: 1.00,
    CNY: 6.58,
    CZK: 20.00,
    DKK: 6.75,
    EGP: 17.00,
    HKD: 7.75,
    HRK: 6.74,
    HUF: 30.00,
    IDR: 14.00,
    ILS: 4.00,
    INR: 7.00,
    ISK: 12.00,
    KRW: 11.00,
    MXN: 20.00,
    MYR: 4.00,
    NOK: 9.00,
    NZD: 1.50,
    PHP: 5.00,
    PLN: 4.00,
    RON: 4.00,
    RUB: 7.00,
    SEK: 9.00,
    SGD: 1.50,
    THB: 30.00,
    TRY: 4.00,
    ZAR: 15.00,
    AUD: 0.71

}

let user_answer = await inquirer.prompt(
    [
        {
            name: "from",
            type: "list",
            message: "Which currency do you want to convert from?",
            choices: ["USD", "EUR", "GBP", "PKR", "SGD", "THB", "TRY", "ZAR", "AUD", "INR", 'ISK', 'KRW', 'MXN','MYR', 'NOK', 'NZD', 'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'EGP', 'HKD','HRK', 'HUF', 'IDR', 'ILS', 'JPY', 'AED']
        },
        {
            name: "to",
            type: "list",
            message: "Which currency do you want to convert to?",
            choices: ["USD", "EUR", "GBP", "PKR", "SGD", "THB", "TRY", "ZAR", "AUD", "INR", 'ISK', 'KRW', 'MXN','MYR', 'NOK', 'NZD', 'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'EGP', 'HKD','HRK', 'HUF', 'IDR', 'ILS', 'JPY', 'AED']
        },
        {
            name: "amount",
            type: "number",
            message: "Enter the amount do you want to convert"
        }
    ]
)

let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount_M = user_answer.amount;
let baseAmount = amount_M / fromAmount;
let convertedAmount = baseAmount * toAmount;


console.log(convertedAmount);