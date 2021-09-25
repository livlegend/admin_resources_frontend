import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import('@/views/Home')

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const FileUpload = () => import('@/views/admin/files/FileUpload')
const FileList = () => import('@/views/admin/files/FileList')
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
      name: 'Admin',
      redirect: '/admin/file-upload',
      component:TheContainer,
      children: [
        {
          path: 'file-upload',
          name: 'File Upload',
          component: FileUpload,
        },
        {
          path: 'file-upload/:id',
          name: 'File Update',
          component: FileUpload,
          props:true
        },
        {
          path: 'file-list',
          name: 'File List',
          component: FileList
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

