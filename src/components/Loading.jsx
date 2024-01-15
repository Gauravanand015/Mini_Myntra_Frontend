const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border spinner text-secondary"
        role="status"
        style={{
          width: "5rem",
          height: "5rem",
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
