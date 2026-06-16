import { ReactNode } from "react";
import Header from "./Header";
import ChatInput from "./ChatInput";

interface SidebarProps {
  children: ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  return (
    <div className="w-[55%] h-full bg-white flex flex-col rounded-lg border border-gray-100 overflow-hidden">
      <Header />
      <div className="flex-1 overflow-y-auto px-8 py-6 flex flex-col">
        {children}
      </div>
      <ChatInput />
    </div>
  );
}