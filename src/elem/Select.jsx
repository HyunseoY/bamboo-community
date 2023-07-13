import { useState } from 'react';
import { styled } from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { colors } from '../shared/colors';
import { useDispatch } from 'react-redux';
import { selectedItem } from '../redux/modules/selectItem';

function Select({ onSelect }) {
  const options = ['속풀이', '꿀정보', '고백', '비밀', '상담'];

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const clickOptions = (option) => {
    setSelected(option);
    dispatch(selectedItem(option));
    setIsOpen(false);

    onSelect(option); // 선택된 값 전달
  };

  return (
    <>
      <DropDownWrapper>
        <DropDownHeader
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <span>{selected || '선택하세요'}</span>
          <span>
            <ExpandMoreIcon />
          </span>
        </DropDownHeader>
        {isOpen && (
          <DropDownList>
            {options.map((option) => {
              return (
                <DropDownItem key={option} onClick={() => clickOptions(option)}>
                  {option}
                </DropDownItem>
              );
            })}
          </DropDownList>
        )}
      </DropDownWrapper>
    </>
  );
}

export default Select;

const DropDownWrapper = styled.div`
  width: 100px;
  margin: 30px;
  border-radius: 5px;
  border: 1px solid lightgray;
`;

const DropDownHeader = styled.div`
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
`;

const DropDownList = styled.div`
  border-top: 1px solid #ccc;
  position: absolute;
  width: 100px;
  border: 1px solid #ccc;
  background-color: white;
  font-size: 12px;
`;

const DropDownItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.get('paleblue')};
  }
`;
