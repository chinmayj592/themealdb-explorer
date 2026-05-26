QUICK START GUIDE - TheMealDB Explorer

##  Get Running in 5 Minutes


---

## STEP 1: Start Backend (Java)

### Navigate to Backend
```bash
cd "C:\Users\chinm\IntelliJ IDEA 2026.1\IdeaProjects\themealdb-explorer-api"
```

### Run Backend
```bash
# Option 1: Using Maven
mvn spring-boot:run



** Backend Ready at:** `http://localhost:8080`

**Test Backend:**
```bash
curl http://localhost:8080/api/meals/categories
```

---

## STEP 2: Start Frontend (React)

### In New Terminal - Navigate to Frontend
```bash
cd "C:\Users\chinm\IntelliJ IDEA 2026.1\IdeaProjects\themealdb-explorer-ui"
```

### Install Dependencies (First Time Only)
```bash
npm install
```

### Run Frontend
```bash
npm start
```

** Frontend Ready at:** `http://localhost:3000`

---

##  we are Done!

The application is now running! 

- **Backend API:** http://localhost:8080
- **Frontend UI:** http://localhost:3000