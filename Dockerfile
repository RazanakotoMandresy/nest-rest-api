FROM node:22-alpine3.19
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["*.json","./"]
RUN npm install -g @nestjs/cli && npm install
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm","start"]
