import {useState} from "react";
import {S} from "./Projects_Styles.ts";

type ProjectPreviewMediaProps = {
    src?: string
    alt: string
    fallbackImage: string
    title?: string
}

export const ProjectPreviewMedia = ({src, alt, fallbackImage}: ProjectPreviewMediaProps) => {
    const [hasError, setHasError] = useState(false)

    if (!src || hasError) {
        return (
            <S.FallbackPreview style={{backgroundImage: `linear-gradient(rgba(33, 87, 242, 0.22), rgba(166, 188, 250, 0.35)), url(${fallbackImage})`}}>
            </S.FallbackPreview>
        )
    }

    return <S.PreviewImg src={src} alt={alt} onError={() => setHasError(true)} />
}
