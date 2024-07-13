import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        required: [true, 'Prompt is required'],
    },
    tag: {
        type: String,
        required: [true, 'Tag i quired'],
    }
})

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;