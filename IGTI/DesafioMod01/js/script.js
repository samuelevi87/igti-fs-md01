var searchName = null,
  searchButton = null,
  sideUsers = null,
  sideStatistics = null,
  divWait = null,
  divMod = null,
  users = [];

const numberFormat = Intl.NumberFormat('pt-BR');

window.addEventListener('load', async () => {
  mapElements();
  await fetchUsers();
  addEvents();
});

function mapElements() {
  searchName = document.querySelector('#searchName');
  searchButton = document.querySelector('#searchButton');
  sideUsers = document.querySelector('#sideUsers');
  sideStatistics = document.querySelector('#sideStatistics');
  divMod = document.querySelector('#divMod');
  divWait = document.querySelector('#divWait');
}

async function fetchUsers() {
  const response = await fetch(
    'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'
  );
  const json = await response.json();
  users = json.results
    .map(({ login, name, gender, dob, picture }) => {
      const completeName = `${name.first} ${name.last}`;
      return {
        id: login.uuid,
        name: completeName,
        nameLowerCase: completeName.toLowerCase(),
        gender: gender,
        age: dob.age,
        picture: picture.large,
      };
    })
    .sort((a, b) => {
      //retornando a lista em ordem alfabética
      return a.name.localeCompare(b.name);
    });
  showModification();
}

function showModification(){
  setTimeout(() =>{
    divWait.classList.add('hidden');
    divMod.classList.remove('hidden');
  }, 1500)
}

function addEvents() {
  searchName.addEventListener('keyup', handleKeyup);
}

function handleKeyup(event) {
  const currentKey = event.key;

  if (currentKey !== 'Enter') {
    return;
  }

  const filterText = event.target.value;
  if (filterText.trim() !== '') {
    filterUsers(filterText);
  }
}

function filterUsers(filterText) {
  const filterTextLowerCase = filterText.toLowerCase();
  const filteredUsers = users.filter((user) => {
    return user.nameLowerCase.includes(filterTextLowerCase);
  });

  showUsers(filteredUsers);
  showStatistics(filteredUsers);
}

function showUsers(filteredUsers) {
  sideUsers.innerHTML = '';
  const h2 = document.createElement('h2');
  h2.textContent = `${filteredUsers.length} user(s) found`;
  const ul = document.createElement('ul');
  filteredUsers.forEach((user) => {
    const li = document.createElement('li');
    li.classList.add('flex-row');
    li.classList.add('space-bottom');
    const img = `<img class='photo' src="${user.picture}" alt="${user.name}" />`;
    const userData = `<span>${user.name}, ${user.age} years old.</span>`;

    li.innerHTML = `${img} ${userData}`;
    ul.appendChild(li);
  });

  sideUsers.appendChild(h2);
  sideUsers.appendChild(ul);
}

function showStatistics(filteredUsers) {
  const countMale = filteredUsers.filter((user) => user.gender === 'male')
    .length;
  const countFemale = filteredUsers.filter((user) => user.gender === 'female')
    .length;
  const sumAges = filteredUsers.reduce((sum, current) => {
    return sum + current.age;
  }, 0);
  const averageAges = sumAges / filteredUsers.length || 0;

  sideStatistics.innerHTML = `

  <h2> Statistics </h2>
  <ul>
  <li> Male: <strong>${countMale}</strong></li>
  <li> Female: <strong>${countFemale}</strong></li>
  <li> Age's sum: <strong>${formatNumber(sumAges)}</strong></li>
  <li> Age's average: <strong>${formatAverage(averageAges)}</strong></li>
  </ul>  
  `;
}

function formatNumber(number) {
  return numberFormat.format(number);
}

function formatAverage(number) {
  return number.toFixed(2).replace('.', ',');
}
