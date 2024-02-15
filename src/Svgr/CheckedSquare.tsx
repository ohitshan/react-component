import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCheckedSquare = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <rect
      width={22.5}
      height={22.5}
      x={1.25}
      y={1.25}
      fill="current"
      rx={3.25}
    />
    <path
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.25 12.151 4.485 4.485L18.5 8.872"
    />
  </svg>
);
export default SvgCheckedSquare;
