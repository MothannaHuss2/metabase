// eslint-disable-next-line no-restricted-imports
import { css } from "@emotion/react";
// eslint-disable-next-line no-restricted-imports
import styled from "@emotion/styled";

import Card from "metabase/common/components/Card";
import Link from "metabase/common/components/Link";
import { alpha, color } from "metabase/lib/colors";
import { space } from "metabase/styled-components/theme";
import type { BoxProps } from "metabase/ui";
import { Box, Icon } from "metabase/ui";

const LIST_H_MARGINS = space(2);

export const UndoList = styled.ul`
  position: fixed;
  left: 0;
  bottom: 0;
  margin: ${LIST_H_MARGINS};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ToastCard = styled(Card)<{
  translateY?: number;
  color?: string;
  noBorder?: boolean;
}>`
  padding: 10px ${space(2)};
  margin-top: ${space(1)};
  max-width: calc(100vw - 2 * ${LIST_H_MARGINS});
  background-color: var(--mb-color-background-inverse);
  ${({ noBorder }) =>
    noBorder &&
    css`
      border: none;
      overflow-x: hidden;
    `};
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardContentSide = styled(Box)<BoxProps>`
  display: flex;
  align-items: center;
  overflow: hidden;
` as unknown as typeof Box;

export const ControlsCardContent = styled(CardContentSide)`
  flex-shrink: 0;
` as unknown as typeof Box;

export const CardIcon = styled(Icon)`
  margin-right: ${space(1)};
  flex-shrink: 0;
`;

export const DefaultText = styled.span`
  font-weight: 700;
`;

export const UndoButton = styled(Link)`
  font-weight: bold;
  background-color: ${() => alpha(color("bg-white"), 0.1)};
  padding: 4px 12px;
  margin-left: ${space(1)};
  border-radius: 8px;

  :hover {
    background-color: ${() => alpha(color("bg-white"), 0.3)};
  }
`;

export const DismissIcon = styled(Icon)<{ color?: string }>`
  margin-left: ${space(2)};
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;
