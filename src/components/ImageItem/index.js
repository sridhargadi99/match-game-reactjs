import './index.css'

const ImageItem = props => {
  const {imageDetails, checkImage} = props
  const {imageUrl, thumbnailUrl} = imageDetails
  const clickThumbnailImage = () => {
    checkImage(imageUrl)
  }
  return (
    <li className="image-list-style">
      <button
        type="button"
        className="thumbnail-button-style"
        onClick={clickThumbnailImage}
      >
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-image-style"
        />
      </button>
    </li>
  )
}

export default ImageItem
