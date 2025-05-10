# DevOps Project

## Overview

This project is all about setting up a DevOps pipeline using Docker, GitHub Actions for CI/CD, and Terraform for Infrastructure as Code. It's designed to be simple enough for anyone to follow, even if you're new to DevOps!


## Group Members

- **Member 1**: Rayen Hmidi
- **Member 2**: Ahmed AbdelAziz Meddeb
- **Member 3**: Adem Nouira


## Technologies Used

- **Docker**: This tool helps you package your application into containers. Think of it like putting your app in a box that can run anywhere.
- **GitHub Actions**: This automates the process of testing and deploying your app. It's like having a robot that does the boring stuff for you.
- **Terraform**: This tool lets you manage your infrastructure as code. It's like writing a recipe for setting up your servers.

## Software Requirements

To run this project, you'll need the following software installed on your machine:

- **Git**: To clone the repository. Download from [Git's website](https://git-scm.com/).
- **Docker**: To containerize the application. Download from [Docker's website](https://www.docker.com/).
- **Terraform**: To manage infrastructure. Download from [Terraform's website](https://www.terraform.io/downloads.html).

## Setup Instructions

### Step 1: Clone the Repository

1. Open a terminal and run the following command to clone the repository:
   ```bash
   git clone https://github.com/ray19-19/devops_project.git
   ```
2. Navigate into the project directory:
   ```bash
   cd devops_project
   ```

### Step 2: Docker Setup

1. **Install Docker**: Make sure Docker is installed on your computer. You can download it from [Docker's website](https://www.docker.com/).
2. **Run Docker**: Open Docker and let it run in the background. It's like turning on the engine of a car.

### Step 3: GitHub Actions

1. **CI/CD Pipelines**: The automation scripts are located in the `.github/workflows` directory. You don't need to do anything here; it's all set up!

### Step 4: Terraform Setup

1. **Install Terraform**: Download Terraform from [Terraform's website](https://www.terraform.io/downloads.html) and follow the installation instructions.
2. **Initialize Terraform**: In your project directory, open a terminal and type:
   ```bash
   terraform init
   ```
   This command sets up Terraform for your project. It's like preparing the ingredients before cooking.

3. **Apply Terraform Configuration**: Run the following command to set up your infrastructure:
   ```bash
   terraform apply
   ```
   This command creates the resources defined in your Terraform files. It's like baking a cake with the prepared ingredients.

## Running the Application

- **Build and Run the Docker Container**:
  1. Open a terminal in your project directory.
  2. Build the Docker image by typing:
     ```bash
     docker build -t myapp .
     ```
  3. Run the Docker container with:
     ```bash
     docker run -p 5000:5000 myapp
     ```
  This starts your application on port 5000. It's like turning on the lights in your house.

## CI/CD Pipelines

- **CI**: Every time you push code to the `main` branch, GitHub Actions will automatically build and test your application.
- **CD**: After testing, it will deploy your application using Docker.
