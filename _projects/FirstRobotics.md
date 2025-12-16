---
layout: project
title: "FIRST Robotics competition"
preview_gif: "/assets/images/projects/first/Swerve.gif"
tags: ["Controls", "Java", "Labview"]
date: 2021-08-15
description: "Research and development of a multi-robot system using a stationary FANUC arm and a MIR autonomous mobile robot (AMR) to create a more efficient part restock process for assembly line stations at Peloton, Inc."
---
<!-- 
## Overview

This project involved the exploration for multi-robot collaboration to create a more efficient part restock system for assembly line stations during my internship at Peloton Inc. The system utilized a stationary test bench with a FANUC 200IC robot arm and a MIR trolley robot.

![System Architecture](/assets/images/projects/peloton/Architecture.png)

---
<div class="side-by-side">
  <img src="/assets/images/projects/peloton/ElectricalDesign.png">
  <img src="/assets/images/projects/peloton/Panel.png">
</div>
---

## System Components and Role

### Robotics System
The FANUC robot arm was responsible for restocking the trolley robot. The MIR trolley robot delivered the restock to the correct assembly station. Assembly station operators could wirelessly connect to the trolley robot to add a restock mission to its queue when parts ran low.

### Build and Electrical Design
I worked with the electrical design team to design the electrical system for the FANUC robot test bench, learning AutoCAD electrical basics. I designed a safety circuit with safety IO and wired it on the test bench. I also designed, built, and wired the test bench control panel, establishing communications between all components.

---

## Controls and Programming

### Controls Programming
I used Rockwell Automations Studio 5000 software to program the Allen Bradley PLC and the Panel View HMI.

### Communications and Mission Queue
* I established communications between the HMI, PLC, and FANUC robot controller via direct wiring.
* I then integrated wireless communications to the MIR trolley robot.
* Multiple PCs were connected to the trolley robot as a proof of concept to simulate assembly stations requesting and queuing missions.
* Once the trolley queued a mission, it navigated to the test bench for restock.
* The trolley would notify the FANUC robot of its arrival and the part requested via external IO bits.
* The FANUC would run the program for the requested part and notify the trolley when finished, which would then navigate to the requesting station to complete the mission.

---

## Internship Context

This work was part of an Internship at Peloton Inc., running from August 2020 to August 2021. I was invited to continue working over the summer after working half days throughout my senior year of high school as part of a co-op program. I had exposure to multiple teams, including build, electrical, design, and controls.

### Video Spotlight

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://www.youtube.com/embed/M4Wlef-v40I"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style="position: absolute; top:0; left:0; width:100%; height:100%;">
  </iframe>
</div>


*Video of the collaborative robot system in action* -->