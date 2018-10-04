FROM node:8.9 as node

RUN npm install pm2 -g
# ENV PM2_PUBLIC_KEY XXXX
# ENV PM2_SECRET_KEY YYYY
COPY . /usr/app-ldap-server/
COPY package.json /usr/app-ldap-server
#COPY .npmrc ./
WORKDIR /usr/app-ldap-server/
RUN npm install --only=production

#default environment variables
ENV NODE_ENV production
ENV PORT 8089
EXPOSE 8089
CMD ["pm2-runtime", "server.js"]