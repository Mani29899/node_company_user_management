import httpCodes from "../config/httpCodes.js";

const httpResponse = (httpResponse, responseObject) => {
     if (responseObject.response_code === 1) {
         httpResponse.status(httpCodes.MISSING);
     } else if (responseObject.response_code === 2) {
         httpResponse.status(httpCodes.INTERNAL_SERVER_ERROR);
     } else if (responseObject.response_code === 10) {
         httpResponse.status(httpCodes.CREATED);
     } else if (responseObject.response_code === -1) {
         httpResponse.status(httpCodes.UNAUTHORIZED);
     } else if (responseObject.response_code === -2) {
         httpResponse.status(httpCodes.SUCCESS);
     } else {
         httpResponse.status(httpCodes.SUCCESS);
     }
     httpResponse.send(responseObject);
}


export default httpResponse;