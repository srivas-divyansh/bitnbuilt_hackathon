import { useEffect } from "react";

function Model({setOpenModel, contract}) {
    const sharing = async() => {
        const address = document.querySelector(".address").value;
        await contract.allow(address);
        alert("Shared");
    }
    useEffect(() => {
        const accessList = async() => {
            const addressList = await contract.shareAccess();
            let select = document.querySelector(".selectNumber");
            const options = addressList;
            // console.log(options.length);
            for (let i = 0;i < options.length;i++){
                let opt = options[i];
                // console.log(opt);
                let e1 = document.createElement("option");
                e1.textContent = opt;
                // e1.value = opt;
                select.appendChild(e1);
            }
        }
        contract && accessList();
    }, [contract]);
    return (
        <>
            <h3>Share with</h3>
            <input type='text' className="address" />
            <br />
            <br />
            <form>
                <select className="selectNumber">
                    <option className="address">People with Access</option>
                </select>
            </form>
            <br />
            <button onClick={() => {setOpenModel(false)}} id = 'cancelbtn'>Cancel</button>
            <br />
            <br />
            <button onClick={sharing}>Share</button>
        </>
    )
}

export default Model;