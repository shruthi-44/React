function Card(props){
    return(
        <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto mb-4 hover:bg-gray-100 transition duration-300 ease-in-out">
            <h2 className="text-2xl font-bold mb-6">{props.name}</h2>
            <p className="text-gray-700 text-base mb-4">Role: {props.role}</p>
            </div>

    )
}

export default Card