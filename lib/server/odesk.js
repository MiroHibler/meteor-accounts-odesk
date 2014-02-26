Accounts.oauth.registerService( 'odesk' );

var autopublishedFields = _.map(
	Odesk.whitelistedFields.concat( ['id', 'screenName'] ), function ( subfield ) {
		return 'services.odesk.' + subfield;
	}
);

Accounts.addAutopublishFields({
	forLoggedInUser	: autopublishedFields,
	forOtherUsers	: autopublishedFields
});
