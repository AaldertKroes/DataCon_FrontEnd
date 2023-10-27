# Bycicle Tracking System
This is a small project made by Aaldert, Remko and Franklin. The purpose of this project is to make a small device that actively tracks its own position. This positional data is then sent to a backend that processes the information. That information can be recieved and viewed on the frontend of the webapplication.

### Frontend
This repository has the contents for the frontend of the webapplication. Here you can login to your account and see where your devices are located. The location of said devices will be pinpointed in the Google-maps-API.

### Backend
The backend of this webapplication can be found at `<link>`. The backend system recieves the data sent from the tracking device, stores it and links it to the right user. This data can be requested by the frontend of the webapplication.

### Hardware
The device is a small, compact box which includes a tracking system and has access to cellular services via the 2G-network. This device sends its positional data to the backend.

The hardware consists of:
- A microcontroller | ESP32-C3
- A SIM-module | SIM800L GSM GPRS
- A GPS-module | NEO-6M GPS