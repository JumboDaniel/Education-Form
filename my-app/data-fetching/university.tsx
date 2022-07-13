import { useState, useEffect } from "react";
import { useAppContext } from "../context/state";
import { ReactSearchAutocomplete } from "react-search-autocomplete";



// Page Component, receiving allPokemons
// from getStaticProps
export default function UniversitiesList({ handleEducation }) {
    const [data, setData] = useState([]);
    const {universities, setUniversities} = useAppContext()
    let autocomplete;
    useEffect(() => {
      fetch('http://universities.hipolabs.com/search?name')
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log(data);
          autocomplete = data.map((item, index) => {
            return {
                id: index,
                title: item.name
            }
          })
          setUniversities(autocomplete)
          
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

 
      const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results);
      };
      const handleOnFocus = () => {
        console.log("Focused");
      };
    
    return (
        <div style={{width:'80%'}}>
        <ReactSearchAutocomplete
        items={universities}
        fuseOptions={{ keys: ["title"] }}
        resultStringKeyName="title" // String to display in the results
        onSelect={(item)=> handleEducation(item.title)}
        onSearch={(string)=> handleEducation(string)}
        onFocus={handleOnFocus}   
        showIcon={false}
        styling={{
          height: "34px",
          width: "34px",
          border: "1px solid darkgreen",
          borderRadius: "4px",
          backgroundColor: "white",
          boxShadow: "none",
          color: "black",
          fontSize: "12px",
          fontFamily: "Courier",
          clearIconMargin: "3px 8px 0 0",
        }}
      />
      </ div>
    );
}
 
