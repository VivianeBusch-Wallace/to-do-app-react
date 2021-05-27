// Importing components
import Header from "./components/Header";
import Footer from "./components/Footer";
import InputArea from "./components/InputArea";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <Header />
      <InputArea />
      <ToDoList />
      <Footer />
    </div>
  );
}

export default App;
