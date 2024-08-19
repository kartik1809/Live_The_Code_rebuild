import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import { CardBody,CardContainer,CardItem } from "./ui/3d-card";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-7xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
);
const items = [
  {
    title: "SUSTAINABLITY",
    description: "This event challenges participants to develop creative solutions that promote sustainability and address pressing environmental issues.",
    header: <div className="flex justify-center items-center"><Image src={'/1.png'} width={150} height={150}/></div>,
  },
  {
    title: "FINTECH",
    description: "Disrupt finance with digital solutions like mobile banking, blockchain applications, and automated advisors.",
    header: <div className="flex justify-center items-center"><Image src={'/2.png'} width={150} height={150}/></div>,
    
  },
  {
    title: "ED TECH",
    description: "Transform learning through tech innovations, from personalized education platforms to interactive resources.",
    header: <div className="flex justify-center items-center"><Image src={'/4.png'} width={150} height={150}/></div>,
    
  },
  {
    title: "WEB 3.0",
    description:
      "Shape the decentralized internet with blockchain-powered applications that prioritize privacy and security.",
    header: <div className="flex justify-center items-center"><Image src={'/5.png'} width={180} height={180}/></div>,
    
  },
  {
    title: "AR/VR",
    description: "Immerse users in virtual realms, creating new experiences that blur the line between real and digital worlds.",
    header: <div className="flex justify-center items-center"><Image src={'/7.png'} width={150} height={150}/></div>,
    
  },
  {
    title: "HEALTH",
    description: "Revolutionize healthcare through data-driven diagnostics, telemedicine, and advancements in patient care.",
    header: <div className="flex justify-center items-center"><Image src={'/8.png'} width={150} height={150}/></div>,
    
  },
  {
    title: "OPEN INNOVATION",
    description: "Collaborate across boundaries to devise innovative solutions that challenge norms and drive progress.",
    header: <div className="flex justify-center items-center"><Image src={'/9.png'} width={150} height={150}/></div>,

  },
];
