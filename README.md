## Kaleidipin App
Make changes in the Application Properties by replacing the *** in db connections by your db instance credentials

## To Run App
1. Run the Kafka Server First
   i. Open a cmd , redirect to kafka folder
   ii. First run the Zookeeper Server - .\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties
   iii. Secondly run the config server - .\bin\windows\kafka-server-start.bat .\config\server.properties

2. Open the Kaleidipin BackEnd in the IDE, Run the microservices in the Following Order
   i. Eureka Server
   ii. Config Server
   iii. API Gateway
   iv. UserProfile Service
   v. Authorization Server
   vi. APOD Service
   vii. Favourite Service

3. Open the Kaleidipin FrontEnd in VS Code, Run the following commands
   i. npm install
   ii. npm run start

4. The App will start running in the Browser.
