const { faker } = require('@faker-js/faker');

class Place {
    constructor() {
        this.favorites = [];
        this.discover = [];
        this.generate();
    }

    generate() {
        const limit = 10;
        for (let i = 0; i < limit; i++) {
            this.favorites.push({
                id: faker.datatype.uuid(),
                city: faker.address.cityName(),
                country: faker.address.country(),
                lat: faker.address.latitude(),
                lng: faker.address.longitude(),
                fav: true,
            })
            this.discover.push({
                id: faker.datatype.uuid(),
                city: faker.address.cityName(),
                country: faker.address.country(),
                lat: faker.address.latitude(),
                lng: faker.address.longitude(),
                fav: false,
            })
        }
    }

    findFavorite() {
        return this.favorites;
    }

    findDiscover() {
        return this.discover;
    }
}

module.exports = Place;