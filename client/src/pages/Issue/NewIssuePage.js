import React from "react";
import styled from "styled-components";
import Header from "../../components/organisms/Header";
import Image from "../../components/atoms/Image";
import A from "../../components/atoms/index";
import M from "../../components/molecules/index";
import O from "../../components/organisms/index";

const NewIssuePageWrapper = styled.div`
  position: relative;
  top: 6rem;
  display: flex;
  justify-content: center;
  padding: 3rem;
`;

const NewIssuePage = () => {
  return (
    <>
      <Header />
      <NewIssuePageWrapper>
        <Image
          imageUrl={
            "https://img7.yna.co.kr/photo/reuters/2020/09/20/PRU20200920291901055_P4.jpg"
          }
          padding={"0 0.5rem"}
        />
        <O.NewIssueForm />
        <O.NewIssueOptions />
      </NewIssuePageWrapper>
    </>
  );
};

export default NewIssuePage;
