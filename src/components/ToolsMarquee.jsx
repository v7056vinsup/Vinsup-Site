const initials = (name = "") =>
  name
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export default function ToolsMarquee({ tools = [] }) {
  if (!tools.length) return null;

  const loopTools = [...tools, ...tools];

  return (
    <div className="tools-marquee">
      <div className="tools-track">
        {loopTools.map((tool, index) => (
          <div className="tool-card" key={index} aria-hidden={index >= tools.length ? "true" : undefined}>
            {tool.img ? (
              <img src={tool.img} alt={tool.name} loading="lazy" />
            ) : (
              <span className="tool-badge" aria-hidden="true">{initials(tool.name)}</span>
            )}
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
