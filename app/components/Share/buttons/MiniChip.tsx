import type { IconName } from "~/components/Icon";
import Icon from "~/components/Icon";
interface ChipProps {
  iconName?: IconName;
  text: string;
  widthIcon?: string;
  className?: string;
  style?: { [key: string]: any };
}

const MiniChip = ({ className, iconName, text, widthIcon }: ChipProps) => {
  return (
    <div className={`${className} flex px-1.5 rounded-button items-center `}>
      {iconName && <Icon iconName={iconName} className={`${widthIcon}`} />}
      <span className=" h-full text-content leading-tight text-left overflow-hidden pt-1 ">
        {text}
      </span>
    </div>
  );
};

export default MiniChip;
