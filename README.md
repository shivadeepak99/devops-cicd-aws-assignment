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

## Docker Hub images

Pipeline builds and pushes:

- `shivadeepak/2023bcd0048_frontend`
- `shivadeepak/2023bcd0048_backend`

(Note: Docker Hub requires lowercase repository names)

## Jenkins

- Add Jenkins credential with ID `dockerhub-creds` (username/password)
- Update `DOCKERHUB_USERNAME` in `Jenkinsfile` if using a different Docker Hub account
