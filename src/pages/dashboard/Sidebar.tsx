import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { motion, Variants } from "motion/react";
import { useState } from "react";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";
import sidebarLinks from "@/constants/constants";

const variants: Variants = {
  collapsed: {
    width: "fit-content",
  },
  expanded: {
    width: 300,
  },
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      className="grid h-full grid-rows-[60px_1fr_60px] border-r px-4"
      variants={variants}
      initial="expanded"
      animate={isOpen ? "expanded" : "collapsed"}
      transition={{
        ease: "easeInOut",
      }}
    >
      <motion.div className="border-b py-2" layout>
        <div
          className={cn(
            "flex items-center justify-between",
            !isOpen && "justify-center",
          )}
        >
          {isOpen && <Logo className="h-[40px]" />}
          {isOpen ? (
            <GoSidebarExpand
              className="size-7 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <GoSidebarCollapse
              className="size-7 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </motion.div>

      <motion.div className="" layout>
        <div className="py-2">
          <ul className="space-y-2">
            {sidebarLinks.map((link) => (
              <li key={link.path} className="text-sm">
                <a
                  href={link.path}
                  className={cn(
                    "flex items-center gap-2 rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800",
                    !isOpen && "justify-center",
                  )}
                >
                  <link.icon className="size-5.5" />
                  {isOpen && (
                    <span className="whitespace-nowrap">{link.name}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div className="border-t" layout>
        Footer
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
