import React from 'react';
import { styled } from 'styled-components';

const Form = () => {
  return (
    <FormBox>
      <span>임금님 귀는 당나귀 귀-!! ✍️</span>
    </FormBox>
  );
};

export default Form;

const FormBox = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
`;
