import React from 'react';
import Uppy from '@uppy/core';
import Tus from '@uppy/tus';
import { DragDrop } from '@uppy/react';
import { Dashboard } from '@uppy/react';
// import '@uppy/core/dist/style.css';
// import '@uppy/drag-drop/dist/style.css';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
const XHRUpload = require('@uppy/xhr-upload');

const uppy = new Uppy({
	meta: { type: 'avatar' },
	restrictions: { maxNumberOfFiles: 1 },
	autoProceed: true,
	debug: true,
	limit: 5
});

uppy.use(XHRUpload, {
	id: 'XHRUpload',
	endpoint: 'http://localhost:2000/upload',
	method: 'POST',
	formData: true,
	fieldName: 'info',
	metaFields: []
});

//uppy.use(Tus, { endpoint: 'http://localhost:2000/upload' });

uppy.on('complete', (result) => {
	console.log(result);
});

const AvatarPicker = ({ currentAvatar }) => {
	return (
		<div>
			<img src={currentAvatar} alt="Current Avatar" />
			<Dashboard uppy={uppy} plugins={[ 'Webcam' ]} />
		</div>
	);
};

export default AvatarPicker;
