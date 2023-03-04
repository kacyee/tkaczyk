import { motion } from "framer-motion";

type PageTitleProps = {
  text: string;
  extraWrapperClass: string;
  absolute?: "true" | "false";
};

const PageTitle = ({
  text,
  extraWrapperClass,
  absolute = "false",
}: PageTitleProps) => {
  const isAbsolute = {
    true: "absolute lg:top-[172px] 2xl:top-[237px]",
    false: "lg:mt-[172px] 2xl:mt-[237px]",
  };
  return (
    <motion.nav
      initial={{ translateX: -40, opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.3 }}
      className={`${isAbsolute[absolute]} ${extraWrapperClass}`}
    >
      <h1 className="text-[64px] font-bold ">{text}</h1>
    </motion.nav>
  );
};

export default PageTitle;
