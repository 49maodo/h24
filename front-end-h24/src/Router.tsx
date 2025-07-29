import { Route, Routes } from "react-router-dom";
import { Liste } from "@/pages/code/Liste.tsx";
import { AddCode } from "@/pages/code/AddCode.tsx";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Liste />} />
      <Route path="/add" element={<AddCode />} />
    </Routes>
  );
};
