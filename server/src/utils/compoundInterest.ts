// function to retrieve projection values over span of years
export function calculateProjectionHistory(
    initial: number,
    monthlyDeposit: number,
    interestRate: number,
    years: number,
  ) {
    const monthlyRate = interestRate / 100 / 12;
    let balance = initial;
    const history: number[] = [Number(initial.toFixed(2))];
  
    for (let i = 1; i <= years; i++) {

        // add interest to each months deposit
        for (let j = 0; j < 12; j++) {
            balance += monthlyDeposit;
            balance *= 1 + monthlyRate;
        }

        // push final value after the year to the history
        history.push(Number(balance.toFixed(2)));
    }
  
    return {
      history,
    };
}

// function to retrieve projection for specific time period
export function calculateSpecificProjection (
    initial: number,
    monthlyDeposit: number,
    interestRate: number,
    monthsRequested: number
) {
    const monthlyRate = interestRate / 100 / 12;
    let balance = initial;
  
    for (let i = 1; i <= monthsRequested; i++) {

        // add interest to each months deposit
        balance += monthlyDeposit;
        balance *= 1 + monthlyRate;
    }

    // calculate total balance and interest gain at specific time point
    const totalContributions = initial + monthlyDeposit * monthsRequested;
    const interestGain = Number((balance - totalContributions).toFixed(2));

    return {
        totalValueRequested : balance.toFixed(2),
        interestGainRequested :  interestGain.toFixed(2),
    };
}
  