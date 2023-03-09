import { registerCoreBlocks } from '@wordpress/block-library';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Editor from './editor';

import './style.scss';

document.addEventListener( 'DOMContentLoaded', () => {
	registerCoreBlocks();

	createRoot( document.getElementById( 'block-editor-playground' )! ).render(
		<StrictMode>
			<Editor settings={ {} } />
		</StrictMode>
	);
} );
