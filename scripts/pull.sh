#!/usr/bin/env sh
git pull
# 初始化submodule
git submodule update --init --recursive
# 将submodule更新到最新的commit版本
git submodule update --remote
