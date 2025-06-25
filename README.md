# Next.js ToDo 应用

一个功能完整的ToDo应用，使用Next.js 15、TypeScript、Tailwind CSS和SQLite数据库构建。

## 功能特性

### ✅ 核心功能
- **添加任务** - 点击右下角浮动按钮添加新任务
- **删除任务** - 点击任务右侧的删除图标
- **标记完成/未完成** - 点击任务左侧的圆形按钮切换状态
- **任务过滤** - 查看全部、进行中或已完成的任务
- **批量清除** - 一键清除所有已完成的任务

### 🎨 界面设计
- **现代化UI** - 使用Tailwind CSS设计的简洁美观界面
- **响应式设计** - 适配不同屏幕尺寸
- **深色模式支持** - 自动适应系统主题
- **浮动操作按钮** - 底部弹出式添加表单

### 🗄️ 数据持久化
- **SQLite数据库** - 使用Prisma ORM管理数据
- **RESTful API** - 完整的CRUD操作API
- **错误处理** - 完善的错误提示和处理机制

## 技术栈

- **前端**: Next.js 15, React 19, TypeScript
- **样式**: Tailwind CSS 4
- **数据库**: SQLite
- **ORM**: Prisma
- **开发工具**: Turbopack

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 设置环境变量

确保`.env`文件包含数据库配置：

```env
DATABASE_URL="file:./dev.db"
```

### 3. 初始化数据库

```bash
# 生成Prisma客户端
npx prisma generate

# 创建数据库表
npx prisma db push
```

### 4. 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 数据库管理

### 查看数据库

```bash
# 打开Prisma Studio查看数据
npx prisma studio
```

### 重置数据库

```bash
# 删除现有数据库
rm prisma/dev.db

# 重新创建数据库
npx prisma db push
```

### 数据库迁移

```bash
# 创建迁移文件
npx prisma migrate dev --name init

# 应用迁移
npx prisma migrate deploy
```

## API 端点

### 获取所有任务
```
GET /api/todos
```

### 创建新任务
```
POST /api/todos
Content-Type: application/json

{
  "text": "任务内容"
}
```

### 更新任务
```
PATCH /api/todos/[id]
Content-Type: application/json

{
  "completed": true,
  "text": "更新的任务内容"
}
```

### 删除任务
```
DELETE /api/todos/[id]
```

### 清除已完成任务
```
DELETE /api/todos/clear-completed
```

## 项目结构

```
nextjs-todo/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── todos/
│   │   │       ├── route.ts              # 获取和创建任务
│   │   │       ├── [id]/route.ts         # 更新和删除单个任务
│   │   │       └── clear-completed/route.ts # 清除已完成任务
│   │   ├── page.tsx                      # 主页面
│   │   ├── layout.tsx                    # 布局组件
│   │   └── globals.css                   # 全局样式
│   └── generated/
│       └── prisma/                       # Prisma客户端
├── prisma/
│   └── schema.prisma                     # 数据库模式
├── .env                                  # 环境变量
└── package.json
```

## 开发指南

### 添加新功能

1. 在`prisma/schema.prisma`中定义数据模型
2. 运行`npx prisma generate`生成客户端
3. 运行`npx prisma db push`更新数据库
4. 创建相应的API路由
5. 更新前端组件

### 样式定制

应用使用Tailwind CSS，可以在`src/app/globals.css`中添加自定义样式。

### 部署

应用可以部署到Vercel、Netlify等平台。确保：

1. 设置正确的环境变量
2. 配置数据库连接（生产环境建议使用PostgreSQL）
3. 运行数据库迁移

## 许可证

MIT
