let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");
    if (typeof(a) != null && typeof(b) != null && a != '' && b != '') {
        console.log('Done %d!', i);
        appData.expenses[a] = b;
    }
}
appData.moneyPerDay = appData.money / 30;
alert(appData.moneyPerDay);