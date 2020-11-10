import { User } from './models/User';

const user = new User({ name: 'Will Graham', age: 33 });

user.save();