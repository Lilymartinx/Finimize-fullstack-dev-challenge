import { Request, Response } from 'express';
import { calculateProjectionHistory, calculateSpecificProjection } from '../utils/compoundInterest';

export const getProjection = (req: Request, res: Response) => {

    const { initial, monthlyDeposit, interestRate, totalYears, yearsRequested, monthsRequested } = req.query;

    const result = calculateProjectionHistory(
        Number(initial),
        Number(monthlyDeposit),
        Number(interestRate),
        Number(totalYears),
    );

    const response = {
        xAxis: Array.from({ length: result.history.length }, (_, i) => i.toString()),
        yAxis: result.history.map((v) => v.toFixed(2)),
    };

    res.json(response);
};

export const getSpecificProjection = (req: Request, res: Response) => {

    const { initial, monthlyDeposit, interestRate, totalYears, yearsRequested, monthsRequested } = req.query;

    const totalMonthsRequested = Number(yearsRequested) * 12 + Number(monthsRequested);

    const result = calculateSpecificProjection(
        Number(initial),
        Number(monthlyDeposit),
        Number(interestRate),
        totalMonthsRequested
    );

    const response = {
        total: result.totalValueRequested,
        gain: result.interestGainRequested,
    };

    res.json(response);
};
