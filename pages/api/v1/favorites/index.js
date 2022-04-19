const Place = require('@services/places.services');

const favorite = new Place();

export default function (req, res) {
    const favorites = favorite.findFavorite();
    res.status(200).json(favorites);
}