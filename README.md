# Projectile Motion Simulator
A simple, interactive simulator to visualize projectile motion using JavaScript and HTML. This project allows users to simulate and observe the motion of a projectile under the influence of gravity, considering factors such as launch angle, initial velocity, and acceleration due to gravity.

## How It Works
1. The user inputs the initial velocity and launch angle.
2. Using basic physics formulas, the JavaScript script calculates the projectile's position at different time intervals:
   - **Horizontal Motion**: \( x(t) = v_0 \cdot \cos(\theta) \cdot t \)
   - **Vertical Motion**: \( y(t) = v_0 \cdot \sin(\theta) \cdot t - \frac{1}{2} \cdot g \cdot t^2 \)
3. These calculations are updated continuously in a loop, and the projectile's position is drawn on the canvas, creating the trajectory.


This project is open source and available under the [MIT License](LICENSE).
