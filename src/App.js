import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout.jsx'
import DetailCharacter from "./pages/Home/DetailCharacter/DetailCharacter.jsx"; 

function App() {
  return (
    <>
    <Layout/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="character/:characterId" element={<DetailCharacter/>}/>
      </Routes>
    </>
  );
}

export default App;
