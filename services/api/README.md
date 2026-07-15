# PDF a MD API

FastAPI conversion service for [pdfamd.com](https://pdfamd.com). Processes PDFs in memory with PyMuPDF.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Health check |
| POST | `/api/v1/convert` | Upload PDF (`multipart/form-data`, field `file`) |

## Local development

```bash
cd services/api
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload --port 8000
```

### pip 安装失败（清华镜像 SSL 报错）

若看到 `pypi.tuna.tsinghua.edu.cn` 的 `SSLError` / `No matching distribution found`，说明**镜像连不上**，不是 `requirements.txt` 写错。可任选其一：

**方案 A：本次安装临时改用官方 PyPI（推荐）**

```bash
pip install -r requirements.txt -i https://pypi.org/simple
```

**方案 B：换阿里云镜像**

```bash
pip install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple/ --trusted-host mirrors.aliyun.com
```

**方案 C：取消全局镜像后再装**

```bash
pip config list   # 若 global.index-url 指向 tuna，可临时：
PIP_INDEX_URL=https://pypi.org/simple pip install -r requirements.txt
```

Render 部署使用默认 PyPI，不受本地 pip 镜像配置影响。

Test:

```bash
curl http://localhost:8000/health
curl -X POST http://localhost:8000/api/v1/convert -F "file=@sample.pdf"
```

## Environment variables

| Variable | Default | Description |
|----------|---------|-------------|
| `ALLOWED_ORIGINS` | `http://localhost:3000,https://pdfamd.com` | CORS allowed origins (comma-separated) |
| `MAX_BYTES` | `10485760` | Max upload size (10MB) |
| `MAX_PAGES` | `50` | Max page count |
| `MIN_CHARS_PER_PAGE` | `50` | Scanned PDF detection threshold |
| `CONVERTER_VERSION` | `0.1.0` | API version in response meta |

Vercel preview deployments are allowed via CORS regex: `https://*.vercel.app`.

## Deploy on Render

1. Create a Web Service from this repo with **Root Directory** `services/api`
2. Set environment variables (see `.env.example`)
3. Add your Vercel preview/production origins to `ALLOWED_ORIGINS`
4. Copy the service URL into the web app as `NEXT_PUBLIC_CONVERT_API_URL`
