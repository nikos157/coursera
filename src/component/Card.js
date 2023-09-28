function Card(props) {
    return (
        <div style={{width: "25vw",height:"fit-content",backgroundColor:"white",minWidth:"300px", justifySelf:"center"}}>
            <img src={props.src} alt="card photo" style={{width:"25vw", minWidth:"300px"}}/>
            <h2>{props.title}</h2>
            <p>{props.par}</p>
        </div>
    )
}
export default Card