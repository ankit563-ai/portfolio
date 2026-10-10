param (
    [string]$RepoUrl
)

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  AG 3D Developer Portfolio - Automated GitHub Deployer" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

if (-not $RepoUrl) {
    $RepoUrl = Read-Host "Paste your GitHub Repository URL (e.g. https://github.com/username/portfolio.git)"
}

if (-not $RepoUrl) {
    Write-Host "Error: Repository URL is required." -ForegroundColor Red
    exit 1
}

Write-Host "`n[1/3] Linking GitHub remote repository..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin $RepoUrl
git branch -M main

Write-Host "`n[2/3] Pushing codebase to GitHub (main branch)..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to push to GitHub. Please check your credentials or repo URL." -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host "`n[3/3] Deploying build artifacts to GitHub Pages (gh-pages branch)..." -ForegroundColor Yellow
npm run deploy

Write-Host "`n==========================================================" -ForegroundColor Green
Write-Host "  Deployment complete! 🎉" -ForegroundColor Green
Write-Host "  Go to your repo Settings > Pages on GitHub to see your live URL." -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Green
