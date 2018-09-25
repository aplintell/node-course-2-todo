const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b9a223a4bd9e7a4f1e356d6a';

// if(!ObjectID.isValid(id)){
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e)=>{
//     console.log(e.message);
// });

User.findById('5b9a24b70ec2cba4f8f700c7').then((user)=>{
    if(!user){
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined,2));
},(e)=>{
    console.log(e);
});
