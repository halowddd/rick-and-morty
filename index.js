const container = document.getElementById('main');

const setAvatar = (src, elem) => {
  const avatar = document.createElement('img');
  avatar.classList.add('char-avatar');
  avatar.setAttribute('src', src);
  elem.appendChild(avatar);
}

const setName = (charName, elem) => {
  const name = document.createElement('div');
  name.classList.add('char-name');
  name.innerText = charName;
  elem.appendChild(name);
}

const setStatus = (charStatus, elem) => {
  const status = document.createElement('div');
  status.classList.add('char-status');
  status.innerText = charStatus;
  elem.appendChild(status);
}

const setSpecies = (charSpecies, elem) => {
  const species = document.createElement('div');
  species.classList.add('char-species');
  species.innerText = charSpecies;
  elem.appendChild(species);}

const createCharacter = (data, element) => {
  const charInfo = document.createElement('div');
  charInfo.classList.add('char-info')
  setAvatar(data.image, element);
  setName(data.name, charInfo);
  setStatus(data.status, charInfo);
  setSpecies(data.species, charInfo);
  element.appendChild(charInfo);
}

const createItems = (data) => {
  data.map(({image, name, status, species}) => {
    const character = document.createElement('div');
    createCharacter({image, name, status, species}, character);
    character.classList.add('char-item');
    container.appendChild(character);
  })
}


const fetchData = async () => {
  let response = await fetch('https://rickandmortyapi.com/api/character')

  if (response.ok) {
    let json = await response.json();
    const characters = json?.results;
    createItems(characters);
  } else {
    alert('Ошибка HTTP: ' + response.status);
  }
}
fetchData();
