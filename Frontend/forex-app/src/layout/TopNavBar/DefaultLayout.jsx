import { Suspense } from 'react'
import ReactDOM from 'react-dom';


// utils

const loading = () => <div />
const DefaultLayout = ({ children }) => {
	return <Suspense fallback={loading()}>{children}</Suspense>
}
export default DefaultLayout
