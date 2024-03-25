import { Separator } from "@/components/ui/separator";
import { Key } from "react";

export interface ChatList {
  messages: {
    id: string;
    content: string;
    role: "human" | "ai";
  }[];
}

export function ChatList({ messages }: ChatList) {
  if (!messages.length) {
    return null;
  }

  return (
    <div className="relative mx-auto max-w-2xl px-4">
      {messages.map(
        (
          message: {
            id: Key | null | undefined;
            content: string;
          },
          index: number
        ) => (
          <div key={message.id}>
            {message.content}
            {index < messages.length - 1 && <Separator className="my-4" />}
          </div>
        )
      )}
    </div>
  );
}
