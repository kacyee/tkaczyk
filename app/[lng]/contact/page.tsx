"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import MobileMenu from "@/components/MobileMenu";
import { useTranslation } from "@/app/i18n/client";

export default function Contact({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  const form = useRef<HTMLFormElement>(null);
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const { t } = useTranslation(lng, "contact");

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE!,
        process.env.NEXT_PUBLIC_TEMPLATE!,
        form.current!,
        process.env.NEXT_PUBLIC_PUBLICKEY!
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setEmailSent(true);
            form.current!.reset();
            setTimeout(() => setEmailSent(false), 5000);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      <MobileMenu isBlackMenu={true} lang={lng} />
      <main className="relative z-[11] min-h-[calc(100dvh)] bg-blue pt-[90px] lg:h-[calc(100dvh)] lg:overflow-hidden lg:bg-transparent lg:pt-0  xl:ml-[346px] xl:mr-[90px] 2xl:ml-[488px] 2xl:mr-[459px]">
        <div className="grid h-full lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.2, delay: 0.4 }}
            className="flex flex-col px-4 uppercase lg:border-r lg:border-white lg:px-0"
          >
            <motion.div
              initial={{ translateX: -40, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.4, delay: 0.7 }}
            >
              <h2 className=" text-center text-[64px] font-bold text-black lg:mt-[150px] lg:text-left xl:mb-[70px] 2xl:mt-[237px]">
                {t("title")}
              </h2>
            </motion.div>
            <motion.nav
              initial={{ translateX: -30, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
              className="mt-[30px] text-center text-lg lg:mt-0 lg:text-left"
            >
              <a
                href="mailto:PAWELTKACZYK.GRAPHIC@GMAIL.COM"
                className=" font-medium transition duration-300 hover:text-white"
              >
                PAWELTKACZYK.GRAPHIC@GMAIL.COM
              </a>
            </motion.nav>
            <motion.nav
              initial={{ translateX: -30, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 1.1 }}
              className="mt-[30px] text-center text-lg lg:text-left"
            >
              <a
                className=" text-lg font-medium transition duration-300 hover:text-white"
                href="https://www.behance.net/pawulontkaczyk"
              >
                Behance
              </a>
            </motion.nav>
            <motion.nav
              initial={{ translateX: -30, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 1.2 }}
              className="mt-[30px] text-center text-lg lg:text-left"
            >
              <a
                className="mt-[30px] text-lg font-medium transition duration-300 hover:text-white"
                href="https://pl.linkedin.com/in/paweł-tkaczyk-designn"
              >
                LinkedIn
              </a>
            </motion.nav>
          </motion.div>
          <div className="flex flex-col  uppercase xl:pl-[70px] 2xl:pl-[142px]">
            <motion.div
              initial={{ translateX: -40, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.4, delay: 0.7 }}
              className="px-4 lg:px-0"
            >
              <h2 className="mx-auto mt-[40px] mb-[20px] w-max text-center text-[64px] font-bold leading-none text-white lg:mx-0 lg:mb-0 lg:mt-[150px] lg:text-left xl:mb-[70px] 2xl:mt-[237px] ">
                {t("send")}
                <span className="mt-1 block text-center text-[26px] lg:text-right">
                  {t("question")}
                </span>
              </h2>
            </motion.div>
            <motion.nav
              initial={{ translateX: -30, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 1.1 }}
              className="px-4 pb-12 lg:px-0 lg:pb-0"
            >
              <form ref={form} onSubmit={sendEmail} className="flex flex-col">
                <input
                  type="text"
                  name="user_name"
                  className="mt-4 mb-6 rounded-none border-b border-white bg-transparent py-2 text-center font-medium uppercase text-white placeholder-white outline-none lg:mt-0 lg:text-left"
                  placeholder={t("first_name")!}
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  className="mb-6 rounded-none border-b border-white bg-transparent py-2 text-center font-medium uppercase text-white placeholder-white outline-none lg:text-left"
                  placeholder="EMAIL"
                  required
                />
                <label className="mb-2 text-center font-medium text-white lg:text-left">
                  {t("message")}
                </label>
                <textarea
                  name="message"
                  className=" h-[140px]  rounded-none border border-white bg-transparent p-2 text-center font-medium text-white outline-none lg:text-left xl:h-[180px] 2xl:h-[250px]"
                  required
                />
                <input
                  type="submit"
                  value={t("send")!}
                  className=" mt-6 w-full cursor-pointer rounded-none border border-black bg-black px-6 py-2 text-lg font-medium uppercase text-white transition duration-300 hover:border-white hover:bg-transparent  hover:text-white lg:ml-auto lg:w-max"
                />
              </form>
              {emailSent ? (
                <motion.nav
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ease: "linear", duration: 0.5 }}
                >
                  <div
                    id="toast-simple"
                    className="space-x divide-gray-200 text-gray-500 dark:divide-gray-700 top-[30px] right-0 mt-4 flex w-full max-w-xs items-center space-x-4 divide-x rounded-lg bg-white p-4 shadow dark:text-black lg:absolute lg:mt-0"
                    role="alert"
                  >
                    <svg
                      aria-hidden="true"
                      className="text-blue-600 dark:text-blue-500 h-5 w-5"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="paper-plane"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
                      ></path>
                    </svg>
                    <div className="pl-4 text-sm font-normal">
                      {t("message_sent")}
                    </div>
                  </div>
                </motion.nav>
              ) : null}
            </motion.nav>
          </div>
        </div>
      </main>
    </>
  );
}
