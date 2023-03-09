import { registerCoreBlocks } from '@wordpress/block-library';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Editor from './editor';

import './style.css';

document.addEventListener( 'DOMContentLoaded', () => {
	registerCoreBlocks();

	createRoot( document.getElementById( 'root' )! ).render(
		<StrictMode>
			<Editor settings={ {} } />
		</StrictMode>
	);
} );
