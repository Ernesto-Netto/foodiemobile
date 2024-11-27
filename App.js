import Routes from "./src/routes.js";
import RoutesAuth from "./src/routesAuth.js";

const isUseAuth = true;

export default function App() {
  return isUseAuth ? <RoutesAuth/> : <Routes />         
    
}


/*
Comandos para salva no GITHUB
1. git status
2. git add .
3. git commit -m "MENSAGEM"
4. git status
5. git push
*/