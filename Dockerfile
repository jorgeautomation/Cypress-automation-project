#check node -v first in cmd to see your version and put it in base
FROM cypress/base:8
WORKDIR /app 
#app can be whatever name you want

#copy package file to teh /app directory
COPY package.json .
COPY package-lock.json .

#Run the npm installation
RUN npm install --save-dev cypress

#verify the cypress installation
RUN $(npm bin)/cypress verify

#then copy cypress
COPY cypress cypress
COPY cypress.json .

RUN $(npm bin)/cypress