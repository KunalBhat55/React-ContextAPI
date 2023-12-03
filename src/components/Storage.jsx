import { useEffect, useState } from "react";

function Storage() {
  const [name, setName] = useState(""); // used to store the name entered in the input field
  const [items, setItems] = useState([]); // used to store the names in the local storage

  useEffect(() => {

    if(items.length > 0 && items[0] != ""){
      localStorage.setItem("Name", JSON.stringify(items));
      console.log(items.length);
    }
    
  }, [items]);

  useEffect(() => {
    const localItems = JSON.parse(localStorage.getItem("Name"));
    if (localItems) {
      setItems(localItems);
    }
  }, []);

  const addName = () => {
    if(name=="") {alert("Please enter Something!"); return}
    setItems((prev) => [name, ...prev]);
    setName("");
  };

  return (
    <div className="flex justify-center flex-col text-2xl h-screen items-center">
      <input
        className="p-2 text-xl"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your Something"
      />
      <button
        className="p-2 bg-slate-700 hover:rounded-xl hover:bg-gray-800 transition-all m-2"
        onClick={addName}
      >
        Add Name to Local Storage
      </button>
      <div className="map-div flex flex-wrap">
        {items?.map((item, index) => (
          <div key={index}>
            <h2 className="m-2 p-6 underline bg-slate-500 text-white ">
             {item}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Storage;
