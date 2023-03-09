import { createRoot } from 'react-dom/client';

import Editor from './editor';

import './style.scss';

document.addEventListener( 'DOMContentLoaded', () => {
	createRoot( document.getElementById( 'block-editor-playground' )! ).render(
		<Editor settings={ {} } />
	);
} );
