const TWO_COl_MENU_ITEMS = [
	{
		key: 'dashboard',
		icon: 'smart-home',
		label: 'Dashboard',
		isTitle: true,
		children: [
			{
				key: 'ds-crypto',
				label: 'Crypto',
				url: '/dashboards/crypto',
				parentKey: 'dashboard',
			},
		],
	},
	{
				key: 'apps-crypto',
				label: 'Crypto',
				isTitle: false,
				parentKey: 'apps',
				children: [
					{
						key: 'crypto-exchange',
						label: 'Exchange',
						url: '/apps/crypto/exchange',
						parentKey: 'apps-crypto',
					},
					{
						key: 'crypto-wallet',
						label: 'Wallet',
						url: '/apps/crypto/wallet',
						parentKey: 'apps-crypto',
					},
					{
						key: 'crypto-news',
						label: 'Crypto News',
						url: '/apps/crypto/news',
						parentKey: 'apps-crypto',
					},
					{
						key: 'crypto-ico',
						label: 'ICO List',
						url: '/apps/crypto/ico',
						parentKey: 'apps-crypto',
					},
					{
						key: 'crypto-settings',
						label: 'Settings',
						url: '/apps/crypto/settings',
						parentKey: 'apps-crypto',
					},
				],
			},
			
	{
		key: 'ui',
		icon: 'planet',
		label: 'UI Kit',
		isTitle: true,
		children: [
			{
				key: 'ui-elements',
				label: 'UI Elements',
				isTitle: false,
				parentKey: 'ui',
				children: [
					{
						key: 'elements-alerts',
						label: 'Alerts',
						url: '/ui/elements/alerts',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-avatars',
						label: 'Avatars',
						url: '/ui/elements/avatars',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-buttons',
						label: 'Buttons',
						url: '/ui/elements/buttons',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-badges',
						label: 'Badges',
						url: '/ui/elements/badges',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-cards',
						label: 'Cards',
						url: '/ui/elements/cards',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-carousels',
						label: 'Carousels',
						url: '/ui/elements/carousels',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-dropdowns',
						label: 'Dropdowns',
						url: '/ui/elements/dropdowns',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-grid',
						label: 'Grids',
						url: '/ui/elements/grid',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-images',
						label: 'Images',
						url: '/ui/elements/images',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-list',
						label: 'List',
						url: '/ui/elements/list',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-modals',
						label: 'Modals',
						url: '/ui/elements/modals',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-nav',
						label: 'Navs',
						url: '/ui/elements/navs',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-navbar',
						label: 'Navbar',
						url: '/ui/elements/navbar',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-paginations',
						label: 'Paginations',
						url: '/ui/elements/paginations',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-popover-tooltip',
						label: 'Popover & Tooltips',
						url: '/ui/elements/popover-tooltips',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-progress',
						label: 'Progress',
						url: '/ui/elements/progress',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-spinners',
						label: 'Spinners',
						url: '/ui/elements/spinners',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-tabs-accordions',
						label: 'Tabs & Accordions',
						url: '/ui/elements/tabs-accordions',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-typography',
						label: 'Typography',
						url: '/ui/elements/typography',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-videos',
						label: 'Videos',
						url: '/ui/elements/videos',
						parentKey: 'ui-elements',
					},
				],
			},
			{
				key: 'ui-advanced',
				label: 'Advanced UI',
				isTitle: false,
				parentKey: 'ui',
				children: [
					{
						key: 'advanced-animation',
						label: 'Animation',
						url: '/ui/advanced/animation',
						parentKey: 'ui-advanced',
					},
					{
						key: 'advanced-clip-board',
						label: 'Clip Board',
						url: '/ui/advanced/clip-board',
						parentKey: 'ui-advanced',
					},
					{
						key: 'advanced-dragula',
						label: 'Dragula',
						url: '/ui/advanced/dragula',
						parentKey: 'ui-advanced',
					},
					{
						key: 'advanced-file-manager',
						label: 'File Manager',
						url: '/ui/advanced/file-manager',
						parentKey: 'ui-advanced',
					},
					{
						key: 'advanced-highlight',
						label: 'Highlight',
						url: '/ui/advanced/highlight',
						parentKey: 'ui-advanced',
					},
					{
						key: 'advanced-range-slider',
						label: 'Range Slider',
						url: '/ui/advanced/range-slider',
						parentKey: 'ui-advanced',
					},
					{
						key: 'advanced-ratings',
						label: 'Ratings',
						url: '/ui/advanced/ratings',
						parentKey: 'ui-advanced',
					},
					{
						key: 'advanced-ribbons',
						label: 'Ribbons',
						url: '/ui/advanced/ribbons',
						parentKey: 'ui-advanced',
					},
					{
						key: 'advanced-sweet-alerts',
						label: 'Sweet Alerts',
						url: '/ui/advanced/sweet-alerts',
						parentKey: 'ui-advanced',
					},
					{
						key: 'advanced-toasts',
						label: 'Toasts',
						url: '/ui/advanced/toasts',
						parentKey: 'ui-advanced',
					},
				],
			},
			{
				key: 'ui-forms',
				label: 'Forms',
				isTitle: false,
				parentKey: 'ui',
				children: [
					{
						key: 'forms-elements',
						label: 'Basic Elements',
						url: '/ui/forms/elements',
						parentKey: 'ui-forms',
					},
					{
						key: 'forms-advance',
						label: 'Advance Elements',
						url: '/ui/forms/advance',
						parentKey: 'ui-forms',
					},
					{
						key: 'forms-validation',
						label: 'Validation',
						url: '/ui/forms/validation',
						parentKey: 'ui-forms',
					},
					{
						key: 'forms-wizard',
						label: 'Wizard',
						url: '/ui/forms/wizard',
						parentKey: 'ui-forms',
					},
					{
						key: 'forms-editors',
						label: 'Editors',
						url: '/ui/forms/editors',
						parentKey: 'ui-forms',
					},
					{
						key: 'forms-file-upload',
						label: 'File Upload',
						url: '/ui/forms/file-upload',
						parentKey: 'ui-forms',
					},
					{
						key: 'forms-image-crop',
						label: 'Image Crop',
						url: '/ui/forms/image-crop',
						parentKey: 'ui-forms',
					},
				],
			},
			{
				key: 'ui-charts',
				label: 'Charts',
				isTitle: false,
				parentKey: 'ui',
				children: [
					{
						key: 'charts-apex',
						label: 'Apex',
						url: '/ui/charts/apex',
						parentKey: 'ui-charts',
					},
					{
						key: 'charts-justgage',
						label: 'JustGage',
						url: '/ui/charts/justgage',
						parentKey: 'ui-charts',
					},
					{
						key: 'charts-chartjs',
						label: 'ChartjS',
						url: '/ui/charts/chartjs',
						parentKey: 'ui-charts',
					},
					{
						key: 'charts-toast',
						label: 'Toast',
						url: '/ui/charts/toast',
						parentKey: 'ui-charts',
					},
				],
			},
			{
				key: 'ui-tables',
				label: 'Tables',
				isTitle: false,
				parentKey: 'ui',
				children: [
					{
						key: 'tables-basic',
						label: 'Basic',
						url: '/ui/tables/basic',
						parentKey: 'ui-tables',
					},
					{
						key: 'tables-data-tables',
						label: 'Data Tables',
						url: '/ui/tables/data',
						parentKey: 'ui-tables',
					},
				],
			},
			{
				key: 'ui-icons',
				label: 'Icons',
				isTitle: false,
				parentKey: 'ui',
				children: [
					{
						key: 'icons-md',
						label: 'Material Design',
						url: '/ui/icons/md',
						parentKey: 'ui-icons',
					},
					{
						key: 'icons-fa',
						label: 'Font Awesome',
						url: '/ui/icons/fa',
						parentKey: 'ui-icons',
					},
					{
						key: 'icons-tb',
						label: 'Tabler',
						url: '/ui/icons/tb',
						parentKey: 'ui-icons',
					},
					{
						key: 'icons-feather',
						label: 'Feather',
						url: '/ui/icons/feather',
						parentKey: 'ui-icons',
					},
				],
			},
			{
				key: 'ui-email-templates',
				label: 'Email Templates',
				isTitle: false,
				parentKey: 'ui',
				children: [
					{
						key: 'email-templates-basic',
						label: 'Basic Action Email',
						url: '/ui/email-templates/basic',
						parentKey: 'ui-email-templates',
					},
					{
						key: 'email-templates-alert',
						label: 'Alert Email',
						url: '/ui/email-templates/alert',
						parentKey: 'ui-email-templates',
					},
					{
						key: 'email-templates-billing',
						label: 'Billing Email',
						url: '/ui/email-templates/billing',
						parentKey: 'ui-email-templates',
					},
				],
			},
		],
	},
	{
		key: 'auth',
		icon: 'shield-lock',
		label: 'Authentication',
		isTitle: true,
		children: [
			{
				key: 'auth-login',
				label: 'Log In',
				url: '/auth/login',
				parentKey: 'auth',
			},
			
			{
				key: 'auth-register',
				label: 'Register',
				url: '/auth/register',
				parentKey: 'auth',
			},
			
			{
				key: 'auth-re-password',
				label: 'Re Password',
				url: '/auth/re-password',
				parentKey: 'auth',
			},
			
			{
				key: 'auth-lock-screen',
				label: 'Lock Screen',
				url: '/auth/lock-screen',
				parentKey: 'auth',
			},
			
			{
				key: 'auth-error-404',
				label: 'Error 404',
				url: '/not-found',
				parentKey: 'auth',
			},
			
			{
				key: 'auth-error-500',
				label: 'Error 500',
				url: '/error-500',
				parentKey: 'auth',
			},
		],
	},
]
export { TWO_COl_MENU_ITEMS }
