# Next.js ToDo Application

A feature-complete ToDo application built with Next.js 15, TypeScript, Tailwind CSS, and SQLite database.

## Features

### ✅ Core Features
- **Add Tasks** - Click the floating button in the bottom right to add new tasks
- **Delete Tasks** - Click the delete icon on the right side of each task
- **Mark Complete/Incomplete** - Click the circular button on the left to toggle status
- **Task Filtering** - View all, active, or completed tasks
- **Bulk Clear** - Clear all completed tasks with one click

### 🎨 UI Design
- **Modern UI** - Clean and beautiful interface designed with Tailwind CSS
- **Responsive Design** - Adapts to different screen sizes
- **Dark Mode Support** - Automatically adapts to system theme
- **Floating Action Button** - Bottom popup form for adding tasks

### 🗄️ Data Persistence
- **SQLite Database** - Data managed with Prisma ORM
- **RESTful API** - Complete CRUD operations API
- **Error Handling** - Comprehensive error prompts and handling mechanisms

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: SQLite
- **ORM**: Prisma
- **Development Tools**: Turbopack

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Environment Variables

Ensure the `.env` file contains database configuration:

```env
DATABASE_URL="file:./dev.db"
```

### 3. Initialize Database

```bash
# Generate Prisma client
npx prisma generate

# Create database tables
npx prisma db push
```

### 4. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## Database Management

### View Database

```bash
# Open Prisma Studio to view data
npx prisma studio
```

### Reset Database

```bash
# Delete existing database
rm prisma/dev.db

# Recreate database
npx prisma db push
```

### Database Migration

```bash
# Create migration file
npx prisma migrate dev --name init

# Apply migration
npx prisma migrate deploy
```

## API Endpoints

### Get All Tasks
```
GET /api/todos
```

### Create New Task
```
POST /api/todos
Content-Type: application/json

{
  "text": "Task content"
}
```

### Update Task
```
PATCH /api/todos/[id]
Content-Type: application/json

{
  "completed": true,
  "text": "Updated task content"
}
```

### Delete Task
```
DELETE /api/todos/[id]
```

### Clear Completed Tasks
```
DELETE /api/todos/clear-completed
```

## Project Structure

```
nextjs-todo/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── todos/
│   │   │       ├── route.ts              # Get and create tasks
│   │   │       ├── [id]/route.ts         # Update and delete single task
│   │   │       └── clear-completed/route.ts # Clear completed tasks
│   │   ├── page.tsx                      # Main page
│   │   ├── layout.tsx                    # Layout component
│   │   └── globals.css                   # Global styles
│   └── generated/
│       └── prisma/                       # Prisma client
├── prisma/
│   └── schema.prisma                     # Database schema
├── .env                                  # Environment variables
└── package.json
```

## Development Guide

### Adding New Features

1. Define data models in `prisma/schema.prisma`
2. Run `npx prisma generate` to generate client
3. Run `npx prisma db push` to update database
4. Create corresponding API routes
5. Update frontend components

### Customizing Styles

The application uses Tailwind CSS. You can add custom styles in `src/app/globals.css`.

### Deployment

The application can be deployed to Vercel, Netlify, and other platforms. Ensure:

1. Set correct environment variables
2. Configure database connection (PostgreSQL recommended for production)
3. Run database migrations

## License

MIT
