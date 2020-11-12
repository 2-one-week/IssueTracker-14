import React, { useState } from "react";
import styled from "styled-components";
import M from "../molecules/index";
import O from "../organisms/index";

const StyledLabelNavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const StyledLabelButtons = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  width: 100%;
`;

const LabelNavigation = () => {
  const [createMode, setCreateMode] = useState(false);
  const toggleCreateMode = () => {
    setCreateMode(!createMode);
  }

  return (
  <StyledLabelNavigationWrapper>
    <StyledLabelButtons>
      <M.NavigationWrapperLink location={"label"}/>
      <M.ButtonDiv
              buttonColor={"green"}
              width={"8rem"}
              height={"2rem"}
              textColor={"white"}
              fontSize={"small"}
              hover={false}
              border={true}
              onClick={toggleCreateMode}
        >New Label</M.ButtonDiv>
    </StyledLabelButtons>
    {createMode ? "" : <M.LabelModal editMode={false} toggleCreateMode={toggleCreateMode} />}
  </StyledLabelNavigationWrapper>
)};

export default LabelNavigation;
