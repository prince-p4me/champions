import Constants from "../utility/Constant";

async function callApi(urlString, body, methodType) {
  console.log("-----------AXIOS  Api request is----------- ");
  console.log("url string " + urlString);
  console.log("methodType " + methodType)
  console.log("body " + JSON.stringify(body));
  let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
  }

  try {
    const response = await fetch(urlString, {
      method: methodType,
      headers,
      body: ((methodType == "POST" || methodType == "PUT") && body) ? body : {}
    });
    const jsonResposne = await response.json();
    console.log("result :--", JSON.stringify(jsonResposne));
    return jsonResposne;
  } catch (error) {
    console.log("error :--", JSON.stringify(error));
    return error;
  }
}

export function loginApi(body) {
  console.log("----------Login Api Call ------------------")
  return callApi(Constants.API_URL + "user_login.php", body, "POST");
}

export function signUp(body) {
  console.log("----------Sign up Api Call ------------------")
  return callApi(Constants.API_URL + "user_signup.php", body, "POST");
}

export function resendOtp(body) {
  console.log("----------resendOtp Api Call ------------------")
  return callApi(Constants.API_URL + "user_resend_otp.php", body, "POST");
}

export function getBanners(body) {
  console.log("----------getBanners Api Call ------------------")
  return callApi(Constants.API_URL + "banner_list.php", body, "GET");
}

export function getPoints(body) {
  console.log("----------getPoints Api Call ------------------")
  return callApi(Constants.API_URL + "points.php", body, "POST");
}

export function scanQr(body) {
  console.log("----------scanQr Api Call ------------------")
  return callApi(Constants.API_URL + "scan_qr.php", body, "POST");
}

export function verifyOtp(body) {
  console.log("----------resendOtp Api Call ------------------")
  return callApi(Constants.API_URL + "user_otp_verify.php", body, "POST");
}
