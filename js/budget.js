function playersExpenses() {
    //To get per player expense
    const perPlayerCost = getInputFieldValueById('per-player-cost');

    //To get selected favorite footballer's number(1 to 5)
    const favoriteFootballers = document.getElementById('favorite-five');
    //To calculate player expenses
    const playersTotalExpenses = perPlayerCost * favoriteFootballers.childElementCount;

    return playersTotalExpenses;
}

document.getElementById('btn-calculate').addEventListener('click', function () {
    //To get total players expenses
    const playersTotalExpenses = playersExpenses();
    //To set total players expenses
    setElementValueById('players-total-expenses', playersTotalExpenses);
})

document.getElementById('btn-calculate-total').addEventListener('click', function () {
    //To get manager expense
    const managerCost = getInputFieldValueById('manager-cost');

    //To get coach expense
    const coachCost = getInputFieldValueById('coach-cost');

    //To calculate grand total expenses
    const grandTotalExpenses = playersExpenses() + managerCost + coachCost;

    //To set grand total expenses
    setElementValueById('grand-total', grandTotalExpenses);
})