import Accordion from "@mui/material/Accordion";
import styled from "styled-components";

export const ACCORDION_BACKGROUND_COLOUR = "#171d27";
export const APP_BACKGROUND_COLOUR = "#121212";
export const DARK_GREY = "#424953";
export const LIGHT_GREY = "#979ca2";
export const MEDIUM_GREY = "#727981";
export const WHITE = "white";

export const PIE_CHART_COLOURS = [
  "#2CA8FF",
  "#28D1FA",
  "#8FE3FE",
  "#C1F3FF",
  "#E8FAFF",
  "#B3E4FF",
];

export const StyledAccordion = styled(Accordion)`
  && {
    background-color: ${ACCORDION_BACKGROUND_COLOUR};
    color: ${LIGHT_GREY};
  }

  .MuiAccordionDetails-root {
    border-top: 1px solid ${DARK_GREY};
    padding: 0;
  }

  .MuiAccordionSummary-root.Mui-expanded {
    min-height: 3rem;
  }

  .MuiAccordionSummary-content.Mui-expanded {
    margin: 0.5rem 0;
  }
`;
