import {Icon} from "../icon/Icon.tsx";
import {animateScroll as scroll} from 'react-scroll'

export const Logo: React.FC = () => {
    return (
        <a onClick={() => {scroll.scrollToTop()}}>
            <Icon iconId={'myLogo'} height={"28"} width={"28"} viewBox={"00 28 28"}/>
        </a>
    );
};
