#!/bin/bash
mongod --dbpath ~/.mongo-data/ &
~/Programs/roboMongo/bin/robo3t
kill -9 $(pgrep mongod)
