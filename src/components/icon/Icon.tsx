import iconsSprite from "../../assets/img/icons-sprite.svg"


type IconPropsType = {
    iconId?: string,
    width?: string,
    height?: string,
    viewBox?: string,
    color?: string,
}

export const Icon: React.FC <IconPropsType> = (props: IconPropsType) => {
    return (
        <svg width={props.width || "28"} height={props.height || "28"} viewBox={props.viewBox || "0 0 28 28"} style={{ color: props.color }} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`} fill="currentColor" width={props.width} height={props.height}  />
        </svg>
    );
};
