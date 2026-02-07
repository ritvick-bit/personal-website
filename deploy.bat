@echo off
set PATH=%PATH%;C:\Program Files\nodejs
git add .
git commit -m "Update content and structure: WhatIDo, GreenBackground, Contact"
call npm run deploy
