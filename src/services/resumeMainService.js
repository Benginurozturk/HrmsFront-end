import axios from "axios";

export default class ResumeMainService {

    // TODO resumeMainId yerine jwt gönderilecek, api resumeMainId'ye token'den ulaşacak

    #getBaseUrl(resumeMainId) {
        return process.env.REACT_APP_API_URL + `resume-Mains/${resumeMainId}/resumeMain`;
    }

    getByResumeMainId(resumeMainId) {
        return axios.get(this.#getBaseUrl(resumeMainId));
    }

    add(resumeMainId, resumeMain) {
        return axios.post(this.#getBaseUrl(resumeMainId ), resumeMain);
    }

    addResumeEducation(resumeMainId,  resumeEducation) {
        return axios.post(`${this.#getBaseUrl(resumeMainId)}/resume-educations`,  resumeEducation);
    }

    addResumeExperience(resumeMainId, resumeExperience) {
        return axios.post(`${this.#getBaseUrl(resumeMainId)}/resume-experiences`, resumeExperience);
    }

    addResumeSkill(resumeMainId, resumeSkill) {
        return axios.post(`${this.#getBaseUrl(resumeMainId)}/resume-skills`, resumeSkill);
    }

    addResumeLanguage(resumeMainId, resumeLanguage) {
        return axios.post(`${this.#getBaseUrl(resumeMainId)}/resume-languages`, resumeLanguage);
    }

    uploadPhoto(resumeMainId, resumeImage) {
        return axios.post(`${this.#getBaseUrl(resumeMainId)}/resume-images`, resumeImage);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/resumeMains/getall")
    }
}