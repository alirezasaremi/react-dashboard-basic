import NavBar from "./components/NavBar";
import DashboardContent from "./components/DashboardContent";

function App() {
  return (
    <div className="w-full flex">
      <NavBar />
      <main className="p-6 w-full">
        <DashboardContent />
      </main>
    </div>
  );
}

export default App;
