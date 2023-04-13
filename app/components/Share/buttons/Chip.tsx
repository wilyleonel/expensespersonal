import type { IconName } from "~/components/Icon";
import Icon from "~/components/Icon";

interface ChipProps {
  iconName?: IconName;
  text: string;
  widthIcon?: string;
  className?: string;
  style?: { [key: string]: any };
}

const Chip = ({ iconName, text, className, style, widthIcon }: ChipProps) => {
  return (
    <div
      className={`${className} flex px-1.5 rounded-button items-center justify-center text-center`}
    >
      {iconName && <Icon iconName={`${iconName}`} className={`${widthIcon}`} />}
      <p className="h-[16px] w-full text-content leading-tight " style={style}>
        {text}
      </p>
    </div>
  );
};

Chip.defaultProps = {
  icon: null,
  text: null,
};

export default Chip;
