"use client";

type Props = {
  children: JSX.Element;
  isShown: boolean;
};

const Delayed = ({ children, isShown }: Props) => {
  return isShown ? children : <></>;
};

export default Delayed;
