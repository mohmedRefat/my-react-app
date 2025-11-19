import img from "./assets/main.png"
function Card() {
    return (
        <div className="card">
            <img src={img} alt="Card Image" />
            <h2>Card Title</h2>
            <p>This is a description of the card.</p>
        </div>
    )
}

export default Card
