import axios from 'axios';

export class APIClient {
    constructor(baseURL) {
        this.axiosInstance = axios.create({
            baseURL,
        })
    }

    get(url) {
        const controller = new AbortController();
        const resolveData = async() => {
            const pendingData = await this.axiosInstance.get(url, {
                signal: controller.signal
            });
            return pendingData
        }
        return [resolveData, controller];
    }
}