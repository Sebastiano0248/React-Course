import { calculateInvestmentResults, formatter } from "../util/investment.js"

function Results({userData, defaultValues}){
    let values = []
    for (let index = 0; index < defaultValues.length; index += 1) {
        const attribute = defaultValues[index][0].toLowerCase() + defaultValues[index].slice(1).replace(/\s+/g, '');
        values.push(userData[attribute])
    }
    
    let results = calculateInvestmentResults(userData)
    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
    
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {
                    results.map((row, idx) => {
                        const totalInterest = row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment;
                        const totalAmountInvested = row.valueEndOfYear - totalInterest
                        return (
                            <tr key={idx}>
                                <th>{row.year}</th>
                                <th>{formatter.format(row.valueEndOfYear)}</th>
                                <th>{formatter.format(row.interest)}</th>
                                <th>{formatter.format(totalInterest)}</th>
                                <th>{formatter.format(totalAmountInvested)}</th>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default Results