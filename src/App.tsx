import "./App.css";
import Sidebar from "./components/Layout/sidebar";
import TeamOverview from "./components/team/teamOverview";

function App() {
  return (
    <main className="bg-[#F6F7F9] flex flex-row h-screen w-screen">
      <Sidebar />
      <section className="w-[calc(100%-280px)] h-full pt-2.5 pr-2.5 pb-8">
        <TeamOverview />
      </section>
    </main>
  );
}

export default App;
