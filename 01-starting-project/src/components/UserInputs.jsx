
function inputs(userData, setUserData, defaultValues){
    let inputs = []
    for (let row = 0; row < defaultValues.length; row += 2) {
        let subinputs = []
        for (let col = 0; col < 2; col += 1) {
            const key = defaultValues[row+col][0].toLowerCase() + defaultValues[row+col].slice(1).replace(/\s+/g, '');
            subinputs.push(
                <div key={row.toString()+"_"+(col).toString()}>
                    <label htmlFor="amount">{defaultValues[row]}</label>
                    <input type="number" id={key} value={userData[key]} onChange={e =>
                        setUserData({...userData, [key]: +e.target.value})
                    } />
                </div>
            )
        }

        inputs.push(
            <div className="input-group" key={row}>
                {subinputs.map((columna) => (columna))}
            </div>
        )
    }
    return inputs
}

function UserInputs({userData, setUserData, defaultValues}) {
  return (
    <div id="user-input">
        {inputs(userData, setUserData, defaultValues).map((fila) => (fila))}
    </div>
  );
}

export default UserInputs;