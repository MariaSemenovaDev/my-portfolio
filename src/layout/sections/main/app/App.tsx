import styled from "styled-components";
import {Theme} from "../../../../styles/Theme.tsx";


type AppPropsType = {
    src?: string;
    spanTitle?: string;

}

export const App = (props: AppPropsType) => {
    return (
            <AppStyled>
               <div>
                    <img src={props.src} alt={props.spanTitle} />
               </div>

                <span>{props.spanTitle}</span>
            </AppStyled>
    );
};

const AppStyled = styled.li `

    max-width: 160px;
    width: 100%;
    height: 90px;
    background: ${Theme.colors.secondaryBg};
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.15);
    border-radius: 24px;
    border: 2px solid white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;

    img {
        width: 55px;
        height: 55px;
    }

    div {

        position: absolute;
        top: -35%;
        bottom: 0;
    }

    span {
        padding-top: 21px;
        font-weight: 600;
        font-size: 20px;
        line-height: 136%;
        color: #ffffff;
        z-index: 0;
        white-space: nowrap;
    }

    @media ${Theme.media.tablet} {
        border-radius: 40px;
        max-width: 271px;
        width: 100%;
        height: 154px;
        
        img {
            width: 92px;
            height: 92px;
        }

        span {
            white-space: nowrap;
            font-size: 33px;
        }
        
    }

    @media ${Theme.media.mobile} {
        border-radius: 22px;
        max-width: 271px;
        width: 90%;
        height: 100px;

        img {
            width: 60px;
            height: 60px;
        }
        
        span {
            font-size: 18px;
        }
    }

`