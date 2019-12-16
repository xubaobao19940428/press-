#!/usr/bin/env sh

# ȷ���ű��׳������Ĵ���
set -e

# ���ɾ�̬�ļ�
npm run build

# �������ɵ��ļ���
cd docs/.vuepress/dist


git add -A
git commit -m 'deploy'

# �������Ҫ���� https://xubaobao19940428.github.io
git push -f git@github.com:xubaobao19940428/xubaobao19940428.github.io.git master

# ��������� https://USERNAME.github.io/<REPO>  REPO=github�ϵ���Ŀ
 git push -f git@github.com:xubaobao19940428/vuepress.git master:gh-pages

cd -