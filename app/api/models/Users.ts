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
		credits: {
			type: Number,
			default: 20,
		},
		subscription: {
			type: String,
			enum: ['freemium', 'developer', 'pro'],
			default: 'freemium',
		},
		loginToken: {
			type: String,
			trim: true,
		},
		generations: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Generation',
			},
		],
	},
	{
		timestamps: true,
	},
)

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
