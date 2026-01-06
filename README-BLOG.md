# Blog Setup with Decap CMS

This project includes a blog system powered by Markdown and Decap CMS (formerly Netlify CMS).

## Setup Instructions

### 1. GitHub Authentication Setup

To enable GitHub authentication for Decap CMS:

1. **Create a GitHub OAuth App:**
   - Go to GitHub Settings → Developer settings → OAuth Apps
   - Click "New OAuth App"
   - Set:
     - Application name: "Savannah Safaris CMS"
     - Homepage URL: `https://your-domain.com`
     - Authorization callback URL: `https://api.github.com/authorizations`
   - Copy the Client ID

2. **Update `public/admin/config.yml`:**
   - Replace `YOUR_GITHUB_USERNAME` with your GitHub username
   - Replace `YOUR_REPO_NAME` with your repository name
   - Replace `YOUR_GITHUB_APP_ID` with your OAuth App Client ID

### 2. Directory Structure

```
/content/blog/          # Blog post markdown files
/public/images/blog/    # Blog post images
/public/admin/          # Decap CMS admin interface
```

### 3. Accessing the Admin Panel

- Development: `http://localhost:3000/admin`
- Production: `https://your-domain.com/admin`

### 4. Creating Blog Posts

1. Go to `/admin`
2. Click "Login with GitHub"
3. Click "New Blog" to create a new post
4. Fill in:
   - Title
   - Publish Date
   - Cover Image (optional)
   - Description
   - Body (Markdown)

### 5. Viewing Blog Posts

- Blog index: `/blog`
- Individual post: `/blog/{slug}`

## File Structure

- `public/admin/config.yml` - Decap CMS configuration
- `public/admin/index.html` - Admin panel HTML
- `src/pages/BlogIndex.tsx` - Blog listing page
- `src/pages/BlogPost.tsx` - Individual blog post page
- `src/pages/Admin.tsx` - Admin route handler
- `content/blog/*.md` - Blog post markdown files

## Notes

- Blog posts are stored as Markdown files in `/content/blog`
- Images are stored in `/public/images/blog`
- The system is fully static - no backend required
- Posts are loaded at build time using Vite's glob import

