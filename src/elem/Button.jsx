import styled, { css } from 'styled-components';

const Button = (props) => {
  return (
    <StButton {...props} disabled={props.disabled}>
      {props.children}
    </StButton>
  );
};

export default Button;

const StButton = styled.button`
  border: ${({ border, disabled }) => (disabled ? '1px solid #eee' : border)};
  background-color: #fff;
  color: ${({ color, disabled }) => (disabled ? '#ddd' : color)};
  height: 46px;
  border-radius: 8px;
  margin: ${({ margin, disabled }) => (`${margin}`, disabled ? 0 : margin)};
  background-color: ${({ bgcolor, disabled }) => (disabled ? '#ddd' : bgcolor)};
  cursor: pointer;

  ${({ size }) => {
    switch (size) {
      case 'large':
        return css`
          width: 100%;
        `;
      case 'medium':
        return css`
          width: 80px;
        `;
      case 'small':
        return css`
          width: 30px;
          height: 30px !important;
        `;
      default:
        return css`
          width: 120px;
        `;
    }
  }}
`;
