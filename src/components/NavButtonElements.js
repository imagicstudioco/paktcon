import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const Button = styled(Link)`
border-radius: 15px;
background: ${({primary}) => (primary ? '#ffffff' : '#010606')
};
white-space nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color : ${({dark}) => (dark ? '#010606' : '#fff')};
font-size; ${({fontSmall}) => (fontSmall ? '12px' : '12px')};
text-decoration: none;
outline: none;
border: none;
display: flex;
justify-content: center;
align-items: center;
transition: 0.2s ease-in-out;


&:hover{
    transition: 0.2s ease-in-out;background: ${({primary}) => (primary ? '#fff' : '#01BF71')
};
}
`;