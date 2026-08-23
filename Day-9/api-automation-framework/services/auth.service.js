class AuthService {

    constructor(request, config) {
        this.request = request;
        this.config = config;
    }

    async login() {

        const response = await this.request.post("/auth", {
            data: {
                username: this.config.username,
                password: this.config.password
            }
        });

        return response;
    }
}

module.exports = AuthService;