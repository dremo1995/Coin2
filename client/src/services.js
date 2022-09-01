export const login = async (username, password, applyFunc) => {
  const url = "http://localhost:8080/api/user/login";
  const body = JSON.stringify({ username, password });
  const headers = { "Content-Type": "application/json" };
  const res = await fetch(url, { method: "POST", body, headers });
  console.log(res);
  if (res.status == "401") {
    alert("Invalid Crednetials");
    return;
  } else if (res.status == "500") {
    alert("user not found");
    return;
  } else {
    const result = await res.json();
    localStorage.setItem(
      "userData",
      JSON.stringify({
        token: result.token,
        id: result.user._id,
        username: result.user.username,
      })
    );
    applyFunc(true);
  }
};

export const register = async (username, password) => {
  const url = "http://localhost:8080/api/user/register";
  const body = JSON.stringify({ username, password });
  const headers = { "Content-Type": "application/json" };
  const res = await fetch(url, { method: "POST", body, headers });
  const result = await res.json();
  return result;
};

export const logout = async () => {
  const url = "http://localhost:8080/api/user/logout";
  const { id, token } = JSON.parse(localStorage.getItem("userData"));
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const res = await fetch(url, { method: "POST", body: "", headers });
  const result = await res.json();
  localStorage.removeItem("userData");
  return result;
};

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    "X-RapidAPI-Key": "5872dcc5a4msh0b1e8dd42f91d46p1c96fajsn04a66ea5a41e",
  },
};
