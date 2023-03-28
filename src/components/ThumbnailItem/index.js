import './index.css'

const GetItem = props => {
  const {item, onImage} = props
  const {thumbnailUrl, thumbnailAltText, id} = item
  const onButton = () => {
    onImage(id)
  }
  return (
    <li>
      <button type="button" className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="image1"
          onClick={onButton}
        />
      </button>
    </li>
  )
}

export default GetItem
