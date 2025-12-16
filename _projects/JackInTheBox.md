---
layout: project
title: "2D physics simulator for a jack in a box"

carousel_images:
  - /assets/images/projects/frankahw3/Franka.gif
  - /assets/images/projects/gpmars/cv.png
carousel_height: 400px
carousel_width: auto
preview_gif: "/assets/images/projects/314finalproject/jackinbox.gif"
code: "https://github.com/andnet-deboer/ROS-Kobuki-Research-2022"
# data: "https://example.com/dataset"
tags: ["ROS 2", "Python", "Franka Robot"]
date: 2025-11-15
description: "A versatile, distributed platform using ROS for testing and validating a wide variety of multi-agent control algorithms."
---

## Overview

This project details the hardware and software implementation of a **General-Purpose Multi-Agent Robotics System (GP-MARS)**. The system is designed to provide a flexible and versatile platform for implementing and testing a wide variety of multi-agent algorithms by utilizing a distributed control architecture and the **Robot Operating System (ROS)**.

---

## Problem Statement

While multi-unit robotic systems offer significant advantages over single-unit robots, such as cooperative problem-solving and redundancy, building general-purpose test platforms is challenging. Previous multi-unit projects at Hope College used a centralized control model that was hardware-dependent. The need was to create a flexible, general-purpose system capable of testing multi-agent algorithms with a distributed control architecture, independent of specific hardware.
                            

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 900px; margin: 2rem auto;">
  <div style="text-align: center;">
    <img src="/assets/images/projects/gpmars/before.png" 
         alt="Before - Dell D610 laptops"
         class="no-border"
         style="width: 100%; height: auto;">
    <p style="margin-top: 0.75rem;"><strong>Before:</strong> Dell D610 Laptops</p>
  </div>
  
  <div style="text-align: center;">
    <img src="/assets/images/projects/gpmars/after.png" 
         alt="After - Raspberry Pi setup"
         class="no-border"
         style="width: 100%; height: auto;">
    <p style="margin-top: 0.75rem;"><strong>After:</strong> Raspberry Pi 3B</p>
  </div>
</div>



---

## System Hardware

<div style="width: 600px; max-width: 100%; margin: 0rem auto;">
  <img src="/assets/images/projects/gpmars/hardware.png" 
       alt="Final Environment After Algorithm Completion"
       class="no-border"
       style="width: 100%; height: auto;">
</div>

<p style="text-align: center;"><em>GP-MARS Platform with Raspberry Pi 3B microcontrollers.</em></p>


The final GP-MARS system utilizes three Yujin Kobuki turtlebots as the mobile base units. To improve versatility, reduce mass, and lower the electrical load, the initial Dell D610 laptops used for processing were replaced with Raspberry Pi's. This embedded setup allows for easy integration of various sensors like Lidar, stereo cameras, or proximity sensors.


### Software Architecture

<div style="width: 500px; max-width: 100%; margin: 0rem auto;">
  <img src="/assets/images/projects/gpmars/software.png" 
       alt="Final Environment After Algorithm Completion"
       class="no-border"
       style="width: 100%; height: auto;">
</div>


1.  **Foundational Layer (OS):** Ubuntu Linux (or Xubuntu on the memory-restricted Raspberry Pi 3B microcontrollers).
2.  **Middleware (ROS):** Provides hardware abstraction through its publish-subscribe communication model
3.  **High-Level Control:** High-level commands were programmed using Python


---

## System Validation

Expiremental validation the system's ability to test different multi-agent algorithms:

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 900px; margin: 2rem auto;">
  <div style="text-align: center;">
    <img src="/assets/images/projects/gpmars/blindspot.png" 
         alt="Before - Dell D610 laptops"
         class="no-border"
         style="width: 100%; height: auto;">
    <p style="margin-top: 0.75rem;"><em>Kobuki sensor blind spot illustration</em></p>
  </div>
  
  <div style="text-align: center;">
    <img src="/assets/images/projects/gpmars/results.png" 
         alt="After - Raspberry Pi setup"
         class="no-border"
         style="width: 100%; height: auto;">
    <p style="margin-top: 0.75rem;"><em>Final state of the object manipulation experiment</em></p>
  </div>
</div>

### Cooperative Object Manipulation (Distributed Control)

* **Goal:** Demonstrate the individual robots' ability to **collaborate and manipulate objects to achieve a common goal**.
* **Setup:** Each robot was equipped with two high-frequency ultrasonic sensors mounted at an angle to intentionally create a **blind spot** in the frontal field of view (Figure 4). The robots were placed in an enclosure with randomly scattered cube obstacles (Figure 5).
* **Algorithm:** A randomized obstacle avoidance program utilized proximity data. Due to the blind spot, the robot would collide with and manipulate the cube until it was pushed up against another object (Figure 7).
* **Result:** The multi-unit network successfully collaborated, with all cubes pushed against the walls of the enclosure or another cube, demonstrating cohesion and integration.

<!-- <div class="side-by-side">
   <img src="/assets/images/projects/project2/manipulation_result.png" alt="Final Environment After Algorithm Completion">
  <img src="/assets/images/projects/project2/kobuki_sensor_diagram.png" alt="Kobuki sensor blind spot diagram"> 
</div> -->

*Left: Final state of the object manipulation experiment (Figure 7). Right: Kobuki sensor blind spot illustration (Figure 4).*


---

## Future Work

* **Research Applications:** Implementing and testing modern path planning and cooperative behavior algorithms
* **Potential Improvements:** Integrating additional sensing platforms, such as Lidar and stereo camera arrays
* **Educational Applications:** Suitable for undergraduate robotics courses on distributed systems and multi-agent coordination

## Acknowledgments

This research was conducted for the Hope College Control Systems lab under Dr. Miguel Abrahantes.
