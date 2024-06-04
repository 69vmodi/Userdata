import logo from './logo.svg';
import './App.css';
import Header from "./MyComponent/Header";
import Todos from "./MyComponent/Todos";
import Footer from "./MyComponent/Footer";
function App() {
    let todos = [
      {
        sno: 1,
        title: "Go to the market",
        desc: "You need to go to the market to get this job"
      },
      {
        sno: 2,
        title: "Go to the mall",
        desc: "You need to go to the mall to get this job"
      },
      {
        sno: 3,
        title: "Go to the office",
        desc: "You need to go to the office to get this job"
      },
    ]
    return( 
    <>
    <Header title= "" searchBar={false}/>
    <Todos/>
    <Footer/>
    
    </>
  );
}

export default App;
