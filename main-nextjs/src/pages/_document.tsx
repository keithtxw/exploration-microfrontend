import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			{/* eslint-disable-next-line @next/next/no-sync-scripts */}
			<Head>
				<script
					type="text/javascript"
					src="http://localhost:3002/dist/banner.js"
				/>
				<script
					type="text/javascript"
					src="/js/mfe1.js"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}