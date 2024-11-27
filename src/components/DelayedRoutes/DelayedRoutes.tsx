import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { BsArrowDown } from "react-icons/bs";
import styled from "styled-components";

import delayedRoutes from "../../mocks/delayedRoutes.json";
import {
  DARK_GREY,
  FlexCenter,
  LIGHT_GREY,
  StyledAccordion,
  WHITE,
} from "../../utils/commonStyles";

const DelayedRoutes = () => {
  return (
    <Container>
      <StyledAccordion defaultExpanded>
        <AccordionSummary
          aria-controls="delayed-routes-content"
          expandIcon={<ExpandMoreIcon sx={{ color: LIGHT_GREY }} />}
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
                    <TrafficLight $colour={trafficStatus} />
                  </CircleWrapper>
                  <Typography
                    sx={{ color: LIGHT_GREY, flex: 1 }}
                    variant="body1"
                  >
                    {mainRoad}
                  </Typography>
                  <Typography variant="caption">{distance}km</Typography>
                </TrafficStatus>
                <TrafficStatus>
                  <BsArrowDown />
                  <DirectionWrapper>
                    <Typography variant="caption">{roadNameStart}</Typography>
                    <Typography variant="caption">{roadNameEnd}</Typography>
                  </DirectionWrapper>
                  <TravelTime>
                    {travelTime}{" "}
                    <Typography
                      sx={{
                        color: WHITE,
                        fontWeight: 300,
                      }}
                      variant="caption"
                    >
                      min
                    </Typography>
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

const Container = styled.div`
  padding: 1.5rem;
`;

const CircleWrapper = styled.div`
  ${FlexCenter};
  justify-content: center;
  height: 1rem;
  width: 1rem;
`;

const DirectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TrafficLight = styled.div<{ $colour: string }>`
  background-color: ${({ $colour }) => $colour && $colour};
  border-radius: 50%;
  height: 0.625rem;
  width: 0.625rem;
`;

const TrafficStatus = styled.div`
  ${FlexCenter};
  gap: 0.5rem;
`;

const TrafficStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.75rem;

  &:not(:first-child) {
    border-top: 1px solid ${DARK_GREY};
  }
`;

const TravelTime = styled.div`
  align-self: end;
  color: ${WHITE};
  font-size: 1.2rem;
  font-weight: 400;
`;

export default DelayedRoutes;
