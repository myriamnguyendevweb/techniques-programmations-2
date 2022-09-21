class CharacterService {
    constructor() { }

    url = "https://swapi.dev/api/people";

    async getCharacters() {
        try {
            const response = await fetch(this.url);

            if (response.ok) {
                throw new Error(response.statusText);
            }

            const { results } = await response.json();
            return results;

        } catch (e) {
            console.error(e);
            return {};
        }
    }

    async getCharacterById(id) {
        try {
            const response = await fetch(`${this.url}/${id}`);
            if (!response.ok) throw new Error(response.statusText);

        } catch (e) {
            console.error(e);
            return {};
        }
    }
}

export default CharacterService;