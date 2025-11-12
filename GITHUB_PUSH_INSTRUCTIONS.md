# 🚀 Push to GitHub - Step by Step

Your local repository is ready! Follow these steps to push to GitHub.

## Step 1: Create Repository on GitHub

1. Open https://github.com/new
2. Fill in:
   - **Repository name**: `flightflip`
   - **Description**: Interactive 1960s airport flipboard-inspired flight search interface with price comparison in Brazilian Real (R$) and miles estimation
   - **Visibility**: Public (for collaboration)
   - **Initialize repository**: Leave UNCHECKED
3. Click **"Create repository"**

## Step 2: Copy Your Repository URL

After creating, GitHub shows you a page with commands. You need the HTTPS URL:

```
https://github.com/YOUR_USERNAME/flightflip.git
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Add Remote and Push

Open PowerShell/Terminal in your FlightFlip directory and run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/flightflip.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## Step 4: Verify on GitHub

1. Go to https://github.com/YOUR_USERNAME/flightflip
2. You should see all your files and commits
3. Check the commit history (7 commits total)

## Step 5: Invite Your Collaborator

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Collaborators** (left sidebar)
4. Click **Add people**
5. Enter your friend's GitHub username
6. Click **Add**
7. They'll receive an invitation email

## Step 6: Your Friend's Setup

Your collaborator should:

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/flightflip.git
cd flightflip

# Install dependencies
npm install

# Start development
npm run dev
```

## ✅ You're Done!

Your repository is now on GitHub and ready for collaboration!

## 📝 Quick Reference

**Your repository URL:**
```
https://github.com/YOUR_USERNAME/flightflip
```

**Clone command for your friend:**
```bash
git clone https://github.com/YOUR_USERNAME/flightflip.git
```

**Collaboration workflow:**
1. Create feature branch: `git checkout -b feature/name`
2. Make changes and commit
3. Push: `git push origin feature/name`
4. Create Pull Request on GitHub
5. Review and merge

## 🆘 Troubleshooting

**"fatal: remote origin already exists"**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/flightflip.git
```

**"Permission denied (publickey)"**
- Make sure you have SSH keys set up or use HTTPS URL
- Check GitHub SSH settings

**"Repository not found"**
- Verify the URL is correct
- Make sure you created the repo on GitHub
- Check your username spelling

## 📚 Next Steps

After pushing to GitHub:

1. Read **QUICK_START.md** for development
2. Check **IMPLEMENTATION_ROADMAP.md** for tasks
3. Share the repo URL with your friend
4. Start building! 🎉

Good luck! ✈️

