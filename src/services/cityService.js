import axios from "axios";

export default class CityService {

    #baseUrl = process.env.REACT_APP_API_URL + "cities";

    getAll() {
        return axios.get(this.#baseUrl);
    }

}