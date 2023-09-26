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
    true: "text-center lg:text-left lg:absolute lg:top-[80px] xl:top-[172px] 2xl:top-[237px]",
    false: "text-center lg:text-left lg:mt-[80px] xl:mt-[0px]",
  };
  return (
    <motion.nav
      initial={{ translateX: -40, opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.3 }}
      className={`${isAbsolute[absolute]} ${extraWrapperClass}`}
    >
      <h1 className="text-[48px] font-bold xl:text-[64px] ">{text}</h1>
    </motion.nav>
  );
};

export default PageTitle;
