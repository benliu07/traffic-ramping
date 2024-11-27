import Accordion from "@mui/material/Accordion";
import styled, { css } from "styled-components";

export const DARK_GREY = "#424953";
export const DEFAULT_BACKGROUND_COLOUR = "#171d27";
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

export const FlexCenter = css`
  align-items: center;
  display: flex;
`;

export const SmallText = css`
  font-size: 0.75rem;
`;

export const StyledAccordion = styled(Accordion)`
  && {
    background-color: ${DEFAULT_BACKGROUND_COLOUR};
    color: ${LIGHT_GREY};
  }

  .MuiAccordionDetails-root {
    border-top: 1px solid ${DARK_GREY};
    padding: 0;
  }

  .MuiAccordionSummary-root.Mui-expanded {
    min-height: 48px;
  }

  .MuiAccordionSummary-content.Mui-expanded {
    margin: 8px 0;
  }
`;
