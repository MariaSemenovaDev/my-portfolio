import {Theme} from "./Theme.tsx";

type FontPropsType = {
    family?: string;
    weight?: number;
    color?: string;
    lineHeight?: number | null;
    Fmin?: number;
    Fmax?: number;

}


export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType, ) => `
    
    font-family: ${family || "Roboto"};
    font-weight: ${weight || 400};
    color: ${color || Theme.colors.font};
    line-height: ${lineHeight || 1.2};


    font-size: calc( (100vw - 360px) / (1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
    
    

`