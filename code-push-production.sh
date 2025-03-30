source ./envs/.env.prod
echo $ENV_ANDROID_VERSION_NAME
echo $ENV_IOS_VERSION_NAME

echo Deploy to IOS Production
# appcenter codepush release-react -a dkhactam/ProjectName-IOS -d Production -t ">=$ENV_IOS_VERSION_NAME" --disable-duplicate-release-error

echo Deploy to ANDROID Production
# appcenter codepush release-react -a dkhactam/ProjectName-Android -d Production -t ">=$ENV_ANDROID_VERSION_NAME" --disable-duplicate-release-error