import { APIClient } from "./ApiClient";

class APIController {
    constructor() {
        this.controller = null; //AbortController
        this.client = new APIClient('/api');
    }

    async getDashboardData() {
        const [resolveData, controller] = this.client.get('/dashboard');
        this.controller = controller;
        const response = await resolveData();
        return await response.data;
    }

    cancelRequest() {
        if(this.controller) {
            this.controller.abort();
        }
    }
}

const apiController = new APIController();

export default apiController;