module.exports = {
	plugins: [
		'stylelint-order',
		'stylelint-scss',
	],
	extends: 'stylelint-config-standard-scss',
	rules: {
		'alpha-value-notation': 'number',
		'color-function-notation': 'legacy',
		'declaration-block-no-redundant-longhand-properties': null,
		'selector-type-no-unknown': [true, {
			ignoreTypes: [/^\d*/],
			ignoreNamespaces: [/^\$.*/],
		}],
		'selector-class-pattern': null,
		'selector-id-pattern': null,
		'property-no-unknown': null,
		'no-descending-specificity': null,
		'scss/at-extend-no-missing-placeholder': null,
		'scss/at-import-no-partial-leading-underscore': null,
		'scss/no-global-function-names': null,
		'order/order': [
			'declarations',
			'custom-properties',
			{
				type: 'rule',
				selector: '^\\+media',
			},
			'at-rules',
			'at-variables',
			'rules',
		],
		'order/properties-order': [
			{
				noEmptyLineBetween: true,
				properties: [
					'visibility',
					'content',
					'counter-increment',
					'counter-reset',
					'counter-set',
					'position',
					'top',
					'right',
					'bottom',
					'left',
					'float',
					'display',
					'order',
					'flex',
					'flex-basis',
					'flex-direction',
					'flex-flow',
					'flex-grow',
					'flex-shrink',
					'flex-wrap',
					'grid',
					'grid-area',
					'grid-auto-columns',
					'grid-auto-flow',
					'grid-template',
					'grid-template-areas',
					'grid-template-columns',
					'grid-template-rows',
					'grid-row',
					'grid-row-end',
					'grid-row-gap',
					'grid-row-start',
					'grid-column',
					'grid-column-end',
					'grid-column-start',
					'grid-column-gap',
					'grid-gap',
					'justify-content',
					'justify-items',
					'justify-self',
					'justify-tracks',
					'align-content',
					'align-items',
					'align-self',
					'align-tracks',
					'vertical-align',
					'margin',
					'margin-block',
					'margin-block-end',
					'margin-block-start',
					'margin-inline',
					'margin-inline-end',
					'margin-inline-start',
					'margin-trim',
					'margin-top',
					'margin-right',
					'margin-bottom',
					'margin-left',
					'padding',
					'padding-block',
					'padding-block-end',
					'padding-block-start',
					'padding-inline',
					'padding-inline-end',
					'padding-inline-start',
					'padding-top',
					'padding-right',
					'padding-bottom',
					'padding-left',
					'box-sizing',
					'width',
					'height',
					'min-width',
					'min-height',
					'max-width',
					'max-height',
					'resize',
					'overflow',
					'overflow-x',
					'overflow-y',
					'list-style',
					'list-style-image',
					'list-style-position',
					'list-style-type',
					'line-height',
					'white-space',
					'letter-spacing',
					'text-align',
					'text-align-last',
					'text-anchor',
					'text-combine-upright',
					'text-decoration',
					'text-decoration-color',
					'text-decoration-line',
					'text-decoration-skip',
					'text-decoration-skip-ink',
					'text-decoration-style',
					'text-decoration-thickness',
					'text-emphasis',
					'text-emphasis-color',
					'text-emphasis-position',
					'text-emphasis-style',
					'text-indent',
					'text-justify',
					'text-orientation',
					'text-overflow',
					'text-renderin',
					'text-shadow',
					'text-size-adjust',
					'text-transform',
					'text-underline-offset',
					'text-underline-position',
					'font-family',
					'font-style',
					'font-variant',
					'font-weight',
					'font-size',
					'color',
					'background',
					'background-attachment',
					'background-blend-mode',
					'background-clip',
					'background-color',
					'background-image',
					'background-origin',
					'background-position',
					'background-position-x',
					'background-position-y',
					'background-repeat',
					'background-size',
					'border',
					'border-radius',
					'border-spacing',
					'border-start-end-radius',
					'border-start-start-radius',
					'border-style',
					'border-width',
					'border-block',
					'border-block-color',
					'border-block-end',
					'border-block-end-color',
					'border-block-end-style',
					'border-block-end-width',
					'border-block-start',
					'border-block-start-color',
					'border-block-start-style',
					'border-block-start-width',
					'border-block-style',
					'border-block-width',
					'border-collapse',
					'border-color',
					'border-end-end-radius',
					'border-end-start-radius',
					'border-image',
					'border-image-outset',
					'border-image-repeat',
					'border-image-slice',
					'border-image-source',
					'border-image-width',
					'border-inline',
					'border-inline-color',
					'border-inline-end',
					'border-inline-end-color',
					'border-inline-end-style',
					'border-inline-end-width',
					'border-inline-start',
					'border-inline-start-color',
					'border-inline-start-style',
					'border-inline-start-width',
					'border-inline-style',
					'border-inline-width',
					'border-top',
					'border-top-width',
					'border-top-color',
					'border-top-style',
					'border-right',
					'border-right-width',
					'border-right-color',
					'border-right-style',
					'border-bottom',
					'border-bottom-width',
					'border-bottom-color',
					'border-bottom-style',
					'border-left',
					'border-left-width',
					'border-left-color',
					'border-left-style',
					'border-top-left-radius',
					'border-top-right-radius',
					'border-bottom-right-radius',
					'border-bottom-left-radius',
					'outline',
					'box-shadow',
					'transform',
					'zoom',
					'opacity',
					'filter',
					'animation',
					'transition',
					'will-change',
					'cursor',
					'user-select',
					'pointer-events',
					'z-index',
				],
				unspecified: 'ignore',
			},
		],
	},
};
