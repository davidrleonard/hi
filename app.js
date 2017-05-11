const ts = require('tinyspeck');
const {PORT, TOKEN} = process.env;

// Sets defaults for all Slack API calls
const slack = ts.instance({ token: TOKEN });

// Regex to match messages against, checks if the DM is "Hi" or "Hello" (case insensitive)
const pattern = /[H|h]ello|[H|h]i/;

// Respond to Slack Event API challenge (https://api.slack.com/events/url_verification)
slack.on('url_verification', payload => {
  const message = {
    challenge: payload.event.challenge
  }
  slack.send(message);
});

// Respond to DM events. If DM matches `pattern`, auto respond with "Hi".
slack.on('message.im', payload => {
  const {text, channel} = payload.event;

  if (pattern.test(text)) {
    const message = {
      channel: channel,
      text: 'Hi',
      as_user: true
    }
    slack.send(message);
  }
});

// Listen for incoming HTTP requests from Slack Event API
slack.listen(PORT);
