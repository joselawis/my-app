import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 11, name: 'Deadpool' },
            { id: 12, name: 'Ironman' },
            { id: 13, name: 'Hulk' },
            { id: 14, name: 'Thor' },
            { id: 15, name: 'Starlord' },
            { id: 16, name: 'Lobezno' },
            { id: 17, name: 'Vision' },
            { id: 18, name: 'Capitan America' },
            { id: 19, name: 'Black Panther' },
            { id: 20, name: 'Viuda Negra' }
        ];
        return { heroes };
    }
}
