const User = require('@services/users.services');

const user = new User();

export default function (req, res)   {
    const users = user.find();
    res.status(200).json(users);
}