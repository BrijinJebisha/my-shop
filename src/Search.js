import { useRef } from "react";
import "./Navigation.css";
import search from "./searchIcon.png";

export default function NavSearch()
{

    const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  }
    return(
        <div className="searchBar">
            <div className="box">
                <form>
                    <input type="search" ref={inputElement} title="search" placeholder="Search..." className="input"/>
                </form>
            </div>
            <div className="box1">
                <button type="submit" onClick={focusInput} className="IconBtn" >
                    <img alt="search" src={search} className="icon" />
                </button>
            </div>
        </div>
    );
}