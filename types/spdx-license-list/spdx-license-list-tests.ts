import spdx = require('spdx-license-list');
import spdxSimple = require('spdx-license-list/simple');
import spdxFull = require('spdx-license-list/full');

for (const id of spdxSimple) {
	if (spdx[id].name !== spdxFull[id].name) {
		throw new Error('License name mismatch: ' + id);
	}
	if (spdx[id].osiApproved !== spdxFull[id].osiApproved) {
		throw new Error('License approval mismatch: ' + id);
	}
	if (spdx[id].url !== spdxFull[id].url) {
		throw new Error('License URL mismatch: ' + id);
	}
}
