/**
 * WordPress dependencies
 */
import { BlockBreadcrumb } from '@wordpress/block-editor';
import { registerCoreBlocks } from '@wordpress/block-library';
import { SlotFillProvider } from '@wordpress/components';
import { StrictMode, useEffect } from '@wordpress/element';
import { FullscreenMode, InterfaceSkeleton } from '@wordpress/interface';
import { ShortcutProvider } from '@wordpress/keyboard-shortcuts';
import '@wordpress/format-library';

/**
 * Internal dependencies
 */
import BlockEditor from './components/block-editor';
import Notices from './components/notices';
import Sidebar from './components/sidebar';

function Editor( { settings }: { settings: Record< string, unknown > } ) {
	useEffect( () => {
		registerCoreBlocks();
	}, [] );

	return (
		<>
			<StrictMode>
				<ShortcutProvider>
					<FullscreenMode isActive={ true } />
					<SlotFillProvider>
						<InterfaceSkeleton
							sidebar={ <Sidebar /> }
							footer={ <BlockBreadcrumb /> }
							content={
								<>
									<Notices />
									<BlockEditor settings={ settings } />
								</>
							}
						/>
					</SlotFillProvider>
				</ShortcutProvider>
			</StrictMode>
		</>
	);
}

export default Editor;
