var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

var firstAnswer = prompt("Введите обязательную статью расходов в этом месяце");
var secondAnswer = prompt("Во сколько обойдется?");
appData.expenses.firstAnswer = secondAnswer;

var clearMoney = appData.money - appData.expenses.firstAnswer;
alert(clearMoney/30);