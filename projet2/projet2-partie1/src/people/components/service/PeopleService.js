class PeopleService {
    constructor() { }

    url = "https://swapi.dev/api/people";

    async getPeoples() {

        try {

            const response = await fetch(this.url);
            if (!response.ok) throw new Error(response.status);

            return await response.json();
        } catch (e) {
            console.error(e);

            return [];
        }
    }

    async getPeopleWithReturnedUrl(url) {
        try {
            const response = await fetch(url);
            if (response.ok) throw new Error(response.statusText);
            return await response.json();
        } catch (e) {
            console.error(e);

            return {};
        }
    }

    async getPokemonById(id) {
        try {
            const response = await fetch(`${this.url}/${id}`);
            if (!response.ok) throw new Error(response.statusText);
        } catch (e) {
            console.error(e);
            return {};
        }
    }


}

export default PeopleService;