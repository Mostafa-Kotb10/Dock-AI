import Logo from "@/components/Logo";
import { sidebarLinks } from "@/constants/constants";
import { SidebarProvider } from "@/context/SidebarContext";
import { useSidebarContext } from "@/hooks/useSidebarContext";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { IconType } from "react-icons";
import { FiSidebar } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <SidebarProvider>
      <SidebarContainer />
    </SidebarProvider>
  );
};

const SidebarContainer = () => {
  const { isOpen, setIsOpen } = useSidebarContext();

  return (
    <motion.nav
      className="pointer-events-auto absolute top-0 bottom-0 left-0 z-10 h-screen shrink-0 border-r border-slate-300 bg-white p-2"
      layout
      style={{
        width: isOpen ? "225px" : "fit-content",
      }}
      onHoverStart={() => setIsOpen(true)}
      onHoverEnd={() => setIsOpen(false)}
    >
      <TitleSection />
      <div className="w-full space-y-1">
        {sidebarLinks.map(({ title, path, icon: Icon }) => (
          <Option key={path} title={title} path={path} Icon={Icon} />
        ))}
      </div>
      <SidebarFooter  />
    </motion.nav>
  );
};

type OptionProps = {
  title: string;
  path: string;
  Icon: IconType;
};

const Option = ({ title, path, Icon }: OptionProps) => {
  const { active, isOpen, setActive } = useSidebarContext();
  return (
    <Link to={path}>
      <motion.button
        className={cn(
          "relative flex h-10 w-full cursor-pointer items-center rounded-md transition-colors hover:bg-emerald-50",
        )}
        onClick={() => setActive(title)}
      >
        <motion.div
          layout
          className={cn(
            "absolute inset-0 -z-10 h-full",
            active === title && "bg-emerald-100 text-black",
          )}
        />
        <motion.div
          layout
          className="pointer-events-none grid h-full w-10 place-content-center text-lg"
        >
          <Icon className="text-slate-600" />
        </motion.div>
        {isOpen && (
          <motion.span
            layout
            className="text-sm text-slate-600"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.1,
            }}
          >
            {title}
          </motion.span>
        )}
      </motion.button>
    </Link>
  );
};

const TitleSection = () => {
  const { isOpen } = useSidebarContext();

  return (
    <div className="mb-3 border-b border-slate-300 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-emerald-100">
        {isOpen && (
          <motion.div
            layout
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.1,
            }}
          >
            <Logo className="h-10" />
          </motion.div>
        )}
        <motion.div layout className="grid size-10 place-content-center">
          <FiSidebar className="size-5" />
        </motion.div>
      </div>
    </div>
  );
};

const SidebarFooter = () => {
  return (
    <div></div>
  )
}

export default Sidebar;
