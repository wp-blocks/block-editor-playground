import path from 'node:path';

import replace from '@rollup/plugin-replace';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig( {
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@/globals.scss" as *;`,
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve( __dirname, 'src' ),
		},
	},
	plugins: [
		react(),
		replace( {
			preventAssignment: true,
			'process.env.IS_GUTENBERG_PLUGIN': JSON.stringify( false ),
		} ),
	],
} );
