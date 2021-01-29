# real_estate

## DB
mysql v5.7 
```
# Dump of table buildings
# ------------------------------------------------------------

DROP TABLE IF EXISTS `buildings`;

CREATE TABLE `buildings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `lessor_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `buildings_lessors_id_FK` (`lessor_id`),
  CONSTRAINT `buildings_lessors_id_FK` FOREIGN KEY (`lessor_id`) REFERENCES `lessors` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table lessors
# ------------------------------------------------------------

DROP TABLE IF EXISTS `lessors`;

CREATE TABLE `lessors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table room_prices
# ------------------------------------------------------------

DROP TABLE IF EXISTS `room_prices`;

CREATE TABLE `room_prices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `deposit` int(11) DEFAULT NULL,
  `monthly` int(11) DEFAULT NULL,
  `room_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `room_prices_rooms_id_FK` (`room_id`),
  CONSTRAINT `room_prices_rooms_id_FK` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table rooms
# ------------------------------------------------------------

DROP TABLE IF EXISTS `rooms`;

CREATE TABLE `rooms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `floor` int(32) DEFAULT NULL,
  `number` int(32) DEFAULT NULL,
  `building_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rooms_buildings_id_FK` (`building_id`),
  CONSTRAINT `rooms_buildings_id_FK` FOREIGN KEY (`building_id`) REFERENCES `buildings` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
