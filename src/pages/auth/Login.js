import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginService from "../../services/loginService";
import {
  Form,
  ButtonToolbar,
  Button,
  Schema,
  FormGroup,
  ControlLabel,
  FormControl,
} from "rsuite";
 

const { StringType } = Schema.Types;
const model = Schema.Model({
  password: StringType().isRequired("Şifre gerekli."),
  email: StringType()
    .isEmail("Lütfen gerçek bir email adresi girin")
    .isRequired("Email gerekli."),
});

function TextField(props) {
  const { name, label, accepter, ...rest } = props;
  return (
    <FormGroup>
      <ControlLabel style={{ textAlign: "center" }}>{label} </ControlLabel>
      <FormControl name={name} accepter={accepter} {...rest} />
    </FormGroup>
  );
}

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const history = useHistory();
   function login(email, password) {
     let loginService = new LoginService();
     loginService.login(email, password).then((result) => {
       localStorage.setItem("userId", result.data.data.user.id);
       localStorage.setItem("userName", result.data.data.user.email)
       if (result.data.data.companyName) {
         localStorage.setItem("userType", "employer");
      } else if (result.data.data.nationalIdentity) {
        localStorage.setItem("userType", "jobSeeker");
       } else {
         localStorage.setItem("userType", "systemPersonel");
       }
      history.push("/");
       window.location.reload();
    });
   }
  return (
    <div align="center">
      <Form style={{ marginTop: "10%", width: "50%" }} fluid model={model}>
        <TextField
          name="email"
          label="Email"
          error={""}
          type="email"
          block="true"
          value={email}
          onChange={(value) => setEmail(value || "")}
        />
        <TextField
          name="password"
          label="Password"
          error={""}
          type="password"
          value={password}
          onChange={(value) => setPassword(value || "")}
        />
        <ButtonToolbar>
          <Button
            color={"blue"}
            type="submit"
             onClick={() => login(email, password)}
            size={"lg"}
            block="true"
          >
            Giriş
          </Button>
        </ButtonToolbar>
      </Form>
    </div>
  );
};

export default Login;