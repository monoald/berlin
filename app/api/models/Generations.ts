import mongoose, { Schema } from 'mongoose'

mongoose.connect(process.env.MONGODB_URI as string)
mongoose.Promise = global.Promise

const generationSchema = new Schema(
	{
		image: String,
		code: String,
		users: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		],
	},
	{
		timestamps: true,
	},
)

const Generation = mongoose.models.Generation || mongoose.model('Generation', generationSchema)

export default Generation
