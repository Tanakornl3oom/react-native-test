# react-native-test

- notification
- gallery
- async storage
- layout
- camera

## run on ios

- install xcode
- install watchman ( yarn global add watchman )
- install react-native-cli ( yarn global add react-native-cli )
- cd ios && pod install
- run ( react-native run-ios --device / --emulator ) \*\*\* should add account in xcode and change signing & capabilites in xcode to be your account

## clear cache pod ios

- pod deintegrate
- pod install

## spash screen

- https://medium.com/handlebar-labs/how-to-add-a-splash-screen-to-a-react-native-app-ios-and-android-30a3cec835ae

## touch id

- https://github.com/naoufal/react-native-touch-id

## icon

- https://medium.com/react-native-training/how-to-easily-configure-launch-icons-in-react-native-android-ios-2e1f351496ed

## react notification ios

install

- https://github.com/zo0r/react-native-push-notification

- https://github.com/react-native-community/react-native-push-notification-ios

```
AppDelegate.h

#import <UserNotifications/UserNotifications.h>

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions

    // define UNUserNotificationCenter
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
    center.delegate = self;


//Called when a notification is delivered to a foreground app.
-(void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions options))completionHandler
{
  NSLog(@"User Info : %@",notification.request.content.userInfo);
  completionHandler(UNAuthorizationOptionSound | UNAuthorizationOptionAlert | UNAuthorizationOptionBadge);
}
```

- https://github.com/zo0r/react-native-push-notification/issues/275

- https://medium.com/differential/how-to-setup-push-notifications-in-react-native-ios-android-30ea0131355e

## gallery

- https://github.com/saleel/react-native-super-grid

## async storage

- https://facebook.github.io/react-native/docs/asyncstorage

## camera
