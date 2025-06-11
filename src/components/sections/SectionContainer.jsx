export default function SectionContainer({ children }) {
  return (
    <section className="h-screen">
      <div className="container px-4">{children}</div>
    </section>
  );
}
