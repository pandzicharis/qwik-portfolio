/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import Tooltip from "@mui/material/Tooltip";
import { type ReactNode } from "react";

interface MUITooltipProps {
  children?: ReactNode[];
  title: string;
  followCursor?: boolean;
}

function MUITooltip({ children, title, followCursor }: MUITooltipProps) {
  return (
    <Tooltip title={title} arrow placement="top" followCursor={followCursor}>
      <div>{children}</div>
    </Tooltip>
  );
}

export const QTooltip = qwikify$(MUITooltip, { eagerness: "visible" });
