const api_key = 'de0e746ab5cbd789cda400ae86e4c3a6'
const url_base = 'https://api.themoviedb.org/3/'

/*LISTA DE FILMES DE TEROR, 
*/

const fetch_url = async(endpoint) =>{
    const requisicao = await fetch(`${url_base}${endpoint}`);
    const json = await requisicao.json();
    return json;
}
    

const Films = {

    getHomeList : async () =>{
        return [
            {
                slug:'originals',
                title:'Originais Netflix',
                items: await fetch_url(`discover/tv?with_networks=213&api_key=${api_key}&language=pt-BR`)
            },
            {
                slug:'tranding',
                title:'Recomendados da Semana',
                items:await fetch_url(`trending/all/week?api_key=${api_key}&language=pt-BR`)
            },
            {
                slug:'toprated',
                title:'Em Alta',
                items:await fetch_url(`movie/top_rated?api_key=${api_key}&language=pt-BR`)
            },
            {
                slug:'documentary',
                title:'Documentários',
                items:await fetch_url(`discover/movie?with_genres=99&api_key=${api_key}&language=pt-BR`)

            },
            {
                slug:'comedy',
                title:'Comédia',
                items:await fetch_url(`discover/movie?with_genres=35&api_key=${api_key}&language=pt-BR`)
            },
            {
                slug:'action',
                title:'Ação',
                items:await fetch_url(`discover/movie?with_genres=28&api_key=${api_key}&language=pt-BR`)
            },
            {
                slug:'horror',
                title:'Terror',
                items:await fetch_url(`discover/movie?with_genres=27&api_key=${api_key}&language=pt-BR`)
            },
        ]
    },
    getMovieInfo : async (movieId, type) => {
        let info ={};
        if(movieId){
            switch(type){
                default:
                    info =  null;
                break;
                case 'movie':
                    info = await fetch_url(`movie/${movieId}?language=pt_BR&api_key=${api_key}`);
                break;
                case 'tv':
                    info = await fetch_url(`tv/${movieId}?language=pt_BR&api_key=${api_key}`);
                break;
            }
        }
        return info;
    }
}



export default Films;