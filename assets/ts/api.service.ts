export class ApiService {
    static URL: string = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

    static getFact(): Promise<any> {
        return fetch(this.URL)
            .then(response => response.json())
            .then(json => json.text);
    }
}