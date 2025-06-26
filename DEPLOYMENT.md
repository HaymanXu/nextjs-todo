# 部署指南

## 🚀 上传到GitHub

### 1. 创建GitHub仓库

1. 访问 [github.com](https://github.com) 并登录
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 填写仓库信息：
   - **Repository name**: `nextjs-todo`
   - **Description**: `一个功能完整的ToDo应用，使用Next.js 15、TypeScript、Tailwind CSS和SQLite数据库构建`
   - **Visibility**: Public 或 Private
   - **不要**勾选 "Add a README file"
   - **不要**勾选 "Add .gitignore"
4. 点击 "Create repository"

### 2. 配置远程仓库

```bash
# 添加远程仓库（替换为你的实际仓库URL）
git remote add origin https://github.com/你的用户名/nextjs-todo.git

# 推送代码到GitHub
git branch -M main
git push -u origin main
```

### 3. 验证上传

访问你的GitHub仓库页面，确认所有文件都已上传成功。

## 🌐 部署到生产环境

### 选项1: Vercel (推荐)

1. **连接GitHub**：
   - 访问 [vercel.com](https://vercel.com)
   - 使用GitHub账号登录
   - 点击 "New Project"
   - 选择你的 `nextjs-todo` 仓库

2. **配置环境变量**：
   - 在项目设置中添加环境变量：
   ```
   DATABASE_URL="你的数据库URL"
   ```

3. **部署**：
   - Vercel会自动检测Next.js项目
   - 点击 "Deploy" 开始部署

### 选项2: Netlify

1. **连接GitHub**：
   - 访问 [netlify.com](https://netlify.com)
   - 使用GitHub账号登录
   - 点击 "New site from Git"
   - 选择你的 `nextjs-todo` 仓库

2. **配置构建设置**：
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **环境变量**：
   - 在站点设置中添加环境变量

### 选项3: Railway

1. **连接GitHub**：
   - 访问 [railway.app](https://railway.app)
   - 使用GitHub账号登录
   - 点击 "New Project"
   - 选择 "Deploy from GitHub repo"

2. **配置数据库**：
   - 添加 PostgreSQL 插件
   - 更新 `DATABASE_URL` 环境变量

## 🗄️ 生产环境数据库

### PostgreSQL (推荐)

对于生产环境，建议使用PostgreSQL而不是SQLite：

1. **更新Prisma配置**：
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```

2. **安装PostgreSQL依赖**：
   ```bash
   npm install pg
   npm install @types/pg --save-dev
   ```

3. **运行迁移**：
   ```bash
   npx prisma migrate deploy
   ```

### 数据库提供商

- **Vercel Postgres**: 与Vercel集成良好
- **Supabase**: 免费层很慷慨
- **PlanetScale**: 无服务器MySQL
- **Railway Postgres**: 简单易用

## 🔧 环境变量配置

### 开发环境 (.env)
```env
DATABASE_URL="file:./dev.db"
```

### 生产环境
```env
DATABASE_URL="postgresql://username:password@host:port/database"
```

## 📝 部署检查清单

- [ ] 代码已上传到GitHub
- [ ] 环境变量已配置
- [ ] 数据库已设置
- [ ] 域名已配置（可选）
- [ ] SSL证书已启用（自动）
- [ ] 性能监控已设置（可选）

## 🐛 常见问题

### 1. 数据库连接错误
- 检查 `DATABASE_URL` 环境变量
- 确认数据库服务正在运行
- 验证网络连接

### 2. 构建失败
- 检查依赖是否正确安装
- 确认Node.js版本兼容性
- 查看构建日志

### 3. API路由不工作
- 确认API路由文件路径正确
- 检查Next.js版本兼容性
- 验证路由处理函数

## 📞 获取帮助

- **GitHub Issues**: 在仓库中创建issue
- **Next.js 文档**: [nextjs.org/docs](https://nextjs.org/docs)
- **Prisma 文档**: [prisma.io/docs](https://prisma.io/docs)
- **Vercel 文档**: [vercel.com/docs](https://vercel.com/docs) 