import axios from "axios";

export default class Register {
  registerEmployer(email, password, phone, companyName, webSites) {
    return axios.post("http://localhost:90/api/auth/register-employer", {
      email: email,
      password: password,
      r_pass: password,
      phone: phone,
      companyName: companyName,
      webSites: webSites,
    });
  }

  registerJobSeeker(
    email,
    password,
    firstName,
    lastName,
    birthDate,
    nationalId
  ) {
    return axios.post("http://localhost:8080/api/auth/registerJobSeeker", {
      email: email,
      password: password,
      
      firstName: firstName,
      lastName: lastName,
      birthDate: birthDate,
      nationalId: nationalId,
    });
  }
}