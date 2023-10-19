/* 
** For simplicity, we will use an array to store our user data.
** In a real world application, we would use a database -like MongoDB to store our user data.
**/

// controllers/userDB.js
const userInformation = [
    {   id: 1, 
        username: 'user1', 
        password: 'password1', 
        todos: ['eat', 'sleep', 'code']
    },
    {   id: 2, 
        username: 'user2', 
        password: 'password2', 
        todos: ['By groceries', 'Food the dog', 'Make dinner'] 
    },
    // ... other user data
];

//NOTE: You cal always create more user objects here, just make sure to add them to exports.userInformation array.

// Notice that we are exporting an object with a property called userInformation, 
// we will use this property to access the userInformation array in userController.js
module.exports = userInformation;

