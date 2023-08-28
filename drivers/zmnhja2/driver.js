'use strict';

const { Driver } = require('homey');

class Zmnhja2Driver extends Driver {

  /**
   * onInit is called when the driver is initialized.
   */
  async onInit() {
    this.log('Driver Zmnhja2 has been initialized');
	
	 const cardActionChangeMode = this.homey.flow.getActionCard('zmnhja2_chauffe_mode_set');
	    cardActionChangeMode.registerRunListener(async (args) => {
			const { chauffe_mode } = args;
			await args.device.changeMode(chauffe_mode);
	})
	
  }

  /**
   * onPairListDevices is called when a user is adding a device
   * and the 'list_devices' view is called.
   * This should return an array with the data of devices that are available for pairing.
   */
  async onPairListDevices() {
    return [
      // Example device data, note that `store` is optional
      // {
      //   name: 'My Device',
      //   data: {
      //     id: 'my-device',
      //   },
      //   store: {
      //     address: '127.0.0.1',
      //   },
      // },
    ];
  }

}

module.exports = Zmnhja2Driver;
