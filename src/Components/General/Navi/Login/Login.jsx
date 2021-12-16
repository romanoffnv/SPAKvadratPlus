import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Login.css";

export default function Login() {
  //Form validation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [beenToEmail, setBeenToEmail] = useState(false);
  const [beenToPassword, setbeenToPassword] = useState(false);
  const [emailError, setEmailError] = useState(
    "Поле обязательно для заполнения"
  );
  const [passwordError, setpasswordError] = useState(
    "Поле обязательно для заполнения"
  );
  const [formValid, setFormValid] = useState(false);
  //User validation
  const [userValid, setUserValid] = useState(false);
  const [errorUser, setErrorUser] = useState(true);
  const [errorUserMsg, setErrorUserMsg] = useState("");
  const [userName, setUsername] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    if (beenToEmail || beenToPassword) {
      setErrorUserMsg("");
    }
  }, [beenToPassword, beenToEmail]);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const emailCheck = new RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    if (!emailCheck.test(String(e.target.value).toLowerCase())) {
      setEmailError("неправильный формат email");
    } else {
      setEmailError("");
    }
  };

  const passwordHander = (e) => {
    setPassword(e.target.value);
    if (password.length < 3 || password.length > 20) {
      setpasswordError("Длина пароля минимум 4 символа");
      if (!e.target.value) {
        setpasswordError("Введите пароль");
      }
    } else {
      setpasswordError("");
    }
  };
  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setBeenToEmail(true);
        break;
      case "password":
        setbeenToPassword(true);
        break;
    }
  };

  useEffect(() => {
    if (!errorUser) {
      setUserValid(true);
    } else {
      setUserValid(false);
    }
  }, [errorUser]);

  const [data, setData] = useState([
    {
      avatar: "",
      email: "",
      first_name: "",
      id: 0,
      last_name: "",
    },
  ]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://reqres.in/api/users?per_page=12");
        const { data } = await response.json();
        setData(data);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);

  const Login = () => {
    

    let validEmail = data.find((x) => x.email === email);
    let validPass = data.find((x) => x.first_name === password);

    if (validEmail && validPass) {
      console.log("+");
      const userIndex = data.indexOf(validEmail);
      const userNameByIndex = data[userIndex].first_name;
      const userAvaByIndex = data[userIndex].avatar;
      setErrorUser(false);
      setUsername(userNameByIndex);
      setUserAvatar(userAvaByIndex);
    } else {
      setErrorUser(true);
      setErrorUserMsg("Пользователь не зарегистрирован");
      setBeenToEmail(false);
      setbeenToPassword(false);
    }
  };

  const Logout = (e) => {
    e.preventDefault();
    setUserValid(false);
    setErrorUser(true);
    setPassword("");
    setEmail("");
    setBeenToEmail(false);
    setbeenToPassword(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    Login();
  };
  const closeHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setBeenToEmail(false);
    setbeenToPassword(false);
    setEmailError("");
    setpasswordError("");
    setErrorUserMsg("");
    document.querySelector(".loginBlock").style.height = "0";
  };
  return (
    <div className="main">
      <form>
        <div className="entrnanceGroup">
          <h1>Вход</h1>
          <div className="closeButton" onClick={(e) => closeHandler(e)}>
            <i class="fas fa-window-close"></i>
          </div>
        </div>
        {userValid ? (
          <div className = 'loggedInGroup'>
            <img src={userAvatar} />
            <div className = 'greetingLogOut'>
              <p>Мы рады видеть вас снова, {userName}!</p>
              <div className = 'logOutButton' onClick={(e) => Logout(e)}>Выйти</div>
            </div>
          </div>
        ) : (
          <form>
            <div className="inputsMsgs">
              {!userValid && <div className="msgField">{errorUserMsg}</div>}
              {beenToEmail && emailError && (
                <div className="msgField">{emailError}</div>
              )}
              <input
                onChange={(e) => emailHandler(e)}
                value={email}
                onBlur={(e) => blurHandler(e)}
                name="email"
                type="text"
                placeholder="Введите email"
              />
              {beenToPassword && passwordError && (
                <div className="msgField">{passwordError}</div>
              )}
              <input
                onChange={(e) => passwordHander(e)}
                value={password}
                onBlur={(e) => blurHandler(e)}
                name="password"
                type="password"
                placeholder="Введите пароль"
              />

              <button
                className="loginButton"
                disabled={!formValid}
                check={data}
                onClick={(e) => submitHandler(e)}
                type="submit"
              >
                Войти
              </button>
            </div>
          </form>
        )}
      </form>
    </div>
  );
}
