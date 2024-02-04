import { useState } from "react";
function Display({ contract, account }) {
    const [data, setData] = useState("");
    const getData = async () => {
        try {
            let dataArray;
            const otherAddress = document.querySelector(".address").value;
            if (otherAddress) {
                dataArray = await contract.display(otherAddress);
                console.log(dataArray);
            } else {
                // console.log(await contract.display(account[0]));
                dataArray = await contract.display(account[0]);
                console.log(dataArray);
            }
            const isEmpty = Object.keys(dataArray).length === 0;
            console.log(isEmpty);
            if (!isEmpty) {
                const str = dataArray.toString();
                const str_array = str.split(",");
                console.log(str);
                console.log(str_array);
            }
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <>
            <div>Image Display</div>
            <br />
            <br />
            <input type='text' placeholder="Enter Address" className="address" />
            <br />
            <br />
            <button onClick={getData}>Get Data</button>
        </>
    )
}

export default Display;