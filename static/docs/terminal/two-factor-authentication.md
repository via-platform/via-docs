# Two-Factor Authentication (2FA)

To further secure your Via account, we highly recommend setting up 2FA. Although there is no personal information (other than your email address) stored on our servers, poor account security can be dangerous if your physical device is stolen. Setting up 2FA will virtually guarantee that your account cannot be hacked (unless your phone is also stolen - take better care of your stuff).

If you have chosen to skip 2FA setup during your first login and wish to return to the setup process, just quit and reopen Via. After logging into your account, you will again be presented with the option to set up 2FA.

## Requirements

To set up 2FA, Via requires an RFC-6238 compliant application. That sounds complicated, but don't worry - there are two very popular ones on the market. [Authy](https://authy.com) by Twilio, and [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en) by Google. The choice is up to you.

We highly recommend downloading the application on your mobile device - or at least a different device from the one on which you're trying to install Via Terminal.

## Scanning the QR Code

Via will present you with a QR code that contains a one-time setup code for Authy or Google Authenticator. Scan the code using one of the apps and follow the instructions on your mobile device.

Once the scanning process has been completed, your app will present you with a brand new "one time use" code. Enter this code into Via to complete the 2FA setup process. Via will check to make sure that the code matches the one on our end, so we can confirm that the QR code was scanned successfully and prevent any future issues logging in.

## Using Via In the Future

After you have set up 2FA, Via will ask you for a one-time use code whenever you open the application and attempt to sign in. Simply open up the authentication app on your mobile device (i.e. Authy or Google Authenticator) and input the given code into Via.
