# Projectile Motion Simulator
A simple, interactive simulator to visualize projectile motion using JavaScript and HTML. This project allows users to simulate and observe the motion of a projectile under the influence of gravity, considering factors such as launch angle, initial velocity, and acceleration due to gravity.

## Features

- **Interactive Interface**: Users can input initial parameters such as velocity and launch angle.
- **Real-time Simulation**: Watch the projectile's path as it is launched at different angles and velocities.
- **Graphical Representation**: The trajectory is displayed on a canvas, providing a visual of the projectile’s motion.
- **Adjustable Parameters**: Easily change parameters such as initial velocity, angle, and gravity to observe the effects on the projectile’s trajectory.

## How to Use
1. Clone the repository to your local machine:
    ```bash
2. Open the `index.html` file in a web browser to access the simulator.
3. Input values for the following:
    - **Initial velocity (m/s)**: The speed at which the projectile is launched.
    - **Launch angle (°)**: The angle at which the projectile is launched.
    - **Gravity (m/s²)**: The acceleration due to gravity (optional for custom scenarios).
4. Press the **Simulate** button to start the simulation. The projectile's path will be shown on the canvas.

## How It Works
1. The user inputs the initial velocity and launch angle.
2. Using basic physics formulas, the JavaScript script calculates the projectile's position at different time intervals:
   - **Horizontal Motion**: \( x(t) = v_0 \cdot \cos(\theta) \cdot t \)
   - **Vertical Motion**: \( y(t) = v_0 \cdot \sin(\theta) \cdot t - \frac{1}{2} \cdot g \cdot t^2 \)
3. These calculations are updated continuously in a loop, and the projectile's position is drawn on the canvas, creating the trajectory.


This project is open source and available under the [MIT License](LICENSE).
