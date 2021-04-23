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
-- Table structure for table `offence_details`
--

DROP TABLE IF EXISTS `offence_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `offence_details` (
  `veh_no` varchar(20) DEFAULT NULL,
  `otime` datetime DEFAULT NULL,
  `place` varchar(20) DEFAULT NULL,
  `offence_id` varchar(20) DEFAULT NULL,
  `reported_by` varchar(20) DEFAULT NULL,
  `vehicle_status` varchar(100) DEFAULT NULL,
  `payment` varchar(10) DEFAULT NULL,
  KEY `veh_no` (`veh_no`),
  KEY `offence_id` (`offence_id`),
  CONSTRAINT `offence_details_ibfk_1` FOREIGN KEY (`veh_no`) REFERENCES `registration_details` (`veh_no`) ON DELETE CASCADE,
  CONSTRAINT `offence_details_ibfk_2` FOREIGN KEY (`offence_id`) REFERENCES `offence` (`offence_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offence_details`
--

LOCK TABLES `offence_details` WRITE;
/*!40000 ALTER TABLE `offence_details` DISABLE KEYS */;
INSERT INTO `offence_details` VALUES ('143','2020-12-01 19:46:00','3e','5','e3','Payment Completed','Paid'),('143','2020-12-01 19:46:00','www','6','e','Payment Completed','Paid'),('2','2020-12-10 19:46:00','3e','7','34','Payment Done From Office','Paid'),('2','2020-12-11 19:47:00','www','8','e3e','Payment Done From Office','Paid'),('2','2020-12-02 19:47:00','www','4','d','Payment Done From Office','Paid'),('2','2020-12-04 19:48:00','3e','6','ee','Payment Done From Office','Paid'),('2','2020-12-02 19:48:00','www','4','e3','Payment Done From Office','Paid'),('123','2020-12-02 18:17:00','www','7','e3e','released on spot','Paid'),('123','2020-12-09 18:17:00','www','8','d','Payment Done From Office','Paid'),('123','2021-01-08 09:25:00','www','5','e3e','Payment Done From Office','Paid'),('123','2021-01-01 09:28:00','www','5','e','Payment Done From Office','Paid'),('123','2021-01-07 09:28:00','3e','6','d','Payment Done From Office','Paid'),('123','2021-01-12 09:29:00','3e','5','34','Payment Done From Office','Paid'),('123','2021-01-12 09:29:00','www','5','ee','Payment Done From Office','Paid'),('123','2021-01-27 00:34:00','www','1','d','Payment Done From Office','Paid'),('123','2020-12-30 10:35:00','3e','5','ee','Payment Done From Office','Paid'),('123','2021-01-13 10:35:00','www','5','e3','Payment Done From Office','Paid'),('123','2021-01-06 10:36:00','www','5','e','Payment Done From Office','Paid'),('123','2021-01-04 21:01:00','www','1','e3e','Vehicle Released For Time Being','Unpaid'),('123','2021-03-23 11:55:00','www','2','ee','Vehicle Released For Time Being','Unpaid'),('123','2021-03-03 11:56:00','www','5','d','Vehicle Released For Time Being','Unpaid');
/*!40000 ALTER TABLE `offence_details` ENABLE KEYS */;
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
