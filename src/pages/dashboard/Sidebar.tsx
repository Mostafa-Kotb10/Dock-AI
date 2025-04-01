import { SidebarProvider } from "@/context/SidebarContext";
import { useSidebarContext } from "@/hooks/useSidebarContext";
import { ChevronLeft } from "lucide-react";
import { motion, Variants } from "motion/react";
import { FiSidebar } from "react-icons/fi";

const sidebarVariants: Variants = {
  expanded: {
    width: "225px",
  },
  collapsed: {
    width: "fit-content",
  },
};

const Sidebar = () => {
  return (
    <SidebarProvider>
      <SidebarContainer />
    </SidebarProvider>
  );
};

const SidebarContainer = () => {
  const { isOpen, toggleSidebar } = useSidebarContext();

  return (
    <motion.nav
      className="sticky top-0 left-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2 "
      layout
      style={{
        width: isOpen ? "225px" : "fit-content",
      }}
    >
      <motion.div layout className="grid size-10 place-content-center bg-slate-200">
        <FiSidebar className="size-5" />
      </motion.div>

      <ToggleSidebar />
    </motion.nav>
  );
};

const ToggleSidebar = () => {
  const { isOpen, toggleSidebar } = useSidebarContext();

  return (
    <motion.button
      className="absolute right-0 bottom-0 left-0 h-10 border-t border-slate-300 bg-white"
      layout
      onClick={toggleSidebar}
    >
      <motion.span>Toggle</motion.span>
    </motion.button>
  );
};

export default Sidebar;
