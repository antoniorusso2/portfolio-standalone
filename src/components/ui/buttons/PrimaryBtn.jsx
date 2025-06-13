export default function PrimaryBtn({ type = "button", text, action = () => {} }) {
  return (
    <button
      type={type}
      onClick={action}
      className="my_btn_primary cursor-pointer px-4 py-2 rounded-md border-4 border-double text-[var(--primary-color)] border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white"
    >
      {text}
    </button>
  );
}
