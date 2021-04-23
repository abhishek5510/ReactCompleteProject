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
-- Table structure for table `registration_details`
--

DROP TABLE IF EXISTS `registration_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration_details` (
  `veh_no` varchar(20) NOT NULL,
  `engine_no` varchar(20) DEFAULT NULL,
  `owner_id` int DEFAULT NULL,
  `date_of_purchase` date DEFAULT NULL,
  `distributer_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`veh_no`),
  KEY `engine_no` (`engine_no`),
  KEY `owner_id` (`owner_id`),
  CONSTRAINT `registration_details_ibfk_1` FOREIGN KEY (`engine_no`) REFERENCES `vehicle_details` (`engine_no`) ON DELETE CASCADE,
  CONSTRAINT `registration_details_ibfk_2` FOREIGN KEY (`owner_id`) REFERENCES `owner_details` (`owner_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration_details`
--

LOCK TABLES `registration_details` WRITE;
/*!40000 ALTER TABLE `registration_details` DISABLE KEYS */;
INSERT INTO `registration_details` VALUES ('123','Y',326,'2020-12-01','III'),('143','ii',255,'2020-12-08','eorj'),('2','uu',48,'2020-12-09','ii'),('233','yy',206,'2020-12-01','iuu'),('333','nnn',363,'2020-12-30','kmm'),('ii','iiiiii',48,'2021-01-09','jjj'),('uuuuu','uuuuuu',48,'2021-01-07','iii');
/*!40000 ALTER TABLE `registration_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-23 10:05:07
