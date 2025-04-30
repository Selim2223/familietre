// Метод reset() у HTML-формы сбрасывает все её поля к исходным (дефолтным) значениям.
// Метод trim() убирает пробелы (включая табы и переводы строк) с начала и конца строки.




const familie = [];
const boks = document.getElementById('boks');

let redigerIndex = null;

    // todo ФУНКЦИЯ LAGRE
function lagre() {
  const navn = document.getElementById('navnInput1').value;
  const alder = document.getElementById('alderInput2').value;
  const relasjon = document.getElementById('relasjonInput3').value;

  if (navn.trim() === '' || alder.trim() === '' || relasjon.trim() === '') {
    alert('Fyll ut alle feltene.');
    return;
  }

  if (redigerIndex === null) {
    // Добавляем нового человека
    const person = {
      name: navn,
      age: alder,
      relation: relasjon,
    };
    familie.push(person);
  } else {
    // Обновляем существующего
    familie[redigerIndex].name = navn;
    familie[redigerIndex].age = alder;
    familie[redigerIndex].relation = relasjon;
    redigerIndex = null; // сбросить режим редактирования
  }
  visFamilie();
  document.getElementById('skjema').reset();

  submitButton.textContent = 'Legg til';
  submitButton.style.backgroundColor = ''; // убираем оранжевый
}


// todo ФУНКЦИЯ VISFAMILIE
function visFamilie() {
  boks.innerHTML = ''; // очищаем контейнер

  familie.forEach((familiemedlem, index) => {
    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('wrapper');

    const personDiv = document.createElement('div');
    personDiv.classList.add('person-boks');

    const info = document.createElement('p');
    info.textContent = `${familiemedlem.name} (${familiemedlem.age} år) - ${familiemedlem.relation}`;

    // todo SLETT

    const slettKnapp = document.createElement('button');
    slettKnapp.textContent = 'Slett 🚮';
    slettKnapp.style.backgroundColor = 'red';
    slettKnapp.style.width = "100px"

    slettKnapp.addEventListener('click', () => {
      slettPerson(index);
    });
    // todo REDIGER
    const redigerKnapp = document.createElement('button');
    redigerKnapp.textContent = 'Rediger 🔄';
    redigerKnapp.style.backgroundColor = 'green';
    redigerKnapp.style.width = "100px"


    redigerKnapp.addEventListener('click', () => {
      fyllUtSkjema(index);
    });

    personDiv.appendChild(info);
    wrapperDiv.appendChild(personDiv);
    wrapperDiv.appendChild(redigerKnapp);
    wrapperDiv.appendChild(slettKnapp);

    boks.appendChild(wrapperDiv);
  });
}

function slettPerson(index) {
  familie.splice(index, 1);
  visFamilie();
}


const submitButton = document.getElementById('submitButton');

function fyllUtSkjema(index) {
  const person = familie[index];
  document.getElementById('navnInput1').value = person.name;
  document.getElementById('alderInput2').value = person.age;
  document.getElementById('relasjonInput3').value = person.relation;
  redigerIndex = index;

  // переключаем кнопку на «Lagre»
  submitButton.textContent = 'Lagre';
  submitButton.style.backgroundColor = 'orange'; // опционально: другой цвет
}

//! _____________________________________________

// const familie = [];
// const boks = document.getElementById('boks');

// let redigerIndex = null;

// function lagre() {
//   const navn = document.getElementById('navnInput1').value;
//   const alder = document.getElementById('alderInput2').value;
//   const relasjon = document.getElementById('relasjonInput3').value;

//   const person = {
//     name: navn,
//     age: alder,
//     relasjon: relasjon,
//   };
//   familie.push(person);
//   visFamilie();
// }

// function visFamilie() {
//   boks.innerHTML = ''; // очищаем контейнер

//   familie.forEach((familiemedlem, index) => {
//     const wrapperDiv = document.createElement('div'); // общий контейнер для человека + кнопки
//     wrapperDiv.classList.add('wrapper'); // для стилей

//     const personDiv = document.createElement('div'); // блок с данными человека
//     personDiv.classList.add('person-boks');

//     const info = document.createElement('p'); // текст с данными
//     info.textContent = `${familiemedlem.name} (${familiemedlem.age} år) - ${familiemedlem.relasjon}`;

//     const slettKnapp = document.createElement('button'); // кнопка удаления
//     slettKnapp.textContent = 'Slett';
//     slettKnapp.addEventListener('click', () => {
//       slettPerson(index);
//     });

//     const redigerKnapp = document.createElement('button');
//     redigerKnapp.textContent = 'Rediger';
//     redigerKnapp.addEventListener("click", () => {
//       fyllUtSkjema(index);
//     });

//     personDiv.appendChild(info); // добавляем текст в блок человека
//     wrapperDiv.appendChild(personDiv); // добавляем блок человека в обертку
//     wrapperDiv.appendChild(redigerKnapp);
//     wrapperDiv.appendChild(slettKnapp); // добавляем кнопку в обертку отдельно

//     boks.appendChild(wrapperDiv); // добавляем обертку в главный контейнер
//   });
// }

// function slettPerson(index) {
//   familie.splice(index, 1); // удаляем одного человека по индексу
//   visFamilie(); // перерисовываем список
// }

//! _____________________________________________

// const familie = [];
// const boks = document.getElementById('boks');

// function lagre() {
//   const navn = document.getElementById('navnInput1').value;
//   const alder = document.getElementById('alderInput2').value;
//   const relasjon = document.getElementById('relasjonInput3').value;

//   const person = {
//     name: navn,
//     age: alder,
//     relasjon: relasjon,
//   };
//   familie.push(person);
//   visFamilie()

// }

// function visFamilie() {
// // boks.innerHTML = "";

// familie.forEach((familiemedlem, index) =>{
//   const li = document.createElement("li");
// li.textContent = `${familiemedlem.name} ${familiemedlem.age} ${familiemedlem.relasjon}`;
// boks.appendChild(li);
// } )
// }

//! _____________________________________________

//todo пример из CHAT GPT  с наружными переменными
// // создаём переменные снаружи
// let navn;
// let alder;
// let relasjon;

// function lagre() {
//   // записываем в них значения из input
//   navn = document.getElementById('navn').value;
//   alder = document.getElementById('alder').value;
//   relasjon = document.getElementById('relasjon').value;

//   console.log(navn, alder, relasjon); // внутри функции
// }

// // теперь можно использовать их и ВНЕ функции!
// console.log(navn, alder, relasjon); // пока ничего нет (undefined)

// // когда вызовешь lagre(), переменные обновятся
