import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PokemonInfo from "./Pages/PokemonInfo";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="pokemon/:id" element={<PokemonInfo />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
export default AppRouter;
