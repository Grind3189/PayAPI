import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Pricing from "pages/Pricing";
import About from "pages/About";
import Contact from "pages/Contact";

interface Routes {
  element: JSX.Element;
  path: string;
}

function App() {
  const location = useLocation();
  const routes: Routes[] = [
    {
      element: <Home />,
      path: "/",
    },
    {
      element: <Pricing />,
      path: "pricing",
    },
    {
      element: <About />,
      path: "about",
    },
    {
      element: <Contact />,
      path: "contact",
    },
  ];

  useEffect(() => {
    const scrollToTop = () => window.scrollTo(0, 0);

    scrollToTop();
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route, i) => {
          return <Route key={i} path={route.path} element={route.element} />;
        })}
      </Route>
    </Routes>
  );
}

export default App;
