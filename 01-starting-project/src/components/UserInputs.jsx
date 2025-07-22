
function inputs(userData, setUserData, defaultValues){
    let inputs = []
    for (let index = 0; index < defaultValues.length; index += 2) {
        const key1 = defaultValues[index][0].toLowerCase() + defaultValues[index].slice(1).replace(/\s+/g, '');
        const key2 = defaultValues[index+1][0].toLowerCase() + defaultValues[index+1].slice(1).replace(/\s+/g, '')

        inputs.push(
            <div className="input-group" key={index}>
                <div>
                    <label htmlFor="amount">{defaultValues[index]}</label>
                    <input type="number" id={key1} value={userData[key1]} onChange={e =>
                        setUserData({...userData, [key1]: +e.target.value})
                    } />
                </div>
                <div>
                    <label htmlFor="amount">{defaultValues[index+1]}</label>
                    <input type="number" id={key2} value={userData[key2]} onChange={e =>
                        setUserData({...userData, [key2]: +e.target.value})
                    } />
                </div>
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