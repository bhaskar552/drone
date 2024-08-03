# Drone Application

## Features

1. **User Authentication**
   - Secure login functionality
   - Persistent user sessions

2. **Drone Management**
   - View a list of all drones (`DroneList.js`)
   - Detailed information on each drone (`DroneDetails.js`)

3. **Mapping**
   - Interactive map to visualize drone locations and routes (`Map.js`)

4. **Maintenance Logging**
   - Record and access maintenance logs (`MaintenanceLogs.js`)

5. **Home Dashboard**
   - A visually engaging welcome page with an overview of key metrics and quick access to core features  (`Home.js`)

6. **Responsive Design**
   - Consistent and adaptive styling across devices (`*.css` files)

7. **State Management**
   - Redux for efficient state handling (`redux` folder)

## Setup Instructions

### Docker Setup (Recommended)

1. Ensure Docker and Docker Compose are installed on your system.

2. Clone the repository:
    ```bash
    git clone https://github.com/bhaskar552/drone.git
    cd drone-application
    ```

3. Build and run the containers:
    ```bash
    docker-compose up --build
    ```

4. Access the application:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:4000](http://localhost:4000)

### Local Setup

#### Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd Backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    node server.js
    ```
   The backend will be available at [http://localhost:4000](http://localhost:4000).
   The backend utilizes a **dummy JSON server** to provide data. It retrieves and serves data from a local JSON file (`db.json`). This setup allows for quick and easy testing and development without needing a full database setup.


#### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```
   The frontend will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

The project directory is organized as follows:

```plaintext
DRONE/
├── Backend/
│   ├── node_modules/
│   ├── db.json
│   ├── Dockerfile
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── DroneDetails.css
│   │   │   ├── DroneDetails.js
│   │   │   ├── DroneList.css
│   │   │   ├── DroneList.js
│   │   │   ├── Header.js
│   │   │   ├── Home.css
│   │   │   ├── Home.js
│   │   │   ├── Login.css
│   │   │   ├── Login.js
│   │   │   ├── MaintenanceLogs.css
│   │   │   ├── MaintenanceLogs.js
│   │   │   └── Map.js
│   │   ├── redux/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   ├── .gitignore
│   ├── Dockerfile
│   ├── package-lock.json
│   └── package.json
├── README.md
└── docker-compose.yml


## Component Descriptions

- **`DroneDetails.js`**: Displays detailed information about a specific drone.
- **`DroneList.js`**: Lists all drones in the system.
- **`Header.js`**: Navigation component for the application.
- **`Home.js`**: A visually engaging welcome page with an overview of key metrics and quick access to core features.
- **`Login.js`**: Handles user authentication.
- **`MaintenanceLogs.js`**: Interface for managing and viewing maintenance records.
- **`Map.js`**: Visual representation of drone locations and routes.
- **`App.js`**: Sets up routing and the overall structure of the app.
- **`index.js`**: Entry point of the React application.

The **`redux`** folder contains files for state management, ensuring efficient data flow throughout the application.

Each component includes a corresponding CSS file to maintain a modular and maintainable codebase.

## Additional Data

The project includes sample data to simulate a fully functional application:

### Users

- **admin**: `password123`
- **manager**: `securePass456`
- **pilot1**: `flyHigh789`
- **technician**: `fixIt101`

### Drones

- **Drone1**:
  - Status: Available
  - Flight Hours: 120
  - Battery Status: 80%
  - Last Known Location: [40.712776, -74.005974]
  - Current Mission: Survey field A
  - Maintenance Logs:
    - **2024-01-10**: Battery replacement (Technician: John Doe)
    - **2024-02-15**: Rotor inspection (Technician: Jane Smith)

- **Drone2**:
  - Status: In-flight
  - Flight Hours: 200
  - Battery Status: 50%
  - Last Known Location: [34.052235, -118.243683]
  - Current Mission: Inspect irrigation system
  - Maintenance Logs:
    - **2024-03-05**: Firmware update (Technician: Alice Johnson)
    - **2024-04-22**: Motor calibration (Technician: Bob Lee)

- **Drone3**:
  - Status: Maintenance
  - Flight Hours: 95
  - Battery Status: 60%
  - Last Known Location: [41.878113, -87.629799]
  - Current Mission: N/A
  - Maintenance Logs:
    - **2024-05-12**: Propeller replacement (Technician: Charlie Brown)
    - **2024-06-30**: GPS module repair (Technician: Diana Prince)

- **Drone4**:
  - Status: Available
  - Flight Hours: 150
  - Battery Status: 90%
  - Last Known Location: [37.774929, -122.419416]
  - Current Mission: Monitor crop growth
  - Maintenance Logs:
    - **2024-07-08**: Camera calibration (Technician: Eve Wilson)
    - **2024-08-17**: Software update (Technician: Frank Martin)

- **Drone5**:
  - Status: Charging
  - Flight Hours: 180
  - Battery Status: 30%
  - Last Known Location: [51.507351, -0.127758]
  - Current Mission: N/A
  - Maintenance Logs:
    - **2024-09-03**: Battery health check (Technician: Grace Kelly)
    - **2024-10-11**: Sensor cleaning (Technician: Henry Ford)

- **Drone6**:
  - Status: In-flight
  - Flight Hours: 220
  - Battery Status: 70%
  - Last Known Location: [48.856614, 2.352222]
  - Current Mission: Thermal imaging of solar panels
  - Maintenance Logs:
    - **2024-11-20**: Thermal camera upgrade (Technician: Irene Adler)
    - **2024-12-05**: Compass calibration (Technician: Jack Sparrow)
