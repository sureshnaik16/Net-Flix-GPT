import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_KEY } from "./constants";

const GenAI = new GoogleGenerativeAI(GEMINI_KEY);

export default GenAI;