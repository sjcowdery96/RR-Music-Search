import { useEffect, useState, Fragment, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'
import Loading from './components/Loading'
import { createResource as fetchData } from './helper'
import SpinningImage from './components/SpinningImage'


function App() {
	//creates the relevant state variables
	let [search, setSearch] = useState('')
	let [message, setMessage] = useState('Search for Music!')
	let [data, setData] = useState(null)//changed to null for suspsense!
	//placeholder URL before we add the search to it
	const API_URL = 'https://itunes.apple.com/search?term='

	//when search is updated, run useEffect and wrap data
	useEffect(() => {
		if (search) {
			setData(fetchData(search))
		}
	}, [search])

	/*
	////OLD USE EFFECT
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

	*/

	const renderGallery = () => {
		if (data) {
			return (
				<Suspense fallback={<Loading></Loading>} >
					<Gallery data={data} />
				</Suspense >
			)
		}
		else {
			<Suspense fallback={<Loading></Loading>} >
			</Suspense >
		}
	}

	const handleSearch = (e, term) => {
		e.preventDefault()
		setSearch(term)
	}
	//uses our Router/Routes in the react-router-dom to create the main results page
	return (
		<div>
			{message}
			<Router>
				<Routes>

					<Route path="/" element={
						<Fragment>
							<SearchBar handleSearch={handleSearch} />
							{renderGallery()}
						</Fragment>
					} />
					<Route path="/album/:id" element={<AlbumView />} />
				</Routes>

			</Router>
		</div>
	);
}

export default App;