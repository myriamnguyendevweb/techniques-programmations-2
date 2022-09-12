import Client from '../../client';
import { API_STARSHIP_PATH } from '../../ Constants';

class StarshipService extends Client {
    constructor() {
        super(API_STARSHIP_PATH);
    }

    async getAll() {
        return await this.get();
    }

    async getById(id) {
        return await this.get(id);
    }
}

export default StarshipService;