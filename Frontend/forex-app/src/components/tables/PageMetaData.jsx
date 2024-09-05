import { Helmet } from 'react-helmet'
const PageMetaData = ({ title }) => {
	return (
		<Helmet>
			<title>{title} | Metrica - Admin & Dashboard Template</title>
		</Helmet>
	)
}
export default PageMetaData
