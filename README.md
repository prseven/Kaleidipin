## Kaleidipin App


## To Run App
1. Make changes in the Application Properties by replacing the *** in db connections by your db instance credentials</br>

2. Run the Kafka Server First</br>
   i. Open a cmd , redirect to kafka folder</br>
   ii. First run the Zookeeper Server - .\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties</br>
   iii. Secondly run the config server - .\bin\windows\kafka-server-start.bat .\config\server.properties</br></br>

3. Open the Kaleidipin BackEnd in the IDE, Run the microservices in the Following Order</br>
   i. Eureka Server</br>
   ii. Config Server</br>
   iii. API Gateway</br>
   iv. UserProfile Service</br>
   v. Authorization Server</br>
   vi. APOD Service</br>
   vii. Favourite Service</br></br>

4. Open the Kaleidipin FrontEnd in VS Code, Run the following commands</br>
   i. npm install</br>
   ii. npm run start</br></br>

5. The App will start running in the Browser.</br>
