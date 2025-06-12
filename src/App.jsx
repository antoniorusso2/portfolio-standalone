import { BrowserRouter, Route, Routes } from "react-router";
import MainLAyout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLAyout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
