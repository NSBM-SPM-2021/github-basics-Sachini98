import axios from "axios";

const instance = axios.create({
    baseURL:"https://chemistryclass-backend.herokuapp.com",
});


export default instance;
