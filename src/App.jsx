import Navbar from "./components/Navbar/Navbar";
import ButtonPage from "./pages/ButtonPage";

function App() {
  return (
    <div className="w-full flex-col md:flex md:min-h-screen md:flex-row">
      <div className="flex w-full flex-shrink-0 flex-col bg-[#FAFBFD] text-gray-700 md:w-64">
        <Navbar />
      </div>
      <div className="flex grow flex-col">
        <ButtonPage />
      </div>
    </div>
  );
}

export default App;
