# Installing Via

Via is a desktop application designed for Windows and Mac OSX. To get started with Via, you must first download the application and install it on your computer. Click [here](https://releases.via.world/download/channel/alpha) to install the latest version of the software for your operating system. If you are looking for historical versions, or for a different operating system, head over to our [releases website](https://releases.via.world).

**Do not download and install Via from any source other than `https://releases.via.world`**.

## Installing the Application

Installation varies slightly depending on your operating system.

### Installing Via on Windows

Via can be installed on machines that are running Windows 10+. To install the application, simply double-click the setup file in your downloads folder. Via may take a few minutes to install. Your computer may ask to confirm that you wish to install Via, and it will indicate that the software publisher is `Via Systems, LLC`. If any other publisher is listed, please delete the file and report it to us.

### Installing Via on Mac OSX

To install Via on OSX, simply double click the `.dmg` file in your Downloads folder. After your computer has verified the file integrity, a small window will appear. Drag the Via icon into your Applications folder to complete the installation.

After Via is installed, you are free to "eject" and the delete the `.dmg` file by dragging it into the trash.

## Verifying the Software Signature

The Via Terminal software is signed by Via Systems, LLC. Do not install any version of Via Terminal that is not signed, or is signed by another person or company. These versions may be infected and you are at risk of compromising your computer's security and even losing private keys.

While it is not necessary to verify the authenticity of the software in order to proceed with the installation, it is very easy, and highly recommended. The process varies slightly between Windows and Mac, so the steps will be provided below for each.

### Verifying the Signature on Windows

To verify the software signature on Windows, simply right-click the Setup executable file and click `Properties`. Once the properties menu has appeared, locate the `Digital Signatures` tab in the window header. **If the Digital Signatures tab is not present, then the file is not properly signed and should be discarded immediately.**

Under the "Signer Information" section of the Digital Signatures tab, you should see the name `Via Systems, LLC`. Once you have confirmed the signer name, you are free to continue with the installation.

### Verifying the Signature on Mac OSX

The easiest way to verify a software signature on Mac is through the terminal.

1. Open the `Terminal` application by searching for it in Spotlight or in your Applications folder.
2. Enter the following command into your console. Please note that the path to the Via application may be different if you installed the app to a different location on your computer.

``` sh
codesign -dv --verbose=4 "~/Applications/Via Alpha.app"
```

3. The output should appear similar to the following:

``` sh
Executable=/Users/<YOUR_NAME>/Applications/Via Alpha.app/Contents/MacOS/Via Alpha
Identifier=world.via
Format=app bundle with Mach-O thin (x86_64)
CodeDirectory v=20200 size=265 flags=0x0(none) hashes=3+3 location=embedded
OSPlatform=36
OSSDKVersion=657920
OSVersionMin=657664
Hash type=sha256 size=32
CandidateCDHash sha1=a4b2f7380f226470801b421326a06fc3289670c6
CandidateCDHash sha256=78b648aaa7f0edd34e601d8df37c6f216cfc6282
Hash choices=sha1,sha256
Page size=4096
CDHash=78b648aaa7f0edd34e601d8df37c6f216cfc6282
Signature size=8920
Authority=Developer ID Application: Via Systems, LLC (6H96WF5543)
Authority=Developer ID Certification Authority
Authority=Apple Root CA
Timestamp=Oct 4, 2018 at 10:51:00 PM
Info.plist entries=26
TeamIdentifier=6H96WF5543
Sealed Resources version=2 rules=13 files=4150
Internal requirements count=1 size=172
```

4. Confirm that the following line in present in the message in your Terminal:

``` sh
Authority=Developer ID Application: Via Systems, LLC (6H96WF5543)
```

5. You're all set - the application signature is valid and you're free to start using Via.

## Keeping Via Updated

Once Via is installed, it will automatically update whenever a new version is released for your platform. There is no need to re-download the software and follow the above steps again. If you want to force Via to check for new updates, you can do so at any time by selecting the `Help > Check for Updates` menu item on Windows, or the `Via Alpha > Check for Updates` menu item on Mac OSX.

If there is a new update available, Via will start downloading it immediately. While the download is in progress, the `Check for Updates` button will change to `Downloading Update` and appear in a disabled state. This process may take several minutes, depending on the speed of your internet connection and the load on our servers.

Once the update has finished downloading, it will be automatically applied the next time you quit and reopen the application. If you wish to apply the update immediately, select the option from the menu `Help > Restart and Install Update` on Windows, and `Via Alpha > Restart and Install Update` on Mac.

**Via may take a few moments to restart after applying a new update. Please be patient.**
