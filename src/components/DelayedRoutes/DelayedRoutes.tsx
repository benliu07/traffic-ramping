import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { BsArrowDown } from "react-icons/bs";
import styled from "styled-components";

import delayedRoutes from "../../mocks/delayedRoutes.json";
import {
  DARK_GREY,
  LIGHT_GREY,
  StyledAccordion,
  WHITE,
} from "../../utils/commonStyles";
import Stack from "@mui/material/Stack";

const DelayedRoutes = () => {
  return (
    <Container data-testid="delayed-routes-container">
      <StyledAccordion defaultExpanded>
        <AccordionSummary
          aria-controls="delayed-routes-content"
          data-testid="delayed-routes-header"
          expandIcon={<ExpandMoreIcon sx={{ color: LIGHT_GREY }} />}
          id="delayed-routes-header"
        >
          DELAYED ROUTES
        </AccordionSummary>
        <AccordionDetails data-testid="delayed-routes-details">
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
              <TrafficStatusContainer
                data-testid="traffic-status-container"
                key={id}
              >
                <Stack alignItems="center" direction="row" gap={1}>
                  <Stack
                    alignItems="center"
                    data-testid="traffic-light"
                    justifyContent="center"
                    height="1rem"
                    width="1rem"
                  >
                    <TrafficLight $colour={trafficStatus} />
                  </Stack>
                  <Typography
                    data-testid="main-road"
                    sx={{ color: LIGHT_GREY, flex: 1 }}
                    variant="body1"
                  >
                    {mainRoad}
                  </Typography>
                  <Typography data-testid="distance" variant="caption">
                    {distance}km
                  </Typography>
                </Stack>
                <Stack alignItems="center" direction="row" gap={1}>
                  <BsArrowDown />
                  <Stack direction="column" flex={1}>
                    <Typography data-testid="road-name-start" variant="caption">
                      {roadNameStart}
                    </Typography>
                    <Typography data-testid="road-name-end" variant="caption">
                      {roadNameEnd}
                    </Typography>
                  </Stack>
                  <Stack
                    alignItems="end"
                    alignSelf="end"
                    color={WHITE}
                    data-testid="travel-time"
                    direction="row"
                    fontSize="1.2rem"
                    fontWeight="400"
                    gap={0.5}
                  >
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
                  </Stack>
                </Stack>
              </TrafficStatusContainer>
            )
          )}
        </AccordionDetails>
      </StyledAccordion>
    </Container>
  );
};

const Container = styled.div`
  padding: 0.75rem 1.5rem;
`;

const TrafficLight = styled.div<{ $colour: string }>`
  background-color: ${({ $colour }) => $colour && $colour};
  border-radius: 50%;
  height: 0.625rem;
  width: 0.625rem;
`;

const TrafficStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.75rem;

  &:not(:first-child) {
    border-top: 1px solid ${DARK_GREY};
  }
`;

export default DelayedRoutes;
