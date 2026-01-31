import { createRouter, RouterProvider } from "@tanstack/react-router";
import React from "react";
import { routeTree } from "./routeTree.gen.ts";

const router = createRouter({ routeTree });

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
