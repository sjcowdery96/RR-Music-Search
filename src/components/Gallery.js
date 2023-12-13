import GalleryItem from './GalleryItem'
//passes simple gallery data in as props
function Gallery(props) {
    //creates the display data
    const display = props.data.map((item, index) => {
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