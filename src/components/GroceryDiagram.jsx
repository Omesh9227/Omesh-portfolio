// System overview for the Grocery Shopping Optimizer, drawn from the
// project's described architecture. Colours come from the theme tokens.

const services = [
  { name: 'Inventory', sub: 'tracks your pantry', x: 22, y: 160 },
  { name: 'Recipes', sub: 'AI-generated', x: 206, y: 160 },
  { name: 'Shopping lists', sub: 'built automatically', x: 22, y: 214 },
  { name: 'Price comparison', sub: 'scrapes retailers', x: 206, y: 214 },
]

const GroceryDiagram = () => (
  <svg
    viewBox="0 0 400 334"
    role="img"
    aria-labelledby="grocery-diagram-title"
    className="block h-auto w-full"
    style={{ fontFamily: 'var(--font-sans)' }}
  >
    <title id="grocery-diagram-title">
      Architecture: a React client calls a Spring Cloud API gateway, which routes to four Spring Boot
      services (inventory, recipes, shopping lists, price comparison) that communicate over an Apache
      Kafka event bus.
    </title>
    <defs>
      <marker id="gd-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 L8 4 L0 8 z" fill="var(--faint)" />
      </marker>
    </defs>

    {/* connectors */}
    <g stroke="var(--faint)" strokeWidth="1.25" fill="none">
      <line x1="200" y1="46" x2="200" y2="74" markerEnd="url(#gd-arrow)" />
      <line x1="200" y1="110" x2="200" y2="134" markerEnd="url(#gd-arrow)" />
      <line x1="200" y1="268" x2="200" y2="292" markerStart="url(#gd-arrow)" markerEnd="url(#gd-arrow)" />
    </g>

    {/* client */}
    <rect x="135" y="12" width="130" height="34" rx="8" fill="var(--surface)" stroke="var(--rule)" />
    <text x="200" y="34" textAnchor="middle" fontSize="13" fill="var(--ink)">React client</text>

    {/* gateway */}
    <rect x="110" y="76" width="180" height="34" rx="8" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.5" />
    <text x="200" y="98" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--ink)">Spring Cloud Gateway</text>

    {/* services group */}
    <rect x="10" y="136" width="380" height="132" rx="12" fill="var(--surface-2)" stroke="var(--rule)" />
    <text x="22" y="152" fontSize="11" fill="var(--muted)">Spring Boot microservices</text>
    {services.map((s) => (
      <g key={s.name}>
        <rect x={s.x} y={s.y} width="172" height="44" rx="8" fill="var(--surface)" stroke="var(--rule)" />
        <text x={s.x + 12} y={s.y + 19} fontSize="13" fontWeight="600" fill="var(--ink)">{s.name}</text>
        <text x={s.x + 12} y={s.y + 35} fontSize="11.5" fill="var(--muted)">{s.sub}</text>
      </g>
    ))}

    {/* kafka */}
    <rect x="10" y="294" width="380" height="32" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" strokeOpacity="0.45" />
    <text x="200" y="315" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--accent)">Apache Kafka event bus</text>
  </svg>
)

export default GroceryDiagram
