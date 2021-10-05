import React from "react";
import { CodeCard } from "../Card/Card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { GestCinema } from "../../data/GestCinema";
import { jvStyle } from "../../data/jv-style";
import { TransactionEchangeController } from "../../data/TransactionEchangeController";
import { project } from "../../data/Project";
import LinkWithIcon from "../Link/LinkWithIcon";
import { TypoH2 } from "../Typo/Typo";
import { Column } from "../Container/Container";
import { colors } from "../Colors/Colors";

const ProjectCode = ({ code, codeId, projects }) => {
  const tableCode = [
    { script: TransactionEchangeController, type: "php" },
    { script: project, type: "javascript" },
    { script: GestCinema, type: "csharp" },
    { script: null, type: null },
    { script: null, type: null },
    { script: jvStyle, type: "css" },
  ];

  const { script, type } = tableCode[codeId];

  return (
    <div
      style={{
        position: "fixed",
        width: "80vw",
        zIndex: "8",
        height: "70vh",
      }}
      onClick={() => code()}
    >
      <CodeCard>
        <Column align="center" pd="0" margin="0">
          <LinkWithIcon
            icon="fas fa-times"
            fontSize="2rem"
            color="black"
            pd="0.5em 0.5em"
            to="/portfolio"
          />
          <TypoH2 color={colors.primary}>{projects[codeId].script}</TypoH2>
        </Column>
        <SyntaxHighlighter language={type}>{script}</SyntaxHighlighter>
      </CodeCard>
    </div>
  );
};

export default ProjectCode;
