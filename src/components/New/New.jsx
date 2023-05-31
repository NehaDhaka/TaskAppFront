import "./New.scss";

export default function New() {
  return (
    <section className="new">
      <h1 className="new__heading">New Task</h1>
      <form className="new__form">
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="Enter a description.."
        ></textarea>
      </form>
    </section>
  );
}
