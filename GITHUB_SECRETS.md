# GitHub Secrets Management

This document explains how to manage secrets for FlightFlip on GitHub.

## ⚠️ Important: Never Commit Secrets

- **NEVER** commit `.env` files to GitHub
- **NEVER** commit API keys, tokens, or passwords
- **NEVER** commit database credentials
- Use GitHub Secrets for all sensitive data

## 🔐 How to Add GitHub Secrets

### Step 1: Go to Repository Settings
1. Go to https://github.com/cafasdon/FlightFlip
2. Click **Settings** (top right)
3. Click **Secrets and variables** → **Actions** (left sidebar)

### Step 2: Create a New Secret
1. Click **New repository secret**
2. Enter the secret name (e.g., `FLIGHT_API_KEY`)
3. Enter the secret value
4. Click **Add secret**

## 📋 Secrets to Add (When Needed)

### Flight Data APIs
- `FLIGHT_API_KEY` - API key for flight data provider
- `FLIGHT_API_URL` - Base URL for flight API
- `FLIGHT_API_SECRET` - API secret (if required)

### MaxMilhas Integration
- `MAXMILHAS_API_KEY` - MaxMilhas marketplace API key
- `MAXMILHAS_API_SECRET` - MaxMilhas API secret

### Analytics & Monitoring
- `ANALYTICS_ID` - Google Analytics or similar
- `SENTRY_DSN` - Error tracking (if using Sentry)

### Deployment (Future)
- `DEPLOY_TOKEN` - Deployment service token
- `DATABASE_URL` - Database connection string
- `JWT_SECRET` - JWT signing secret

## 🔄 Using Secrets in GitHub Actions

In `.github/workflows/` files, access secrets like this:

```yaml
- name: Build
  env:
    FLIGHT_API_KEY: ${{ secrets.FLIGHT_API_KEY }}
  run: npm run build
```

## 🔄 Using Secrets in Development

For local development:

1. Create `.env.local` (not committed to Git)
2. Add your secrets there:
   ```
   VITE_FLIGHT_API_KEY=your_actual_key
   VITE_FLIGHT_API_URL=https://api.example.com
   ```
3. Access in code:
   ```javascript
   const apiKey = import.meta.env.VITE_FLIGHT_API_KEY;
   ```

## ✅ Checklist for New Secrets

When adding a new secret:

- [ ] Add to GitHub Secrets
- [ ] Document in this file
- [ ] Add example to `.env.example`
- [ ] Update `.gitignore` if needed
- [ ] Inform team members
- [ ] Update CI/CD workflows if needed

## 🚨 If a Secret is Compromised

1. **Immediately** rotate the secret
2. Delete the old secret from GitHub
3. Add the new secret
4. Update all services using it
5. Review access logs if available
6. Notify team members

## 📚 References

- [GitHub Secrets Documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Environment Variables in Vite](https://vitejs.dev/guide/env-and-modes.html)
- [Best Practices for Secrets Management](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)

## 🔗 Current Secrets

None added yet. Add secrets as needed for API integrations.

---

**Remember:** Secrets are encrypted and only accessible to authorized users. Never share secrets in chat, email, or documentation.

