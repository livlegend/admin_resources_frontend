export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'PDF Upload',
        to: '/admin/file-upload',
        icon: 'cil-file'
      },   
      {
        _name: 'CSidebarNavItem',
        name: 'HTML Snippet',
        to: '/admin/html-snippet',
        icon: 'cil-cursor'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Link',
        to: '/admin/save-link',
        icon: 'cil-pencil'
      },
    ]
  }
]