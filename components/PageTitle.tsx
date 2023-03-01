import { motion } from "framer-motion";

type PageTitleProps = {
  text: string;
  extraWrapperClass: string;
};

const PageTitle = ({ text, extraWrapperClass }: PageTitleProps) => {
  return (
    <motion.nav
      initial={{ translateX: -40, opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.3 }}
      className={`absolute lg:top-[172px] 2xl:top-[237px] ${extraWrapperClass}`}
    >
      <h1 className="text-[64px] font-bold ">{text}</h1>
    </motion.nav>
  );
};

export default PageTitle;
