/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'


//dashboards
const CryptoDashboard = lazy(() => import('@/pages/dashboards/Crypto'))


//apps
const CryptoExchange = lazy(() => import('@/pages/apps/crypto/Exchange'))
const CryptoWallet = lazy(() => import('@/pages/apps/crypto/Wallet'))
const CryptoNews = lazy(() => import('@/pages/apps/crypto/News'))
const CryptoIco = lazy(() => import('@/pages/apps/crypto/ICOList'))
const CryptoSettings = lazy(() => import('@/pages/apps/crypto/Settings'))

//ui pages
const Alerts = lazy(() => import('@/pages/uikit/elements/Alerts'))
const Avatars = lazy(() => import('@/pages/uikit/elements/Avatars'))
const Buttons = lazy(() => import('@/pages/uikit/elements/Buttons'))
const Badges = lazy(() => import('@/pages/uikit/elements/Badges'))
const Cards = lazy(() => import('@/pages/uikit/elements/Cards'))
const Carousels = lazy(() => import('@/pages/uikit/elements/Carousels'))
const Dropdowns = lazy(() => import('@/pages/uikit/elements/Dropdowns'))
const Grid = lazy(() => import('@/pages/uikit/elements/Grids'))
const Images = lazy(() => import('@/pages/uikit/elements/Images'))
const List = lazy(() => import('@/pages/uikit/elements/List'))
const Modals = lazy(() => import('@/pages/uikit/elements/Modals'))
const Navs = lazy(() => import('@/pages/uikit/elements/Navs'))
const Navbar = lazy(() => import('@/pages/uikit/elements/Navbar'))
const Paginations = lazy(() => import('@/pages/uikit/elements/Paginations'))
const PopoverAndTooltips = lazy(
	() => import('@/pages/uikit/elements/PopoverAndTooltips')
)
const Progress = lazy(() => import('@/pages/uikit/elements/Progress'))
const Spinners = lazy(() => import('@/pages/uikit/elements/Spinners'))
const TabsAndAccordion = lazy(
	() => import('@/pages/uikit/elements/TabsAndAccordions')
)
const Typography = lazy(() => import('@/pages/uikit/elements/Typography'))
const Videos = lazy(() => import('@/pages/uikit/elements/Videos'))

//advanced ui
const Animation = lazy(() => import('@/pages/uikit/advanced-ui/Animation'))
const ClipBoard = lazy(() => import('@/pages/uikit/advanced-ui/ClipBoard'))
const Dragula = lazy(() => import('@/pages/uikit/advanced-ui/Dragula'))
const FileManager = lazy(() => import('@/pages/uikit/advanced-ui/FileManager'))
const Highlight = lazy(() => import('@/pages/uikit/advanced-ui/Highlight'))
const RangeSlider = lazy(() => import('@/pages/uikit/advanced-ui/RangeSlider'))
const Ratings = lazy(() => import('@/pages/uikit/advanced-ui/Ratings'))
const Ribbons = lazy(() => import('@/pages/uikit/advanced-ui/Ribbons'))
const SweetAlerts = lazy(() => import('@/pages/uikit/advanced-ui/SweetAlerts'))
const Toasts = lazy(() => import('@/pages/uikit/advanced-ui/Toasts'))

// forms pages
const FormsElement = lazy(() => import('@/pages/uikit/forms/FormsElements'))
const FormAdvanced = lazy(() => import('@/pages/uikit/forms/AdvancedElements'))
const FormValidation = lazy(() => import('@/pages/uikit/forms/Validation'))
const FormWizard = lazy(() => import('@/pages/uikit/forms/Wizard'))
const FormEditors = lazy(() => import('@/pages/uikit/forms/Editors'))
const FormFileUpload = lazy(() => import('@/pages/uikit/forms/FileUpload'))
const FormImageCrop = lazy(() => import('@/pages/uikit/forms/ImageCrop'))

//chart pages
const ApexChart = lazy(() => import('@/pages/uikit/charts/Apex'))
const JustgageCharts = lazy(() => import('@/pages/uikit/charts/JustGage'))
const ChartjsCharts = lazy(() => import('@/pages/uikit/charts/ChartJs'))
const ToastChart = lazy(() => import('@/pages/uikit/charts/Toast'))

//tables pages
const BasicTables = lazy(() => import('@/pages/uikit/tables/BasicTables'))
const DataTables = lazy(() => import('@/pages/uikit/tables/DataTables'))

//icons pages
const MaterialDesignIcons = lazy(
	() => import('@/pages/uikit/icons/MaterialDesignIcons')
)
const TablerIcons = lazy(() => import('@/pages/uikit/icons/TablerIcons'))

const FeatherIcons = lazy(() => import('@/pages/uikit/icons/FeatherIcons'))



//auth pages
const Login = lazy(() => import('@/pages/auth/Login'))
const Register = lazy(() => import('@/pages/auth/Register'))
const ResetPassword = lazy(() => import('@/pages/auth/ResetPassword'))
const LockScreen = lazy(() => import('@/pages/auth/LockScreen'))


//error Pages
const NotFound = lazy(() => import('@/pages/error/PageNotFound'))
const Error500 = lazy(() => import('@/pages/error/Error500'))
const dashboardRoutes = [
	{
		path: '/dashboards/crypto',
		name: 'Crypto',
		element: <CryptoDashboard />,
	}
]
const appsRoutes = [
	{
		path: '/apps/crypto/exchange',
		name: 'Exchange',
		element: <CryptoExchange />,
	},
	{
		path: '/apps/crypto/wallet',
		name: 'Wallet',
		element: <CryptoWallet />,
	},
	{
		path: '/apps/crypto/news',
		name: 'News',
		element: <CryptoNews />,
	},
	{
		path: '/apps/crypto/ico',
		name: 'Ico',
		element: <CryptoIco />,
	},
	{
		path: '/apps/crypto/settings',
		name: 'Settings',
		element: <CryptoSettings />,
	}
]
const uiRoutes = [
	{
		path: '/ui/elements/alerts',
		name: 'Alerts',
		element: <Alerts />,
	},
	{
		path: '/ui/elements/avatars',
		name: 'Avatars',
		element: <Avatars />,
	},
	{
		path: '/ui/elements/buttons',
		name: 'Buttons',
		element: <Buttons />,
	},
	{
		path: '/ui/elements/badges',
		name: 'Badges',
		element: <Badges />,
	},
	{
		path: '/ui/elements/cards',
		name: 'Cards',
		element: <Cards />,
	},
	{
		path: '/ui/elements/carousels',
		name: 'Carousels',
		element: <Carousels />,
	},
	{
		path: '/ui/elements/dropdowns',
		name: 'Dropdowns',
		element: <Dropdowns />,
	},
	{
		path: '/ui/elements/grid',
		name: 'Grid',
		element: <Grid />,
	},
	{
		path: '/ui/elements/images',
		name: 'Images',
		element: <Images />,
	},
	{
		path: '/ui/elements/list',
		name: 'List',
		element: <List />,
	},
	{
		path: '/ui/elements/modals',
		name: 'Modals',
		element: <Modals />,
	},
	{
		path: '/ui/elements/navs',
		name: 'Modals',
		element: <Navs />,
	},
	{
		path: '/ui/elements/navbar',
		name: 'Navbar',
		element: <Navbar />,
	},
	{
		path: '/ui/elements/paginations',
		name: 'Paginations',
		element: <Paginations />,
	},
	{
		path: '/ui/elements/popover-tooltips',
		name: 'Popover And Tooltips',
		element: <PopoverAndTooltips />,
	},
	{
		path: '/ui/elements/progress',
		name: 'Progress',
		element: <Progress />,
	},
	{
		path: '/ui/elements/spinners',
		name: 'Spinners',
		element: <Spinners />,
	},
	{
		path: '/ui/elements/tabs-accordions',
		name: 'Tabs And Accordion',
		element: <TabsAndAccordion />,
	},
	{
		path: '/ui/elements/typography',
		name: 'Typography',
		element: <Typography />,
	},
	{
		path: '/ui/elements/videos',
		name: 'Videos',
		element: <Videos />,
	},
]
const advancedUiRoutes = [
	{
		path: '/ui/advanced/animation',
		name: 'Animation',
		element: <Animation />,
	},
	{
		path: '/ui/advanced/clip-board',
		name: 'Clip-Board',
		element: <ClipBoard />,
	},
	{
		path: '/ui/advanced/dragula',
		name: 'Dragula',
		element: <Dragula />,
	},
	{
		path: '/ui/advanced/file-manager',
		name: 'File Manager',
		element: <FileManager />,
	},
	{
		path: '/ui/advanced/highlight',
		name: 'Highlight',
		element: <Highlight />,
	},
	{
		path: '/ui/advanced/range-slider',
		name: 'Range Slider',
		element: <RangeSlider />,
	},
	{
		path: '/ui/advanced/ratings',
		name: 'Ratings',
		element: <Ratings />,
	},
	{
		path: '/ui/advanced/ribbons',
		name: 'Ribbons',
		element: <Ribbons />,
	},
	{
		path: '/ui/advanced/sweet-alerts',
		name: 'Sweet Alerts',
		element: <SweetAlerts />,
	},
	{
		path: '/ui/advanced/toasts',
		name: 'Toasts',
		element: <Toasts />,
	},
]
const formsRoutes = [
	{
		path: '/ui/forms/elements',
		name: 'Form Elements',
		element: <FormsElement />,
	},
	{
		path: '/ui/forms/advance',
		name: 'Advance Elements',
		element: <FormAdvanced />,
	},
	{
		path: '/ui/forms/validation',
		name: 'Validation',
		element: <FormValidation />,
	},
	{
		path: '/ui/forms/wizard',
		name: 'Wizard',
		element: <FormWizard />,
	},
	{
		path: '/ui/forms/editors',
		name: 'Editors',
		element: <FormEditors />,
	},
	{
		path: '/ui/forms/file-upload',
		name: 'File Upload',
		element: <FormFileUpload />,
	},
	{
		path: '/ui/forms/image-crop',
		name: 'Image Crop',
		element: <FormImageCrop />,
	},
]
const otherUiRoutes = [
	{
		path: '/ui/charts/apex',
		name: 'Apex',
		element: <ApexChart />,
	},
	{
		path: '/ui/charts/justgage',
		name: 'Justgage',
		element: <JustgageCharts />,
	},
	{
		path: '/ui/charts/chartjs',
		name: 'Chartjs',
		element: <ChartjsCharts />,
	},
	{
		path: '/ui/charts/toast',
		name: 'Toast Chart',
		element: <ToastChart />,
	},
	{
		path: '/ui/tables/basic',
		name: 'Basic',
		element: <BasicTables />,
	},
	{
		path: '/ui/tables/data',
		name: 'Data Tables',
		element: <DataTables />,
	},
	{
		path: '/ui/icons/md',
		name: 'Material Design',
		element: <MaterialDesignIcons />,
	},
	{
		path: '/ui/icons/fa',
		name: 'Font Awesome',
		element: <FontAwesomeIcons />,
	},
	{
		path: '/ui/icons/tb',
		name: 'Tabler',
		element: <TablerIcons />,
	},
	{
		path: '/ui/icons/feather',
		name: 'Feather',
		element: <FeatherIcons />,
	},
	{
		path: '/ui/maps/google',
		name: 'Google Maps',
		element: <GoogleMaps />,
	},
	{
		path: '/ui/maps/leaflet',
		name: 'Leaflet Maps',
		element: <LeafletMaps />,
	},
	{
		path: '/ui/maps/vector',
		name: 'Vector Maps',
		element: <VectorMaps />,
	},
	{
		path: '/ui/email-templates/basic',
		name: 'Basic Action Email',
		element: <BasicTemplates />,
	},
	{
		path: '/ui/email-templates/alert',
		name: 'Alert Email',
		element: <AlertTemplates />,
	},
	{
		path: '/ui/email-templates/billing',
		name: 'Billing Email',
		element: <BillingTemplates />,
	},
]

const authRoutes = [
	{
		path: '/auth/login',
		name: 'Login',
		element: <Login />,
	},
	{
		path: '/auth/register',
		name: 'Register',
		element: <Register />,
	},
	{
		path: '/auth/re-password',
		name: 'Re Password',
		element: <ResetPassword />,
	},
	{
		path: '/auth/lock-screen',
		name: 'Lock Screen',
		element: <LockScreen />,
	},
	{
		path: '/auth/login-alt',
		name: 'Login Alt',
		element: <LoginAlt />,
	},
	{
		path: '/auth/register-alt',
		name: 'Register Alt',
		element: <RegisterAlt />,
	},
	{
		path: '/auth/re-password-alt',
		name: 'Re Password Alt',
		element: <ResetPasswordAlt />,
	},
	{
		path: '/auth/lock-screen-alt',
		name: 'Lock Screen Alt',
		element: <LockScreenAlt />,
	},
]
const otherRoutes = [
	{
		path: '/not-found',
		name: 'Page Not Found',
		element: <NotFound />,
	},
	
	{
		path: '/error-500',
		name: 'Error 500',
		element: <Error500 />,
	},
	
]
const allBlankRoutes = [...otherRoutes, ...authRoutes]
const allUiRoutes = [
	...uiRoutes,
	...advancedUiRoutes,
	...formsRoutes,
	...otherUiRoutes,
]
const allAdminRoutes = [
	...dashboardRoutes,
	...appsRoutes,
	...allUiRoutes,
]
export { allAdminRoutes, allBlankRoutes }
