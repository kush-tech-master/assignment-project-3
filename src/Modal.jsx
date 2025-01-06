import "./Modal.css"

export default function Modal(props){

    return(

        <>
         {/* {showModal && ( */}
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Item</h2>
            <label htmlFor="name">
              Name:
              <input
                type="text"
                name="name"
                value={props.editItem.name}
                onChange={props.handleChange}
              />
            </label>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                name="email"
                value={props.editItem.email}
                onChange={props.handleChange}
              />
            </label>
            <label htmlFor="phone">
              Phone:
              <input
                type="text"
                name="phone"
                value={props.editItem.phone}
                onChange={props.handleChange}
              />
            </label>
            <label htmlFor="website">
              Website:
              <input
                type="text"
                name="website"
                value={props.editItem.website}
                onChange={props.handleChange}
              />
            </label>
            <button onClick={()=>{props.saveEdit(props.editItem.id,props.editItem.name,props.editItem.phone,props.editItem.email,props.editItem.website)}}>Save</button>
            <button onClick={() => props.setShowModal(false)}>Cancel</button>
          </div>
        </div>
      {/* )} */}
        </>
    )
}