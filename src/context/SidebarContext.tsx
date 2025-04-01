/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

interface SidebarContextType {
  isOpen: boolean;
  toggleSidebar: () => void
  active: string;
  setActive: (active: string) => void;
}

export const sidebarContext = createContext<SidebarContextType | null>(null);

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <sidebarContext.Provider value={{ isOpen, toggleSidebar, active, setActive }}>
      {children}
    </sidebarContext.Provider>
  );
};
