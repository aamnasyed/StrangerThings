import { Link } from "react-router-dom";
import { useState } from "react"; 

const AllThingsList = (props) => {
    const { thingsProps } = props;

    const [ searchBar, setSearchBar ] = useState("");


    let filteredThings = thingsProps.filter((singleThingElement) => {
        let lowercasedTitle = singleThingElement.title.toLowerCase();
        console.log(lowercasedTitle)
    
        return lowercasedTitle.includes(searchBar.toLowerCase())
    
})

return (
    <div>
        <p> List of Things </p>
        
       <form>
            <input
                type="text"
                placeholder= "Search Engine"
                onChangeEvent = {(event) => {
                    setSearchBar(event.target.value)
            }}
            />
       </form>
        
        <section> 
            {
                filteredThings.length ? filteredThings.map((singleThingsElement, idx) => {
                    return ( 
                        <div key={idx}> 
                            <p> Name: {singleThingsElement.title} </p>
                            <Link to={"/things/" + idx}> Go to {singleThingsElement.title} </Link>
                        </div>
                    )
                }) : <div> No Data Available </div>
            }
        </section>


    </div>
    )
}


export default AllThingsList;

