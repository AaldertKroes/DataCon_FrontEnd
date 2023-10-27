# Bycicle Tracking System
This is a small project made by Aaldert, Remko and Franklin. The purpose of this project is to make a small device that actively tracks its own position. This positional data is then sent to a backend that processes the information. That information can be recieved and viewed on the frontend of the webapplication.

## Running the project
It is recommended to have PHP installed beforehand, because this project requires to be run on a PHP-server. The installation of PHP can be found at `https://www.php.net/manual/en/install.php`. After that, simply type `php -S localhost:8000` and visit `localhost:8000/` in your webbrowser.

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