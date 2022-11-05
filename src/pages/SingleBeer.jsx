import { useParams } from "react-router-dom";

function SingleBeer({ list }) {
  const { beerid } = useParams();

  const singleBeer = list.filter((eachBeer) => {
    return eachBeer._id === beerid;
  });

  return (
    <div className="view">
      <img src={singleBeer[0].image_url} alt="" width={100} />
      <h5>{singleBeer[0].name}</h5>
      <p>{singleBeer[0].tagline}</p>
      <p>First brewed: {singleBeer[0].first_brewed}</p>
      <p>Attenuation level: {singleBeer[0].attenuation_level}</p>
      <p>Description: {singleBeer[0].description}</p>
      <p>Created by: {singleBeer[0].contributed_by}</p>
    </div>
  );
}

export default SingleBeer;
