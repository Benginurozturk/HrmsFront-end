import axios from "axios";

export default class JobSeekerService {

    #baseUrl = process.env.REACT_APP_API_URL + "job-seekers";

    getAll() {
        return axios.get(this.#baseUrl);
    }

    register(jobSeeker) {
        return axios.post(this.#baseUrl, jobSeeker);
    }
}