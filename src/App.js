import { Routes, Route } from "react-router-dom";
import AddMenu from "./addMenu";
import NotFound from "./page404";
function App() {
  return (
    <>
      <Routes>
        
          <Route path="/addburger" element={<AddMenu />} />
          <Route path="*" element={<NotFound />} />
     
      </Routes>
    </>
  );
}

export default App;