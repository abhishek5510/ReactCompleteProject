-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: traffic_offence_system
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `vehicle_details`
--

DROP TABLE IF EXISTS `vehicle_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle_details` (
  `veh_type` varchar(5) DEFAULT NULL,
  `engine_no` varchar(20) NOT NULL,
  `model_no` varchar(20) DEFAULT NULL,
  `veh_name` varchar(30) DEFAULT NULL,
  `veh_color` varchar(20) DEFAULT NULL,
  `manufacturer_name` varchar(20) DEFAULT NULL,
  `date_of_manufacture` date DEFAULT NULL,
  `no_of_cyclinders` int DEFAULT NULL,
  `cubic_capacity` int DEFAULT NULL,
  `fuel_used` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`engine_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle_details`
--

LOCK TABLES `vehicle_details` WRITE;
/*!40000 ALTER TABLE `vehicle_details` DISABLE KEYS */;
INSERT INTO `vehicle_details` VALUES ('iiu','ii','ii','ii','ii','ii','2021-01-05',0,99,'jj'),('iiii','iiiiii','iiiiii','iiiiii','iiiiii','iiiiiii','2021-01-08',99,99,'iiiiii'),('nn','nnn','nnn','nnn','nnn','nnn','2021-02-02',2,43,'j'),('uu','uu','uu','uu','uu','uu','2021-01-06',9,99,'jj'),('uuuuu','uuuuuu','uuuuu','uuuuuuu','uuuuuuuu','uuuuuuuu','2020-12-26',99,999,'jjj'),('y','Y','Y','Y','Y','Y','2021-01-05',9,99,'HH'),('yy','yy','yy','y','yy','yy','2021-01-06',99,99,'uu');
/*!40000 ALTER TABLE `vehicle_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-23 10:05:06
