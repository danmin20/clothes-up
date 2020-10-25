import React from "react";
import styled from "styled-components";
import { useInput } from "../hooks/useInput";

export default () => {
  const search = useInput("");
  return (
    <Container>
      <SearchInput
        value={search.value}
        onChange={search.onChange}
        placeholder="검색어를 입력해주세요"
      />
    </Container>
  );
};

const Container = styled.div`
  background-color: #da291c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  border: 0;
  width: 70%;
  height: 38px;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 0 20px;
  &::placeholder {
    color: #adadad;
  }
`;
