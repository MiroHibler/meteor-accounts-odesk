Package.describe({
	summary: 'Login service for oDesk accounts'
});

Package.on_use( function( api ) {
	api.use( 'underscore', ['server'] );
	api.use( 'accounts-base', ['client', 'server'] );
	// Export Accounts (etc) to packages using this one.
	api.imply( 'accounts-base', ['client', 'server'] );
	api.use( 'accounts-oauth', ['client', 'server'] );
	api.use( 'http', ['client', 'server'] );
	api.use( 'odesk', ['client', 'server'] );

	api.add_files( 'lib/client/odesk_login_button.css', 'client' );

	api.add_files( "lib/server/odesk.js", 'server' );
	api.add_files( "lib/client/odesk.js", 'client' );
});