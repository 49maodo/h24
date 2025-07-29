import "./App.css";
import { Router } from "@/Router.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner.tsx";

function App() {
  return (
    <div
      className={
        "container mx-auto flex flex-1 flex-col min-h-screen m-0 p-0 bg-background"
      }
    >
      <div className="mt-2 flex items-center justify-between">
        <header className="App-header">
          <h1 className="text-2xl font-bold mb-4">Code Snippets</h1>
        </header>
        <Button asChild>
          <Link to="/add">Ajouter</Link>
        </Button>
      </div>
      <main className={"container mt-2 flex-1"}>
        <Router />
      </main>
      <footer className="w-full  bottom-0 left-0 bg-background border-t p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Code snippet</p>
      </footer>
      <Toaster />
    </div>
  );
}

export default App;
