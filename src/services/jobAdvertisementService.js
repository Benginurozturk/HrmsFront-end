import axios from "axios";

export default class JobAdvertisementService {

    #baseUrl = process.env.REACT_APP_API_URL + "job-advertisements";

    getAll() {
        return axios.get(this.#baseUrl);
    }

    add(jobAdvertisement) {
        return axios.post(this.#baseUrl, {jobTitleId: 1, ...jobAdvertisement});
    }

    setActivation(id, isActive) {
        return axios.patch(`${this.#baseUrl}/${id}/activation`, {isActive});
    }

}