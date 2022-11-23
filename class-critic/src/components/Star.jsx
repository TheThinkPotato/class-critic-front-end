import Star from "react-star-ratings";

const StarRatings = (props) => {
  const rating = props.score;

  function setState(newRating) {
    rating = newRating;
  }

  return (
    <div className="flex-col self-center">
      <Star    
        starDimension="45px"
        rating={Number(rating)}
        starEmptyColor="#d7d8d8"
        starRatedColor="#229df9"
        numberOfStars={5}
        name="rating"
      />
    </div>
  );
};

export default StarRatings;
