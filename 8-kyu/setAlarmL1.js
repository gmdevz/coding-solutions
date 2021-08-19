const setAlarm = (employed, vacation) => (employed && !vacation);

console.log(!setAlarm(true, true), 'Should be false.');
console.log(!setAlarm(false, true), 'Should be false.');
console.log(setAlarm(true, false), 'Should be true.');

console.log(setAlarm(true, true) );
console.log(setAlarm(false, true) );
console.log(setAlarm(false, false));
console.log(setAlarm(true, false) );