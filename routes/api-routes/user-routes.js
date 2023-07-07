const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    addFriend,
    removeFriend,
} = require('../../controllers/user-controller');

// Get and POST users
router.route('/').get(getAllUsers).post(createUser);

//GET user id, PUT update user Id and DELETE user by Id
router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);

//Post add friend and DELETE remove friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;