import 'react'

const Movie = ({ title, year, imageUrl }) => {
    return (
        <>
            <div className="shop">

                <div className="products">
                    <img src={imageUrl} alt="Movie" />
                    <h1> {title} </h1>
                    <p> {year} </p>
                    <button>Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default Movie
