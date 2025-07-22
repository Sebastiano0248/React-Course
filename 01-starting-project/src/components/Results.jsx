function Results({userData, defaultValues}){
    let values = []
    for (let index = 0; index < defaultValues.length; index += 1) {
        const attribute = defaultValues[index][0].toLowerCase() + defaultValues[index].slice(1).replace(/\s+/g, '');
        values.push(userData[attribute])
    }
    
    return (
        <div id="result">
            {
                values.map(value => <p>{value}</p>)
            }
        </div>
    );
}

export default Results