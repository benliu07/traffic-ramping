import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled, { css } from "styled-components";
import { BsArrowDown } from "react-icons/bs";

import delayedRoutes from "../../mocks/delayedRoutes.json";

const DelayedRoutes = () => {
  return (
    <Container>
      <StyledAccordion defaultExpanded>
        <AccordionSummary
          aria-controls="delayed-routes-content"
          expandIcon={<ExpandMoreIcon sx={{ color: "#979ca2" }} />}
          id="delayed-routes-header"
        >
          DELAYED ROUTES
        </AccordionSummary>
        <AccordionDetails>
          {delayedRoutes.map(
            ({
              distance,
              id,
              mainRoad,
              roadNameEnd,
              roadNameStart,
              trafficStatus,
              travelTime,
            }) => (
              <TrafficStatusContainer key={id}>
                <TrafficStatus>
                  <CircleWrapper>
                    <TrafficLight colour={trafficStatus} />
                  </CircleWrapper>
                  <Text type="main-road">{mainRoad}</Text>
                  <Text type="distance">{distance}km</Text>
                </TrafficStatus>
                <TrafficStatus>
                  <BsArrowDown />
                  <DirectionWrapper>
                    <Text type="road-name">{roadNameStart}</Text>
                    <Text type="road-name">{roadNameEnd}</Text>
                  </DirectionWrapper>
                  <TravelTime>
                    {travelTime} <Unit>min</Unit>
                  </TravelTime>
                </TrafficStatus>
              </TrafficStatusContainer>
            )
          )}
        </AccordionDetails>
      </StyledAccordion>
    </Container>
  );
};

const FlexCenter = css`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  padding: 1.5rem;
`;

const CircleWrapper = styled.div`
  justify-content: center;
  height: 1rem;
  width: 1rem;
  ${FlexCenter};
`;

const DirectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 4px;
`;

const SmallText = css`
  font-size: 0.75rem;
`;

const StyledAccordion = styled(Accordion)`
  && {
    background-color: #171d27;
    color: #979ca2;
  }

  .MuiAccordionDetails-root {
    padding: 0;
  }

  .MuiAccordionSummary-root.Mui-expanded {
    min-height: 48px;
  }

  .MuiAccordionSummary-content.Mui-expanded {
    margin: 8px 0;
  }
`;

const Text = styled.div<{ type: string }>`
  ${({ type }) => {
    switch (type) {
      case "main-road":
        return css`
          color: #979ca2;
          flex: 1;
        `;
      case "distance":
        return css`
          color: #424953;
          ${SmallText};
        `;
      case "road-name":
        return css`
          color: #727981;
          ${SmallText};
        `;
      default:
        return "";
    }
  }}
`;

const TrafficLight = styled.div<{ colour: string }>`
  background-color: ${({ colour }) => colour && colour};
  border-radius: 50%;
  height: 0.75rem;
  width: 0.75rem;
`;

const TrafficStatus = styled.div`
  ${FlexCenter};
  gap: 8px;
`;

const TrafficStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #1c232d;
  gap: 8px;
  padding: 8px 12px;
`;

const TravelTime = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
`;

const Unit = styled.span`
  ${SmallText};
  font-weight: 300;
`;

export default DelayedRoutes;
