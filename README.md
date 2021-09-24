# cordova-plugin-jitsi-meet

Cordova plugin for Jitsi Meet React Native SDK. Works with both iOS and Android, and fixes the 64-bit binary dependency
issue with Android found in previous versions of this plugin.

# Summary

I created this repo as there were multiple versions of this plugin, one which worked for iOS and Android, but neither
worked with both. This verison satisfies the 64bit requirement for Android and also works in iOS and is currently being
used in production.

# Installation

`cordova plugin add https://github.com/BogdanVM/cordova-plugin-jitsi-meet`

# Usage

```javascript
const roomId = 'your-custom-room-id'; // the room for the call
const jitsiServer = 'https://meet.jit.si/'; // your jitsi server
const isInvisible = false;
const jwtToken = 'your token'; // the token used for authenticating the user in the conference

jitsiplugin.loadURL(
	jitsiServer + roomId,
	roomId,
	isInvisible,
	jwtToken,
	success,
	fail
);

function success(data) {
	// check conference status
	if (data === "CONFERENCE_TERMINATED") {
		jitsiplugin.destroy(function (data) {
			// call finished
		}, function (err) {
			console.log(err);
		});
	}
}

function fail(error) {
	console.log(error);
}
```

### Available statuses

- `CONFERENCE_JOINED`
- `CONFERENCE_WILL_JOIN`
- `CONFERENCE_TERMINATED`
- `PARTICIPANT_JOINED`
- `PARTICIPANT_LEFT`

# Credits

* Big thanks to @peixoto2000 for helping figure out how to embed the frameworks into the project automatically
