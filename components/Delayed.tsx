"use client";

type Props = {
  children: JSX.Element;
  isShown: boolean;
};

const Delayed = ({ children, isShown }: Props) => {
  return isShown ? (
    <div
      className={`opacity-0 transition duration-1000 ${
        isShown ? "opacity-100" : ""
      }`}
    >
      {children}
    </div>
  ) : (
    <></>
  );
};

export default Delayed;
