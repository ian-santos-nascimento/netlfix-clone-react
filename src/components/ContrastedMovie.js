import "./ContrastedMovieStyle.css";
import React from "react";

const ContrastedMovie = ({ filme }) => {
	let firstDate = new Date(filme.first_air_date);
	let genres = [];
	filme.genres.forEach(element => {
		genres.push(element.name);
	});

	let description = filme.overview;
	if(description.lenght > 200){
		description = description.substring(0,200) + "..."; 
	}

	return (
		<section
			className="featured"
			style={{
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundImage: `url(https://image.tmdb.org/t/p/original${filme.backdrop_path})`,
			}}>
			<div className="featured-vertical">
				<div className="featured-horizontal">
					<div className="featured-name">
                        {filme.original_name}
                    </div>
					<div className="featured-info">
						<div className="featured-points">{filme.vote_average}</div>
						<div className="featured-year">{firstDate.getFullYear()}</div>
                        <div className="featured-season">{filme.number_of_seasons}{filme.number_of_seasons !== 1 ? ` Temporadas` : ' Temporada'}</div>
					</div>
                    <div className="featured-overview">
                        {description}
                    </div>
					<div className="featured-buttons">
						<a href={`watch/${filme.id}`} className="watch-button">►Assitir</a>
						<a href={`info/${filme.id}`} className="info-button">Mais informações</a>
					</div>
                    <div className="featured-genres"><strong>Gêneros: </strong>{genres.join(", ")}</div>

				</div>
			</div>
		</section>
	);
};
export default ContrastedMovie;
