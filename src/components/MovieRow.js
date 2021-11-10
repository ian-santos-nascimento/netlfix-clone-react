import React, {useState} from 'react';
import "./MovieRowStyle.css";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";

const MovieRow = ({title,items}) =>{
   
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () =>{
        let x = scrollX + Math.floor(window.innerWidth / 2);
        if(x > 0){
            x=0;
        }
        setScrollX(x);

    };
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listWidth = items.results.length * 150;
        if((window.innerWidth - listWidth) > x){
            x = window.innerWidth - listWidth - 40;
        }
        setScrollX(x);
    };

    return(
        <div className="movieRow">
            <h2>
                {title}
            </h2>
        <div className="movieRow-navegate-left" onClick={handleLeftArrow} >
            <NavigateBefore style={{fontSize:50}} />
        </div>
        <div className="movieRow-navegate-right">
            <NavigateNext style={{fontSize:50}} onClick={handleRightArrow} />
        </div>
        
            <div className="movieRow-listarea">
                <div className="movieRow-list" style={{
                     marginLeft: scrollX,
                      width:items.results.length * 150,
                      }}
                    >

                    {items.results.length > 0 && items.results.map((item, key) =>(
                        <div key={key} className="film">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
            
            
        </div>
    );
   
}

export default MovieRow;