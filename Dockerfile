FROM node:0.10-onbuild
EXPOSE 3000

COPY . /src

CMD ["node", "/src/index.js"]