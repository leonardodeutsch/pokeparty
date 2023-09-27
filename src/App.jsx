import React from "react";
import { Routes, Route, Navigate, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from 'react-router-dom';
import Pokemon from './pages/Pokemon.jsx';
import Navbar from "./Navbar.jsx";
import PokemonInfo from "./pages/PokemonInfo.jsx";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/pokemon" element={<Pokemon/>}/>
      <Route path="*" element={<Navigate replace to="/" />} />
      <Route path="/pokemon/:id" element={<PokemonInfo/>}/>
    </Route>
    )
  );

  return (
    <div>
      <h1>
        PokeParty
      </h1>
      <RouterProvider router={router}/>
    </div>
  );
}

const Root = () => {
  return (
    <>
      <Navbar/>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;