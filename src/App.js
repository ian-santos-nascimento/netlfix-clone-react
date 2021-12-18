import React, { useEffect, useState } from "react";
import Films from "./components/Tmdb/Tmdb";
import "./App.css";
import MovieRow from './components/MovieRow/MovieRow';
import ContrastedMovie from "./components/ContrastedMovie/ContrastedMovie";
import Header from "./components/Header/Header";

const Films_section = () => {
	const [moviesList, setMoviesList] = useState([]);
	const [contrastedMovie, setContrastedMovie] = useState(null);
	let [blackHeader, setBlackHeader] = useState(false);


	//ESSE useEffet recarrega toda a lista quando a pagina da f5
	useEffect(() => {
		const loadAll = async () => { 
			
			let list = await Films.getHomeList();
			setMoviesList(list);
			let posterFilmes = list.filter( films => films.slug === 'originals');
			let randomFilm =Math.floor(Math.random() * (posterFilmes[0].items.results.length -1))
			let chosenFilm = posterFilmes[0].items.results[randomFilm];
			let allInfoFromChosen = await Films.getMovieInfo(chosenFilm.id, "tv");
			setContrastedMovie(allInfoFromChosen);
		}


		loadAll();
	}, []);

	useEffect(() =>{
		const scrollListener = () =>{
			if(window.scrollY > 15){
				setBlackHeader(true); 
			}else{
				setBlackHeader(false);
			}
		}
		window.addEventListener('scroll', scrollListener);
		return () =>{
			window.removeEventListener('scroll', scrollListener);
		}
	}, [])

	return (
		<div className="page">
			{moviesList.length <= 3 &&
			<div className="loading">
				<img id="loading-img" src="https://c.tenor.com/DQyztbEmqnYAAAAC/netflix-loading.gif" alt="Netlfix"/>
			</div>
		}
			<Header blackHeader={blackHeader} />
			{contrastedMovie && 
			<ContrastedMovie filme={contrastedMovie} />}

			<section className="lists">
				{moviesList.map((item,key) =>(
					<MovieRow key={key} title={item.title} items={item.items}/>
				))}
			</section>
			<footer>
				Feito com <span aria-label="coração" role="img">❤</span> <br/>
				<a href="https://www.linkedin.com/in/ian-nascimento-11358b203/"> Clique aqui e me conehça </a><br/>
				Inspirado na Netflix e API do IMDB
			</footer>
			
		</div>
	);
};

export default Films_section;
