// создание, вставка и удаление html элементов
// document.createElement(tagName)


// let body = document.querySelector('body')

// let h2 = document.createElement('h2');
// h2.textContent = 'Виртуальный заголовок';
// h2.classList.add('new_h2');
// console.log(h2)
// body.prepend(h2)


// element.remove()
// element.prepend('что добавить', element) // в начало элемента
// append // в конец элемента
// after // после элемента
// before // до элемента

// let body = document.querySelector('body')
// let list = document.querySelector('.list')

// let cloneList = list.cloneNode(true);
// console.log(cloneList);

// body.prepend(cloneList)


// element.cloneNode(true) // глубокое клонирование (вместе с потомками)
// element.cloneNode(false) // поверхностное клонирование (без потомков)





// let list = document.querySelector('.list');
// console.log(list.children);

// устаревшее
// parentElement - родитель
// children - дети

// более удобное
// element.closest(selector) - родитель
// element.querySelector(selector) - дети



// события input - input, change + focus, blur
// событие form - submit + event.preventDefault()







// устаревшее
// innerHTML
// outerHTML
























// todos

	// <li>Хлеб</li>
	// <li>Масло</li>
	// <li>Сахар</li>
let list = document.querySelector('.list'); // получили список дел
let todoForm = document.querySelector('.todoForm'); // получили форму для ввода нового дела
let todoInput = document.querySelector('.todoInput'); // получили поле ввода текста нового дела

todoForm.addEventListener('submit', todoHandler); // повесили прослушку на форме (submit event)

function todoHandler(event) { // функция обработчик события submit
	event.preventDefault(); // отключаем дефолтное поведение формы

	const todoText = todoInput.value; // получили текст из инпута, который ввел user
	if (validateTodo(todoText)) { // функция валидации И валидирует И возвращает true, если валидно поле
		addTodo(todoText); // создаем todo И добавляем (addTodo --> createTodo)
	} 
}


function validateTodo(text) {
	if (text) {
		todoInput.classList.remove('error'); // удаляем класс ошибки если текст есть
		todoInput.value = ''; // стираем value у input
		return true;
	} else {
		todoInput.classList.add('error'); // добавляем класс ошибки если input пустой
	}
}

function addTodo(text) {
	const newTodo = createTodo(text); // создали новую тудушку с этим текстом
	list.prepend(newTodo); // ДОБАВЛЯЕМ В HTML! вКудаДобавить.prepend(чтоДобавить)
}


function createTodo(text) { // получаем текст
	const todo = document.createElement('li'); // создаем виртуальный тег <li>
	todo.textContent = text; // в тег li помещаем текст
	todo.dataset.id = Math.random(); // добавляем id при создании элемента
	return todo // возвращем тег уже с текстом готовый к вставке в html
}


















// табы (описание логики + реализация)- https://getbootstrap.com/docs/4.0/components/navs/#tabs
// простой калькулятор
// форма с валидацией
// Создаем аккаунт
// 1. inputs

// - поля для first и last name (обезятельно для заполнения)
// - age (обезятельно для заполнения, только цифры, старше > 17)
// - поле для номера телефона (только цифры)
// - поле для email (есть @, есть . и минимум 8 символов)

// radio button - предпочтительный способ контакта
// 1 - телефон
// 2 - email
// 3 - обычной почтой (при выборе появляется обязательное поле адрес)

// поле адреса (не пустое, если отжат radio button)

// select и options для выбора даты рождения
// день / месяц; год рассчитать в зависимости от age

// const now = new Date();
// console.log(now.getFullYear() - age)
// const dateOfBirth = new Date(year, mouth, day);

// ИЛИ
// const validateEmail = (email) => {
//   return String(email)
//     .toLowerCase()
//     .match( //возвращает получившиеся совпадения при сопоставлении строки с регулярным выражением
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };

// - поле для пароля (минимум шесть символов)
// - два чекбокса 
// 		1 - согласие на обработку данных (отжат)
// 		2 - получить уведомление о создании аккаунта (нажат)

// submit button 

// после submit отобразить блок с данными пользователя ниже формы
// если была отжата кнопка уведомление вызвать alert('Name surname, thanks for creating an account')






// опрос (описание логики)
// попробуем описать методологически





// крестики-нолики





// todos





// кастомный простой слайдер