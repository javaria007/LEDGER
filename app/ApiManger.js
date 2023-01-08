
import axios from "axios";
const ApiURL = 'http://18.142.153.136:3000/api/application/getScheduleByAppId';
const ApiManager = {

    fetchApiData(parameters, onResponse, onError) {
        axios.defaults.headers.common['Authorization'] = ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTc3ODg3MzQsImV4cCI6MzE3MjAyMjMxMTM0fQ.BKI9EzOzDU3Esv1wlyLHgjESKUB_tvHiM6MN-GwrASk';
        axios({
            method: 'GET',
            url: ApiURL,
            params: {
                application_id: parameters,
            },
            headers: { "Content-Type": "application/json" },
            timeout: 30 * 1000,
            timeoutErrorMessage: "No response from server",
            redirect: "follow"
        }).then(function (response) {
            console.log("api response", response)
            onResponse(response)
        }).catch(function (error) {
            console.log("api error", error, error.response)
            ApiManager.handleApiError(error, onError)
        })

    },

    handleApiError(error, onError) {
        if (axios.isAxiosError(error)) {
            onError({
                title: "No internet",
                message: "Please check your internet connection",
                isNetworkError: true,
                response: error.response
            })
        } else {
            const message = error.response?.data?.message
            onError({
                title: "Server response",
                message: message || error.message || "Something went wrong",
                response: error.response,
                isNetworkError: false,
            })
        }
    },

}

export default ApiManager
