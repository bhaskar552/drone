const jsonServer = require('json-server');
const path = require('path');
const bodyParser = require('body-parser');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(bodyParser.json());


server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const db = router.db; 
  const user = db.get('users').find({ username, password }).value();

  if (user) {
    res.status(200).json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

server.get('/drones', (req, res) => {
  const db = router.db; 
  const drones = db.get('drones').value();
  res.status(200).json(drones);
});

server.get('/drones/:id', (req, res) => {
  const { id } = req.params;
  const db = router.db; 
  const drone = db.get('drones').find({ id }).value();

  if (drone) {
    res.status(200).json(drone);
  } else {
    res.status(404).json({ message: 'Drone not found' });
  }
});

server.get('/drones/:id/maintenance', (req, res) => {
  const { id } = req.params;
  const db = router.db; 
  const drone = db.get('drones').find({ id }).value();

  if (drone) {
    res.status(200).json(drone.maintenance_logs);
  } else {
    res.status(404).json({ message: 'Drone not found' });
  }
});

server.use(router);


const PORT = 4000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
