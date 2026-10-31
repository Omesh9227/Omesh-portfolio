// Architecture of the e-commerce platform: 16 Spring Boot services in total
// (gateway + 2 platform services + 13 business services).

const rows = [
  ['user', 'product', 'inventory', 'cart', 'order'],
  ['payment', 'shipping', 'notification', 'wishlist'],
  ['review', 'search', 'recommendation', 'admin'],
]

const BOX_W = 92
const BOX_H = 28
const GAP = 8
const W = 520

const rowX = (count) => (W - (count * BOX_W + (count - 1) * GAP)) / 2

const EcommerceDiagram = () => (
  <svg
    viewBox={`0 0 ${W} 344`}
    role="img"
    aria-labelledby="ecom-diagram-title"
    className="block h-auto w-full"
    style={{ fontFamily: 'inherit' }}
  >
    <title id="ecom-diagram-title">
      Architecture: a React storefront calls Spring Cloud Gateway, which routes to 13 Spring Boot business
      services (user, product, inventory, cart, order, payment, shipping, notification, wishlist, review,
      search, recommendation, admin), supported by Eureka discovery, Config Server and PostgreSQL.
    </title>
    <defs>
      <marker id="ed-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 L8 4 L0 8 z" fill="var(--faint)" />
      </marker>
    </defs>

    <g stroke="var(--faint)" strokeWidth="1.25" fill="none">
      <line x1="260" y1="42" x2="260" y2="64" markerEnd="url(#ed-arrow)" />
      <line x1="260" y1="98" x2="260" y2="120" markerEnd="url(#ed-arrow)" />
      <line x1="260" y1="270" x2="260" y2="292" markerStart="url(#ed-arrow)" markerEnd="url(#ed-arrow)" />
    </g>

    {/* client */}
    <rect x="185" y="8" width="150" height="34" rx="8" fill="var(--panel)" stroke="var(--line-2)" />
    <text x="260" y="30" textAnchor="middle" fontSize="13" fill="var(--text)">React storefront</text>

    {/* gateway */}
    <rect x="160" y="66" width="200" height="32" rx="8" fill="var(--panel)" stroke="var(--green)" strokeWidth="1.5" />
    <text x="260" y="87" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--text)">Spring Cloud Gateway</text>

    {/* business services */}
    <rect x="8" y="122" width="504" height="148" rx="12" fill="var(--panel-2)" stroke="var(--line-2)" />
    <text x="20" y="139" fontSize="11" fill="var(--muted)">13 Spring Boot business services</text>
    {rows.map((row, r) =>
      row.map((name, i) => {
        const x = rowX(row.length) + i * (BOX_W + GAP)
        const y = 148 + r * (BOX_H + GAP)
        return (
          <g key={name}>
            <rect x={x} y={y} width={BOX_W} height={BOX_H} rx="6" fill="var(--panel)" stroke="var(--line-2)" />
            <text x={x + BOX_W / 2} y={y + 18} textAnchor="middle" fontSize={name.length > 12 ? 10.5 : 11.5} fill="var(--text)">
              {name}
            </text>
          </g>
        )
      })
    )}

    {/* platform services + data */}
    {[
      ['Eureka discovery', 8],
      ['Config Server', 180],
      ['PostgreSQL', 352],
    ].map(([label, x]) => (
      <g key={label}>
        <rect x={x} y="294" width="160" height="32" rx="8" fill="rgb(63 185 80 / 0.12)" stroke="var(--green)" strokeOpacity="0.45" />
        <text x={x + 80} y="315" textAnchor="middle" fontSize="12.5" fontWeight="600" fill="var(--green)">
          {label}
        </text>
      </g>
    ))}
  </svg>
)

export default EcommerceDiagram
