import logo from "@/assets/images/logo.png";
import { cn } from "@/lib/utils";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const Logo = ({ width, height, className }: LogoProps) => {
  return (
    <div className="">
      <img
        src={logo}
        width={width}
        height={height}
        className={cn("w-full object-cover", className)}
      />
    </div>
  );
};

export default Logo;
