import heroImg from "./icons_assets/restauranfood.jpg"
import restaurant from './icons_assets/restaurant.jpg'
import "../App.css"
import Card from "./Card"
import photo1 from "./icons_assets/Mario and Adrian A.jpg"
import photo2 from "./icons_assets/Mario and Adrian b.jpg"
import photo3 from "./icons_assets/restaurant chef B.jpg"
import Rate from "./Rate"
function Main() {
    return(
        <main>
            <div className="hero">
                <div style={{ marginBottom: "40px", width:"30vw", justifySelf:"center", alignSelf:"center", height:"fit-content"}}>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
                        Nunc in velit arcu. Praesent bibendum fermentum purus, ultricies ornare arcu bibendum a.<br></br>
                        Vestibulum pellentesque ultrices libero.<br></br>
                        Vestibulum ex purus, faucibus ut cursus vel, convallis mattis enim.<br></br>
                    </p>
                    <button >
                    Reserve
                    </button>
                </div>
                <img src={heroImg} style={{
                    width:"30vw",
                    marginTop: "30px",
                    marginBottom: "40px",
                    justifySelf:"center",
                    minWidth: "300px"
                    }} alt="heroImg"/>
            </div>
            <div>
                <div id="special1">
                    <h1>Specials</h1>
                    <button style={{justifySelf:"center"}}>Online Menu</button>
                </div>
                <div id="special2">
                    <Card src={photo1} title="Headeing" par="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc in velit arcu."/>
                    <Card src={photo2} title="Headeing" par="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc in velit arcu."/>
                    <Card src={photo3} title="Headeing" par="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc in velit arcu."/>
                </div>

            </div>
            <div style={{ textAlign: "center", backgroundColor:"#F4CE14"}}>
                <h1>Testimonials</h1>
                <div id="testimonials">
                    <Rate />
                    <Rate />
                    <Rate />
                    <Rate />
                </div>
            </div>
            <div className="hero">
                <div style={{ marginBottom: "40px", width: "30vw", justifySelf: "center", alignSelf: "center", height: "fit-content" }}>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
                        Nunc in velit arcu. Praesent bibendum fermentum purus, ultricies ornare arcu bibendum a.<br></br>
                        Vestibulum pellentesque ultrices libero.<br></br>
                        Vestibulum ex purus, faucibus ut cursus vel, convallis mattis enim.<br></br>
                    </p>
                </div>
                <div style={{backgroundColor:'white', width:'max-content',height:'min-content',margin:'20px',justifySelf:'center'}}>
                    <img src={restaurant} style={{
                        width: "40vw",
                        marginTop: "30px",
                        justifySelf: "center",
                        minWidth: "300px",position:'relative',bottom:'40px',left:"40px"
                    }} alt="heroImg" />
                </div>
            </div>
        </main>
    )
}
export default Main