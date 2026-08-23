const { expect } = require("@playwright/test");

class ApiClient {

    constructor(request) {
        this.request = request;
    }

    async createUser(payload) {
        return await this.request.post("/users", {
            data: payload
        });
    }

    async getUser(id) {
        return await this.request.get(`/users/${id}`);
    }

    async deleteUser(id) {
        return await this.request.delete(`/users/${id}`);
    }

    async validateStatus(response, expectedStatus) {
        expect(response.status()).toBe(expectedStatus);
    }

    async getResponseBody(response) {
        return await response.json();
    }
}

module.exports = { ApiClient };