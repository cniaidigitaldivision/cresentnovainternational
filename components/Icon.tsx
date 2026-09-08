/**
 * Material Symbols render as ligatures: the element's text content ("arrow_forward")
 * is what picks the glyph, so the name goes in as a child, not as a prop-driven <svg>.
 * aria-hidden by default because every icon here sits beside its own visible label.
 */
export function Icon({
  name,
  className = '',
  label,
}: {
  name: string
  className?: string
  label?: string
}) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? 'img' : undefined}
      translate="no"
    >
      {name}
    </span>
  )
}
