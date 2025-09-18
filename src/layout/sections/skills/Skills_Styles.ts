import styled from "styled-components";

const SectionSkills = styled.section`
    background-color: #a5bbf8;
`

const Skill = styled.div`

    width: 100px;
    border-radius: 16px;
    padding: 40px 20px 10px;
    margin-bottom: 20px;

    background-color: transparent;
    
    transition: transform 0.3s ease-in-out;
    

`
const SkillTitle = styled.h3`
color: white;
    margin: 15px 0 15px;
    text-align: center;
    //white-space: nowrap;

`
const SkillDescription = styled.p`

`

export const S = {
    SectionSkills,
    Skill,
    SkillTitle,
    SkillDescription,
}