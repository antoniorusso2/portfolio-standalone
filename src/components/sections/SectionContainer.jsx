export default function SectionContainer({ children, id, node }) {
  return (
    <section ref={node} id={id} className="h-screen pt-25 grow py-6">
      <div className="container px-4">{children}</div>
    </section>
  );
}
