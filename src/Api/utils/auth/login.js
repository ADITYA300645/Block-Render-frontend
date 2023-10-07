const { default: axios } = require("axios");

async function login(AccountNo, Name, Email) {
    var sol = await axios.post("http://localhost:8080/auth/login");
    console.log(sol);
    console.log(sol.data);
}
export default login;
