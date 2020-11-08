import React from "react";
import styled from "styled-components";
import Header from "../../components/organisms/Header";
import NavigationWrapper from "../../components/organisms/NavigationWrapper";
import IssueWrapper from "../../components/organisms/IssueWrapper";

const IssuesPageWrapper = styled.div`
  position: relative;
  top: 6rem;
  display: flex;
  margin: 3rem 0rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const IssuesPage = () => (
  <>
    <Header />
    <IssuesPageWrapper>
      <NavigationWrapper />
      <IssueWrapper />
    </IssuesPageWrapper>
  </>
);

export default IssuesPage;
