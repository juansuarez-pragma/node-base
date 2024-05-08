const users = [
    {
        id:1,
        name: 'john Doe',
    },
    {
        id: 2,
        name: 'Jane doe',
    }

];

const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);

    if(!user) {
        return callback('User not found with id ${id}');
    }

    return callback(null, user);
}

module.exports = {
    getUserById,
}