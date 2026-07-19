#!/bin/bash
set -e

mkdir -p /data/telegram-bot-api /tmp/telegram-bot-api

telegram-bot-api \
  --local \
  --api-id="${TELEGRAM_API_ID}" \
  --api-hash="${TELEGRAM_API_HASH}" \
  --http-port=8081 \
  --dir=/data/telegram-bot-api \
  --temp-dir=/tmp/telegram-bot-api &

exec node server/server.js
