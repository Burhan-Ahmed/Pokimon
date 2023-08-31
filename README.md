# Pokimon Game App
React+Node.Js Project, just for Practice <br>
Landing Page of Website![Pokimon](/Client/src/assets/Pokimon.PNG)

## Tool
VS Code
## Languages
- HTML
* CSS3
+ Tailwind
- React
* Node
+ Express
- Material UI

## Project was Created Via
React + Vite

## Use the Following Command to run the project on VS code
`npm run dev`
## Use the Following Command to run the Server
`npm start` <br>
Make sure that package.json file has <br>
`"start": "node your_node_file"`<br>
Use `Nodemon` for auto restart your server <br>

## Points to Ponder
1. if else does not exit in jsx, thus use ternary operator because jsx is not a programming language but a syntax extension for xml
2. Use {} brackets to use js in jsx file.
3. Context is used when I want to pass the data of my parent component to its child component (sharing of data/variables within different components).
4. useEffect hook is used when you want to render something the page is loaded for the first time.
5. useContext is used when you want to share the content between parent and child component. <br >
Remember 3 keywords while working with useContext
- createContext
* .Provider
+ useContext
6. Consider a Slice in redux as a Feature
## NODE

1. use http along with built in createServer feature to create a server for http requests and responds.
2. Once the Server is created you can Either respond something or request something.(Mostly it is a res or response)
3. A port is also required which is dedicated to that specific Server
4. Port is a Path for the flow of your traffic.
5. Async and await can help to pause the execution process. 
Async comes with the intended function while await comes with the fetch request.
6. You can not use throw in .then block
7. Server and Client run on different ports
8. Axios and fetch serves the same purpose of getting API but axios is more advance and async by nature.
9. Middleware is like a third party between Server and Client. There can be multiple Middleware with each having dedicated task. Basically it can do processing on data before the client could access the Server. Like checking if the client is not a Hacker.
10. Use of next() function is nessary in custom middleware whereas, cors is not a custom middleware
### This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
