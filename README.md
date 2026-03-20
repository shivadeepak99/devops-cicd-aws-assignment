# Fullstack Student Details App (Flask + Nginx)

## Structure

```
.
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── nginx.conf
│   └── Dockerfile
├── docker-compose.yml
├── Jenkinsfile
└── README.md
```

## Run locally

```bash
docker compose up --build
```

Test:

- Frontend: `http://localhost`
- Backend: `http://localhost:5000/student-details`
