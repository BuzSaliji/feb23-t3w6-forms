import { useParams } from "react-router-dom"
export default function PokemonFetchPage(props){

	let {pokemonId} = useParams();

	return(
		<div>
			<h1>Gotta catch em all</h1>

			
			<h2>Finding Pokemon with the ID of... {pokemonId}</h2>
		</div>
	)
}