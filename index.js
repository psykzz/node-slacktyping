const { RTMClient } = require('@slack/client');
const rtm = new RTMClient(process.env.SLACK_TOKEN);

rtm.start();

rtm.on('user_typing', event => rtm.sendTyping(event.channel));
