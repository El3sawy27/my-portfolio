import React from "react";

export default function SectionHeader({
  label,
  title,
  note,
  alignRight = false,
}) {
  return (
    <div
      className="section-head"
      style={alignRight ? { alignItems: "end" } : {}}
    >
      <div>
        <p className="section-label">{label}</p>
        <h2>{title}</h2>
      </div>
      {note ? <p className="section-note">{note}</p> : null}
    </div>
  );
}
