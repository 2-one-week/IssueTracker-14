import React, { useState } from "react";
import styled from "styled-components";
import A from "../atoms/index";
import M from "../molecules/index";
import colors from "../../constants/colors";
import myAxios from "../../utils/myAxios";

import marked from "marked";

const StyledNewIsssueForm = styled.section`
  padding: 0.5rem 0.5rem;
  margin: 0 1rem;
  border: 1px solid #e3e3e4;
  width: 40vw;
`;

const StyledFormTextAreaWrapper = styled.div`
  border-top: 1px solid ${colors["lightGrey"]};
  padding: 1rem 0;
  margin-top: -1px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NewIssueForm = () => {
  const [value, setValue] = useState("");
  const [charLength, setCharLength] = useState(0);
  const [filePath, setFilePath] = useState("");

  const onSubmitHandler = async (e) => {
    if (e.target.files !== null) {
      try {
        const fd = new FormData();
        fd.append("filename", e.target.files[0]);
        const {
          data: { filePath },
        } = await myAxios.filepost(fd);
        setFilePath(filePath);
        setValue(`${value}\n(${filePath})`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onChangeTextArea = (e) => {
    setTimeout(() => setCharLength(e.target.value.length), 2000);
    setValue(e.target.value);
  };

  const renderText = (text) => {
    const __html = marked(text, { sanitize: true });
    return { __html };
  };

  return (
    <StyledNewIsssueForm>
      <A.Input
        type={"text"}
        placeholder={"Title"}
        margin={"0"}
        padding={"0.5rem"}
        fontSize={"1rem"}
        bgColor={"middleWhite"}
        rounded={true}
        height={"auto"}
        width={"100%"}
      />
      <M.Tabs tabList={["Write", "Priview"]} />
      <StyledFormTextAreaWrapper>
        <M.FormTextArea
          label={"Write"}
          htmlFor={"comment"}
          name={"comment"}
          rows={"20"}
          width={"100%"}
          placeholder={"Leave a commment"}
          rounded={true}
          bgColor={"middleWhite"}
          value={value}
          onChange={onChangeTextArea}
          charLength={charLength}
          filePath={filePath}
        />
        <div dangerouslySetInnerHTML={renderText(value)}></div>
        <M.FileInput onSubmitHandler={onSubmitHandler} />
      </StyledFormTextAreaWrapper>
      <StyledButtonWrapper>
        <A.Button width={"auto"}>Cancel</A.Button>
        <A.Button
          color={"white"}
          backgroundColor={"green"}
          width={"8rem"}
          height={"2rem"}
          border={true}
        >
          Submit new issue
        </A.Button>
      </StyledButtonWrapper>
    </StyledNewIsssueForm>
  );
};

export default NewIssueForm;
