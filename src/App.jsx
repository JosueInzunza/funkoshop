import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItiemListContainer";

function App() {
  return (
    <>
      <Navbar />
      {<ItemListContainer />}
    </>
  );
}

export default App;
