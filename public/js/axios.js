
const login_btn = document.getElementsByClassName("log-in")[0];
const signup_btn = document.getElementsByClassName("sign-up")[0];
const frgt_pass = document.getElementsByClassName("frgt-pass")[0];

const login = async (e) => {
  try {
    const username = document.getElementById("username").value;
    const password = document.getElementById("pswd").value;
    await axios
      .post('/api/auth/login', { username, password })
      .then((res) => {
        if (res.status === 200) {
          alert(`Login successful. Welcome ${username}!`);
          window.location.href = "index.html";
        }
      })
      .catch((err) => {
        alert("Login failed. The login details you provided are incorrect");
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};

login_btn.addEventListener("click", login);

const signup = async () => {
  try {
    const username = document.getElementById("username").value;
    const password = document.getElementById("pswd").value;
    await axios
      .post('/api/auth/register', { username, password })
      .then((res) => {
        if (res.status === 200) {
          alert(`Success: Registration successful for user '${username}'. You can now login.`);
        }
      })
      .catch((err) => {
        alert("Registration failed. Make sure you have entered a valid username and password");
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};

signup_btn.addEventListener("click", signup);

const forgot_password = () => {
  alert("Sign up as a new user");
};
frgt_pass.addEventListener("click", forgot_password);
