# TheMealDB Explorer - Complete Application

A full-stack web application for discovering and exploring recipes from the TheMealDB API. Features recipe search, category browsing, detailed recipe views with ingredients and instructions, and random meal suggestions.

## Project Structure

```
├── themealdb-explorer-api (Backend - Java Spring Boot)
│   ├── src/main/java/com/chinmay/themealdbexplorerapi
│   │   ├── ThemealdbExplorerApiApplication.java
│   │   ├── client/MealDbClient.java          # TheMealDB API client
│   │   ├── config/
│   │   │   ├── CacheConfig.java              # Caffeine cache configuration
│   │   │   └── WebClientConfig.java          # WebClient configuration
│   │   ├── controller/MealController.java    # REST endpoints
│   │   ├── service/
│   │   │   ├── MealService.java              # Service interface
│   │   │   └── MealServiceImpl.java           # Service implementation
│   │   ├── dto/                              # Data Transfer Objects
│   │   └── exception/GlobalExceptionHandler.java
│   └── src/main/resources/application.properties
│
└── themealdb-explorer-ui (Frontend - React)
    ├── src/
    │   ├── components/
    │   │   ├── Header.js/css                 # App header
    │   │   ├── SearchBar.js/css              # Search functionality
    │   │   ├── CategoryBrowser.js/css        # Category browsing
    │   │   ├── MealGrid.js/css               # Meal results display
    │   │   ├── MealDetail.js/css             # Detailed recipe view
    │   │   └── RandomMeal.js/css             # Random meal feature
    │   ├── services/api.js                   # API client
    │   ├── App.js/css                        # Main app component
    │   └── index.js/css                      # React entry point
    └── package.json
```

## Features

### Backend (Java Spring Boot)
 **REST API Endpoints:**
- `GET /api/meals/search?name=<query>` - Search meals by name
- `GET /api/meals/random` - Get a random meal
- `GET /api/meals/categories` - List all meal categories
- `GET /api/meals/category/<category>` - Get meals by category
- `GET /api/meals/<id>` - Get detailed meal information

**Caching System:**
- Caffeine in-memory cache
- 10-minute expiry time
- 100 item maximum size
- Automatic cache management

 **Best Practices:**
- Clean architecture (Controller → Service → Client)
- Comprehensive error handling
- Request/response logging
- Input validation
- CORS enabled for frontend integration
- Proper HTTP status codes

### Frontend (React)
 **User Interface:**
- Beautiful gradient design with purple theme
- Responsive layout (Desktop, Tablet, Mobile)
- Smooth animations and transitions
- Interactive meal browsing

 **Features:**
- Real-time meal search
- Category-based browsing
- Random meal "I'm Feeling Hungry" button
- Detailed recipe view with:
  - Meal images
  - Complete ingredients list with measurements
  - Step-by-step cooking instructions
  - YouTube video tutorials embedded
  - Ingredient checklist (checkboxes)
- Error handling and loading states
- Seamless page navigation

## Prerequisites

### Backend Requirements
- Java 17 or higher
- Maven 3.6+
- Spring Boot 3.5.14

### Frontend Requirements
- Node.js 16+ (with npm)
- Modern web browser

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



** Backend Ready at:** `http://localhost:8080` run through Intellij idea 


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
