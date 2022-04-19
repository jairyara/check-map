export default function handler(req, res) {
    res.status(200).json({ users: 'api/v1/users', discover: 'api/v1/discover', favorites: 'api/v1/favorites' })
}