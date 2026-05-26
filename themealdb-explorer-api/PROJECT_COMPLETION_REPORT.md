

## 📋 Project Overview

TheMealDB Explorer is a complete, production-ready web application that allows users to discover and explore recipes from the TheMealDB API. The application consists of:

1. **Backend:** Java Spring Boot REST API with intelligent caching
2. **Frontend:** Modern React UI with responsive design
3. **Integration:** Seamless communication between layers

---


### Backend (Java Spring Boot)
- REST API with 5 endpoints
-  Caffeine caching (10 min TTL, 100 items)
-  Error handling & validation
-  Logging system
-  CORS configuration
- Professional code structure
-  Runs on port 8080

### Frontend (React)

- Runs on port 3000



---

##  Project Structure

```
workspace/
├── themealdb-explorer-api/              # Backend - Java Spring Boot
│   ├── src/main/java/.../
│   │   ├── ThemealdbExplorerApiApplication.java
│   │   ├── controller/MealController.java
│   │   ├── service/
│   │   │   ├── MealService.java
│   │   │   └── MealServiceImpl.java
│   │   ├── client/MealDbClient.java
│   │   ├── config/
│   │   │   ├── CacheConfig.java
│   │   │   └── WebClientConfig.java
│   │   ├── dto/
│   │   │   ├── MealDto.java
│   │   │   ├── MealResponse.java
│   │   │   ├── CategoryDto.java
│   │   │   └── CategoryResponse.java
│   │   └── exception/GlobalExceptionHandler.java
│   ├── src/main/resources/application.properties
│   ├── pom.xml
│   ├── README_COMPLETE.md
│   ├── QUICK_START.md
│   ├── BACKEND_ASSESSMENT.md
│   └── HELP.md
│

```

---

## 🚀 Quick Start

### Backend
```bash
cd themealdb-explorer-api
mvn spring-boot:run
# Backend ready at http://localhost:8080
```

### Frontend
```bash
cd themealdb-explorer-ui
npm install
npm start
# Frontend ready at http://localhost:3000
```

---