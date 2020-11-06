import { User } from './models/User';

const user = new User({name: 'Hannibal', age: 45});
user.set({age: 666});

console.log(user.get('name'));
console.log(user.get('age'));
