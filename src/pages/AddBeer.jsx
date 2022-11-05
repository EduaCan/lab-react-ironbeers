import axios from "axios";
import { useState } from "react";
import Header from "../components/Header";

function AddBeer({getData}) {
  const [nameInput, setNameInput] = useState("");
  const [taglineInput, setTaglineInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [firstBrewedInput, setFirstBrewedInput] = useState("");
  const [brewerTipsInput, setBrewerTipsInput] = useState("");
  const [attenuationLevelInput, setAttenuationLevelInput] = useState(0);
  const [contributedByInput, setContributedByInput] = useState("");

  const handleNameChange = (event) => setNameInput(event.target.value);
  const handleTaglineChange = (event) => setTaglineInput(event.target.value);
  const handleDescriptionChange = (event) =>
    setDescriptionInput(event.target.value);
  const handleFirstBrewedChange = (event) =>
    setFirstBrewedInput(event.target.value);
  const handleBrewerTipsChange = (event) =>
    setBrewerTipsInput(event.target.value);
  const handleAttenuationLevelChange = (event) =>
    setAttenuationLevelInput(event.target.value);
  const handleContributedByChange = (event) =>
    setContributedByInput(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newBeer = {
        name: nameInput,
        tagline: taglineInput,
        description: descriptionInput,
        first_brewed: firstBrewedInput,
        brewer_tips: brewerTipsInput,
        attenuation_level: attenuationLevelInput,
        contributed_by: contributedByInput
    };

    try {
        const send = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
        getData()
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div>
        <Header />
      <form  className="view">
        <label htmlFor="name">Name: </label>
        <input value={nameInput} type="text" name="name" onChange={handleNameChange} />
        <br />
        <label htmlFor="tagline">Tagline: </label>
        <input value={taglineInput} type="text" name="tagline" onChange={handleTaglineChange} />
        <br />

        <label htmlFor="description">Description: </label>
        <input value={descriptionInput}
          type="text"
          name="description"
          onChange={handleDescriptionChange}
        />
        <br />

        <label htmlFor="first_brewed">First Brewed: </label>
        <input value={firstBrewedInput}
          type="text"
          name="first_brewed"
          onChange={handleFirstBrewedChange}
        />
        <br />

        <label htmlFor="brewer_tips">Brewer Tips: </label>
        <input value={brewerTipsInput}
          type="text"
          name="brewer_tips"
          onChange={handleBrewerTipsChange}
        />
        <br />

        <label htmlFor="attenuation_level">Attenuation Level: </label>
        <input value={attenuationLevelInput}
          type="number"
          name="attenuation_level"
          onChange={handleAttenuationLevelChange}
        />
        <br />

        <label htmlFor="contributed_by">Contributed by: </label>
        <input value={contributedByInput}
          type="text"
          name="contributed_by"
          onChange={handleContributedByChange}
        />
        <br />

        <button onClick={handleSubmit}>Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeer;
