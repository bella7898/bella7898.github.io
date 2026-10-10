import { useState, useEffect } from "react";

function useIsMobile(breakpoint = 650) {
  const query = `(max-width: ${breakpoint}px)`;
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);
  return isMobile;
}

const experience = [
    {
        role: "Project Research Assistant",
        org: "Metro Vancouver — Project Delivery Department",
        period: "05/2026 – Present", 
        color: "#8ba9fa",
        points: [
        "Contribute to development of project management standards, guidelines, and templates to support consistent project delivery across the organization",
        "Support the implementation and adoption of Project Management Information Systems (PMIS) for the Coquitlam Lake Water Supply Project and corporate project teams",
        "Design and maintain SharePoint Team Sites to support communication of project management resources and improve information accessibility",
        "Develop frontend administrative controls that streamline repetitive Team Site management tasks to improve administrative efficiency and simplify long-term site maintenance."
        ],
    },
    {
        role: "Electrical Sound Localization Subteam",
        org: "UBC Subbots",
        period: "09/2025 – Present", 
        color: "#8ba9fa",
        points: [
        "Design a custom PCB interface between the ADS8528 chip and DE10 Lite FPGA board",
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

function ExperienceCard({ role, org, period, color, points, collapsible }) {
  const [open, setOpen] = useState(false);
  const collapsed = collapsible && !open;

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

      <div
        style={{
          position: "relative",
          maxHeight: collapsed ? "8rem" : "1000px",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
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
        {collapsed && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "3.5rem",
              background: "linear-gradient(to bottom, transparent, #181818)",
              pointerEvents: "none",
            }}
          />
        )}
      </div>

      {collapsible && (
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            color: color,
            border: "none",
            padding: 0,
            margin: "8px 0 0",
            fontSize: "13px",
            fontWeight: 600,
            boxShadow: "none",
            transform: "none",
          }}
        >
          {open ? "Show less" : "Read more"}
        </button>
      )}
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
  const isMobile = useIsMobile();

  return (
    <div
      id="experience"
      className="sections"
      style={{ padding: isMobile ? "40px 1.25rem" : "40px 5rem" }}
    >
      <h1 style={{ marginBottom: "32px" }}>Experience</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "28px" : "48px",
        }}
      >
        {experience.map((item, i) => {
          if (isMobile) {
            return (
              <div
                key={item.role}
                style={{ borderLeft: `2px solid ${item.color}`, paddingLeft: "16px" }}
              >
                <ExperienceCard {...item} collapsible />
              </div>
            );
          }

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