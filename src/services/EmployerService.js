import axios from "axios";

export default class EmployerService {

    #baseUrl = process.env.REACT_APP_API_URL + "employers";

    getAll() {
        return axios.get(this.#baseUrl);
    }

    getJobAdvertisements() {
        // TODO jwt gönderilecek, id ye gerek kalmayacak
        return axios.get(`${this.#baseUrl}/1/job-advertisements`);
    }

    register(employer) {
        return axios.post(this.#baseUrl, employer);
    }

}