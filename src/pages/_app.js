import React from 'react'
import GlobalStyle from '../styles/global'

function MyApp({ Component, pageProps }) {

	return <>
		<Component/>
		<GlobalStyle/>
	</>
}

export default MyApp
