#!/bin/bash
set -e
npm install
npx tsc --noEmit && npm run build
npm start
