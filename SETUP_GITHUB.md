# GitHub Setup Instructions

This guide will help you push the FlightFlip project to GitHub and set it up for collaboration.

## Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Fill in the following:
   - **Repository name**: `flightflip`
   - **Description**: "Interactive 1960s airport flipboard-inspired flight search interface with price comparison in Brazilian Real (R$) and miles estimation"
   - **Visibility**: Public (for collaboration)
   - **Initialize repository**: Leave unchecked
3. Click "Create repository"

## Step 2: Add Remote and Push

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
git remote add origin https://github.com/YOUR_USERNAME/flightflip.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Invite Your Collaborator

1. Go to your repository on GitHub
2. Click "Settings" → "Collaborators"
3. Click "Add people"
4. Enter your friend's GitHub username
5. They'll receive an invitation to collaborate

## Step 4: Your Friend's Setup

Your collaborator should:

```bash
git clone https://github.com/YOUR_USERNAME/flightflip.git
cd flightflip
npm install
npm run dev
```

## Collaboration Workflow

- **Create feature branches**: `git checkout -b feature/feature-name`
- **Make commits**: `git commit -m "feat: description"`
- **Push to GitHub**: `git push origin feature/feature-name`
- **Create Pull Requests** for code review
- **Merge after approval**

See `.github/CONTRIBUTING.md` for detailed guidelines.

## Useful Commands

```bash
# Update from main branch
git pull origin main

# See all branches
git branch -a

# Delete local branch
git branch -d feature-name

# Delete remote branch
git push origin --delete feature-name
```

Happy coding! 🚀

