import axios from "axios"

export default class EmployeeService {

    #baseUrl = process.env.REACT_APP_API_URL + "employees";

    getAll(){
        return axios.get(this.#baseUrl);
    }
}