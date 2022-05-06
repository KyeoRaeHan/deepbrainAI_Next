import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const connection = {};
(async function dbConnect() {
	if (connection.isConnected) {
		return;
	}

	try {
		const db = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});

		connection.isConnected = db.connections[0].readyState;

		console.log("MongoDB Connected");
	} catch (error) {
		console.log(error);
	}
})();