import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";
import './styles.css'
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`; // Force HTTP
;

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(API_URI)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("API Response:", data); // Debugging log
        setItems(data);
      })
      .catch((error) => console.error("Error fetching data:", error.message));
  }, []);

  // Function to delete an item
  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return <ItemList items={items} onDelete={handleDelete} />;
}

export default App;
