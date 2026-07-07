import styled from "styled-components";
import {Theme} from "../../../styles/Theme.tsx";
import dots from "../../../assets/img/Dots.webp"
import {FlexWrapper} from "../../../components/FlexWrapper.ts";

const Projects = styled.section`
    position: relative;
    overflow: hidden;

    &::before {
        content: url(${dots});
        width: 413px;
        height: 505px;
        display: inline-block;
        position: absolute;
        z-index: -4;
        top: 88px;
        left: 102px;
    }
`

const ProjectDetailsSection = styled.section`
    position: relative;
    overflow: hidden;
    padding: 80px 0 120px;

    &::before {
        content: url(${dots});
        width: 413px;
        height: 505px;
        display: inline-block;
        position: absolute;
        z-index: -4;
        top: 88px;
        right: 40px;
    }

    @media ${Theme.media.tablet} {
        padding: 48px 0 80px;
    }
`

const ProjectsSubtitle = styled.p`
    max-width: 760px;
    margin: -18px auto 54px;
    text-align: center;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(57, 57, 57, 0.72);

    @media ${Theme.media.tablet} {
        margin: -12px auto 36px;
        font-size: 18px;
    }
`

const ProjectsWrapper = styled(FlexWrapper)`
    position: relative;

    &:last-child::after {
        content: "+";
        display: inline-block;
        transform: rotate(-60deg);
        color: rgba(33, 87, 242, 0.1);
        position: absolute;
        font-size: 550px;
        font-style: normal;
        font-weight: 600;
        line-height: 136%;
        right: -80px;
        bottom: -206px;
        z-index: -1;
    }
`

const ProjectCard = styled.article`
    width: 540px;
    max-width: 100%;
    flex-grow: 1;
    border-radius: 18px;
    min-height: 100%;
    height: fit-content;
    box-shadow: 0 18px 40px rgba(17, 24, 39, 0.08);
    transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
    background: rgba(255, 255, 255, 0.98);
    overflow: hidden;
    border: 1px solid rgba(15, 23, 42, 0.08);

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 24px 50px rgba(17, 24, 39, 0.12);
        border-color: rgba(15, 23, 42, 0.16);
    }
`

const ProjectInfoPreview = styled.div`
    background: rgba(255, 255, 255, 0.98);
    padding: 22px 22px 24px;
`

const ProjectButton = styled.a`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: fit-content;
    min-height: 42px;
    color: white;
    background: #1f3fae;
    padding: 8px 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 136%;
    text-align: center;
    cursor: pointer;
    border: none;
    box-shadow: none;
`

const SecondaryButton = styled.a`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: fit-content;
    min-height: 42px;
    color: #1f3fae;
    background: #fff;
    border: 1px solid rgba(31, 63, 174, 0.2);
    padding: 8px 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 136%;
    text-align: center;
    cursor: pointer;
`

const ProjectImagePreview = styled.div`
    height: 280px;
    position: relative;
    overflow: hidden;

    ${ProjectButton} {
        z-index: 2;
    }

    &:hover {
        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: linear-gradient(180deg, rgba(15, 23, 42, 0.02) 0%, rgba(15, 23, 42, 0.42) 100%);
            transition: ${Theme.animations.transition};
            z-index: 1;
        }
    }

    @media ${Theme.media.tablet} {
        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: linear-gradient(180deg, rgba(15, 23, 42, 0.02) 0%, rgba(15, 23, 42, 0.42) 100%);
            opacity: 1;
            z-index: 1;
        }
    }
`

const PreviewImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const FallbackPreview = styled.div`
    width: 100%;
    height: 100%;
    background-color: #dbe5ff;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: end;
    justify-content: start;
    padding: 22px;
`

const FallbackPreviewTitle = styled.span`
    display: inline-block;
    padding: 8px 14px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.86);
    color: #1c2d59;
    font-size: 15px;
    line-height: 1.4;
    font-weight: 600;
`

const PreviewOverlay = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${Theme.media.mobile} {
        width: max-content;
    }
`

const RoleLine = styled.p`
    margin-bottom: 10px;
    color: rgba(31, 41, 55, 0.56);
    font-size: 11px;
    line-height: 1.4;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
`


const TitleProject = styled.h3`
    font-weight: 700;
    font-size: 26px;
    color: #101828;
    margin-bottom: 12px;
    line-height: 1.2;
    text-align: left;
`

const DescriptionProject = styled.p`
    padding-bottom: 18px;
    font-size: 16px;
    line-height: 1.7;
    text-align: left;
    color: rgba(17, 24, 39, 0.72);
`

const TagsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 8px;
    margin-bottom: 16px;
`

const Tag = styled.span`
    padding: 6px 10px;
    border-radius: 8px;
    background-color: #f8fafc;
    border: 1px solid rgba(15, 23, 42, 0.08);
    color: #334155;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.02em;
    line-height: 1.3;
`

const StackList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    justify-content: flex-start;
    margin-bottom: 20px;
`

const StackChip = styled.span`
    padding: 5px 9px;
    border-radius: 8px;
    background-color: #f8fafc;
    color: rgba(17, 24, 39, 0.78);
    font-size: 12px;
    border: 1px solid rgba(15, 23, 42, 0.08);
    line-height: 1.3;
`

const HighlightList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 0 24px;
    padding-left: 22px;
`

const HighlightItem = styled.li`
    font-size: 15px;
    line-height: 1.6;
    color: rgba(17, 24, 39, 0.78);

    &::marker {
        color: #64748b;
    }
`

const ActionsRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;
`

const BackRow = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 24px;
`

const ProjectGallery = styled.div`
    margin-bottom: 28px;

    .alice-carousel {
        border-radius: 18px;
    }

    .alice-carousel__stage-item {
        padding: 0;
    }
`

const ProjectDetailsGrid = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1.25fr) minmax(320px, 0.95fr);
    gap: 28px;
    align-items: start;

    @media ${Theme.media.dekstop} {
        grid-template-columns: 1fr;
    }
`

const ProjectDetailsMain = styled.div`
    padding: 32px;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 18px 40px rgba(17, 24, 39, 0.08);
    border: 1px solid rgba(15, 23, 42, 0.08);
`

const ProjectDetailsAside = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const InfoBlock = styled.section`
    margin-top: 28px;
    padding-top: 20px;
    border-top: 1px solid rgba(15, 23, 42, 0.08);
`

const InfoTitle = styled.h3`
    margin-bottom: 14px;
    color: #101828;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.35;
`

const InfoText = styled.p`
    font-size: 16px;
    line-height: 1.7;
    color: rgba(17, 24, 39, 0.72);
`

const DetailsText = styled.p`
    font-size: 16px;
    line-height: 1.8;
    color: rgba(17, 24, 39, 0.76);
    text-align: left;
`

const ScreenshotsGrid = styled.div`
    display: grid;
    gap: 20px;
`

const ScreenshotCard = styled.figure`
    margin: 0;
    overflow: hidden;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 18px 36px rgba(17, 24, 39, 0.08);
    border: 1px solid rgba(15, 23, 42, 0.08);

    ${PreviewImg}, ${FallbackPreview} {
        min-height: 300px;
        width: 100%;
        object-fit: cover;
    }

    ${PreviewImg} {
        aspect-ratio: 16 / 9;
    }

    ${FallbackPreview} {
        aspect-ratio: 16 / 9;
    }
`

const ScreenshotCaption = styled.figcaption`
    padding: 14px 18px 18px;
    font-size: 14px;
    line-height: 1.6;
    color: rgba(17, 24, 39, 0.62);
`

const EmptyState = styled.div`
    padding: 40px 0 80px;
`

export const S = {
    Projects,
    ProjectDetailsSection,
    ProjectsSubtitle,
    ProjectsWrapper,
    ProjectCard,
    ProjectInfoPreview,
    ProjectButton,
    SecondaryButton,
    ProjectImagePreview,
    PreviewImg,
    FallbackPreview,
    FallbackPreviewTitle,
    PreviewOverlay,
    RoleLine,
    TitleProject,
    DescriptionProject,
    TagsList,
    Tag,
    StackList,
    StackChip,
    HighlightList,
    HighlightItem,
    ActionsRow,
    BackRow,
    ProjectGallery,
    ProjectDetailsGrid,
    ProjectDetailsMain,
    ProjectDetailsAside,
    InfoBlock,
    InfoTitle,
    InfoText,
    DetailsText,
    ScreenshotsGrid,
    ScreenshotCard,
    ScreenshotCaption,
    EmptyState,
}
