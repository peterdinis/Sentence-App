import React from "react";
import { sentenceProps } from "../interfaces/SentenceInterface";
import { InfoSection, FinalSentence, HomeLink } from "./DisplaySentence.styled";

const DisplaySentence: React.FunctionComponent<sentenceProps> = ({
  sentenceInfo,
}) => {
  const { who, what, when, where } = sentenceInfo;

  return (
    <div>
      <InfoSection>
        <FinalSentence>
          {who} {what} {when} {where}.
        </FinalSentence>
      </InfoSection>

      <HomeLink href="/" className="homelink">
        Návrat na domov
      </HomeLink>
    </div>
  );
};

export default DisplaySentence;
