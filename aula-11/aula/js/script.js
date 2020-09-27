window.addEventListener('load', () =>{
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
  doSort2();
  doSort3();
});

function doMap() {
  const nameEmailArray = people.results.map(person => {
    return {
      name: person.name,
      email: person.email
    };
  });
  console.log(nameEmailArray);
  return nameEmailArray;
}
function doFilter() {
  const olderThan50 = people.results.filter(person => {
    return person.dob.age > 50;
  });
  console.log(olderThan50);
  return olderThan50;
}

function doForEach() {
  const mappedPeople = doMap();

  mappedPeople.forEach(person => {
    person.nameSize = person.name.title.length + person.name.first.length + person.name.last.length;
    person.emailSize = person.email.length;
    return person.nameSize;
  })
}

function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  },0);
  console.log(totalAges);

  // sum = 0;
  // for (let i = 0; i <people.results.length; i++) {
  //   var current = people.results[i];
  //   sum += current.dob.age;
  // }
  // console.log(sum);
}

function doFind () {
  const found = people.results.find(person => {
  return person.location.state === 'Minas Gerais';
  
  });
  console.log(found);    
}

function doSome () {
  const found = people.results.some(person => {
    return person.location.state === 'Amazonas';
  });
  console.log(found);
}

function doEvery () {
  const every = people.results.every(person =>{
    return person.nat === 'BR';
  });
  console.log(every);
}

function doSort() {
  const mappedNames = people.results.map(person => { 
    return person.name.first;
  }).filter(person => person.startsWith('B')).sort();

  console.log(mappedNames);
}

function doSort2() {//comparando alfabéticamente
  const mappedNames = people.results
  .map(person => { 
    return {
      name: person.name.first
    };
  })
  .filter(person => person.name.startsWith('A'))
  .sort((a,b) => {
    return a.name.localeCompare(b.name);
  });

  console.log(mappedNames);
}

function doSort3() {//comparando pelo tamanho do nome
  const mappedNames = people.results
  .map(person => { 
    return {
      name: person.name.first
    };
  })
  .filter(person => person.name.startsWith('A'))
  .sort((a,b) => {
    return b.name.length - a.name.length;
  });

  console.log(mappedNames);
}
