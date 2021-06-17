import axios from "axios";

export default class JobTypeService {

    #baseUrl = process.env.REACT_APP_API_URL + "job-types";

    getAll() {
        return axios.get(this.#baseUrl);
    }

}