import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import('@/views/Home')

// Containers
const TheContainer = () => import('@/containers/TheContainer')
const TheVisitorContainer = () => import('@/containers/TheVisitorContainer')

// Views
const FileUpload = () => import('@/views/admin/files/FileUpload')
const FileList = () => import('@/views/admin/files/FileList')
const HtmlSnippet = () => import('@/views/admin/html_snippets/HtmlSnippet')
const ListHtmlSnippet = () => import('@/views/admin/html_snippets/ListHtmlSnippet')
const SaveLink = () => import('@/views/admin/links/SaveLink')
const ListLinks = () => import('@/views/admin/links/ListLinks')

const ListFile_v = () => import('@/views/visitor/Files')
const ListHtmlSnippet_v = () => import('@/views/visitor/HtmlSnippets')
const ListLinks_v = () => import('@/views/visitor/Links')

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
      path: '/visitor',
      name: 'Visitor',
      redirect: '/visitor/files',
      component:TheVisitorContainer,
      children: [
        {
          path: 'files',
          component: ListFile_v,
        },
        {
          path: 'html-snippets',
          component: ListHtmlSnippet_v,
        },
        {
          path: 'links',
          component: ListLinks_v,
        },
      ]
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
          component: HtmlSnippet,
          props:true
        },
        {
          path: 'htmlsnippet/list',
          name: 'HTML Snippet List',
          component: ListHtmlSnippet,
        },
        
        {
          path: 'save-link',
          name: 'Save link',
          component: SaveLink,
          props:true
        },
        {
          path: 'links/list',
          name: 'Links list',
          component: ListLinks
        }
      ]
    }

  ]
}

