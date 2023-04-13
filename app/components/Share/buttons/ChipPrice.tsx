import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import Icon from "~/components/Icon";
interface ChipPriceProps extends HTMLMotionProps<"div"> {
  title?: string;
  price?: number;
  currency?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}
const ChipPrice = ({
  title,
  price,
  currency,
  disabled,
  className,
  onClick,
  ...otherProps
}: ChipPriceProps) => {
  return (
    <motion.div
      className={`${className} flex justify-between `}
      {...otherProps}
    >
      <span className="w-1/2 truncate">{title}</span>
      <div className="flex gap-3 px-1">
        <span className="text-center ">
          {currency}
          {price}
        </span>
        {onClick && (
          <motion.button
            disabled={disabled}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
            whileHover={{ scale: 1.2, rotate: 90 }}
            type="button"
            className=""
            onClick={onClick}
          >
            <Icon iconName="Xmark" className="h-full w-full" />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default ChipPrice;
