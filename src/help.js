import Card from "./card";
import "./card.css";

export default function Help() {
    return(
        <div className='card-container'>
      {/* {[...Array(5)].map((_, i) => (
          <Card key={i} />
        ))} */}
            <Card name="Brijin"/>
        </div>
    );
}