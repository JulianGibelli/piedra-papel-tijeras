import { initPageWelcome } from "./pages/pageWelcome";
import { initPageInstructions } from "./pages/pageInstructions";

const BASE_PATH = "/piedra-papel-tijeras";

function isGithubPages() {
  return location.host.includes("github.io");
}

const routes = [
  {
    path: /\/welcome/,
    page: initPageWelcome,
  },
  {
    path: /\/instructions/,
    page: initPageInstructions,
  },
  {
    path: /\/end/,
    page: (any) => {
      console.log("test end");
    },
  },
];

export function initRouter(mountEl: HTMLElement) {
  function goTo(path) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }
  function handleRoute(route) {
    console.log("El handleRoute recibió una nueva ruta", route);
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;

    for (const r of routes) {
      if (r.path.test(newRoute)) {
        //le mando a cada page la funcion goTo para que luego los componentes puedan hacer saltos de url
        //me tiene que devolver UN elemento html para montar sobre mi cascaron
        const newPage = r.page({ goTo:goTo }) as any;

        mountEl.innerHTML = "";

        while (mountEl.firstChild) {
          mountEl.firstChild.remove;
        }

        mountEl.append(newPage);
      }
    }
  }

  if (location.pathname == "/") {
    goTo("/welcome");
    console.log("soy location.pathname inicial: ", location.pathname);
  } else {
    console.log("soy location.pathname inicial: ", location.pathname);
    handleRoute(location.pathname);
  }

  //1) punto de inicio (inicialmente es / )
  //escucho la posibilidad de volver atras, y disparo esa ruta al handleroute
  window.addEventListener("popstate", () => {
    handleRoute(location.pathname);
  });
}
