const Place = require('@services/places.services');

const discover = new Place();

export default function (req, res) {
    const favorites = discover.findDiscover();
    res.status(200).json(favorites);
}