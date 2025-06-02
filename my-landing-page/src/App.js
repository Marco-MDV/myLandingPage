import "./App.css";
import MyMain from "./components/main/MyMain";
import MyNavbar from "./components/navbar/MyNavbar";
import MyFooter from "./components/footer/MyFooter"
import { useEffect, useRef, useState } from "react";
function App() {
  const sectionOneRef = useRef(null)
  const [showNavbar, setShowNavBar] = useState(true)

  useEffect(()=>{
    const observer = new IntersectionObserver(
      ([entry])=>{
        setShowNavBar(entry.isIntersecting);
      },
      {threshold: 0.6}
    );
    if (sectionOneRef.current) {
      observer.observe(sectionOneRef.current);
    }
    return()=>{
      if(sectionOneRef.current) observer.unobserve(sectionOneRef.current)
    };
  },[]);

  return (
    <div className="App">
      {showNavbar && <MyNavbar/>}
      <MyMain sectionOneRef={sectionOneRef}/>
      <MyFooter/>
    </div>
  );
}

export default App;