import './index.css'

const CardItem = props => {
  const {cardItem} = props
  const {title, description, imgUrl, className} = cardItem

  return (
    <li className="list-item">
      <div className={`card ${className}`}>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <div className="image-container">
          <img src={imgUrl} alt="avatar" className="image" />
        </div>
      </div>
    </li>
  )
}

export default CardItem
