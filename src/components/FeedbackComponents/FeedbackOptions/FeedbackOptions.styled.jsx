import styled from '@emotion/styled';

export const FeedBackBtn = styled.button`
  width: 110px;
  border: none;
  color: white;
  padding: 12px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  background-color: ${props => props.value === 'good' && '#04ff00'};
  background-color: ${props => props.value === 'neutral' && '#706f6f'};
  background-color: ${props => props.value === 'bad' && '#ff3030'};
  border-radius: 10px;
  cursor: pointer;
  transition: scale 250ms linear, box-shadow 250ms linear;

  :hover {
    scale: 1.1;

    :first-of-type {
      box-shadow: 0px 0px 12px 1px rgba(4, 255, 0, 1);
    }

    :nth-of-type(2) {
      box-shadow: 0px 0px 12px 1px rgba(112, 111, 111, 1);
    }

    :last-of-type {
      box-shadow: 0px 0px 12px 1px rgba(255, 48, 48, 1);
    }
  }
`;
export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;
