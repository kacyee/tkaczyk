import styles from "./typewriter.module.css";

const Typewriter = ({ text, tag }: { text: string; tag: "p" | "span" }) => {
  return (
    <div className={styles.typewriter}>
      {tag === "p" ? <p>{text}</p> : <span>{text}</span>}
    </div>
  );
};

export default Typewriter;
