import './style.css'

//const MyBottom = ({titulo})=>{
const MyBottom = (props)=>{
    return (
        <div className="bottom">
            {/*<h1 className="textBottom">{titulo}</h1>*/}
            <h1 className="textBottom">{props.titulo}</h1>
        </div>
    )
}

export default MyBottom