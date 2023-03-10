import { createRoot } from 'react-dom/client';

import Editor from './editor';

import './style.scss';

document.addEventListener( 'DOMContentLoaded', () => {
	const root = document.getElementById( 'block-editor-playground' );
	if ( ! root ) {
		throw new Error(
			'Root element `block-editor-playground` missing from document'
		);
	}
	createRoot( root ).render( <Editor settings={ {} } /> );
} );
