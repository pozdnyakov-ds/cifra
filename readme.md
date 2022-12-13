1. Приложение Vue2 + Nuxt2 + Vuetify.
   Node v.14.20.0
   Npm v.6.14.17

2. При первом запуске заполняются три записи по-умолчанию для примера.

3. Используется модальная форма от Vuetify <v-dialog>

4. Данные items хранятся в state.

5. При сохранении каждой новой записи state.items сохраняется в localstorage + cookie.

6. На поля ввода назначены :rules от Vuetify.

- title - от 3 до 64 символов
- price > 0
- datetime - не делал дополнительного пикера - просто ввод текста по указанному формату. Проверка формата с помощью библиотеки moment.

7. Запуск проекта

- git clone https://github.com/pozdnyakov-ds/cifra.git
- npm i
- npm run dev
