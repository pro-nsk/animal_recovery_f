#!/bin/sh

unzip -o baza_f.zip -d /var/www/baza_f/
find /var/www/baza_f/ -type d -exec chmod 0755 {} \;
find /var/www/baza_f/ -type f -exec chmod 0644 {} \;
rm baza_f.zip