import Create from 'pages/create-test/Create';
import Home from 'pages/home/Home';
// import Login from 'pages/login/Login';
// import Registration from 'pages/registration/Registration';
// import Profile from 'pages/profile/Profile';
import Tests from 'pages/tests/Tests';

const routes = [
  {
    title: 'Tесты',
    path: '/tests',
    protect: 'none',
    component: Tests,
    exact: false
  },
  {
    title: 'Создать тест',
    path: '/create',
    protect: 'none',
    component: Create,
    exact: false
  },
  // {
  //   title: 'Вход',
  //   path: 'login',
  //   protect: 'home',
  //   component: Login
  // },
  // {
  //   title: 'Регистрация',
  //   path: 'registration',
  //   protect: 'home',
  //   component: Registration
  // },
  // {
  //   title: 'Мои тесты',
  //   path: 'tests',
  //   protect: 'login',
  //   component: Tests
  // },
  // {
  //   title: 'Профиль',
  //   path: 'profile',
  //   protect: 'login',
  //   component: Profile
  // },
  {
    title: 'Главная',
    path: '/',
    protect: 'none',
    component: Home,
    exact: true
  },
];

export default routes;