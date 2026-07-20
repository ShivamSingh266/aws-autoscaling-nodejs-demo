# AWS Auto Scaling & Load Balancing – Node.js Demo

A self-healing, horizontally scalable Node.js web application deployed on AWS,
using an Application Load Balancer, Auto Scaling Group, Launch Template, and
CloudWatch-driven dynamic scaling policies.

## Architecture

![Architecture Diagram](screenshots/architecture-diagram.png)

A client request reaches the Application Load Balancer, which routes it to a
healthy EC2 instance via the Target Group. Instances are provisioned from a
shared Launch Template and managed by an Auto Scaling Group (Min: 1, Desired: 2,
Max: 3). CloudWatch monitors CPUUtilization and triggers scale-out (>50% CPU)
and scale-in (<20% CPU) policies automatically.

## Tech Stack

- Amazon EC2 (t3.micro)
- Application Load Balancer + Target Group
- Launch Template + Auto Scaling Group
- Amazon CloudWatch (alarms + dynamic scaling policies)
- Amazon VPC (Default) + Security Groups
- Node.js (vanilla HTTP server, no dependencies)
- Apache Bench (load testing)

## Features Demonstrated

- Automatic traffic distribution across multiple EC2 instances (round-robin)
- Self-healing: unhealthy instances are terminated and replaced automatically
- Dynamic scaling based on real-time CPU utilization
- Health check endpoint (`/health`) used by the Target Group
- Simulated CPU load endpoint (`/load`) used to trigger scaling

## Files

- `app.js` — the Node.js application
- `launch-template-userdata.sh` — EC2 Launch Template User Data script
- `screenshots/` — proof of working deployment (ASG scaling, healthy targets, CloudWatch alarms, round-robin traffic)

## Live Demo

> Note: This was a temporary AWS demo deployment for academic submission and
> may no longer be active to avoid ongoing AWS charges.

## Full Project Report

See [Project_Report.pdf](Project_Report.pdf) for complete documentation,
including system design, testing, and results.

## Author

Shivam Singh — 12409825
Lovely Professional University