import React, { useState } from "react";
import DisplaySentence from "./DisplaySentence";
import {
  Homepage,
  InputsPart,
  SubmitButton,
  InputLabel,
  Inputs,
  Header,
  SubHeader,
} from "./AddSentence.styled";

function AddSentence() {
  const [sentenceInfo, setSentenceInfo] = useState({
    who: "",
    what: "",
    when: "",
    where: "",
  });
  const [showDisplay, setShowDisplay] = useState({
    displaySentenceComponent: false,
  });

  const { who, what, when, where } = sentenceInfo;
  const { displaySentenceComponent } = showDisplay;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (who && what && when && where) {
      setShowDisplay({
        displaySentenceComponent: true,
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setSentenceInfo({
      ...sentenceInfo,
      [name]: value,
    });
  };

  return (
    <Homepage>
      {displaySentenceComponent ? (
        <div>
          <Header>Tvoja Veta</Header>
          <DisplaySentence sentenceInfo={sentenceInfo} />
        </div>
      ) : (
        <div>
          <Header>Sentence Game</Header>
          <SubHeader>
            Pridaj do input elementu slová a vznikne ti veta
          </SubHeader>
          <InputsPart>
            <form onSubmit={handleSubmit}>
              <InputLabel>
                Who ?
                <Inputs
                  required
                  name="who"
                  type="text"
                  placeholder="WHO"
                  value={who}
                  onChange={handleChange}
                />
              </InputLabel>
              <InputLabel>
                What ?
                <Inputs
                  required
                  name="what"
                  type="text"
                  placeholder="WHAT"
                  value={what}
                  onChange={handleChange}
                />
              </InputLabel>
              <InputLabel>
                When ?
                <Inputs
                  required
                  name="when"
                  type="text"
                  placeholder="WHEN"
                  value={when}
                  onChange={handleChange}
                />
              </InputLabel>
              <InputLabel>
                Where ?
                <Inputs
                  required
                  name="where"
                  type="text"
                  placeholder="WHERE"
                  value={where}
                  onChange={handleChange}
                />
              </InputLabel>
              <br />
              <SubmitButton type="submit">Potvrď Vetu</SubmitButton>
            </form>
          </InputsPart>
        </div>
      )}
    </Homepage>
  );
}

export default AddSentence;
