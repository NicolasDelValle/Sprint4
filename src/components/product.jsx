export default function Product({ title }) {
  return (
    <div className="col bg-light border m-3">
      <h1 className="fs-3 text">{title}</h1>
      <div className="list-group">{children}</div>
    </div>
  );
}
