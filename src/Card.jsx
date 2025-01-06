import "./Card.css"
import Modal from "./Modal"
export default function Card(props){
   
  let url= `https://api.dicebear.com/9.x/pixel-art/svg?seed=${props.name}&hair=short01,short02,short03,short04,short05`

    return (
        <>
        {props.modal && (< Modal 
            handleChange={props.handleChange}
            handleEdit={props.handleEdit}
            saveEdit={props.saveEdit}
            editItem = {props.editItem}
            setShowModal = {props.setShowModal} />)}
        <div className="card" >
            <div className="card-img">

            <img src= {url}/>

            </div>
            <div className="card-body">
                <h3>{props.name}</h3>
                <div className="email">
                <i className="fa-regular fa-envelope"></i> <p>{props.email}</p>
                </div>
                <div className="phone">
                <i className="fa-solid fa-phone-flip"></i> <p>{props.phone}</p>
                </div>
                <div className="site">
                <i className="fa-solid fa-globe"></i> <p>{props.website}</p>
                </div>
                
            </div>

            <div className="card-action">

                <div className="like">
                    <button onClick={()=>{props.likehandle(props.id)}}>

                {props.like ?<i style={{color: "red"}} className="fa-solid fa-heart"></i> :<i className="fa-regular fa-heart"></i>}
                    </button>
                </div>
                <div className="edit">
                    <button onClick={()=>{props.handleEdit(props.id,props.name,props.email,props.phone,props.website)}}>
                <i className="fa-regular fa-pen-to-square"></i>

                    </button>
                </div>
                <div className="delete">
                    <button onClick={()=>{props.deletehandle(props.id)}}>
                <i className="fa-solid fa-trash-can"></i>

                    </button>
                </div>
            </div>
        </div>
        </>
    )
}