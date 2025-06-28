export default function Button({ children, onClick, classname }) {
  return (
    <button onClick={onClick} className={classname}>
      {children}
    </button>
  );
}
