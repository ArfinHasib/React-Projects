import styled from 'styled-components';
import NorbertImg from './imgs/NorbertImg.png';

export const FormStyle = styled.div`
   margin: auto;
   display: flex;
   flex-direction: column;
`;

export const FormAnimation = styled.div`
   width: 250px;
   height: 250px;
   background: URL(${NorbertImg}) center/cover;
   margin: 0 auto;
   text-align: center;
   display: flex;
   flex-direction: column;
   margin-top: 75px;
   border: 5px solid #b3b3b3;
   box-shadow: 2 2 4px rgba(0, 0, 0, 0.3);
`;
