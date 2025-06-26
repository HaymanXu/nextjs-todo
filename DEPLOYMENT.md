# Deployment Guide

## 🚀 Upload to GitHub

### 1. Create GitHub Repository

1. Visit [github.com](https://github.com) and log in
2. Click the "+" button in the top right, select "New repository"
3. Fill in repository information:
   - **Repository name**: `nextjs-todo`
   - **Description**: `A feature-complete ToDo application built with Next.js 15, TypeScript, Tailwind CSS, and SQLite database`
   - **Visibility**: Public or Private
   - **Do NOT** check "Add a README file" (we already have one)
   - **Do NOT** check "Add .gitignore" (we already have one)
4. Click "Create repository"

### 2. Configure Remote Repository

```bash
# Add remote repository (replace with your actual repository URL)
git remote add origin https://github.com/your-username/nextjs-todo.git

# Push code to GitHub
git branch -M main
git push -u origin main
```

### 3. Verify Upload

Visit your GitHub repository page to confirm all files have been uploaded successfully.

## 🌐 Deploy to Production

### Option 1: Vercel (Recommended)

1. **Connect GitHub**:
   - Visit [vercel.com](https://vercel.com)
   - Log in with GitHub account
   - Click "New Project"
   - Select your `nextjs-todo` repository

2. **Configure Environment Variables**:
   - Add environment variables in project settings:
   ```
   DATABASE_URL="your-database-url"
   ```

3. **Deploy**:
   - Vercel will automatically detect Next.js project
   - Click "Deploy" to start deployment

### Option 2: Netlify

1. **Connect GitHub**:
   - Visit [netlify.com](https://netlify.com)
   - Log in with GitHub account
   - Click "New site from Git"
   - Select your `nextjs-todo` repository

2. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Environment Variables**:
   - Add environment variables in site settings

### Option 3: Railway

1. **Connect GitHub**:
   - Visit [railway.app](https://railway.app)
   - Log in with GitHub account
   - Click "New Project"
   - Select "Deploy from GitHub repo"

2. **Configure Database**:
   - Add PostgreSQL plugin
   - Update `DATABASE_URL` environment variable

## 🗄️ Production Database

### PostgreSQL (Recommended)

For production environments, it's recommended to use PostgreSQL instead of SQLite:

1. **Update Prisma Configuration**:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```

2. **Install PostgreSQL Dependencies**:
   ```bash
   npm install pg
   npm install @types/pg --save-dev
   ```

3. **Run Migrations**:
   ```bash
   npx prisma migrate deploy
   ```

### Database Providers

- **Vercel Postgres**: Well integrated with Vercel
- **Supabase**: Very generous free tier
- **PlanetScale**: Serverless MySQL
- **Railway Postgres**: Simple to use

## 🔧 Environment Variable Configuration

### Development Environment (.env)
```env
DATABASE_URL="file:./dev.db"
```

### Production Environment
```env
DATABASE_URL="postgresql://username:password@host:port/database"
```

## 📝 Deployment Checklist

- [ ] Code uploaded to GitHub
- [ ] Environment variables configured
- [ ] Database set up
- [ ] Domain configured (optional)
- [ ] SSL certificate enabled (automatic)
- [ ] Performance monitoring set up (optional)

## 🐛 Common Issues

### 1. Database Connection Error
- Check `DATABASE_URL` environment variable
- Confirm database service is running
- Verify network connectivity

### 2. Build Failure
- Check if dependencies are correctly installed
- Confirm Node.js version compatibility
- Review build logs

### 3. API Routes Not Working
- Confirm API route file paths are correct
- Check Next.js version compatibility
- Verify route handler functions

## 📞 Getting Help

- **GitHub Issues**: Create an issue in the repository
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Prisma Documentation**: [prisma.io/docs](https://prisma.io/docs)
- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs) 