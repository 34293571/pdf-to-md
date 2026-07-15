# PDF a MD

免费在线 PDF 转 Markdown 工具 — [pdfamd.com](https://pdfamd.com)

## 项目结构

```
pdf-to-md/
├── apps/web/          # Next.js 前端（Vercel）
├── services/api/      # FastAPI 转换 API（Render）
└── docs/              # PRD、文案、法律文档
```

## 本地开发

### 1. 启动 API（Render 本地）

```bash
cd services/api
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt -i https://pypi.org/simple
cp .env.example .env
uvicorn app.main:app --reload --port 8000
```

> 若 `pip install` 因清华镜像 SSL 失败，见 [services/api/README.md](services/api/README.md#pip-安装失败清华镜像-ssl-报错)。

验证：

```bash
curl http://localhost:8000/health
```

### 2. 启动 Web（Vercel 本地）

```bash
cd apps/web
npm install
cp .env.example .env.local
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)

> 项目路径含中文时，Next.js 需使用 webpack 构建（已配置 `npm run dev/build --webpack`）。

### 环境变量

**apps/web/.env.local**

```bash
NEXT_PUBLIC_CONVERT_API_URL=http://localhost:8000
```

**services/api/.env**

```bash
ALLOWED_ORIGINS=http://localhost:3000,https://pdfamd.com
MAX_BYTES=10485760
MAX_PAGES=50
MIN_CHARS_PER_PAGE=50
```

## 部署

### Render（API）

1. 新建 Web Service，Root Directory：`services/api`
2. Build：`pip install -r requirements.txt`
3. Start：`uvicorn app.main:app --host 0.0.0.0 --port $PORT`
4. 配置环境变量，Health Check Path：`/health`
5. 将服务 URL 填入 Vercel 的 `NEXT_PUBLIC_CONVERT_API_URL`

### Vercel（Web）

1. 导入仓库，Root Directory：`apps/web`
2. 设置 `NEXT_PUBLIC_CONVERT_API_URL=https://your-render-service.onrender.com`
3. 绑定域名 `pdfamd.com`
4. 在 Render `ALLOWED_ORIGINS` 中加入生产域名与 Vercel 预览域

## 文档

| 文档 | 说明 |
|------|------|
| [docs/PRD.md](docs/PRD.md) | 完整产品需求文档 |
| [services/api/README.md](services/api/README.md) | API 说明 |
| [docs/content/en.md](docs/content/en.md) | 英文首页文案 |
| [docs/content/es.md](docs/content/es.md) | 西语页文案 |
| [docs/legal/privacy.md](docs/legal/privacy.md) | Privacy Policy |
| [docs/legal/terms.md](docs/legal/terms.md) | Terms of Service |

## MVP 功能

- 上传 PDF（直传 Render API，最大 10MB / 50 页）
- 预览 Markdown（渲染 + 源码）
- 下载 `.md` 文件
- 英文 `/`、西语 `/es`、`/privacy`、`/terms`
- SEO：metadata、FAQ JSON-LD、sitemap、robots
