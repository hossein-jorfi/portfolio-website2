// icons
import { GitHubLogoIcon, ExternalLinkIcon } from "@radix-ui/react-icons";

// components
import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  image: string;
  title: string;
  text: string;
  liveLink: string;
  gitHubLink: string;
};

const ProjectCard = ({
  text,
  image,
  gitHubLink,
  liveLink,
  title,
}: ProjectCardProps) => {
  return (
    <div className="flex gap-4 border-2 border-primary/50 rounded-3xl p-4">
      <div className="border-2 border-primary/50 p-3 rounded-xl w-[40%] h-auto flex justify-center items-center">
        <img src={image} alt={title} className="rounded-md" />
      </div>
      <div className="w-[60%] flex flex-col justify-between items-start">
        <div className="text-primary/890">{text}</div>
        <div className="flex items-start gap-6">
          <a href={liveLink} target="_blank">
            <Button
              variant="link"
              className="px-0 flex items-center gap-1.5 text-primary/70 hover:text-primary/90"
            >
              Visit Website <ExternalLinkIcon />
            </Button>
          </a>
          <a href={gitHubLink} target="_blank">
            <Button
              variant="link"
              className="px-0 flex items-center gap-1.5 text-primary/70 hover:text-primary/90"
            >
              See on GitHub <GitHubLogoIcon />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
