echo "New iOS App Name:"
read iosAppName
perl -pi -e 's/reactNativeReduxBoilerplate/'$iosAppName'/g' ./ios/reactNativeReduxBoilerplate/Info.plist

echo "New Android App Name:"
read androidAppName
perl -pi -e 's/reactNativeReduxBoilerplate/'$androidAppName'/g' ./android/app/src/main/res/values/strings.xml