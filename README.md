# Mission 5 Phase 2 - Backend

## Quick Setup Guide

### Required Setup Steps
1. **Install Prerequisites**
   - Node.js and npm
   - MongoDB (local installation or Atlas account)
   - Git

2. **Clone and Install**
   ```bash
   git clone [repository-url]
   cd M5-Phase2-backend
   npm install
   ```

3. **Environment Setup**
   - Create a `.env` file in the root directory with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```
   - For local MongoDB: use `mongodb://localhost:<your-mongodb-port>/<your-database-name>`
   - For MongoDB Atlas: use your connection string from Atlas dashboard
   - Note: The default MongoDB port is usually 27017, but yours might be different

4. **Database Setup**
   - Ensure MongoDB is running
   - To populate the database with sample stations:
   ```bash
   node seedData.js
   ```
   Note: This will clear existing data before seeding!

5. **Start the Server**
   ```bash
   npm run dev    # for development with auto-reload
   # or
   npm start      # for production
   ```

### Troubleshooting
- If MongoDB connection fails, verify your connection string in `.env`
- If seeding fails, ensure MongoDB is running and accessible
- For port conflicts, modify the PORT in `.env`

## Project Overview
This is the backend server for Version 1 of our application. It provides the API endpoints and database integration necessary to support the frontend application developed based on UX Designer prototypes from Phase 1.

## Features
- MongoDB database integration
- RESTful API endpoints
- Support for multiple frontend screens
- Shared data models and utilities

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```
4. Start the server:
```bash
npm start
```

## API Documentation
The server provides various endpoints to support different screens:
- `/api/stations` - Station-related operations
- Additional endpoints based on feature requirements

## Database Schema
MongoDB collections and schemas are designed to support:
- Station data
- User data
- Service information
- Additional collections as needed

## Development Guidelines
- Each developer implements backend functionality for their assigned screen
- Follow RESTful API design principles
- Implement proper error handling and validation
- Use async/await for database operations

## Project Structure
- `src/` - Source code directory
- `routes/` - API route definitions
- `models/` - MongoDB schemas
- `controllers/` - Business logic
- `middleware/` - Custom middleware functions

## Contributing
1. Create a feature branch
2. Implement your API endpoints
3. Test thoroughly
4. Submit a pull request

## Team Collaboration
- Coordinate with frontend developers
- Share common utilities and middleware
- Follow established coding standards
- Regular code reviews
