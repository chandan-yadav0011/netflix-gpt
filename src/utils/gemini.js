import {GoogleGenAI} from '@google/genai';
import { GEMINI_API_KEY } from './contants';

const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

export default ai;