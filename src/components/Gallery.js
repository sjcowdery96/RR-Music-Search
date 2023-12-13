import GalleryItem from './GalleryItem'
//passes simple gallery data in as props
function Gallery(props) {
    const data = props.data.result.read()
    //creates the display data
    const display = data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })
    //renders gallery display data
    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery