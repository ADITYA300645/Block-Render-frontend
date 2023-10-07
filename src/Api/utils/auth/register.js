const { default: axios } = require("axios");

async function register(AccountNo) {
    var sol = await axios.post("http://localhost:8080/auth/register", {
        AccountNo,
    });
    console.log(sol);
    console.log(sol.data);
    return sol;
}
export default register;
