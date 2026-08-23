async function getResponseBody(response) {
    return await response.json();
}

async function getResponseTime(response) {
    return response.headers()["x-response-time"];
}

module.exports = {
    getResponseBody,
    getResponseTime
};