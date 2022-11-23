import axios from "axios";

const PORT = "80";
const HOST = "127.0.0.1";
const URL = `http://${HOST}:${PORT}`;

// const SEARCH_URL = URL + "/student/search";

// export function search(searchTerm) {
//   return fetch(SEARCH_URL + "?search=" + searchTerm)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(">>>", data);
//       return { data };
//     });
// }

export async function search(query) {
  const options = {
    path: "/student/search",
    query: "?search=",
  };

  const APIheader = {};
  const APIparams = {};

  const url = `${URL}${options.path}${options.query}${query}`;

  try {
    const response = await axios.get(url, {
      headers: APIheader,
      params: APIparams,
      timeout: 20000,
    });
    console.log("res:", response);

    if (response.status !== 200) {
      console.log("error:", response.status);
      return {
        error: true,
        status: response.status,
        message: response.message,
      };
    } else {
      return response;
    }
  } catch (error) {
    console.log("error:", error);
    return {
      error: true,
      status: 500,
      message: "Internal api server error",
    };
  }
}

export async function login(email, password) {
  const options = {
    path: "/user/login",
  };

  const url = `${URL}${options.path}`;

  try {
    const response = await axios.post(url, {
      email: email,
      password: password,
      timeout: 20000,
    });

    if (response.status !== 200) {
      console.log("error:", response.status);
      return {
        error: true,
        status: response.status,
        message: response.message,
      };
    } else {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("fName", response.data.fName);
      localStorage.setItem("lName", response.data.lName);
      return response;
    }
  } catch (error) {
    console.log("error:", error);
    return {
      error: true,
      status: error.response.status,
      message: error.response.data.message,
    };
  }
}

export async function register(fName, lName, email, password) {
  const options = {
    path: "/user/register",
  };

  const url = `${URL}${options.path}`;

  try {
    const response = await axios.post(url, {
      fName: fName,
      lName: lName,
      email: email,
      password: password,
      timeout: 20000,
    });

    if (response.status !== 200) {
      console.log("error:", response.status);
      return {
        error: true,
        status: response.status,
        message: response.message,
      };
    } else {
      
      return ;
    }
  } catch (error) {
    console.log("error:", error);
    return {
      error: true,
      status: error.response.status,
      message: error.response.data.message,
    };
  }
}

// export function login(email, password) {
// const LOG_IN_URL = URL + "/user/login";
//   return fetch(LOG_IN_URL, {
//     method: "POST",
//     headers: {
//       accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       if (res.message !== undefined) {
//         return { errorMessage: res.message, error: res.error };
//       } else {
//         let token = res.token;
//         localStorage.setItem("token", token);
//         return { errorMessage: res.message, error: res.error };
//       }
//     });
// }
