import React, {useState}from "react";
import GroceryList from "./groceryList";
import GroceryListMaker from "./groceryListMaker";

function Groceries() {

    const [groceries, setGroceries] = useState([
    { name: 'Cabbage', category: "produce", store: "Aldi", aisle: "1", id: 1 },
    { name: 'Garlic', category: "produce",  store: "Aldi", aisle: "2", id: 2 },
    { name: 'Apple', category: "produce",  store: "Aldi", aisle: "2", id: 3 },
    { name: 'Toilet Paper', category: "house supplies",  store: "Costco", aisle: "53", id: 4 }
    ]);
    const[categories, setCategories] = useState([
        {name: "produce", id: 1},
        {name: "dairy", id: 2},
        {name: "meat", id: 3},
        {name: "house supplies", id: 4}
    ]);
    const[stores, setStores] = useState([
        {name: "Aldi", id: 1},
        {name: "Costco", id: 2},
    ]);
    const[aisles, setAisles] = useState([
        {name: "1", id: 1},
        {name: "2", id: 2},
        {name: "3", id: 3},
        {name: "4", id: 4},
    ]);

    const handleGroceriesSubmit = (newItem) => {
        setGroceries([...groceries, newItem]);
    }
    const handleCategorySubmit = (newCategory) => {
        setCategories([...categories, newCategory]);
    }
    const handleStoreSubmit = (newStore) => {
        setStores([...stores, newStore]);
    }
    const handleAisleSubmit = (newAisle) => {
        setAisles([...aisles, newAisle]);
    }

    return (
    <>
        <GroceryList />
        <GroceryListMaker
            groceries={groceries}
            setGroceries={setGroceries}
            onGroceriesSubmit={handleGroceriesSubmit}
            categories={categories}
            setCategories={setCategories}
            onCategorySubmit={handleCategorySubmit}
            stores={stores}
            setStores={setStores}
            onStoreSubmit={handleStoreSubmit}
            aisles={aisles}
            setAisles={setAisles}
            onAisleSubmit={handleAisleSubmit}
        />
    </>
  )

}

export default Groceries;