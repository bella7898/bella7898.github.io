const experience = [
    {
        role: "Project Research Assistant",
        org: "Metro Vancouver — Project Delivery Department",
        period: "05/2026 – Present", 
        color: "#8ba9fa",
        points: [
        "Supported development of project management standards applicable for all Metro Vancouver project delivery",
        "Configured workflows for Project Management Information Systems (PMIS) to be used by Coquitlam project teams and Corporate departments",
        "Developed Sharepoint team sites to support the accessibility of project management resources",
        ],
    },
    {
        role: "Electrical Sound Localization Subteam",
        org: "UBC Subbots",
        period: "09/2025 – Present", 
        color: "#8ba9fa",
        points: [
        "Designed a Printed Circuit Board for an interface between the ADS8528 chip and DE10 Lite FPGA board",
        "Handled mechanical constraints by measuring existing DE10 Lite header and standoff placement and 3d printng PCB board outline to test initial connections",
        "Optimized Python sound localization simulation software"
        ],
    },
    {
        role: "League Coordinator", 
        org: "BC Junior Chess Association", 
        period: "09/2023 - 06/2024",
        color: "#8ba9fa", 
        points: [
            "Organized annual BCJCA High School Chess League, consisting of district qualifiers and final championship tournament", 
            "Collaborated with chess club leaders across the province to run qualifying events"
        ]
    }
];

const skills = [
  "Python", "Java", "C", "R",
  "React", "React Native", "Next.js", "Expo Go", "Flask",
  "KiCad", "Altium Designer", "SolidWorks",
  "SystemVerilog", "Nios V Assembly", "Embedded C", "Quartus / Waveform",
  "Standards Development", "Technical Documentation",
];

function ExperienceCard({ role, org, period, color, points }) {
  return (
    <div style={{ textAlign: "left" }}>
      <div style={{ marginBottom: "6px" }}>
        <span style={{ fontSize: "16px", fontWeight: "700", color: "#e5e7eb" }}>
          {role}
        </span>
      </div>
      <div style={{ marginBottom: "12px" }}>
        <span style={{ fontSize: "13px", color: color }}>{org}</span>
        <span style={{ fontSize: "13px", color: "#9ca3af" }}> · {period}</span>
      </div>
      <ul style={{ margin: 0, paddingLeft: "18px" }}>
        {points.map((point, i) => (
          <li
            key={i}
            style={{
              fontSize: "14px",
              color: "#d1d5db",
              lineHeight: "1.6",
              marginBottom: "4px",
            }}
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillPill({ name }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "8px 18px",
        fontSize: "14px",
        color: "#e5e7eb",
        background: "transparent",
        border: "1px solid #8ba9fa66",
        borderRadius: "999px",
        whiteSpace: "nowrap",
        marginRight: "12px",
      }}
    >
      {name}
    </span>
  );
}

export default function Experience() {
  return (
    <div id="experience" className="sections" style={{ padding: "40px 5rem" }}>
      <h1 style={{ marginBottom: "32px" }}>Experience</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
        {experience.map((item, i) => {
          const align = i % 2 === 0 ? "left" : "right";
          return (
            <div
              key={item.role}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 32px 1fr",
                columnGap: "32px",
                alignItems: "center",
              }}
            >
              {align === "left" ? (
                <div style={{ justifySelf: "end", width: "100%", maxWidth: "480px" }}>
                  <ExperienceCard {...item} />
                </div>
              ) : (
                <div />
              )}

              {/* center track: dot with short visible stubs above/below, no line crossing the gap between entries */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  alignSelf: "stretch",
                  minHeight: "80px",
                }}
              >
                <div
                  style={{
                    width: "2px",
                    flex: 1,
                    background: i === 0 ? "transparent" : item.color,
                  }}
                />
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: item.color,
                    margin: "6px 0",
                    flexShrink: 0,
                  }}
                />
                <div
                  style={{
                    width: "2px",
                    flex: 1,
                    background:
                      i === experience.length - 1 ? "transparent" : item.color,
                  }}
                />
              </div>

              {align === "right" ? (
                <div style={{ justifySelf: "start", width: "100%", maxWidth: "480px" }}>
                  <ExperienceCard {...item} />
                </div>
              ) : (
                <div />
              )}
            </div>
          );
        })}
      </div>

      {/* skills ribbon, now living under the experience timeline */}
      <div
        style={{
          marginTop: "56px",
          overflow: "hidden",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "skills-ribbon 40s linear infinite",
          }}
        >
          {/* render the list twice back-to-back for a seamless loop */}
          {[...skills, ...skills].map((name, i) => (
            <SkillPill key={i} name={name} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes skills-ribbon {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        #experience > div:last-of-type:hover > div {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}