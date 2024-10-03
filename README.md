# Braze Android Fullscreen In-App Message Issue

This repository contains a minimal reproducible example demonstrating an issue with Braze's fullscreen in-app messages on Android in a React Native application.
Repository was initialized with the `npx create-expo-app JoeBraze --template blank@sdk-48` command to generate a blank expo project.
Afterwards, we run `npx expo prebuild -p android` to generate the native project files.

Once the native project files are generated, we proceeded to add the Braze SDK.
We follow the steps outlined in the [Braze React Native SDK setup guide](https://www.braze.com/docs/developer_guide/platform_integration_guides/react_native/react_sdk_setup) to add the Braze SDK to our project.

## Issue Description

When using Braze's fullscreen in-app messages on Android in our React Native application, we are seeing the "X" dismiss button displayed over the Status Bar.
This repository aims to provide a simplified setup to reproduce and investigate this problem.

## Setup Instructions

1. Clone this repository:

   ```
   git clone https://github.com/Noitham/BrazeInAppIssue.git
   cd BrazeInAppIssue
   ```

2. Install dependencies:

   ```
   yarn install
   ```

3. Update the Braze configuration:
   Open `android/app/src/main/res/values/braze.xml` and update the following fields with your Braze account information:

   - `com_braze_api_key`
   - `com_braze_custom_endpoint`
   - `com_braze_firebase_cloud_messaging_sender_id`

4. Update the target user ID:
   Open `App.js` and modify the `userId` constant with the user ID you want to target for testing.

5. Run the application:
   ```
   yarn android
   ```

## Steps to Reproduce

1. Launch the application on an Android device or emulator.
2. On the Braze dashboard, create a new fullscreen in-app message.
3. Wait for the message to be displayed.
4. Notice the "X" dismiss button displayed over the Status Bar.

## Environment

- React Native version: 0.71.14
- Braze React Native SDK version: 12.0.0
- Android version: Android 14
- Device: Emulator / Real device
