"use client";

import { ChatContext } from "@/app/masterclass/completion/ChatContext";
import { ChatPanel } from "@/components/chat-panel";
import { EmptyScreen } from "@/components/empty-screen";
import { useScrollAnchor } from "@/lib/hooks/use-scroll-anchor";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { ChatList } from "./chat-list";

export interface ChatProps extends React.ComponentProps<"div"> {}

export function Chat({ id, className }: ChatProps) {
  const router = useRouter();
  const path = usePathname();
  const [input, setInput] = useState("");

  const chatState = useContext(ChatContext);

  const { messagesRef, scrollRef, visibilityRef, isAtBottom, scrollToBottom } =
    useScrollAnchor();

  return (
    <div
      className="group w-full overflow-auto pl-0 peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]"
      ref={scrollRef}
    >
      <div
        className={cn("pb-[200px] pt-4 md:pt-10", className)}
        ref={messagesRef}
      >
        {chatState.messages.length ? (
          // true ? (
          <ChatList messages={chatState.messages} />
        ) : (
          <EmptyScreen />
        )}
        <div className="h-px w-full" ref={visibilityRef} />
      </div>
      <ChatPanel
        id={id}
        input={input}
        setInput={setInput}
        isAtBottom={isAtBottom}
        scrollToBottom={scrollToBottom}
      />
    </div>
  );
}
