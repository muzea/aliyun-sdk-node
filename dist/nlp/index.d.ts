import { EntityRequest } from "./Entity/req";
import { EntityResponse } from "./Entity/res";
import { IERequest } from "./IE/req";
import { IEResponse } from "./IE/res";
import { KWERequest } from "./KWE/req";
import { KWEResponse } from "./KWE/res";
import { TranslateRequest } from "./Translate/req";
import { TranslateResponse } from "./Translate/res";
import { SentimentRequest } from "./Sentiment/req";
import { SentimentResponse } from "./Sentiment/res";
import { TextStructureRequest } from "./TextStructure/req";
import { TextStructureResponse } from "./TextStructure/res";
import { WordPosRequest } from "./WordPos/req";
import { WordPosResponse } from "./WordPos/res";
import { ReviewAnalysisRequest } from "./ReviewAnalysis/req";
import { ReviewAnalysisResponse } from "./ReviewAnalysis/res";
import { WordSegmentRequest } from "./WordSegment/req";
import { WordSegmentResponse } from "./WordSegment/res";

interface NLP {
    Entity(query: EntityRequest): Promise<EntityResponse>;
    IE(query: IERequest): Promise<IEResponse>;
    KWE(query: KWERequest): Promise<KWEResponse>;
    Translate(query: TranslateRequest): Promise<TranslateResponse>;
    Sentiment(query: SentimentRequest): Promise<SentimentResponse>;
    TextStructure(query: TextStructureRequest): Promise<TextStructureResponse>;
    WordPos(query: WordPosRequest): Promise<WordPosResponse>;
    ReviewAnalysis(query: ReviewAnalysisRequest): Promise<ReviewAnalysisResponse>;
    WordSegment(query: WordSegmentRequest): Promise<WordSegmentResponse>;
}
export default NLP;
