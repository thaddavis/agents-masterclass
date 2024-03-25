"use client";

import * as React from "react";
import Textarea from "react-textarea-autosize";

import { ChatDispatchContext } from "@/app/masterclass/completion/ChatContext";
import { useEnterSubmit } from "@/lib/hooks/use-enter-submit";
import { nanoid } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function PromptForm({
  input,
  setInput,
}: {
  input: string;
  setInput: (value: string) => void;
}) {
  const router = useRouter();
  const { formRef, onKeyDown } = useEnterSubmit();
  const inputRef = React.useRef<HTMLTextAreaElement>(null);

  const dispatch = React.useContext(ChatDispatchContext);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form
      ref={formRef}
      onSubmit={async (e: any) => {
        e.preventDefault();

        // Blur focus on mobile
        if (window.innerWidth < 600) {
          e.target["message"]?.blur();
        }

        const value = input.trim();
        setInput("");
        if (!value) return;

        dispatch({
          type: "ADD_MESSAGE",
          payload: {
            id: nanoid(),
            content: value,
            role: "human",
          },
        });
        // Optimistically add user message UI
        // setMessages((currentMessages) => [
        //   ...currentMessages,
        //   {
        //     id: nanoid(),
        //     display: <>{value}</>,
        //   },
        // ]);
      }}
    >
      <div className="relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background">
        <Textarea
          ref={inputRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          placeholder="Send a message."
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          autoFocus
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          name="message"
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </form>
  );
}
