I. Setup project reactjs
1) npx create-react-app (name-project)
2) I think you should choose the framework css : Bootstrap 5 or Ant Design 
- cd (name-project) -> npm install react-bootstrap bootstrap or npm install antd
- npm install react-icons --save
3) react-router-dom@6(router)
- cd (name-project) -> npm install react-router-dom@6
- the different between Element and Component:
*** Element || Component ***
- An element is always gets returned by a component. || A component can be functional or a class that optionally takes input and returns an element.
- The element does not have any methods. || Each component has its life cycle methods.
- A React element is an object representation of a DOM node. || A component encapsulates a DOM tree.
- Elements are immutable i,e once created cannot be changed. || The state in a component is mutable.
- An element can be created using React.createElement( ) with type property. || A component can be declared in different ways like it can be an element class with render() method or can be defined as a function.
- We cannot use React Hooks with elements as elements are immutable. || React hooks can be used with only functional components.
- Elements are light, stateless and hence it is faster. || It is comparatively slower than elements.
4) cd (name-project) -> npm run start -> http://localhost:3000
5) delete unnecessary junk files
6) format document = alt + shift + f( I like spaces 4, very easy to watch)
7) gitlab -> fork -> create name project URL + private + checkbox private + fork project -> Web IDE (I prefer gitlab but it's not free)
8) github -> cd (name-project) -> npm install gh-pages --save-dev
+ package.json:
- "homepage": "http://Vegetarian-Wolf.github.io/curriculum-vitae"
- "scripts":
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
- If deploy error: delete the node_modules/.cache/gh-pages. -> npm run deploy
9) Switch language
- npm install react-i18next i18next --save; 
- npm install i18next-browser-languagedetector
- npm install i18next-http-backend

II. Before gh-pages
1) import { HashRouter } from 'react-router-dom';
2) loadPath: "/repo_name/assets/i18n/{{ns}}/{{lng}}.json
3) because the path didn't work well in gh-pages i had to disable them --> npm install --save @ap.cx/react-fullpage