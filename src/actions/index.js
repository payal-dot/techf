import axios from "axios";

export const checkUser = data => test => {
    axios
        .post("http://localhost:9000/api/checkUser", data)
        .then((data) => {
            test({
                type: "SET_CURRENT_USER",
                payload: data.data
            });
            console.log(data);
        })
        .catch(console.log);
}