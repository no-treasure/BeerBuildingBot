## BeerBuildingBot for Telegram

> A bot for joint ordering in bars, a conveniently distributed check for each
> person so that everyone knows how much to chip in

- https://t.me/beerBuildingBot

### Commands

- **/add**: Add order to your check
- **/check**: Finnal check includes all persons
- **/my_check**: Check includes only your order
- **/reset_check**: Reset check to default
- **/tips**: See current tips value
- **/set_tips**: Set tips value
- **/help**: See command list and description
- **/hello**: Greetings with bot

## Getting Started

First of all, you need to create your own bot via
[@BotFather](https://telegram.me/BotFather). After creating, BotFather give you
bot token. Keep this token and follow steps bellow.

1. Clone repository

```bash
git clone https://github.com/ArseniySushCorp/BeerBuildingBot.git
```

2. Go to new directory

```bash
cd BeerBuildingBot
```

3. Create env file and add bot token

```bash
echo 'BOT_TOKEN=<your-bot-token>' > .env
```

4. Run bot in dev mode

```bash
deno task dev
```
