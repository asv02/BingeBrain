import {GoogleGenAI} from '@google/genai';
const GEMINI_API_KEY = "AIzaSyA5sULKgU8PW_pE5FZDRsupWkE_fyq16Oo";
const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});
export default ai;