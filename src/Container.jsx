// import { useEffect, useState } from 'react'
// import Card from './Card'
// import "./Container.css"

// export default function Container(){

//     let url = "https://jsonplaceholder.typicode.com/users"
//     let [data,setData] = useState();
   
   
//     // let fetchData = async ()=>{
//     //         let response = await fetch(url);
//     //         let result = await response.json()
//     //             setData(result);
//     //             console.log(data[3]);
    
//     // }
//     async function getData (){
//         let response = await fetch(url);
//         let result = await response.json()
//             setData(result);
//             console.log(data);

// }
//     useEffect( ()=>{getData();}
//     ,[]);

//     let deletehandle = (k,id)=>{
//         setData((data)=>{
//             return data.filter(data[k].id != id);
//         })
//     }

//     return (
//         <>
//         <div className="container">
//             <button onClick={getData}>clickkk</button>
//             <Card/>
//             <Card k={0} id={data[0].id}  name={data[0].name} email={data[0].email} phone={data[0].phone} website={data[0].website}/>
//             <Card k={1} id={data[1].id}  name={data[1].name} email={data[1].email} phone={data[1].phone} website={data[1].website} />
//             <Card k={2} id={data[2].id}  name={data[2].name} email={data[2].email} phone={data[2].phone} website={data[2].website}/>
//             {/* <Card k={3} id={data[3].id}  name={data[3].name} email={data[3].email} phone={data[3].phone} website={data[3].website} />
//             <Card k={4} id={data[4].id}  name={data[4].name} email={data[4].email} phone={data[4].phone} website={data[4].website} />
//             <Card k={5} id={data[5].id}  name={data[5].name} email={data[5].email} phone={data[5].phone} website={data[5].website} />
//             <Card k={6} id={data[6].id}  name={data[6].name} email={data[6].email} phone={data[6].phone} website={data[6].website} />
//             <Card k={7} id={data[7].id}  name={data[7].name} email={data[7].email} phone={data[7].phone} website={data[7].website}/>
//             <Card k={8} id={data[8].id}  name={data[8].name} email={data[8].email} phone={data[8].phone} website={data[8].website} />
//             <Card k={9} id={data[9].id}  name={data[9].name} email={data[9].email} phone={data[9].phone} website={data[9].website} /> */}
//             <Card/>
//             <Card/>
//             <Card/>
//         </div>
//         </>
//     )
// }

import { useEffect, useState } from "react";
import Card from "./Card";
import "./Container.css";

export default function Container() {
  let url = "https://jsonplaceholder.typicode.com/users";
  let [data, setData] = useState([ ]);
  let [editItem, setEditItem] = useState(null);
  let [showModal, setShowModal] = useState(false);
 

  async function getData() {
    try {
      let response = await fetch(url);
      let result = await response.json();
      let updatedData = result.map((item) => ({ ...item, liked: false }));
      setData(updatedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  let deletehandle = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  let likehandle =(id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    );
  };
  let handleEdit = (id,name,phone,email,website) => {
    // setEditItem(()=>{}); 
    setEditItem({ id, name, phone, email, website });
    setShowModal(true); // Show the modal
  };

  let saveEdit = (id,name,phone,email,website) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ?{ ...item , name: name , phone : phone , email : email , website :website} : item
      )
    );

    console.log(id);
    console.log(phone);
    console.log(email);
    console.log(website);
  

    setShowModal(false); // Close the modal
  };

  let handleChange = (e) => {
    const { name, value } = e.target;
    setEditItem((prevItem) => ({ ...prevItem, [name]: value }));
    console.log(editItem);
  };

  return (
    <div className="container">
      
      {data.length > 0 ? (
        data.map((item, index) => (
          <Card
            key={item.id}
            k={index}
            id={item.id}
            deletehandle={deletehandle}
            likehandle={likehandle}
            like={item.liked}
            name={item.name}
            email={item.email}
            phone={item.phone}
            website={item.website}
            handleChange={handleChange}
            handleEdit={handleEdit}
            saveEdit={saveEdit}
            modal={showModal}
            editItem = {editItem}
            setShowModal={setShowModal}
            
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
