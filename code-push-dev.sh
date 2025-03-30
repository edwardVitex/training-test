echo 
echo Deploy to IOS Dev and IOS Staging
# appcenter codepush release-react -a dkhactam/ProjectName-IOS -t '*' --disable-duplicate-release-error

echo 
echo Deploy to ANDROID Dev and ANDROID Staging
# appcenter codepush release-react -a dkhactam/ProjectName-Android -d Staging -t '*' --disable-duplicate-release-error
