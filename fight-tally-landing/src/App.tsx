import Hero from "./components/Heo";
import JoinWaitlist from "./components/JoinWaitlist";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar></Navbar>
      <JoinWaitlist></JoinWaitlist>
      <Hero></Hero>
    </main>
  );
}

export default App;
