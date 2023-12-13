import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

function ArtistView() {
    //using navigate to record our movement through the pages
    const navigate = useNavigate()
    //saves our ID from the URL params
    const { id } = useParams()
    //attaches artist data to the react state
    const [artistData, setArtistData] = useState([])

    useEffect(() => {
        //attaches from our cool server running along side
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results)
        }
        fetchData()
        //when ID is updated, useEffect runs
    }, [id])
    //creates an array exporting just the album data form the response
    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')
    //maps the array of albums into a render-able jsx format
    const renderAlbums = justAlbums.map((album, i) => {
        return (
            <div key={i}>
                <Link to={`/album/${album.collectionId}`}>
                    <p>{album.collectionName}</p>
                </Link>
            </div>
        )
    })
    //simple nav using Navigate
    const navButtons = () => {
        return (
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                |
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        )
    }
    //putting all the components together
    return (
        <div>
            {artistData.length > 0 ? <h2>{artistData[0].artistName}</h2> : <h2>Loading...</h2>}
            {navButtons()}
            {renderAlbums}
        </div>
    )
}

export default ArtistView