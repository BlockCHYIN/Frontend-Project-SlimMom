import React, { useState } from "react";
import styled from "styled-components";
// import { MenuContext } from '../NavState/NavState';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

const MenuButton = styled.button`
display:block;
transform-origin: 18px 12px;
float: left;
outline: 0;
border: 0;
padding-top: 28px;
margin-left: 0;
margin-bottom: 28px;
background: none;
@media screen and (min-width: 768px){
    display: none;
}

&.active{
    span:nth-of-type(1){
        transform:rotate(45deg) translate(9px, 9px);
        width: 24px;
        height: 5px;
        margin-bottom: 5px;
    }

span:nth-of-type(2) {
    opacity: 0;
    pointer-events: none;
    }

span:nth-of-type(3) {
    transform: rotate(-45deg) translate(3px, -3px);
    width: 24px;
    height: 5px;
    margin-bottom: 5px;
    }
}
`;

// const Bar = styled.span`
// display: block;
// width: 24px;
// height: 3px;
// margin-bottom: 4px;
// background-color: #212121;
// `;

const BurgerButton = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const { toggleMenuMode } = useContext(MenuContext);

    // const clickHandler = () => {
    //     toggleMenuMode();
    // };

    return (
        <MenuButton
            // className={isMenuOpen ? "active" : ""}
            // aria-label="Открыть главное меню"
            // onClick={clickHandler}

            onClick={()=> setIsMenuOpen(!isMenuOpen)}
        >
            {isMenuOpen? <GrClose />:<GiHamburgerMenu />}
            {/* <Bar />
            <Bar />
            <Bar /> */}


        </MenuButton>
    );
};

export default BurgerButton;