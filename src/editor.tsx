/**
 * WordPress dependencies
 */
import {
	Popover,
	SlotFillProvider,
	FocusReturnProvider,
} from '@wordpress/components';
import { StrictMode } from '@wordpress/element';
import { FullscreenMode, InterfaceSkeleton } from '@wordpress/interface';
import { ShortcutProvider } from '@wordpress/keyboard-shortcuts';
import '@wordpress/format-library';

/**
 * Internal dependencies
 */
import BlockEditor from './components/block-editor';
import Header from './components/header';
import Notices from './components/notices';
import Sidebar from './components/sidebar';

function Editor( { settings } ) {
	return (
		<>
			<StrictMode>
				<ShortcutProvider>
					<FullscreenMode isActive={ true } />
					<SlotFillProvider>
						<InterfaceSkeleton
							sidebar={ <Sidebar /> }
							content={
								<>
									<Notices />
									<BlockEditor settings={ settings } />
								</>
							}
						/>
						<Popover.Slot />
					</SlotFillProvider>
				</ShortcutProvider>
			</StrictMode>
		</>
	);
}

export default Editor;
