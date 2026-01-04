#!/bin/bash
set -e
cd frontend
npm install
npx tsc --noEmit && npm run build
npm start
