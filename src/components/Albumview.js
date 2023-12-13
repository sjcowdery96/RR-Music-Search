import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function AlbumView() {
    //navigate is a super sexy function library from react-router-dom
    const navigate = useNavigate()
    //grabs the ID from the URL params
    const { id } = useParams()
    //attaches album data to our react State
    const [albumData, setAlbumData] = useState([])

    useEffect(() => {
        //pulls from our handy dandy server file hosted at 4000
        const API_URL = `http://localhost:4000/song/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setAlbumData(resData.results)
        }
        fetchData()
        //set to update any time the id changes --> new song selected!
    }, [id])
    //create an array of just the song data 
    const justSongs = albumData.filter(entry => entry.wrapperType === 'track')
    //render that song data using a map function and some JSX
    const renderSongs = justSongs.map((song, i) => {
        return (
            <div key={i}>
                <p>{song.trackName}</p>
            </div>
        )
    })
    //easy navigation using our fancy navigate capabilities in the react router dom 
    const navButtons = () => {
        return (
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                |
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        )
    }
    //putting it all together
    return (
        <div>
            {navButtons()}
            {renderSongs}
        </div>
    )
}

export default AlbumView