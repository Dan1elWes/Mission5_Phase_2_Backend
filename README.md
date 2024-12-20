# MVC Backend

This is the backend application built with Node.js and Express, following the MVC (Model-View-Controller) architecture.

## Project Structure

```
backend/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── index.js
├── .env
└── package.json
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
```bash
git clone [your-backend-repo-url]
```

2. Install dependencies
```bash
cd backend
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```
PORT=5000
```

4. Start the server
```bash
npm run dev
```

The API will be available at `http://localhost:5000`

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with hot-reload

## API Endpoints

- `GET /api` - Test endpoint

## Project Architecture

This project follows the MVC (Model-View-Controller) pattern:
- **Models**: Data and business logic
- **Controllers**: Request handling and response formatting
- **Routes**: API endpoint definitions

## Contributing
1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Create a Pull Request

## License
[Your chosen license]
