import "./card.css";
export default function Card()
{
    return(
            <div className="card-div">
                <div className="flip-box-front">
                    <img src="/profileicon.png" alt="icon" className="profile" />
                    <p>Name</p><br/>
                    <p>DOB</p><br/>
                    <p>Ph.no</p>
                </div>
                <div className="flip-box-back">
                    <div className="Desc">Description:</div>
                    <div className="content">
                        <p>I am a web developer!!! I know how to create a website.</p>
                    </div>
                
                </div>
            </div>
    );
}