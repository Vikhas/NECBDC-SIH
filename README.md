---

# Development of Dynamic Website for NECBDC

## Overview

This project involves converting the static website of the **North Eastern Cane and Bamboo Development Council (NECBDC)** into a dynamic website. The dynamic version allows for regular content updates, improved multi-device compatibility, and features such as social media integration, chatbot support, and an enhanced gallery. The application enables the admin to easily manage and update website content.

Additionally, a **chatbot** is deployed using Flask and JavaScript, which offers two deployment options:
- Deploy within Flask app using Jinja2 templates.
- Serve the Flask prediction API separately, allowing for the frontend application to run independently.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, EJS
- **Backend**: Node.js, Flask (for chatbot)
- **Database**: MongoDB
- **Chatbot**: Python (NLTK, PyTorch)

## Application Ports

- **Main Application**: `localhost:4000`
- **Chatbot Service**: `localhost:5000`

## Features

- **Admin Panel**: Allows admins to update website content dynamically.
- **Chatbot Integration**: Provides consultancy services through a chatbot built using Python and Flask.
- **Contact Form**: Users can submit queries through a contact form, and emails are sent automatically.
- **Dynamic Gallery**: Easily add, remove, or update gallery images.
- **Multi-device Compatibility**: Optimized for viewing on desktops, tablets, and mobile devices.

## Chatbot Deployment with Flask and JavaScript

### Initial Setup:
Clone the repo and create a virtual environment:
```bash
$ git clone https://github.com/your-username/dynamic-necbdc-website.git
$ cd chatbot-deployment
$ python3 -m venv venv
$ . venv/bin/activate
```

Install dependencies:
```bash
$ (venv) pip install Flask torch torchvision nltk
```

Download the necessary NLTK package:
```bash
$ (venv) python
>>> import nltk
>>> nltk.download('punkt')
```

### Customize Chatbot
You can modify the `intents.json` file with different intents and responses for your chatbot to fit your specific use case.

### Train the Model
To train the chatbot, run the following:
```bash
$ (venv) python train.py
```
This will create a `data.pth` file.

### Test the Chatbot
To test the chatbot in the console, run:
```bash
$ (venv) python chat.py
```

### Run the Chatbot with Flask
To run the chatbot with the Flask server, execute:
```bash
$ (venv) python app.py
```
The Flask API will be available at `http://localhost:5000`.

## Main Application Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/dynamic-necbdc-website.git
   cd dynamic-necbdc-website
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Main Application**:
   ```bash
   npm start
   ```

4. **Access the Website**:
   - Main Application: `http://localhost:4000`
   - Chatbot: `http://localhost:5000`

---
