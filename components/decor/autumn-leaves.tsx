type Leaf = {
  top: string
  left: string
  size: number
  rotate: number
  color: string
  opacity: number
  delay: number
}

const LEAVES: Leaf[] = [
  { top: "2%", left: "6%", size: 74, rotate: -18, color: "#c2591d", opacity: 0.55, delay: 0 },
  { top: "10%", left: "90%", size: 58, rotate: 28, color: "#b45309", opacity: 0.5, delay: 1.2 },
  { top: "52%", left: "1%", size: 64, rotate: 12, color: "#a3672b", opacity: 0.45, delay: 2.1 },
  { top: "70%", left: "86%", size: 50, rotate: -30, color: "#d97706", opacity: 0.5, delay: 0.6 },
  { top: "24%", left: "48%", size: 40, rotate: 45, color: "#92400e", opacity: 0.35, delay: 1.8 },
  { top: "82%", left: "16%", size: 52, rotate: -10, color: "#c2410c", opacity: 0.4, delay: 2.6 },
  { top: "0%", left: "38%", size: 44, rotate: -50, color: "#b45309", opacity: 0.35, delay: 0.9 },
  { top: "60%", left: "66%", size: 60, rotate: 8, color: "#a3672b", opacity: 0.4, delay: 1.5 },
]

function LeafShape({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C6 6 4 12 8 18c2 3 6 4 9 2 3-2 4-6 2-9C16 6 12 2 12 2Z"
        fill={color}
      />
      <path
        d="M12 3C11 9 11 15 9 20"
        stroke="rgba(0,0,0,0.18)"
        strokeWidth="0.7"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function AutumnLeaves({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {LEAVES.map((leaf, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: leaf.top,
            left: leaf.left,
            width: leaf.size,
            height: leaf.size,
            opacity: leaf.opacity,
            transform: `rotate(${leaf.rotate}deg)`,
          }}
        >
          <div
            className="animate-leaf-drift"
            style={{ animationDelay: `${leaf.delay}s` }}
          >
            <LeafShape color={leaf.color} />
          </div>
        </div>
      ))}
    </div>
  )
}
