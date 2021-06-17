import axios from "axios";

export default class JobTitleService {

    #baseUrl = process.env.REACT_APP_API_URL + "job-titles";

    getAll() {
        return axios.get(this.#baseUrl);
    }

    add(jobTitle) {
        return axios.post(this.#baseUrl, jobTitle);
    }

}