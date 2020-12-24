import firebaseAdmin from "firebase-admin";

if (!firebaseAdmin.apps.length) {
	firebaseAdmin.initializeApp({
		credential: firebaseAdmin.credential.cert({
			projectId: process.env.NEXT_PUBLIC_ADMIN_PROJECT_ID,
			clientEmail: process.env.NEXT_PUBLIC_ADMIN_CLIENT_EMAIL,
			privateKey: process.env.NEXT_PUBLIC_ADMIN_PRIVATE_KEY.replace(
				/\\n/g,
				"\n"
			),
		}),
		storageBucket: "minehut-xyz.appspot.com",
	});
}

export { firebaseAdmin };
