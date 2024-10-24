import React from "react"

interface CardProps {
  header?: string;
  footer?: string;
  bgcolor?: string;
  body?: string
  children?: React.ReactNode
  className?: string
}

export default function Card ({header, footer, bgcolor, children, body}:CardProps) {
  return (
    <div className={`card ${bgcolor}`}>
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">
        {body ? (
          <div dangerouslySetInnerHTML={{ __html: body }} />
        ) : (
          children
        )}
      </div>
      <div className="card-footer">{footer}</div>
    </div>
  );
}