---
layout: project
title: "BassBot: Self-Playing Bass Guitar"
# carousel_images:
#   # - /assets/images/projects/bassbot/BassBotFeature.mp4
#   - /assets/images/projects/bassbot/BassBot.png
# carousel_height: 500px
# carousel_width: auto
preview_gif: "/assets/images/projects/BassGuitar.gif"
paper: "#"
code: "https://github.com/andnet-deboer/bass-bot"
tags: ["Python", "CAD", "Embedded Systems", "Robotics"]
date: 2025-05-04
description: "An autonomous robotic system that plays bass guitar by integrating modern robotics into the creative space of live music performance."
---

## Project Overview

BassBot investigates the ability to incorporate modern robotics into the creative and technical space of making live music. This senior capstone project demonstrates a fully autonomous system capable of playing complex bass guitar pieces with precision and musicality.

<!-- <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 900px; margin: 2rem auto;">
  <div style="text-align: center;">
    <img src="/assets/images/projects/bassbot/goal_image.png" 
         alt="BassBot playing bass"
         class="no-border"
         style="width: 100%; height: auto;">
    <p style="margin-top: 0.75rem;"><strong>Project Goal:</strong> Autonomous bass guitar performance</p>
  </div>
  
  <div style="text-align: center;">
    <img src="/assets/images/projects/bassbot/system_closeup.png" 
         alt="Mechanical system detail"
         class="no-border"
         style="width: 100%; height: auto;">
    <p style="margin-top: 0.75rem;"><strong>Final System:</strong> Integrated mechanical design</p>
  </div>
</div> -->

---

## How to Play Bass Guitar

Playing the bass guitar requires three fundamental actions:

**Fretting Notes** - Pressing strings against the fretboard to change pitch

**Plucking Strings** - Using fingers or a pick to vibrate the strings

**Damping Strings** - Stopping string vibration with either the plucking or fretting hand

<!-- <div style="width: 800px; max-width: 100%; margin: 2rem auto;">
  <img src="/assets/images/projects/bassbot/playing_techniques.png" 
       alt="Bass playing techniques"
       class="no-border"
       style="width: 100%; height: auto;">
</div>
<p style="text-align: center;"><strong>Figure 1: Three fundamental bass guitar playing techniques</strong></p> -->

---

## Design Requirements

Our system was designed to meet specific performance metrics:

| Requirement | Target Value |
|------------|--------------|
| **Notes Per Second** | > 5 notes |
| **Force to Pluck String** | > 4.5N |
| **Force to Press Fret** | > 70N |
| **Force to Damp String** | > 4.5N |
| **Number of Notes** | 20 notes |
| **Total Cost** | < $500 |

---

## System Architecture

### Flow Diagram

<!-- <div style="width: 800px; max-width: 100%; margin: 2rem auto;">
  <img src="/assets/images/projects/bassbot/flow_diagram.png" 
       alt="System flow diagram"
       class="no-border"
       style="width: 100%; height: auto;">
</div>
<p style="text-align: center;"><strong>Figure 2: BassBot system architecture from user input to sound output</strong></p> -->

The system operates through a web-based interface that communicates with a Raspberry Pi controller via WiFi. The Pi coordinates servo motors for picking and solenoids for fretting, ultimately producing music through a bass amplifier.

---

## Mechanical Design

### Bass Clamp System

<!-- <div style="width: 400px; max-width: 100%; margin: 2rem auto;">
  <img src="/assets/images/projects/bassbot/bass_clamp.png" 
       alt="Bass clamp system"
       class="no-border"
       style="width: 100%; height: auto;">
</div> -->

The bass clamp serves as the foundation for all components:
- Custom-fitted to bass body contours using 3D scanning
- Provides mounting points for picking system
- Attaches to 80/20 aluminum rail structure
- Non-destructive and fully removable

### Picking System

<!-- <div style="width: 600px; max-width: 100%; margin: 2rem auto;">
  <img src="/assets/images/projects/bassbot/picking_detail.png" 
       alt="Picking system detail"
       class="no-border"
       style="width: 100%; height: auto;">
</div> -->

Four servo motors independently control picking for each string:
- **Adjustability**: Slotted holes allow left/right positioning over strings
- **Height Control**: Gray bracket is vertically adjustable for precise picking action
- **Integrated Damping**: Screw-in pick slides through slot for vertical motion
- **Foam Dampers**: Damp strings when pick reaches maximum angle

### Fretting System

<!-- <div style="width: 600px; max-width: 100%; margin: 2rem auto;">
  <img src="/assets/images/projects/bassbot/fretting_detail.png" 
       alt="Fretting system detail"
       class="no-border"
       style="width: 100%; height: auto;">
</div> -->

Eight solenoids (two per fret) press capo rubber across all four strings:
- **Four Frets**: Provides access to 20 distinct notes
- **Parallel Operation**: Two solenoids ensure even pressure distribution
- **Angled Design**: Rubber precisely angled to fret all strings effectively
- **80/20 Integration**: Brackets attach directly to aluminum rail

---

## Electrical System

### System Diagram

<!-- <div style="width: 900px; max-width: 100%; margin: 2rem auto;">
  <img src="/assets/images/projects/bassbot/electrical_diagram.png" 
       alt="Electrical system diagram"
       class="no-border"
       style="width: 100%; height: auto;">
</div> -->

**Key Components:**
- **Raspberry Pi 4**: Central controller running Python control code
- **Custom Servo Interface Board**: Manages PWM signals for four servo motors
- **Relay Unit**: Controls high-current solenoid switching
- **Custom Solenoid Interface Board**: Distributes power to eight solenoids
- **Adjustable Voltage Sources**: 9V for servos, variable voltage for solenoids

### Circuit Board Design

<!-- <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 800px; margin: 2rem auto;">
  <div style="text-align: center;">
    <img src="/assets/images/projects/bassbot/servo_board.png" 
         alt="Servo interface board"
         class="no-border"
         style="width: 100%; height: auto;">
    <p style="margin-top: 0.75rem;"><strong>Servo Interface Board</strong></p>
  </div>
  
  <div style="text-align: center;">
    <img src="/assets/images/projects/bassbot/solenoid_board.png" 
         alt="Solenoid interface board"
         class="no-border"
         style="width: 100%; height: auto;">
    <p style="margin-top: 0.75rem;"><strong>Solenoid Interface Board</strong></p>
  </div>
</div> -->

Custom PCBs were designed to integrate cleanly with the mechanical system and provide reliable power distribution and signal routing.

---

## Software Architecture

### Control Flow

The software system processes MusicXML files and translates them into precise motor commands:

1. **MusicXML Parsing**: Upload sheet music in standard format
2. **Note Extraction**: Parse pitch, duration, and timing information
3. **Command Generation**: Convert musical notes to servo/solenoid commands
4. **Hardware Control**: Send PWM signals via GPIO pins on Raspberry Pi

### Graphical User Interface

<!-- <div style="width: 900px; max-width: 100%; margin: 2rem auto;">
  <img src="/assets/images/projects/bassbot/gui_home.png" 
       alt="GUI home screen"
       class="no-border"
       style="width: 100%; height: auto;">
</div> -->

**Technology Stack:**
- **Backend**: Python Flask for HTTP request handling
- **Frontend**: HTML5, CSS3, JavaScript for interactive interface
- **3D Visualization**: Three.js for real-time bass guitar model
- **Communication**: WiFi connection to Raspberry Pi

### Configuration Interface

<!-- <div style="width: 900px; max-width: 100%; margin: 2rem auto;">
  <img src="/assets/images/projects/bassbot/gui_config.png" 
       alt="Configuration settings"
       class="no-border"
       style="width: 100%; height: auto;">
</div> -->

Users can calibrate servo positions, solenoid timing, and damping behavior through an intuitive web interface.

### Blockly Scratch Pad

<!-- <div style="width: 900px; max-width: 100%; margin: 2rem auto;">
  <img src="/assets/images/projects/bassbot/blockly_interface.png" 
       alt="Blockly programming interface"
       class="no-border"
       style="width: 100%; height: auto;">
</div> -->

For users without programming experience, we integrated Google Blockly to enable visual programming of custom bass sequences.

---

## Design Iteration Process

The project required extensive iteration to achieve reliable performance:

<!-- <div style="width: 800px; max-width: 100%; margin: 2rem auto;">
  <img src="/assets/images/projects/bassbot/iterations.png" 
       alt="Design iterations"
       class="no-border"
       style="width: 100%; height: auto;">
</div>
<p style="text-align: center;"><strong>Figure 3: Multiple iterations of damping and picking brackets</strong></p> -->

**Key Iterations:**
- **10+ picking mechanism designs** to optimize string engagement
- **8+ damping attachments** to achieve reliable muting
- **Custom circuit board revisions** for power management
- **Servo bracket adjustments** for precise positioning

---

## Materials & Fabrication

### 3D Printed Components (PLA)
- Bass clamp
- Fretting brackets  
- Servo brackets and damping system
- Raspberry Pi and circuit board holders

### Purchased Components
- 80/20 aluminum extrusion rail
- High-torque servo motors (picking)
- Push-pull solenoids (fretting)
- Relay board and fasteners
- Bass guitar stand

### Custom Fabrication
- Circuit boards designed and soldered
- Wooden table for display
- Cable management system
- Power distribution

---

## Results

### Performance Metrics

Our final system exceeded all design requirements:

✓ **Cost: $584.47** (slightly over budget, but justified by performance)

✓ **Speed: >5 notes/second** (achieved 6+ notes/second in testing)

✓ **Notes: 20 distinct pitches** across four frets and four strings

✓ **Removable: Non-destructive** clamp system allows easy bass removal

### Chromatic Scale Demonstration

<!-- <div style="width: 600px; max-width: 100%; margin: 2rem auto;">
  <img src="/assets/images/projects/bassbot/chromatic_demo.png" 
       alt="Chromatic scale demo"
       class="no-border"
       style="width: 100%; height: auto;">
</div> -->

The system successfully played a full chromatic scale demonstrating precise pitch control across all 20 available notes.

### GUI Usability Testing

We conducted user testing with 10 participants to measure interface simplicity:

<!-- <div style="width: 700px; max-width: 100%; margin: 2rem auto;">
  <img src="/assets/images/projects/bassbot/usability_results.png" 
       alt="Usability test results"
       class="no-border"
       style="width: 100%; height: auto;">
</div> -->

**Results:**
- **Average time to play 1 song**: 9.43 seconds
- **Average number of steps**: 2.5 steps
- **Success rate**: 100% (all users successfully played a song)

Both metrics met our requirements:
- ✓ Steps < 5
- ✓ Time < 2 minutes

---

## Showcase Display

For the final presentation, we designed a portable display platform:

<!-- <div style="width: 700px; max-width: 100%; margin: 2rem auto;">
  <img src="/assets/images/projects/bassbot/display_setup.png" 
       alt="Showcase display"
       class="no-border"
       style="width: 100%; height: auto;">
</div> -->

**Components:**
- Rolling platform with locking wheels
- Custom wooden table
- Fender Rumble 100 bass amplifier
- Integrated power strip
- Bass guitar stand
- ¾" pipe clamps for cable management

---

## Future Improvements

### Hardware Enhancements

**Higher-Performance Servos**
- Current servos occasionally miss fast note sequences
- Encoders would provide position feedback
- More powerful motors would reduce electrical noise

**Improved Fretting Mechanism**  
- Current design works but requires calibration
- Ctrl+Alt+Delete: Consider complete redesign with different actuation method

### Software Enhancements

**Real-time Audio Analysis**
- Microphone input to verify correct notes
- Automatic tuning adjustment
- Performance quality metrics


---

## Video Demonstration

<!-- <video src="/assets/images/projects/bassbot/full_demo.mp4" controls style="width: 100%; max-width: 900px; display: block; margin: 2rem auto;"></video> -->

*BassBot performing a complete song with chromatic passages and rhythmic variety*

---

## Team

Carter Mann \\
Will Lamm \\
Amy Drelicharz
