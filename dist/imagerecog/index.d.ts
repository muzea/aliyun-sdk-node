import { ClassifyingRubbishRequest } from "./ClassifyingRubbish/req";
import { ClassifyingRubbishResponse } from "./ClassifyingRubbish/res";
import { DetectImageElementsRequest } from "./DetectImageElements/req";
import { DetectImageElementsResponse } from "./DetectImageElements/res";
import { EvaluateCertificateQualityRequest } from "./EvaluateCertificateQuality/req";
import { EvaluateCertificateQualityResponse } from "./EvaluateCertificateQuality/res";
import { RecognizeImageColorRequest } from "./RecognizeImageColor/req";
import { RecognizeImageColorResponse } from "./RecognizeImageColor/res";
import { RecognizeImageStyleRequest } from "./RecognizeImageStyle/req";
import { RecognizeImageStyleResponse } from "./RecognizeImageStyle/res";
import { RecognizeSceneRequest } from "./RecognizeScene/req";
import { RecognizeSceneResponse } from "./RecognizeScene/res";
import { TaggingImageRequest } from "./TaggingImage/req";
import { TaggingImageResponse } from "./TaggingImage/res";
import { RecognizeFoodRequest } from "./RecognizeFood/req";
import { RecognizeFoodResponse } from "./RecognizeFood/res";
import { GetAsyncJobResultRequest } from "./GetAsyncJobResult/req";
import { GetAsyncJobResultResponse } from "./GetAsyncJobResult/res";
import { TaggingAdImageRequest } from "./TaggingAdImage/req";
import { TaggingAdImageResponse } from "./TaggingAdImage/res";

interface IMAGERECOG {
    /**
     * 本文档介绍垃圾分类识别ClassifyingRubbish的语法及示例。
     */
    ClassifyingRubbish(query: ClassifyingRubbishRequest): Promise<ClassifyingRubbishResponse>;
    /**
     * 本文介绍元素识别DetectImageElements的语法及示例。
     */
    DetectImageElements(query: DetectImageElementsRequest): Promise<DetectImageElementsResponse>;
    /**
     * 本文介绍证件照质量审核EvaluateCertificateQuality的语法及示例。
     */
    EvaluateCertificateQuality(query: EvaluateCertificateQualityRequest): Promise<EvaluateCertificateQualityResponse>;
    /**
     * 本文档介绍颜色识别RecognizeImageColor的语法及示例。
     */
    RecognizeImageColor(query: RecognizeImageColorRequest): Promise<RecognizeImageColorResponse>;
    /**
     * 本文档介绍风格识别RecognizeImageStyle的语法及示例。
     */
    RecognizeImageStyle(query: RecognizeImageStyleRequest): Promise<RecognizeImageStyleResponse>;
    /**
     * 本文介绍场景识别RecognizeScene的语法及示例。
     */
    RecognizeScene(query: RecognizeSceneRequest): Promise<RecognizeSceneResponse>;
    /**
     * 本文介绍通用图像打标TaggingImage的语法及示例。
     */
    TaggingImage(query: TaggingImageRequest): Promise<TaggingImageResponse>;
    /**
     * 本文介绍菜品识别RecognizeFood的语法及示例。
     */
    RecognizeFood(query: RecognizeFoodRequest): Promise<RecognizeFoodResponse>;
    /**
     * 本文介绍查询异步任务结果GetAsyncJobResult的语法及示例。
     */
    GetAsyncJobResult(query: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse>;
    /**
     * 本文介绍广告素材分析TaggingAdImage的语法及示例。
     */
    TaggingAdImage(query: TaggingAdImageRequest): Promise<TaggingAdImageResponse>;
}
export default IMAGERECOG;
