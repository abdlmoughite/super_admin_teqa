// import axios from "axios";

// const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzczMjMxMjY5LCJpYXQiOjE3NzE0MzEyNjksImp0aSI6ImI2MDQ2NjViY2JhMDRlZDY5ZGMwOTBiOTg2MTE4YTEzIiwidXNlcl9pZCI6IjUyYTU3ZDNjLTk1YTctNGMxNS04ZTkyLWFmZjMxOWYxZDcxZiIsImVtYWlsIjoibW9oYW1lZGVsa2hyYWlmaUBnbWFpbC5jb20uYWRtaW4iLCJ1c2VybmFtZSI6Im1vaGFtZWRlbGtocmFpZmlAZ21haWwuY29tLmFkbWluIiwicm9sZSI6IkFETUlOIiwic3RhdHVzIjoiQUNUSVZFIiwibGFuZ3VhZ2UiOiJmciIsImNvdW50cnkiOiJNQSIsInN0b3JlX2lkIjoiNmY1Y2YzODMtMDc0Mi00ODg0LTg0NWItNDEwNWY5MzBjY2RmIiwic3RvcmVfc2x1ZyI6ImFkbWluLTEiLCJzdG9yZV9uYW1lIjoiYWRtaW4gMSJ9.e4n3zGII9ApU65m6hMevhA-iJ5D5pBhMD_3gIm8O2yElUE63L5gP2OUYYZNjqQadZG4PRfvXwcT30IUYLNOQA2cap6rnmgeDvXyS3a9Ko6-Oe1K3A5hCMQk_aXGlV-Dmk7FmpkjBfM_f2pQGWkFSbwcnoY0s7tQ_nsD-YNbNN_chN-ydSl_Bt8LU5kRXF2fkjK5_xNZASuIEIsWY_Vyx3dmXevalB4ey4fGQ4rOKO0T-VLAviXpLXbUdpYVVnmzYB5AILuosIy4IYfR_ZjCGQgaJaMFO7l24Mq6Zjn4WHxzildSyZJuDvEqLUUuhSKVeNAgY9fkZQkYzwuRIk1nG2w";
// const API = axios.create({
//   baseURL: "https://integration.teqaconnect.com/api/",
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// //   withCredentials: true,
// });
// export const getCurrentUser = () =>
//   AUTH_API.get("user/me/");

// export const integrationsAdd = (data) =>
//   API.post("integrations/platforms/", data);

// export const integrationsList = () =>
//   API.get("integrations/platforms/");

// export default API;


import axios from "axios";

/* ============================
   AUTH SERVER (SESSION CHECK)
============================ */
export const AUTH_API = axios.create({
  baseURL: "https://auth.teqaconnect.com/auth/",
  withCredentials: true,   
});

const API = axios.create({
  baseURL: "https://integration.teqaconnect.com/api/",
  withCredentials: true,
});

// // UPDATE LANGUAGE
export const updateLanguage = (data) => API.patch("user/language/", data);


AUTH_API.defaults.xsrfCookieName = "csrftoken";
AUTH_API.defaults.xsrfHeaderName = "X-CSRFToken";

/* ============================
   INTEGRATION SERVER (DATA)
============================ */
export const INTEGRATION_API = axios.create({
  baseURL: "https://integration.teqaconnect.com/api/",
  withCredentials: true,
});

INTEGRATION_API.defaults.xsrfCookieName = "csrftoken";
INTEGRATION_API.defaults.xsrfHeaderName = "X-CSRFToken";

/* ============================
   AUTH CALLS
============================ */
export const loginUser = (data) =>
  AUTH_API.post("login/", data);


export const getCurrentUser = () =>
  AUTH_API.get("user/me/");

/* ============================
   INTEGRATION CALLS
============================ */

export const integrationsAdd = (data) =>
  INTEGRATION_API.post("integrations/platforms/", data);

export const integrationsList = () =>
  INTEGRATION_API.get("integrations/platforms/");

export default API;