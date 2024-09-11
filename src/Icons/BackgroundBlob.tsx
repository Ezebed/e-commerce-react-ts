import { SVGProps } from "react";

export default function BackgroundBlob(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="#38A169"
        d="M15.7,-24.3C25.1,-14.8,40.7,-16.5,54.3,-9.4C67.9,-2.4,79.4,13.6,72,19.4C64.6,25.1,38.2,20.7,23,18.5C7.9,16.4,3.9,16.5,-3.4,21.1C-10.7,25.8,-21.4,35,-35.6,36.8C-49.9,38.7,-67.6,33.2,-71.9,22.8C-76.1,12.3,-66.7,-3.2,-57,-14.1C-47.4,-25,-37.4,-31.4,-27.8,-40.8C-18.3,-50.2,-9.1,-62.7,-3,-58.6C3.2,-54.5,6.3,-33.7,15.7,-24.3Z"
        transform="translate(100 65)"
      />
    </svg>
  );
}
