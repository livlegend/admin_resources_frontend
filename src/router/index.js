import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import('@/views/Home')

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const FileUpload = () => import('@/views/admin/FileUpload')
const HtmlSnippet = () => import('@/views/admin/HtmlSnippet')
const SaveLink = () => import('@/views/admin/SaveLink')


Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/admin',
      name: 'admin',
      redirect: '/admin/file-upload',
      component:TheContainer,
      children: [
        {
          path: 'file-upload',
          name: 'File Upload',
          component: FileUpload
        },
        {
          path: 'html-snippet',
          name: 'HTML Snippet',
          component: HtmlSnippet
        },
        {
          path: 'save-link',
          name: 'Save link',
          component: SaveLink
        }
      ]
    }
  ]
}

