import React, { useState } from "react";
import styled from "styled-components";
import A from "../atoms/index";
import M from "../molecules/index";
import colors from "../../constants/colors";
import makeRandomColor from "../../utils/makeRandomColor";
import decideFontColorFromHexa from "../../utils/decideFontColorFromHexa";

const StyledLabelModal = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  border: ${({ editMode }) => editMode ?  "none" : "1px solid transparent"};
  border-top: ${({ editMode }) => editMode ? "1px solid #000000" : "none"};
  background-color: ${({ editMode }) => editMode ? colors["white"] : colors["lightGrey"]};
  border-radius: 0.25rem;
  width: 100%;
`;

const StyledLabelPreview = styled.div`
  display: flex;
  margin: 1.5rem 0rem;
  box-sizing: border-box;
  padding: 0rem 2rem;
  position: relative;
  justify-content: start;
  width: 100%;
`;


const StyledLabelInput = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  box-sizing: border-box;
  margin-left: 2rem;
  margin-bottom: 1rem;
  width: 100%;
`;

const StyledFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: auto;
  width: 16rem;
`;

const StyledColor = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
  width: 100%;
`;

const StyledLabelInputButtons = styled.div`
  display: flex;
  position: relative;
  justify-content: justify-content;
  align-items: flex-end;
  width: 12rem;
  margin: 0rem 1rem 1rem 12rem;
  margin-right: 2rem;
`;


const LabelModal = ({ editMode }) => {

    const handleRandomColor = () => {
        const randomColor = makeRandomColor();
        setLabelColor(randomColor);
        setInputColor(randomColor);
    }

    const handleLabelColor = e => {
        setLabelColor(e.target.value);
        setInputColor(e.target.value);
        if (e.target.value==="") setInputColor("#")
    }

    const [inputName, setInputName] = useState("");
    const [labelName, setLabelName] = useState("Label preview");

    const initColor = makeRandomColor();
    
    const [labelColor, setLabelColor] = useState(initColor);
    const [inputColor, setInputColor] = useState(initColor);

    const handleName = e => {
        setInputName(e.target.value);
        setLabelName(e.target.value);
        if (e.target.value==="") {
        setLabelName("Label preview");
        };
    }

    return (
    <StyledLabelModal editMode={editMode}>
      <StyledLabelPreview>
        <A.Label backgroundHexaColor={labelColor} cursor={"default"}>
          <A.Text fontSize={"0.5rem"} color={decideFontColorFromHexa(labelColor)==="#000000" ? "black" : "white"} cursor={"default"} hover={false}>
            {labelName}
          </A.Text>
        </A.Label>
      </StyledLabelPreview>
      <StyledLabelInput>
        <M.FormDiv label={"Label name"} placeholder={"Label name"} bgColor={"white"} margin={"0.5rem 0.5rem 0.5rem 0rem"} inputMargin={"0.2rem"} value={inputName} onChange={handleName} />
        <M.FormDiv label={"Description"} placeholder={"Description (optional)"} bgColor={"white"} margin={"0.5rem 0.5rem 0.5rem 0.5rem"} inputMargin={"0.2rem"} />
        <StyledFormDiv>
          <A.InputLabel label={"Color"} />
          <StyledColor>
            <A.Button width={"2.25rem"} height={"2.25rem"} backgroundColor={labelColor} onClick={handleRandomColor} hexa={true}>
              <A.Text color={decideFontColorFromHexa(labelColor)==="#000000" ? "black" : "white"} cursor={"default"} hover={false}>
                <A.Icon name="refresh" />
              </A.Text>
            </A.Button>
            <A.Input
              width={"8rem"}
              bgColor={"white"}
              margin={"0rem 0.2rem 0rem 0.5rem"}
              value={inputColor}
              onChange={handleLabelColor}
            />
          </StyledColor>
        </StyledFormDiv>
        <StyledLabelInputButtons>
          <A.Button width={"5rem"} height={"2.25rem"} margin={"0.2rem"} backgroundColor={"ivory"} border={true} >Cancel</A.Button>
          {editMode ? 
          <A.Button width={"7rem"} height={"2.25rem"} margin={"0.2rem 0rem 0.2rem 0.2rem"} backgroundColor={"green"} color={"white"} >Edit Mode</A.Button>
          :
          <A.Button width={"7rem"} height={"2.25rem"} margin={"0.2rem 0rem 0.2rem 0.2rem"} backgroundColor={"green"} color={"white"} >Create label</A.Button>
        }
        </StyledLabelInputButtons>
      </StyledLabelInput>
    </StyledLabelModal>
    )
}

export default LabelModal;