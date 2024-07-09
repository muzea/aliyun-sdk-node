import { DetectVideoShotRequest } from "./DetectVideoShot/req";
import { DetectVideoShotResponse } from "./DetectVideoShot/res";
import { EvaluateVideoQualityRequest } from "./EvaluateVideoQuality/req";
import { EvaluateVideoQualityResponse } from "./EvaluateVideoQuality/res";
import { GenerateVideoCoverRequest } from "./GenerateVideoCover/req";
import { GenerateVideoCoverResponse } from "./GenerateVideoCover/res";
import { GetAsyncJobResultRequest } from "./GetAsyncJobResult/req";
import { GetAsyncJobResultResponse } from "./GetAsyncJobResult/res";
import { RecognizeVideoCastCrewListRequest } from "./RecognizeVideoCastCrewList/req";
import { RecognizeVideoCastCrewListResponse } from "./RecognizeVideoCastCrewList/res";
import { SplitVideoPartsRequest } from "./SplitVideoParts/req";
import { SplitVideoPartsResponse } from "./SplitVideoParts/res";
import { UnderstandVideoContentRequest } from "./UnderstandVideoContent/req";
import { UnderstandVideoContentResponse } from "./UnderstandVideoContent/res";

interface VIDEORECOG {
    /**
     * 镜头解析，对输入的视频按镜头进行切分，返回切分点。
     */
    DetectVideoShot(query: DetectVideoShotRequest): Promise<DetectVideoShotResponse>;
    /**
     * 本文介绍视频理解（videorecog）类目下的视频画质评估EvaluateVideoQuality的语法及示例。
     */
    EvaluateVideoQuality(query: EvaluateVideoQualityRequest): Promise<EvaluateVideoQualityResponse>;
    /**
     * 本文介绍视频封面GenerateVideoCover的语法及示例。
     */
    GenerateVideoCover(query: GenerateVideoCoverRequest): Promise<GenerateVideoCoverResponse>;
    /**
     * 本文介绍查询异步任务结果GetAsyncJobResult的语法及示例。
     */
    GetAsyncJobResult(query: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse>;
    /**
     * 本文介绍视频OCR RecognizeVideoCastCrewList的语法及示例。
     */
    RecognizeVideoCastCrewList(query: RecognizeVideoCastCrewListRequest): Promise<RecognizeVideoCastCrewListResponse>;
    /**
     * 本文介绍视频拆条SplitVideoParts的语法及示例。
     */
    SplitVideoParts(query: SplitVideoPartsRequest): Promise<SplitVideoPartsResponse>;
    /**
     * 本文介绍视频内容理解UnderstandVideoContent的语法及示例。
     */
    UnderstandVideoContent(query: UnderstandVideoContentRequest): Promise<UnderstandVideoContentResponse>;
}
export default VIDEORECOG;
