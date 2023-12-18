/* ------------------------------ TASK 5 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

const showObjectKeys = (object) =>
{
  return Object.keys(object);
};


console.log('Object keys:', showObjectKeys(audi));

