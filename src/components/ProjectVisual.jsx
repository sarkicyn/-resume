function ProjectVisual({ type, title }) {
  return (
    <div className={`project-visual project-visual-${type}`} aria-label={`${title} visual placeholder`}>
      <div className="visual-horizon" />
      <div className="visual-grid">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="visual-panel">
        <span className="visual-dot" />
        <span className="visual-line long" />
        <span className="visual-line" />
      </div>
      <div className="visual-chip">{type}</div>
    </div>
  );
}

export default ProjectVisual;
