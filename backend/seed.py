from app import app
from models import db, Category, Product


def seed_database():

    with app.app_context():

        # --------------------------------
        # Categories
        # --------------------------------

        categories_data = [
            {
                "name": "Development Boards",
                "slug": "development-boards",
                "description": "Arduino, ESP, Raspberry Pi and other development boards"
            },
            {
                "name": "Sensors",
                "slug": "sensors",
                "description": "Sensors and sensor modules for electronics and robotics"
            },
            {
                "name": "Motor Drivers",
                "slug": "motor-drivers",
                "description": "DC, stepper and servo motor driver modules"
            },
            {
                "name": "Electronic Components",
                "slug": "electronic-components",
                "description": "Resistors, capacitors, LEDs, switches and other components"
            },
            {
                "name": "Power Supply",
                "slug": "power-supply",
                "description": "Power adapters, converters and power modules"
            },
            {
                "name": "Displays & Modules",
                "slug": "displays-modules",
                "description": "LCD, OLED and other electronic modules"
            },
            {
                "name": "IoT & Wireless",
                "slug": "iot-wireless",
                "description": "WiFi, Bluetooth and wireless communication modules"
            },
        ]

        categories = {}

        for data in categories_data:

            category = Category.query.filter_by(
                slug=data["slug"]
            ).first()

            if not category:
                category = Category(**data)
                db.session.add(category)

            categories[data["slug"]] = category

        db.session.flush()

        # --------------------------------
        # Products
        # --------------------------------

        products_data = [

            # ==============================
            # DEVELOPMENT BOARDS
            # ==============================

            {
                "category": "development-boards",
                "name": "Arduino Uno R3",
                "slug": "arduino-uno-r3",
                "description": "ATmega328P based development board for Arduino projects",
                "price": 2399.00,
                "stock": 25
            },

            {
                "category": "development-boards",
                "name": "Arduino Nano CH340",
                "slug": "arduino-nano-ch340",
                "description": "Compact Arduino compatible development board",
                "price": 209.00,
                "stock": 50
            },

            {
                "category": "development-boards",
                "name": "ESP32 Development Board",
                "slug": "esp32-development-board",
                "description": "WiFi and Bluetooth enabled ESP32 development board",
                "price": 499.00,
                "stock": 40
            },

            {
                "category": "development-boards",
                "name": "Raspberry Pi Pico",
                "slug": "raspberry-pi-pico",
                "description": "RP2040 based microcontroller development board",
                "price": 449.00,
                "stock": 30
            },


            # ==============================
            # SENSORS
            # ==============================

            {
                "category": "sensors",
                "name": "HC-SR04 Ultrasonic Sensor",
                "slug": "hc-sr04-ultrasonic-sensor",
                "description": "Ultrasonic distance measurement sensor module",
                "price": 79.00,
                "stock": 100
            },

            {
                "category": "sensors",
                "name": "DHT11 Temperature Humidity Sensor",
                "slug": "dht11-temperature-humidity-sensor",
                "description": "Digital temperature and humidity sensor module",
                "price": 69.00,
                "stock": 100
            },

            {
                "category": "sensors",
                "name": "IR Obstacle Avoidance Sensor",
                "slug": "ir-obstacle-avoidance-sensor",
                "description": "Infrared obstacle detection sensor module",
                "price": 26.00,
                "stock": 100
            },

            {
                "category": "sensors",
                "name": "Flame Sensor Module",
                "slug": "flame-sensor-module",
                "description": "Infrared flame detection sensor module",
                "price": 36.00,
                "stock": 75
            },

            {
                "category": "sensors",
                "name": "MQ-9 Gas Sensor Module",
                "slug": "mq9-gas-sensor-module",
                "description": "Gas sensor module for CO, methane and LPG detection",
                "price": 119.00,
                "stock": 50
            },

            {
                "category": "sensors",
                "name": "LDR Light Sensor Module",
                "slug": "ldr-light-sensor-module",
                "description": "Photosensitive resistor based light sensor module",
                "price": 28.00,
                "stock": 100
            },


            # ==============================
            # MOTOR DRIVERS
            # ==============================

            {
                "category": "motor-drivers",
                "name": "L298N Motor Driver Module",
                "slug": "l298n-motor-driver",
                "description": "Dual H-Bridge motor driver module for DC motors",
                "price": 124.00,
                "stock": 75
            },

            {
                "category": "motor-drivers",
                "name": "TB6612FNG Motor Driver",
                "slug": "tb6612fng-motor-driver",
                "description": "Compact dual DC motor driver module",
                "price": 131.00,
                "stock": 50
            },

            {
                "category": "motor-drivers",
                "name": "A4988 Stepper Motor Driver",
                "slug": "a4988-stepper-driver",
                "description": "Stepper motor driver module for microcontroller projects",
                "price": 128.00,
                "stock": 60
            },

            {
                "category": "motor-drivers",
                "name": "ULN2003 Stepper Motor Driver",
                "slug": "uln2003-stepper-driver",
                "description": "ULN2003 based stepper motor driver module",
                "price": 38.00,
                "stock": 100
            },

            {
                "category": "motor-drivers",
                "name": "DRV8833 Motor Driver",
                "slug": "drv8833-motor-driver",
                "description": "Compact dual H-bridge motor driver module",
                "price": 83.00,
                "stock": 50
            },


            # ==============================
            # ELECTRONIC COMPONENTS
            # ==============================

            {
                "category": "electronic-components",
                "name": "LED 5mm Assorted Pack",
                "slug": "led-5mm-assorted-pack",
                "description": "Assorted 5mm LEDs for electronic projects",
                "price": 99.00,
                "stock": 100
            },

            {
                "category": "electronic-components",
                "name": "Resistor Assortment Kit",
                "slug": "resistor-assortment-kit",
                "description": "Assorted resistor values for electronics projects",
                "price": 149.00,
                "stock": 80
            },

            {
                "category": "electronic-components",
                "name": "Capacitor Assortment Kit",
                "slug": "capacitor-assortment-kit",
                "description": "Assorted capacitors for electronics projects",
                "price": 179.00,
                "stock": 70
            },

            {
                "category": "electronic-components",
                "name": "2 Pin Push Button",
                "slug": "2-pin-push-button",
                "description": "Momentary push button switch",
                "price": 10.00,
                "stock": 200
            },

            {
                "category": "electronic-components",
                "name": "5V Relay Module",
                "slug": "5v-relay-module",
                "description": "Single channel 5V relay module",
                "price": 49.00,
                "stock": 100
            },


            # ==============================
            # POWER SUPPLY
            # ==============================

            {
                "category": "power-supply",
                "name": "5V 5A Power Adapter",
                "slug": "5v-5a-power-adapter",
                "description": "5V DC regulated power adapter",
                "price": 849.00,
                "stock": 30
            },

            {
                "category": "power-supply",
                "name": "12V 1A Power Adapter",
                "slug": "12v-1a-power-adapter",
                "description": "12V DC regulated power adapter",
                "price": 339.00,
                "stock": 50
            },

            {
                "category": "power-supply",
                "name": "LM2596 Buck Converter",
                "slug": "lm2596-buck-converter",
                "description": "Adjustable DC-DC step down converter module",
                "price": 59.00,
                "stock": 100
            },


            # ==============================
            # DISPLAYS & MODULES
            # ==============================

            {
                "category": "displays-modules",
                "name": "0.96 Inch OLED Display",
                "slug": "096-inch-oled-display",
                "description": "I2C OLED display module for microcontroller projects",
                "price": 149.00,
                "stock": 50
            },

            {
                "category": "displays-modules",
                "name": "16x2 LCD Display",
                "slug": "16x2-lcd-display",
                "description": "16 character by 2 line LCD module",
                "price": 99.00,
                "stock": 75
            },

            {
                "category": "displays-modules",
                "name": "PCA9685 16 Channel PWM Driver",
                "slug": "pca9685-pwm-driver",
                "description": "16 channel 12-bit PWM servo driver with I2C interface",
                "price": 229.00,
                "stock": 40
            },


            # ==============================
            # IOT & WIRELESS
            # ==============================

            {
                "category": "iot-wireless",
                "name": "ESP-01 WiFi Module",
                "slug": "esp-01-wifi-module",
                "description": "ESP8266 based WiFi module",
                "price": 149.00,
                "stock": 75
            },

            {
                "category": "iot-wireless",
                "name": "ESP-01 Adapter Board",
                "slug": "esp-01-adapter-board",
                "description": "3.3V and 5V compatible adapter board for ESP-01",
                "price": 63.00,
                "stock": 75
            },

            {
                "category": "iot-wireless",
                "name": "HC-05 Bluetooth Module",
                "slug": "hc-05-bluetooth-module",
                "description": "Bluetooth serial communication module",
                "price": 249.00,
                "stock": 50
            }
        ]

        # --------------------------------
        # Insert products
        # --------------------------------

        for data in products_data:

            existing_product = Product.query.filter_by(
                slug=data["slug"]
            ).first()

            if existing_product:
                continue

            product = Product(
                category_id=categories[data["category"]].id,
                name=data["name"],
                slug=data["slug"],
                description=data["description"],
                price=data["price"],
                stock=data["stock"],
                is_active=True
            )

            db.session.add(product)

        db.session.commit()

        print("Electronics test catalog seeded successfully!")


if __name__ == "__main__":
    seed_database()