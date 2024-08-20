import { cn } from "@/lib/utils";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { Cover } from "./cover";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}>
      {children}
    </div>)
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon
}) => {
  return (
    (<div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none px-4 bg-black border-white/[0.2] border justify-between flex flex-col ",
        className
      )}>
      
        <CardContainer className="group-hover/bento:translate-x-2 min-h-fit transition duration-200  flex flex-col">
          {header}
          <Cover>
            <CardItem
              className="font-sans font-bold text-xl text-neutral-200 mb-2 mt-2">
              {title}
            </CardItem>
          </Cover>
          <CardItem
            className="font-sans font-normal  text-xs text-neutral-300">
            {description}
          </CardItem>
        </CardContainer>
      {/* <div className="hidden md:block">
      <Meteors number={20} />
      </div> */}
    </div>)
  );
};
