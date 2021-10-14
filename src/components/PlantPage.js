import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(()=> {
    fetch('http://localhost:6001/plants')
    .then((resp) => resp.json())
    .then((plantArr) => setPlants(plantArr))
  }, []);

  function handlePlantAdd(newPlant){
   const updatedPlants = [...plants, newPlant]
   setPlants(updatedPlants)
    
  }
  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
   
  });
  function handleDeletePlant(id){
    const newPlants = plants.filter((plant)=> plant.id !== id)
    setPlants(newPlants)
  }

  return (
    <main>
      <NewPlantForm onPlantAdd={handlePlantAdd} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      <PlantList plants={displayedPlants} onDeletePlant={handleDeletePlant}/>
    </main>
  );
}

export default PlantPage;
