import './style.css'
// ============= BASIC ==============
// task-1
import { age, personName, toggle, empty, callback } from './basic/1';

console.log('Age:', age); 
console.log('Name:', personName); 
console.log('Toggle:', toggle); 
console.log('Empty:', empty); 
console.log('Callback result:', callback(50));

// task-2
import { person } from './basic/2';

console.log('Person:', person);

// task-3
import { mixType, oblStatus } from './basic/3';

console.log('MixType:', mixType);
console.log('OblStatus:', oblStatus);

// task-4
import { showMessage, calc } from './basic/4';

showMessage('Hello world!');
console.log('Result:', calc(20, 30));


// task-5
import { isWeekend, DayOfWeek } from './basic/5';

console.log(isWeekend(DayOfWeek.Monday));  
console.log(isWeekend(DayOfWeek.Saturday));

// task-6
import { mango, poly } from './basic/6';

console.log('Mango: ', mango);
console.log('Poly: ', poly);

// task-7
import { page1, page2 } from './basic/7';

console.log('Page1: ', page1);
console.log('Page2: ', page2);

// ============ GENERIC ============
// task-1
import { fetchData } from './generics/1';

console.log(fetchData());

// task-2
import { result } from './generics/2';

console.log('Result:', result);

// task-3
import { mergedObj } from './generics/3';

console.log('MergedObj:', mergedObj);

// task-4
import { createOrUpdateUser } from './generics/4';

const updatedUserInfo = createOrUpdateUser({ 
  email: 'new.email@example.com', 
  password: 'newPassword123' 
});

console.log('UpdatedUserInfo:', updatedUserInfo);

// task-5
import { UserRole, RoleDescription } from './generics/5';

console.log('UseRole:', UserRole);
console.log('RoleDescription:', RoleDescription);

// task-6
import { formData, paramsData } from './generics/6';

console.log('FormData:', formData);
console.log('ParamsData:', paramsData);


