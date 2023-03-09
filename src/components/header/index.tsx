/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

export default function Header() {
	return (
		<div
			className="playground-header"
			role="region"
			aria-label={ __( 'Standalone Editor top bar.', 'playground' ) }
			tabIndex={ -1 }
		>
			<h1 className="playground-header__title">
				{ __( 'Standalone Block Editor', 'playground' ) }
			</h1>
		</div>
	);
}
