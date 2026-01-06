# Environment Variables Setup

## Decap CMS GitHub App ID

The GitHub OAuth App ID for Decap CMS is stored in a `.env` file to keep it secure and out of version control.

### Setup Instructions

1. **Create a `.env` file** in the root directory (if it doesn't exist):
   ```bash
   VITE_DECAP_GITHUB_APP_ID=your_app_id_here
   ```

2. **Replace `your_app_id_here`** with your actual GitHub OAuth App ID.

3. **The `.env` file is already in `.gitignore`**, so it won't be committed to git.

### How It Works

- The `config.yml` file contains a placeholder: `__GITHUB_APP_ID__`
- Before building or running the dev server, a script (`scripts/build-config.js`) replaces this placeholder with the value from `.env`
- The script runs automatically when you run `npm run dev` or `npm run build`

### Important Notes

- **Never commit the `.env` file** - it's already in `.gitignore`
- **Never commit the actual app ID** in `config.yml` - it should always contain the placeholder `__GITHUB_APP_ID__`
- If you're setting up on a new machine, create a `.env` file with your app ID
- The `.env.example` file (if it exists) shows the required format without exposing the actual value

