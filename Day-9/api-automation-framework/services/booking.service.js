class BookingService {

    constructor(request) {
        this.request = request;
    }

    async getBookings() {
        return await this.request.get("/booking");
    }

    async getBookingById(id) {
        return await this.request.get(`/booking/${id}`);
    }

    async createBooking(data) {
        return await this.request.post("/booking", {
            data
        });
    }

    async updateBooking(id, data, token) {
        return await this.request.put(`/booking/${id}`, {
            headers: {
                Cookie: `token=${token}`
            },
            data
        });
    }

    async partialUpdateBooking(id, data, token) {
        return await this.request.patch(`/booking/${id}`, {
            headers: {
                Cookie: `token=${token}`
            },
            data
        });
    }

    async deleteBooking(id, token) {
        return await this.request.delete(`/booking/${id}`, {
            headers: {
                Cookie: `token=${token}`
            }
        });
    }
}

module.exports = BookingService;