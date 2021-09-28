import { LinkIcon } from "./Link";
import { Icon } from "../Typo/Typo";

const LinkWithIcon = ({
  to,
  icon,
  color,
  onClick,
  fontSize,
  pd,
  br,
  target,
  border,
  disabled,
}) => {
  return (
    <LinkIcon to={to} onClick={onClick} br={br} target={target} disabled={disabled}>
      <Icon
        className={icon}
        fontSize={fontSize}
        pd={pd}
        br={br}
        color={color}
        border={border}
        disabled={disabled}
      />
    </LinkIcon>
  );
};

export default LinkWithIcon;
