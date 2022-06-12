import styled from "styled-components";
const ExperienceCard = styled.div`
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  & .skills-list__skills {
    display: flex;
    /* flex-direction: column; */
    flex-direction: row;
  }
  & button {
    text-decoration: none;
    box-shadow: none;
    border: none;
    padding: 5px 30px;
    background-color: transparent;
    color: #ffffffb5;
    border-bottom: 2px solid #cdb8b88c;
    margin: 0px 10px 0 0px;
    width: 140px;
  }
  & .skills-card__data {
    padding: 40px;
  }
  & .activeSkillSet {
    color: #64ffda;
    /* border-right-color: #64ffda; */
    border-bottom-color: #64ffda;
    background-color: #122645;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    & .skills-list__skills {
      flex-direction: row;
    }
    & button {
      border-right: none;
      border-bottom: 2px solid #cdb8b88c;
    }
    & .activeSkillSet {
      border-bottom-color: #64ffda;
    }
  }
`;

export default ExperienceCard;
