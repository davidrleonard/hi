Hi
==========================

A Slack bot that gets to the point. If someone direct messages you saying "Hi" or "Hello", the bot will automatically respond with "Hi" as your username.

It's based on (a phrase which here means "completely ripped off from") the Slack [onboarding example](https://github.com/slackapi/onboarding-example) app.

## Running it

**Prerequisites:**
* node
* ngrok (if you want to test it locally, not for production)

**First time:**

1) Clone this repository and run `yarn` or `npm install` to get required dependencies

2) Get a [Slack legacy token](https://api.slack.com/custom-integrations/legacy-tokens) (this app doesn't do the OAUTH daunce).

3) Create a [Slack app](https://api.slack.com/apps/new). Name it whatever you want. It doesn't matter.

4) Start up the node server. You'll need to give it a port and your token to configure it:

```
$ PORT=3000 TOKEN=YOUR_TOKEN_HERE node app.js
```

If you're running this on your local machine behind a firewall, you'll want to start up ngrok to make sure the Slack API can reach you:

```
$ ngrok http 3000
```

If you're running this on a public server, make sure you're using a reverse proxy like nginx to direct incoming traffic from port 80 to the PORT you specified (or just start the app using port 80).

5) Open your [Slack app webpage](https://api.slack.com/apps/) and open the Event Subscriptions page for the app. Paste your ngrok URL or public server URL into the `Request URL` field. The app will automatically handle the challenge/response process and the field should be marked as verified.

6) Under `Subscribe to Team Events`, click `Add Team Event`. Subscribe to the `message.im` event. Your legacy token will automatically have the scope needed to handle this event.

Done! Have someone direct message you saying "Hi" and see what happens. :)

## License (MIT)

Copyright 2017 David R. Leonard

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
