import styled from "styled-components";
import Btn from "../../assets/img/icons8-шеврон-вверх-в-круге-gradient/icons8-шеврон-вверх-в-круге-64.png"
import {animateScroll as scroll} from 'react-scroll'
import {useEffect, useState} from "react";

export const GoTopBtn = () => {

    const [showBtn, setshowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 200) {
                setshowBtn(true)
            } else {
                setshowBtn(false)
            }
        });

    }, [])

    return (

        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {scroll.scrollToTop()}}>
                    <img src={Btn}/>
                </StyledGoTopBtn>
            )}

        </>


    );
};

const StyledGoTopBtn = styled.button`
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    cursor: pointer;

    img {
        width: 50px;
        height: 50px;
    }
`