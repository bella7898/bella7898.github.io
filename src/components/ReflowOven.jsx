import { useState, useRef } from "react";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: [
      {
        type: "paragraph",
        text: "This project focuses on the design of a reflow oven controller capable of accurately following a predefined thermal profile for surface-mount soldering applications. The overall system integrates a microcontroller-based control unit, a solid-state relay for power regulation, and a temperature sensing thermocouple to provide real-time feedback.",
      },
      {
        type: "paragraph",
        text: "The DE10-Lite board was employed with a keypad interface for user input, while an analog amplification circuit was assembled to condition the low-level thermocouple voltage for precise temperature measurement. A finite state machine regulates heating stages according to specified temperature thresholds and timing constraints, and a Python-based data visualization system tracks and displays a specific temperature profile within a ±3 °C error margin.",
      },
      {
        type: "subheading",
        text: "Hardware Specifications",
      },
      {
        type: "specs",
        items: [
          "Terasic DE10-Lite FPGA board",
          "OP07 Operational Amplifier + LMC7660 Voltage Converter",
          "LM335 Temperature Sensor + LM4040 Voltage Reference",
          "K-Type Thermocouple Wire",
          "OSEPP LCD-01G 16×2 Liquid Crystal Display",
          "4×4 Keypad module",
          "2× MG995 Servo Motors",
          "ISD1820 Voice Recording Module + LM386 Audio Amplifier",
        ],
      },
      {
        type: "subheading",
        text: "Software Specifications",
      },
      {
        type: "specs",
        items: [
          "CV8052 Assembly — settable parameters via keypad, real-time temperature updates",
          "Python TempPlot.py — serial communication, matplotlib stripchart",
          "Computer Vision — OpenCV + YOLO hand gesture detection (yolov8x-tuned-hand-gestures)",
        ],
      },
    ],
  },
  {
    id: "investigation",
    title: "Investigation",
    content: [
      {
        type: "subheading",
        text: "Idea Generation",
      },
      {
        type: "paragraph",
        text: "The project began with a collaborative discussion around the main objective: design and build a circuit controlling a reflow oven capable of accurately following a solder reflow temperature profile. The group divided into three subteams:",
      },
      {
        type: "teams",
        items: [
          {
            name: "FSM Team",
            desc: "Designed the finite state machine governing overall system operation — reflow stage definitions, timing logic, and PWM control signals.",
          },
          {
            name: "Temperature Team",
            desc: "Ensured accurate thermocouple readings, collected validation data, and integrated subsystems into the final code.",
          },
          {
            name: "UI Team",
            desc: "Developed the keypad input system, buzzer alerts, LCD display features, and Python visualization code.",
          },
        ],
      },
      {
        type: "subheading",
        text: "Data Collection & Analysis",
      },
      {
        type: "paragraph",
        text: "To determine an appropriate gain for the OP07 chip, thermocouple voltage was measured at 20°C and 250°C, yielding a gain of 303 (using 100kΩ and 330Ω resistors). The LM4040 reference was measured at a steady 4.1088V. Initial error was observed at 4–5.5°C, addressed by applying a 3°C software offset and a 50ms ADC channel-switching delay. After calibration, measurement error was reduced to within ±3°C.",
      },
    ],
  },
  {
    id: "design",
    title: "Design",
    content: [
      {
        type: "subheading",
        text: "FSM Architecture",
      },
      {
        type: "states",
        items: [
          { state: "State 0", label: "Parameter Input", desc: "User configures soakTemp, soakTime, reflowTemp, reflowTime via keypad." },
          { state: "State 1", label: "Heat to Soak Temp", desc: "Safety check: if oven doesn't reach 50°C within 60s, process terminates." },
          { state: "State 2", label: "Soak Phase", desc: "Maintains temperature at soak setpoint for configured duration." },
          { state: "State 3", label: "Heat to Reflow Temp", desc: "Ramps temperature up to reflow target." },
          { state: "State 4", label: "Reflow Phase", desc: "Holds reflow temperature for configured duration." },
          { state: "State 5", label: "Cool Down", desc: "Servo motors open oven door. System waits for temp < 60°C before returning to State 0." },
        ],
      },
      {
        type: "subheading",
        text: "PWM Control Strategy",
      },
      {
        type: "paragraph",
        text: "PWM control was selected over PID due to simpler FSM integration while still providing sufficient temperature tracking. Extensive testing determined the optimal duty cycle:",
      },
      {
        type: "table",
        headers: ["PWM (%)", "Overshoot (°C)", "Result"],
        rows: [
          ["10", "25–30 below", "❌ Below setpoint"],
          ["15", "10–20 above", "✅ Selected — best stability"],
          ["20", "20–30 above", "❌ Excessive on long runs"],
          ["25", "25–30 above", "❌ Excessive overshoot"],
        ],
      },
      {
        type: "subheading",
        text: "Safety Features",
      },
      {
        type: "specs",
        items: [
          "Failsafe in State 1: terminates if oven doesn't reach 50°C within 60 seconds",
          "Stop button available in all states to immediately cut oven power",
          "Servo-automated door opening eliminates burn risk during cooling",
          "FSM waits for oven temp < 60°C before signaling process completion",
          "Servo subsystem on a separate breadboard with external 6V supply to prevent FPGA instability",
        ],
      },
      {
        type: "subheading",
        text: "Additional Features",
      },
      {
        type: "teams",
        items: [
          {
            name: "Auto Door Opener",
            desc: "Two MG995 servo motors open the oven door at the cooling stage. Servos are on a separate 6V-powered breadboard to avoid current spikes affecting the FPGA.",
          },
          {
            name: "Keypad Interface",
            desc: "4x4 matrix keypad allows user input of soak and reflow temperatures and durations. Parameters are stored in registers and displayed on the LCD for confirmation before starting the process.",
          },
          {
            name: "Voice Feedback",
            desc: "ISD1820 voice recording module plays user-recorded messages at FSM stage transitions. LM386 amplifier boosts output without high-gain distortion.",
          },
          {
            name: "Computer Vision",
            desc: "YOLO hand gesture model detects ASL 'O' gesture via webcam to start the reflow process remotely, eliminating the need for physical interaction.",
          },
        ],
      },
    ],
  },
  {
    id: "results",
    title: "Results",
    content: [
      {
        type: "paragraph",
        text: "After recalibration and software offset adjustments, temperature measurement error was consistently within ±3°C across the full 25–240°C range (10 trials per temperature point). The complete validation table is shown below.",
      },
      {
        type: "validation",
      },
      {
        type: "paragraph",
        text: "Final reflow parameters used in successful PCB soldering: Soak Temp 150°C, Soak Time 75s, Reflow Temp 217°C, Reflow Time 35s, PWM 15%.",
      },
    ],
  },
  {
    id: "conclusion",
    title: "Conclusion",
    content: [
      {
        type: "paragraph",
        text: "The reflow oven controller successfully follows SMT solder profiles with user-configurable parameters, accurate temperature sensing within ±3°C, and a robust finite state machine implementation in 8052 assembly. Extra features — servo-controlled door opener, voice feedback, and computer vision control — significantly improved safety and usability.",
      },
      {
        type: "paragraph",
        text: "Despite technical challenges in temperature accuracy and FSM integration, all issues were systematically resolved. The project required an estimated 45 hours of development across the full team.",
      },
      {
        type: "specs",
        items: [
          "±3°C temperature accuracy achieved across full 25–240°C range",
          "PWM 15% selected as optimal duty cycle for soak and reflow stages",
          "Servo automated door-opening eliminates manual burn risk",
          "YOLO computer vision enables contactless oven activation",
          "GitHub version control used throughout for parallel development",
        ],
      },
    ],
  },
];

const tempValidationData = [
  [25,0.1,1.3,1.4,0.1,1.6,1.3,0.3,1.8,1.9,1.7],
  [30,1.2,1.2,0.3,2.2,1.2,2.2,1.3,1.7,1.6,2.8],
  [40,2.9,1,1.9,1.8,1.7,2.4,2.3,0.9,1.7,1.4],
  [50,1.4,2,0.2,0.8,0.2,0.1,1.8,0.7,0.5,1.3],
  [60,0.9,2.6,1,1.8,2.7,2.6,1.5,0.3,1.2,0.6],
  [70,0.6,1.3,1.2,1,0.6,1.3,1.8,0.4,0.1,1.1],
  [80,0.1,1.1,0.7,1.1,0.6,0.5,1,0.5,1.2,0.6],
  [90,0.6,0.7,1,1.3,0.4,0.1,1,1.2,2.9,1.2],
  [100,1,0.1,0,0.9,0.3,0.6,1.5,2.2,1.3,1.2],
  [110,0.3,0.9,0.2,1,0.6,1.4,1.4,2,1.9,0.45],
  [120,0.3,0.2,1.1,0.1,0.5,1.9,2.5,1.4,0.8,1.8],
  [130,0.3,0.9,0.7,1.3,0.3,1.2,2.1,2.7,0.5,0.9],
  [140,0,0.9,2.2,1.4,1.8,2,0.8,0.4,0.8,1.3],
  [150,0.8,0.3,0.4,0.6,0.3,1.2,0.6,0.3,1.3,1.5],
  [160,0.1,1.4,2.2,1.5,1.4,2.8,1.6,2.2,0.9,0.2],
  [170,0.3,2.6,1.2,0.1,1.8,0.2,0.4,0.9,0.3,1.4],
  [180,0.1,1.2,1.2,0.8,0.3,1.2,1.4,0.4,0.9,0.2],
  [190,0.6,2,0.4,1.3,0.9,2,0.5,1.4,0.6,1.9],
  [200,0.6,0.8,0.5,1.2,0.6,1.6,0.1,0.3,1.4,0.8],
  [210,0,0.2,0.8,0.2,0.7,0.7,2.4,0.3,0.5,0.2],
  [220,1.4,0.5,0.8,1.2,0.9,1.1,0.6,0.3,1.4,0.7],
  [230,0.2,1.3,0.2,1,0.6,1.2,0.5,2.3,2.3,0.9],
  [240,1,1,0.1,0.5,1.2,0.4,1.1,0.6,1.9,2.6],
];

function ValidationTable() {
  return (
    <div style={{ overflowX: "auto", marginTop: "1rem" }}>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        fontSize: "0.72rem",
        fontFamily: "'Courier New', monospace",
      }}>
        <thead>
          <tr>
            <th style={{ background: "#3a0040d8", color: "#c37fe0", padding: "6px 10px", textAlign: "left", borderBottom: "2px solid #b55ab8", whiteSpace: "nowrap" }}>
              Temp (°C)
            </th>
            {[1,2,3,4,5,6,7,8,9,10].map(n => (
              <th key={n} style={{ background: "#3a0040d8", color: "#cb7fe0", padding: "6px 8px", textAlign: "center", borderBottom: "2px solid #a85ab8" }}>
                Trial {n}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tempValidationData.map(([temp, ...vals], i) => (
            <tr key={temp} style={{ background: i % 2 === 0 ? "rgba(0,0,0,0.04)" : "transparent" }}>
              <td style={{ padding: "5px 10px", color: "#67307a", fontWeight: "bold", borderRight: "1px solid rgba(0,0,0,0.1)" }}>{temp}</td>
              {vals.map((v, j) => (
                <td key={j} style={{
                  padding: "5px 8px",
                  textAlign: "center",
                  color: v >= 2.5 ? "#c0392b" : v >= 1.5 ? "#e67e22" : "#27ae60",
                }}>
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ fontSize: "0.7rem", color: "rgba(0,0,0,0.45)", marginTop: "0.5rem", fontStyle: "italic" }}>
        Values represent absolute error in °C. Green &lt;1.5°C · Orange 1.5–2.5°C · Red ≥2.5°C (rare). All within ±3°C spec.
      </p>
    </div>
  );
}

function Section({ section, isActive, onClick }) {
  const scrollRef = useRef();
  return (
    <div style={{ marginBottom: "0.5rem"}}>
      <button
        onClick={onClick}
        style={{
          width: "100%",
          background: isActive ? "rgba(162, 60, 180, 0.12)" : "transparent",
          border: isActive ? "1px solid rgba(148, 60, 180, 0.6)" : "1px solid rgba(0,0,0,0.12)",
          borderRadius: "6px",
          padding: "0.75rem 1rem",
          color: isActive ? "#67307a" : "rgba(0,0,0,0.5)",
          textAlign: "left",
          cursor: "pointer",
          fontSize: "0.85rem",
          fontFamily: "'Courier New', monospace",
          letterSpacing: "0.05em",
          transition: "all 0.2s ease",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span style={{ opacity: 0.5 }}>{isActive ? "▼" : "▶"}</span>
        {section.title.toUpperCase()}
      </button>
    </div>
  );
}

function renderContent(content) {
  return content.map((block, i) => {
    if (block.type === "paragraph") {
      return (
        <p key={i} style={{ color: "rgba(0,0,0,0.75)", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.9rem" }}>
          {block.text}
        </p>
      );
    }
    if (block.type === "subheading") {
      return (
        <h3 key={i} style={{
          color: "rgb(221, 127, 224)",
          fontFamily: "'Courier New', monospace",
          fontSize: "0.8rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginTop: "1.5rem",
          marginBottom: "0.75rem",
          borderLeft: "3px solid #d37fe0",
          paddingLeft: "0.75rem",
        }}>
          {block.text}
        </h3>
      );
    }
    if (block.type === "specs") {
      return (
        <ul key={i} style={{ listStyle: "none", padding: 0, margin: "0 0 1rem 0" }}>
          {block.items.map((item, j) => (
            <li key={j} style={{
              color: "rgba(0,0,0,0.7)",
              fontSize: "0.85rem",
              padding: "0.4rem 0",
              paddingLeft: "1.2rem",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
              position: "relative",
              lineHeight: 1.6,
            }}>
              <span style={{ position: "absolute", left: 0, color: "#c97fe0" }}>›</span>
              {item}
            </li>
          ))}
        </ul>
      );
    }
    if (block.type === "teams") {
      return (
        <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1rem" }}>
          {block.items.map((team, j) => (
            <div key={j} style={{
              background: "rgba(0,0,0,0.03)",
              border: "1px solid rgba(154, 60, 180, 0.25)",
              borderRadius: "8px",
              padding: "0.85rem 1rem",
            }}>
              <div style={{ color: "#ce7fe0", fontFamily: "'Courier New', monospace", fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.3rem" }}>
                {team.name}
              </div>
              <div style={{ color: "rgba(0,0,0,0.65)", fontSize: "0.85rem", lineHeight: 1.6 }}>
                {team.desc}
              </div>
            </div>
          ))}
        </div>
      );
    }
    if (block.type === "states") {
      return (
        <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
          {block.items.map((s, j) => (
            <div key={j} style={{
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start",
              padding: "0.75rem",
              background: "rgba(0,0,0,0.03)",
              borderRadius: "6px",
              borderLeft: "3px solid rgba(164, 60, 180, 0.5)",
            }}>
              <div style={{ minWidth: "70px" }}>
                <div style={{ color: "#c47fe0", fontFamily: "'Courier New', monospace", fontSize: "0.7rem" }}>{s.state}</div>
                <div style={{ color: "rgba(0,0,0,0.45)", fontSize: "0.7rem", marginTop: "2px" }}>{s.label}</div>
              </div>
              <div style={{ color: "rgba(0,0,0,0.65)", fontSize: "0.82rem", lineHeight: 1.6 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      );
    }
    if (block.type === "table") {
      return (
        <div key={i} style={{ overflowX: "auto", marginBottom: "1rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
            <thead>
              <tr>
                {block.headers.map((h, j) => (
                  <th key={j} style={{
                    background: "rgba(224,201,127,0.15)",
                    color: "#c97fe0",
                    padding: "8px 12px",
                    textAlign: "left",
                    fontFamily: "'Courier New', monospace",
                    fontSize: "0.75rem",
                    letterSpacing: "0.05em",
                    borderBottom: "1px solid rgba(224,201,127,0.3)",
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, j) => (
                <tr key={j} style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  {row.map((cell, k) => (
                    <td key={k} style={{
                      padding: "8px 12px",
                      color: cell.includes("✅") ? "#27ae60" : cell.includes("❌") ? "#c0392b" : "rgba(0,0,0,0.7)",
                    }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    if (block.type === "validation") {
      return <ValidationTable key={i} />;
    }
    return null;
  });
}

export default function ReflowOven() {
  const [activeSection, setActiveSection] = useState("introduction");

  const active = sections.find(s => s.id === activeSection);

  return (
    <div style={{
      minHeight: "100vh",
      color: "#111",
      fontFamily: "Georgia, serif",
      padding: "2rem",
      overflowY: 'auto',
      position: 'relative',
      zindex: 10,
    }}>
      {/* Header */}
      <div style={{ maxWidth: "900px", margin: "0 auto 2.5rem" }}>
        <div style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "0.7rem",
          color: "rgb(183, 83, 206)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "0.5rem",
        }}>
          ELEC 291 · Winter 2025 · UBC ECE · Group A01
        </div>
        <h1 style={{
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          fontFamily: "'Courier New', monospace",
          fontWeight: "bold",
          margin: 0,
          lineHeight: 1.2,
          color: "#111",
        }}>
          Reflow Oven
          <span style={{ color: "#c97fe0" }}> Controller</span>
        </h1>
        <div style={{
          marginTop: "0.75rem",
          height: "1px",
          background: "linear-gradient(to right, rgba(224, 127, 224, 0.6), transparent)",
        }} />
        <p style={{
          marginTop: "0.75rem",
          color: "rgba(0,0,0,0.5)",
          fontSize: "0.85rem",
          lineHeight: 1.6,
        }}>
          A microcontroller-based SMT soldering system with FSM control, thermocouple sensing, and automated safety features.
        </p>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", gap: "2rem", alignItems: "flex-start" }}>
        {/* Sidebar nav */}
        <div style={{ width: "180px", flexShrink: 0, top: "1rem" }}>
          {sections.map(s => (
            <Section
              key={s.id}
              section={s}
              isActive={activeSection === s.id}
              onClick={() => setActiveSection(s.id)}
            />
          ))}
          {/* Stats */}
          <div style={{
            marginTop: "1.5rem",
            padding: "1rem",
            background: "rgba(162, 60, 180, 0.07)",
            border: "1px solid rgba(158, 60, 180, 0.2)",
            borderRadius: "8px",
          }}>
            {[
              ["±3°C", "Accuracy"],
              ["6", "Team members"],
              ["5", "FSM States"],
              ["~45hrs", "Dev time"],
            ].map(([val, label]) => (
              <div key={label} style={{ marginBottom: "0.75rem" }}>
                <div style={{ color: "#ce7fe0", fontFamily: "'Courier New', monospace", fontSize: "1rem", fontWeight: "bold" }}>{val}</div>
                <div style={{ color: "rgba(0,0,0,0.45)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div style={{
          flex: 1,
          minWidth: 0,
          background: "rgba(0,0,0,0.02)",
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: "12px",
          padding: "2rem",
        }}>
          <h2 style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "1rem",
            color: "#d57fe0",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginTop: 0,
            marginBottom: "1.5rem",
            paddingBottom: "0.75rem",
            borderBottom: "1px solid rgba(224,201,127,0.2)",
          }}>
            {active.title}
          </h2>
          {renderContent(active.content)}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        maxWidth: "900px",
        margin: "3rem auto 0",
        paddingTop: "1rem",
        borderTop: "1px solid rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "space-between",
        color: "rgba(0,0,0,0.35)",
        fontSize: "0.72rem",
        fontFamily: "'Courier New', monospace",
      }}>
        <span>ELEC 291 · Project 1 · February 2026</span>
        <span>University of British Columbia</span>
      </div>
    </div>
  );
}