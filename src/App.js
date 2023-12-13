import { useEffect, useState, Fragment, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'
import Loading from './components/Loading'

function App() {
	//creates the relevant state variables
	let [search, setSearch] = useState('')
	let [message, setMessage] = useState('Search for Music!')
	let [data, setData] = useState([])
	//placeholder URL before we add the search to it
	const API_URL = 'https://itunes.apple.com/search?term='

	//when search is updated, run useEffect
	useEffect(() => {
		if (search) {
			const fetchData = async () => {
				document.title = `${search} Music`
				const response = await fetch(API_URL + search)
				const resData = await response.json()
				if (resData.results.length > 0) {
					return setData(resData.results)
				} else {
					return setMessage('Not Found')
				}
			}
			fetchData()
		}
	}, [search])

	const handleSearch = (e, term) => {
		e.preventDefault()
		setSearch(term)
	}
	//uses our Router/Routes in the react-router-dom to create the main results page
	return (
		<div>
			{message}
			<Router>
				<Suspense fallback={<Loading></Loading>}>
					<Routes>
						<Route path="/" element={
							<Fragment>
								<SearchBar handleSearch={handleSearch} />
								<Gallery data={data} />
							</Fragment>
						} />
						<Route path="/album/:id" element={<AlbumView />} />
						<Route path="/artist/:id" element={<ArtistView />} />
					</Routes>
				</Suspense>
			</Router>
		</div>
	);
}

export default App;