import mongoose, { Schema } from 'mongoose'

mongoose.connect(process.env.MONGODB_URI as string)
mongoose.Promise = global.Promise

const userSchema = new Schema(
	{
		name: String,
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
		provider: String,
		loginToken: {
			type: String,
			trim: true,
		},
	},
	{
		timestamps: true,
	},
)

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
