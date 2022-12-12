
const DeleteFavourites = ({onDelete}) => {

  return (
                <div onClick={() => onDelete} style={{ backgroundColor: 'red', cursor:'pointer', width:'6%', borderRadius:'5px' }}>
                    DELETE
                </div>
  )
}

export default DeleteFavourites
