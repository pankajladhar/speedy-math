#!/usr/bin/env bash

if [ -d "./static" ]
then
    rm -rf static
fi

if [ -d "./fonts" ]
then
    rm -rf fonts
fi

mv ./build/* ./

today=`date '+%Y_%m_%d__%H_%M_%S'`;
git add .
git commit -am "Deployed at $today"
git push origin gh-pages
