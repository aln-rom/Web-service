
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Main.vue') },
      { path: 'courses', component: () => import('pages/Courses.vue') },
      { path: 'blog', component: () => import('pages/Blog.vue') },
      { path: 'about', component: () => import('pages/About.vue') },
      { path: 'contacts', component: () => import('pages/Contacts.vue') },
      { path: 'login',
        component: () => import('pages/Login.vue'),
        beforeEnter: (to, from, next) => {
          if (localStorage.getItem('user-token')) {
            next('/profile')
          } else {
            next(true)
          }
        }
      },
      { path: 'registration',
        component: () => import('pages/Registration.vue'),
        beforeEnter: (to, from, next) => {
          if (localStorage.getItem('user-token')) {
            next('/profile')
          } else {
            next(true)
          }
        }
      },
      { path: 'password', component: () => import('pages/Password.vue') },
      { path: 'registration_letter', component: () => import('pages/Registration_letter.vue') },
      { path: 'success', component: () => import('pages/Success.vue') },
      { path: 'edit', component: () => import('pages/Edit.vue') },
      { path: 'profile',
        component: () => import('pages/Profile.vue'),
        beforeEnter: (to, from, next) => {
          if (!localStorage.getItem('user-token')) {
            next('/login')
          } else {
            next(true)
          }
        } },
      { path: 'coursepage',
        component: () => import('pages/CoursePage.vue'),
        children: [
          {
            name: 'course.page',
            path: '/coursepage/:id',
            component: () => import('pages/CoursePage.vue')
          }
        ]
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
