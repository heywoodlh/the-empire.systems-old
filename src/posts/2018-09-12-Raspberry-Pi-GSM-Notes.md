---
title: 'Raspberry Pi GSM Modem Notes'
layout: post.html
date: 2018-09-12
draft: false
---


Recently, I bought a GSM shield/hat for my Raspberry Pi to tinker around with GSM and learn more about how phones work on a lower level: [https://www.amazon.com/Raspberry-Bluetooth-Expansion-Compatible-DataTransfer/dp/B076CPX4NN](https://www.amazon.com/Raspberry-Bluetooth-Expansion-Compatible-DataTransfer/dp/B076CPX4NN)



Here are some notes to help fellow tinkerers as I found very little helpful information out there regarding how to interact with GSM modem using a Raspberry Pi.


### Helpful Resources:

[GSM/GPRS/GNSS Hat WaveShare Wiki](https://www.waveshare.com/wiki/GSM/GPRS/GNSS_HAT)




### Installation: 


![alt text](https://the-empire.systems/images/raspberry-pi-gsm.jpg "Raspberry Pi GSM module")


Place the shield on top of the Pi using the corresponding connector that goes with the pins similar to what is shown in the above photo.

That will be sufficient to supply a serial connection and power to the Hat from the Raspberry Pi. 

If you'd like to connect another host to the hat, use the USB TO UART connection using the USB cable that was included with the Hat (the USB cable only has one possible connection it can plug into on the Hat).



### Connect the Modem to the Network and Connect Directly to the Modem:

Per the wiki article, the CP2102 driver must be installed on the host that will connect to the SIM. Fortunately, this driver has been included in the Linux kernel since 2.6 and can be enabled with `sudo modprobe cp210x`. Check that the module has been enabled with `lsmod | grep 'cp210x'`.


After this, press the PWRKEY button on the Hat for one second (it hangs off the side and literally says "PWRKEY" on the Hat's board so it should be relatively easy to find). The NET indicator should start blinking about 1 time per second meaning that the module has not logged in to the GSM network. After it logs in successfully, the NET indicator should start blinking once every 3 seconds.


The modem on my external host connected via the USB to UART cable (running Arch Linux) was assigned the file `/dev/ttyUSB1` which I found by running `dmesg | grep tty`. I verified it was using the correct driver because the output stated `usb 1-11: cp210x converter now attached to ttyUSB1`. 

Again, the device file that came using the USB cable was `/dev/ttyUSB1`.

On the Pi that the SIM is connected to, the device file was `/dev/ttyAMA0`.



Retrieve the serial settings of the device using `stty`: 

`sudo stty -F /dev/ttyUSB1`



According to the Waveshare wiki the baud rate is 115200. Connect to the device using `screen`:


`sudo screen /dev/ttyUSB1 115200`
