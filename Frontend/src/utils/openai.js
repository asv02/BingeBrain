import {GoogleGenAI} from '@google/genai';
const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_KEY;
const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});
export default ai;