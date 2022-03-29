import axios from 'axios';
const API_TOKEN = 'D3abI9e7xncX3uySmI/grghYL2ZP6OLjI1ZDCN5DaHM';
// Step-1: Create a new Axios instance with a custom config.
// The timeout is set to 10s. If the request takes longer than
// that then the request will be aborted.
const AxiosApi = axios.create({
    baseURL: 'https://ipanworld.in/api/v1/',
    timeout: 10000,
    headers: {
        'Accept': 'application/json',
        'api-key': 'eyJz-CI6Ikp-4pWY-lhdCI6',
        //'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjExMDFhZDAwNGZjNGZhOGJkYmYyMjllMzE1NzIzNjFkMWE4YjljNTlmNTE3ODdiMGE2Yzg4MDNlOTIzZmRkOGE2ZTY2MmUxYWY3YjcyNTEiLCJpYXQiOjE2MDAwNzc5MjgsIm5iZiI6MTYwMDA3NzkyOCwiZXhwIjoxNjMxNjEzOTI4LCJzdWIiOiIxNSIsInNjb3BlcyI6W119.T4LutHoPP_edLahiY_IXTe_JVAOyjMBa-uflctPS9FEG1PRhlPVpwSPkNP3Q7QnjBMcwzqJQDFzinyVJtTqxibW7Y1zm3uuwQVjSvI2G9W-7t6JXLpOzwInYbdmuFGYsXj4YMwEai5K-HCNE0gyRlFyeycw6t9Rj2IOtR3RTyGj4Xzd4hEyF5a1vvTnC-hiOX0qO4QL1lrKyDokbCFQMmA6oKc1PZJyNv8aX5gtDwlzJLwtyA3jERVlyLyz4Vb2d18Pj_TQYeGKbx5QjSqptASHISAKQIi-4gc1sCMjsqLSFZA18yLrEAbD2JDHTG3I3lAS6sdYZmlYLASE0LmBT2ovHPBat1n0h7c3nD_2W8ogM_v9M0fWHvzyLKI7UNJ4xOkxUD2iE5nNdD8Iqj6DrHbe3LjHDXU3BVfAhW3fEWfxoDJTAom8mUI1pPJ1EMA4EK3cr_meQcQhyelLCMRavbMRbrxogRoHjlowxnfH-1Q5vlCnA0qZ5_oLZcMObzqaOYwCwJljiQYkND6ZhMNh69OlceNKLEuInanpfrnHl1I8DWvb8IXAnJRjJDTVIVPFPKWac62xED69K8yaLGqB_B5bvFl4CTigJOTLyojt1implUmqdOiqOtBLAA4BWzofQy9lENwcQHAsSOGfAYK45pr6CfZgp3GOF44Aes8oZutI'
    }
});

// Step-2: Create request, response & error handlers
const requestHandler = request => {

    // Token will be dynamic so we can use any app-specific way to always   
    // fetch the new token before making the call
    const { tokenType, accessToken, loggedIn } = store.getState().auth;
    const token = `${tokenType} ${accessToken}`;
    if (loggedIn) {
        //config.headers['Authorization'] = token;
        request.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMTIzNDU2Nzg5IiwibmFtZSI6IlNhbXBsZSIsImlhdCI6MTUxNjIzODIzfQ.ZEBwz4pWYGqgFJc6DIi7HdTN0z5Pfs4Lcv4ZNwMr1rs';
    }
    // add API token before making the call
    if (request.data === undefined) {
        request.data = { api_token: API_TOKEN };
    }
    //request.data['api_token'] = API_TOKEN;
    request.data = { api_token: API_TOKEN, ...request.data };
    console.info(request);
    return request;
};

const responseHandler = response => {
    /* if (response.status === 401) {
        window.location = '/login';
    } */

    return response;
};

const errorHandler = error => {
    return Promise.reject(error);
};

// Step-3: Configure/make use of request & response interceptors from Axios
// Note: You can create one method say configureInterceptors, add below in that,
// export and call it in an init function of the application/page.
AxiosApi.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

/* AxiosApi.interceptors.request.use((config) => {
    if (config.data === undefined) {
        config.data = { api_token: API_TOKEN };
    }
    config.data['api_token'] = API_TOKEN;
    requestHandler(config)
}, (error) => errorHandler(error)
); */

AxiosApi.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
);


// Step-4: Export the newly created Axios instance to be used in different locations.
export default AxiosApi;