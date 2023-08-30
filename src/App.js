import { Routes, Route } from "react-router-dom";

import NotFound from "./page404";
import AddBurger from "./components/Restaurants/addBurger";
import BabiBistro from "./components/Restaurants/babiBistro";
import SamiCafe from "./components/Restaurants/samiCafe";
import RajCafe from "./components/Restaurants/rajab";
import DumRest from "./components/Restaurants/dumerso";
import PizzaHut from "./components/Restaurants/pizzaHut";
import KkfcRes from "./components/Restaurants/kkfc";
import GoatRes from "./components/Restaurants/goatRes";
import GenRes from "./components/Restaurants/genesis";
import TapuRes from "./components/Restaurants/tapu";
import IgoRes from "./components/Restaurants/igloo";
import WegCoffee from "./components/Restaurants/wegCoffe";
import CafeFre from "./components/Restaurants/cafeFre";
import InjRes from "./components/Restaurants/injoy";
import FanosRest from "./components/Restaurants/fanos";
import TebotRes from "./components/Restaurants/tebot";
import DireRes from "./components/Restaurants/Diredawa";
import VaRest from "./components/Restaurants/vabene";
import KamRest from "./components/Restaurants/kamilia";
import BabiCoff from "./components/Restaurants/Babis";
import SunRes from "./components/Restaurants/sunbird";
import BakeMa from "./components/Restaurants/Bakema";
import JustRes from "./components/Restaurants/just";
import YumRes from "./components/Restaurants/Yummy";
import FaFrRest from "./components/Restaurants/Fafresh";
import BuffRes from "./components/Restaurants/Buffy";
import RasCafe from "./components/Restaurants/ras";
import AdoreRes from "./components/Restaurants/adore";

function App() {
  return (
    <Routes>
      <Route>
      <Route path="/addburger" element={<AddBurger/>} />
      <Route path="/babibistro" element={<BabiBistro/>} />
      <Route path="/samicafe" element={<SamiCafe/>} />
      <Route path="/rajabkurt" element={<RajCafe/>} />
      <Route path="/dumersocoffee" element={<DumRest/>} />
      <Route path="/pizzahut" element={<PizzaHut/>} />
      <Route path="/kkfc" element={<KkfcRes/>} />
      <Route path="/thegoatish" element={<GoatRes/>} />
      <Route path="/genesis" element={<GenRes/>} />
      <Route path="/tapu" element={<TapuRes/>} />
      <Route path="/igloo" element={<IgoRes/>} />
      <Route path="/cafefraisie" element={<CafeFre/>} />
      <Route path="/wegcofee" element={<WegCoffee/>} />
      <Route path="/injoy" element={<InjRes/>} />
     


      <Route path="/fanos" element={<FanosRest/>} />
      <Route path="/tebot" element={<TebotRes/>} />
      <Route path="/diredawa" element={<DireRes/>} />
      <Route path="/vabene" element={<VaRest/>} />
      <Route path="/kamilia" element={<KamRest/>} />
      <Route path="/babis" element={<BabiCoff/>} />
      <Route path="/sunbird" element={<SunRes/>} />
      <Route path="/Bakema" element={<BakeMa/>} />
      <Route path="/just" element={<JustRes/>} />
      <Route path="/yummy" element={<YumRes/>} />
      <Route path="/fafresh" element={<FaFrRest/>} />
      <Route path="/buffy" element={<BuffRes/>} />
      <Route path="/ras" element={<RasCafe/>} />

      <Route path="/adore" element={<AdoreRes/>} />
      
      





 
      <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
