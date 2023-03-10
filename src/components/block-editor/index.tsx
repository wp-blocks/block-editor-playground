/**
 * WordPress dependencies
 */
// import '@wordpress/editor'; // This shouldn't be necessary
import '@wordpress/format-library';
import {
	BlockEditorKeyboardShortcuts,
	BlockEditorProvider,
	BlockList,
	BlockTools,
	BlockInspector,
	WritingFlow,
	ObserveTyping,
} from '@wordpress/block-editor';
import { serialize, parse, type BlockInstance } from '@wordpress/blocks';
import { Popover } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Sidebar from '../sidebar';

function BlockEditor( { settings: _settings } ) {
	const [ blocks, updateBlocks ] = useState< BlockInstance[] >( [] );
	const { createInfoNotice } = useDispatch( 'core/notices' );

	useEffect( () => {
		const storedBlocks = window.localStorage.getItem( 'playgroundBlocks' );

		if ( storedBlocks?.length ) {
			handleUpdateBlocks( () => parse( storedBlocks ) );
			createInfoNotice( 'Blocks loaded', {
				type: 'snackbar',
				isDismissible: true,
			} );
		}
	}, [] );

	/**
	 * Wrapper for updating blocks. Required as `onInput` callback passed to
	 * `BlockEditorProvider` is now called with more than 1 argument. Therefore
	 * attempting to setState directly via `updateBlocks` will trigger an error
	 * in React.
	 *
	 * @param blocks
	 * @param _blocks
	 */
	function handleUpdateBlocks( _blocks: BlockInstance[] ) {
		updateBlocks( _blocks );
	}

	function handlePersistBlocks( newBlocks: BlockInstance[] ) {
		updateBlocks( newBlocks );
		window.localStorage.setItem(
			'playgroundBlocks',
			serialize( newBlocks )
		);
	}

	return (
		<div className="block-editor-playground">
			<BlockEditorProvider
				value={ blocks }
				onInput={ handleUpdateBlocks }
				onChange={ handlePersistBlocks }
				settings={ {} }
			>
				<Sidebar.InspectorFill>
					<BlockInspector />
				</Sidebar.InspectorFill>
				<BlockTools>
					<div className="editor-styles-wrapper">
						<BlockEditorKeyboardShortcuts.Register />
						<WritingFlow>
							<ObserveTyping>
								<BlockList className="block-editor-playground__block-list" />
							</ObserveTyping>
						</WritingFlow>
					</div>
				</BlockTools>
				<Popover.Slot />
			</BlockEditorProvider>
		</div>
	);
}

export default BlockEditor;
