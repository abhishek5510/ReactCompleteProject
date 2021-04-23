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
-- Table structure for table `owner_details`
--

DROP TABLE IF EXISTS `owner_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `owner_details` (
  `owner_id` int NOT NULL,
  `fname` varchar(30) DEFAULT NULL,
  `lname` varchar(30) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `mobile_no` varchar(20) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `temp_add` varchar(20) DEFAULT NULL,
  `perm_add` varchar(20) DEFAULT NULL,
  `pincode` int DEFAULT NULL,
  `occupation` varchar(10) DEFAULT NULL,
  `pancard_no` varchar(20) DEFAULT NULL,
  `add_proof_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`owner_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `owner_details`
--

LOCK TABLES `owner_details` WRITE;
/*!40000 ALTER TABLE `owner_details` DISABLE KEYS */;
INSERT INTO `owner_details` VALUES (48,'ii','ii','2020-12-02','99','jj','abhishek.18is004@cambridge.edu.in','oo','oo',0,'oo','89','uiu'),(206,'uu','uu','2020-12-09','88','uu','abhisheknathdubey5510@gmail.com','ii','uu',0,'gg','99','iii'),(255,'Abhisheknathdubey','Nathdubey','2020-12-02','99','Y','abhisheknathdubey5510@gmail.com','yui','efwer',99,'iu','00','kkk'),(326,'JJ','II','2021-01-03','99','UU','abhisheknathdubey5510@gmail.com','II','II',88,'II','00','HH'),(363,'nnann','nnnew','2020-12-30','9888','male','ab123@gmail.com','bbb','bbbbb',821,'ff','7172','des');
/*!40000 ALTER TABLE `owner_details` ENABLE KEYS */;
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
