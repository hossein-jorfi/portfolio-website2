// assets
import GitHubIcon from "../../assets/social-media/github.svg?react";
import LinkedinIcon from "../../assets/social-media/linkedin.svg?react";
import TelegramIcon from "../../assets/social-media/telegram.svg?react";

const icon_props = {
  width: 34,
  height: 34,
  fill: "#b292ff",
};
const SocialMedia = () => {
  return (
    <div className="flex items-center gap-2">
      <LinkedinIcon {...icon_props} />
      <TelegramIcon {...icon_props} />
      <GitHubIcon {...icon_props} width={39} height={39} />
    </div>
  );
};

export default SocialMedia;