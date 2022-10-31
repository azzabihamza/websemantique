import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const Aliment = () => {
  const [Aliment, setAliment] = useState(null);
  const [Animal, setAnimal] = useState(null);
  const [Liquide, setLiquide] = useState(null);


  async function fetchData() {
    console.log("aaaaaaa");

    axios
      .get(`http://localhost:8095/aliment`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        console.log(res.data.results.bindings);
        setAliment(res.data.results.bindings);
      });

      
    axios
    .get(`http://localhost:8095/animal`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((res) => {
      console.log(res.data.results.bindings);
      setAnimal(res.data.results.bindings);
    });


    axios
    .get(`http://localhost:8095/liquide`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((res) => {
      console.log(res.data.results.bindings);
      setLiquide(res.data.results.bindings);
    });
    
      
  }

  useEffect(() => {
    fetchData();
    
  }, []);
  

  


  

  return (
    <div>
        <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Les Aliments</h4>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Calorie</th>
                 
                  </tr>
                </thead>
                <tbody>
                {Aliment?.map((item) => (
                  <tr>
                    <td>{item.nom.value}</td>
                    <td>{item.calorie.value}</td>
                    
                    


                    

                  </tr>

                  
               
               ))}
                </tbody>

</table>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aliment;
