import { Chat } from "@/components/chat";
import { AI } from "@/lib/chat/actions";

export default function Page() {
  return (
    <>
      <AI initialAIState={{ messages: [] }}>
        <Chat />
      </AI>
    </>
  );
}
