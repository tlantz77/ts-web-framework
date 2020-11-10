import { User } from './models/User';

const user = new User({name: 'Hannibal', age: 45});

user.on('change', () => {
  console.log('changed!');
});

user.on('flex', () => {
  console.log('Flexxed!!!!');
});

user.trigger('change');
user.trigger('flex');
user.trigger('flim');