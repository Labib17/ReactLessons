import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />
      <Main search={search} />
      <Footer />
    </div>
  );
}

