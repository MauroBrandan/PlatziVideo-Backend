require('dotenv').config()

const config = {
	dev: process.env.NODE_ENV !== 'production',
	port: process.env.PORT || 3000,
	cors: process.env.CORS,
	dbUser: process.env.DB_USER,
	dbPassword: process.env.DB_PASSWORD,
	dbHost: process.env.DB_HOST,
	dbName: process.env.DB_NAME,
	authJwtSecret: process.env.AUTH_JWT_SECRET,
	defaultAdminPassword: process.env.DEFAULT_ADMIN_PASSWORD,
	defaultUserPassword: process.env.DEFAULT_USER_PASSWORD,
	publicApiKeyToken: process.env.PUBLIC_API_KEY_TOKEN,
	adminApiKeyToken: process.env.ADMIN_API_KEY_TOKEN,
	// Server Config
	serverPort: process.env.SERVER_PORT || 8080,
	apiUrl: process.env.API_URL,
	apiKeyToken: process.env.API_KEY_TOKEN,
	// OAuth
	googleClientId: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	// Twitter
	sessionSecret: process.env.SESSION_SECRET,
	twitterConsumerKey: process.env.TWITTER_CONSUMER_KEY,
	twitterConsumerSecret: process.env.TWITTER_CONSUMER_SECRET,
}

module.exports = { config }
