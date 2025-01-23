# Vaishali Gala - Holistic Life Coaching Website

Welcome to the Vaishali Gala Holistic Life Coaching Website repository. This project is built using TypeScript, Node.js, Next.js, MongoDB, and other modern technologies to showcase Vaishali Gala's services and help clients connect with her for personalized life coaching sessions.


## About Vaishali Gala

1. Hi, I'm Vaishali Gala – Your Guide to a Holistic, Empowered Life. I'm a certified Life Coach with a passion for helping individuals unlock their potential and live their best lives inside out.

2. My approach blends ancient wisdom with modern techniques, creating personalized coaching plans focusing on the mind, body, and soul.

3. Services include:
   1. Talk Therapy: Address emotional wellness and gain clarity.
   2. Graphology: Understand subconscious patterns through handwriting analysis.
   3. Numerology: Align life choices with unique energies.
   4. Emotional Freedom Technique (EFT): Release emotional blockages.
   5. Color Therapy and Energy Work: Restore balance and vitality.
   6. Herbal and Ayurvedic Guidance: Heal naturally and achieve harmony.

---

## Project Overview

1. This website serves as a platform for:
   1. Showcasing Vaishali Gala's services.
   2. Enabling clients to learn about holistic healing techniques.
   3. Providing a way for users to contact Vaishali for life coaching sessions.

---

## Technology Stack

1. Frontend: Next.js, React, TypeScript
2. Backend: Node.js, Express.js
3. Database: MongoDB Atlas (Cloud Database)
4. Styling: Tailwind CSS
5. ORM: Prisma
6. Deployment: Vercel

---

## Installation and Setup

1. Prerequisites:
   1. Node.js (version 18.17.0 or higher)
   2. npm (comes with Node.js)
   3. MongoDB Atlas or a local MongoDB instance

2. Steps to Run the Project:
   1. Clone the repository:
      ```
      git clone https://github.com/Diya-Nisar/infinis.git
      cd infinis_mongo
      ```
   2. Install dependencies:
      ```
      npm install
      ```
   3. Set up environment variables:
      1. Create a `.env` file in the project root.
      2. Add the following variables:
         ```
         MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/infinis?retryWrites=true&w=majority
         PORT=5000
         ```
   4. Run the development server:
      ```
      npm run dev
      ```
      The website will be available at `http://localhost:3000`.

   5. Build for production:
      ```
      npm run build
      ```

   6. Deploy to Vercel:
      Follow the Vercel Deployment Guide to deploy the project.

---

# Database Configuration

1. This project uses MongoDB Atlas as the database. To set it up:
   1. Create a cluster in MongoDB Atlas.
   2. Add a database named `infinis` and a collection named `clients`.
   3. Whitelist your IP address in the MongoDB Atlas dashboard.
   4. Use the connection string in your `.env` file.

---

# Scripts

1. npm run dev: Starts the development server.
2. npm run build: Builds the project for production.
3. npm run start: Runs the production build.
4. npm run lint: Lints the code for errors.

---

# Features

1. Holistic services overview with detailed information about Vaishali Gala's offerings.
2. Responsive design optimized for desktop and mobile users.
3. Contact form to allow clients to get in touch with Vaishali.
