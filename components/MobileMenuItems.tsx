import { routes } from "@/app/constants/routes";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type MobileMenuItemsProps = {
  isMobileMenuActive: boolean;
  setActivePage: Dispatch<SetStateAction<string>>;
};

const MobileMenuItems = ({
  isMobileMenuActive,
  setActivePage,
}: MobileMenuItemsProps) => {
  return (
    <>
      <div
        className={classNames(
          "absolute z-[1000] flex h-full max-h-screen w-full flex-col",
          {
            hidden: !isMobileMenuActive,
          }
        )}
      >
        <motion.nav
          initial={{ translateX: -40, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
            delay: 1 * 0.2,
          }}
          className="flex h-1/4 w-full items-center justify-center bg-black text-white"
        >
          <Link
            href="/"
            onClick={() => setActivePage("/")}
            className="flex h-full w-full items-center justify-center"
          >
            <span className="text-xl uppercase">Strona główna</span>
          </Link>
        </motion.nav>
        <motion.nav
          initial={{ translateX: -40, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
            delay: 2 * 0.2,
          }}
          className="flex h-1/4 w-full items-center justify-center bg-white"
        >
          <Link
            href={routes.PORTFOLIO}
            onClick={() => setActivePage(routes.PORTFOLIO)}
            className="flex h-full w-full items-center justify-center "
          >
            <span className={`text-xl uppercase transition-all duration-500`}>
              Portfolio
            </span>
          </Link>
        </motion.nav>
        <motion.nav
          initial={{ translateX: -40, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
            delay: 3 * 0.2,
          }}
          className="bg-yellowe flex h-1/4 w-full items-center justify-center"
        >
          <Link
            href={routes.SERVICES}
            onClick={() => setActivePage(routes.SERVICES)}
            className="flex h-full w-full items-center justify-center bg-yellow"
          >
            <span className={`text-xl uppercase`}>Usługi</span>
          </Link>
        </motion.nav>
        <motion.nav
          initial={{ translateX: -40, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
            delay: 5 * 0.2,
          }}
          className="flex h-1/4 w-full items-center justify-center bg-blue"
        >
          <Link
            href={routes.CONTACT}
            onClick={() => setActivePage(routes.CONTACT)}
            className="flex h-full w-full items-center justify-center"
          >
            <span className={`text-xl uppercase`}>Kontakt</span>
          </Link>
        </motion.nav>
      </div>
    </>
  );
};
export default MobileMenuItems;
