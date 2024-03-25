import { cn } from "@/lib/utils";
import { BiBrain, BiUser } from "react-icons/bi";
import Markdown from "react-markdown";
import { Separator } from "./ui/separator";

interface P {
  index: number;
  message: {
    id: string;
    content: string;
    role: "human" | "ai";
  };
}

export const ChatMessage = (P: P) => {
  if (P.message.role === "ai" || P.message.role === "human") {
    return (
      <div key={P.message.id}>
        <div
          className={cn(
            "group relative mb-4 items-start md:-ml-12",
            P.message.role === "human" ? "flex" : "flex flex-row-reverse"
          )}
        >
          <div
            className={cn(
              "flex size-8 shrink-0 select-none items-center justify-center rounded-md border shadow",
              P.message.role === "human"
                ? "bg-background"
                : "bg-primary text-primary-foreground"
            )}
          >
            {P.message.role === "human" ? <BiUser /> : <BiBrain color="blue" />}
          </div>
          <div
            className={`flex-1 px-1 space-y-2 overflow-hidden ${
              P.message.role === "human" ? "ml-4" : "mr-4"
            }`}
          >
            <Markdown>{P.message.content}</Markdown>
          </div>
        </div>
        <Separator className="my-4 bg-gray-100" />
      </div>
    );
  } else {
    return <div key={P.index}>UNSUPPORTED MESSAGE</div>;
  }
};
