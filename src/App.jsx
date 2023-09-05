import Sidebar from "./components/Sidebar/Sidebar";
import ButtonPage from "./pages/ButtonPage";

function App() {
  return (
    <div className="md:container md:mx-auto">
      <div className="flex">
        <div>
          <Sidebar />
        </div>

        <div className="flex-grow pl-20 pt-14">
          <ButtonPage />
        </div>
      </div>
    </div>
  );
}

export default App;
