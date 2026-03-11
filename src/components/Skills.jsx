const skills = [
  {
    category: "Programming Languages",
    color: "#3a393b",
    items: [
      { name: "Python", level: 92 },
      { name: "Java", level: 80 },
      { name: "C", level: 72 },
      { name: "R", level: 65 },
    ],
  },
  {
    category: "Web / Mobile Dev",
    color: "#3a393b",
    items: [
      { name: "React", level: 88 },
      { name: "React Native", level: 82 },
      { name: "Next.js", level: 78 },
      { name: "Expo Go", level: 75 },
      { name: "Flask", level: 70 },
    ],
  },
  {
    category: "Electrical Engineering",
    color: "#3a393b",
    items: [
      { name: "SolidWorks", level: 68 },
      { name: "KiCad", level: 62 },
    ],
  },
  {
    category: "Computer Engineering",
    color: "#3a393b",
    items: [
      { name: "SystemVerilog", level: 75 },
      { name: "Nios V Assembly", level: 70 },
      { name: "Embedded C", level: 73 },
      { name: "Quartus / Waveform", level: 68 },
    ],
  },
];

const TOTAL_BLOCKS = 12;

function BlockBar({ level, color }) {
  const filled = Math.round((level / 100) * TOTAL_BLOCKS);
  return (
    <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
      {Array.from({ length: TOTAL_BLOCKS }).map((_, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            width: "14px",
            height: "14px",
            borderRadius: "2px",
            background: (() => {
              if (i >= filled) return "transparent";
              if (i < filled * 0.5) return color;
              if (i < filled * 0.8) return color + "aa";
              return color + "55";
            })(),
            border: `1px solid ${i < filled ? color + "66" : "#d1d5db"}`,
            transition: "background 0.2s",
          }}
        />
      ))}
      <span
        style={{
          fontSize: "11px",
          color: "#9ca3af",
          marginLeft: "8px",
          minWidth: "32px",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {level}%
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <div id="skills" className="sections" style={{ padding: "40px 0" }}>
      <h1 style={{ marginBottom: "32px" }}>Skills</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "20px",
        }}
      >
        {skills.map((cat) => (
          <div
            key={cat.category}
            style={{
              padding: "10px 10px",
            }}
          >
            {/* Category header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  borderRadius: "2px",
                  background: cat.color,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#374151",
                }}
              >
                {cat.category}
              </span>
            </div>

            {/* Skill rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "130px 1fr",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#4b5563",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.name}
                  </span>
                  <BlockBar level={item.level} color={cat.color} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}