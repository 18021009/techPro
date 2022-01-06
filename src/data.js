export const folder = [
  {
    path: '/src',
    type: 'folder',
    children: ['/src/component', '/src/index.js', '/src/App.js'],
  },
  {
    path: '/src/component',
    type: 'folder',
    children: ['/src/component/index.js', '/src/component/App.js'],
  },
  {
    path: '/src/index.js',
    type: 'file',
    content: 'Thanks for reading me me. But there is nothing here.'
  },
  {
    path: '/src/App.js',
    type: 'file',
    content: 'Thanks for reading me me. But there is nothing here.'
  },
  {
    path: '/src/component/index.js',
    type: 'file',
    content: 'Thanks for reading me me. But there is nothing here.',
  },
  {
    path: '/src/component/App.js',
    type: 'file',
    children: 'Thanks for reading me me. But there is nothing here.',
  },
  
];

const index = `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);`

const app =
`export default function App(){
  return (
      <div>hello</div>
  )
}
`;

 const filesData = [
  {
    active: true,
    path: '/src/index.js',
    code: index,
    hidden: false,
  },
  {
    path: '/src/App.js',
    code: app,
    hidden: true,
    active: false,
  },
  {
    path: '/src/component/index.js',
    code: ``,
    hidden: true,
    active: false,
  },
  {
    path: '/src/component/App.js',
    code: ``,
    hidden: true,
    active: false,
  }
]

var data = {};
for (let i = 0; i < filesData.length; i++){
  let FileData = {};
  FileData['code'] = filesData[i].code;
  FileData['hidden'] = filesData[i].hidden;
  data[filesData[i].path] = FileData;
}

export const files = data;