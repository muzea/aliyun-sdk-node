import { AbstractEcommerceVideoRequest } from "./AbstractEcommerceVideo/req";
import { AbstractEcommerceVideoResponse } from "./AbstractEcommerceVideo/res";
import { AbstractFilmVideoRequest } from "./AbstractFilmVideo/req";
import { AbstractFilmVideoResponse } from "./AbstractFilmVideo/res";
import { AddFaceVideoTemplateRequest } from "./AddFaceVideoTemplate/req";
import { AddFaceVideoTemplateResponse } from "./AddFaceVideoTemplate/res";
import { AdjustVideoColorRequest } from "./AdjustVideoColor/req";
import { AdjustVideoColorResponse } from "./AdjustVideoColor/res";
import { ChangeVideoSizeRequest } from "./ChangeVideoSize/req";
import { ChangeVideoSizeResponse } from "./ChangeVideoSize/res";
import { ConvertHdrVideoRequest } from "./ConvertHdrVideo/req";
import { ConvertHdrVideoResponse } from "./ConvertHdrVideo/res";
import { DeleteFaceVideoTemplateRequest } from "./DeleteFaceVideoTemplate/req";
import { DeleteFaceVideoTemplateResponse } from "./DeleteFaceVideoTemplate/res";
import { EnhancePortraitVideoRequest } from "./EnhancePortraitVideo/req";
import { EnhancePortraitVideoResponse } from "./EnhancePortraitVideo/res";
import { EnhanceVideoQualityRequest } from "./EnhanceVideoQuality/req";
import { EnhanceVideoQualityResponse } from "./EnhanceVideoQuality/res";
import { EraseVideoLogoRequest } from "./EraseVideoLogo/req";
import { EraseVideoLogoResponse } from "./EraseVideoLogo/res";
import { EraseVideoSubtitlesRequest } from "./EraseVideoSubtitles/req";
import { EraseVideoSubtitlesResponse } from "./EraseVideoSubtitles/res";
import { GenerateHumanAnimeStyleVideoRequest } from "./GenerateHumanAnimeStyleVideo/req";
import { GenerateHumanAnimeStyleVideoResponse } from "./GenerateHumanAnimeStyleVideo/res";
import { GenerateVideoRequest } from "./GenerateVideo/req";
import { GenerateVideoResponse } from "./GenerateVideo/res";
import { GetAsyncJobResultRequest } from "./GetAsyncJobResult/req";
import { GetAsyncJobResultResponse } from "./GetAsyncJobResult/res";
import { InterpolateVideoFrameRequest } from "./InterpolateVideoFrame/req";
import { InterpolateVideoFrameResponse } from "./InterpolateVideoFrame/res";
import { MergeVideoFaceRequest } from "./MergeVideoFace/req";
import { MergeVideoFaceResponse } from "./MergeVideoFace/res";
import { MergeVideoModelFaceRequest } from "./MergeVideoModelFace/req";
import { MergeVideoModelFaceResponse } from "./MergeVideoModelFace/res";
import { QueryFaceVideoTemplateRequest } from "./QueryFaceVideoTemplate/req";
import { QueryFaceVideoTemplateResponse } from "./QueryFaceVideoTemplate/res";
import { ReduceVideoNoiseRequest } from "./ReduceVideoNoise/req";
import { ReduceVideoNoiseResponse } from "./ReduceVideoNoise/res";
import { SuperResolveVideoRequest } from "./SuperResolveVideo/req";
import { SuperResolveVideoResponse } from "./SuperResolveVideo/res";
import { ToneSdrVideoRequest } from "./ToneSdrVideo/req";
import { ToneSdrVideoResponse } from "./ToneSdrVideo/res";

interface VIDEOENHAN {
    /**
     * 本文介绍电商视频摘要AbstractEcommerceVideo的语法及示例。
     */
    AbstractEcommerceVideo(query: AbstractEcommerceVideoRequest): Promise<AbstractEcommerceVideoResponse>;
    /**
     * 本文介绍影视视频摘要AbstractFilmVideo的语法及示例。
     */
    AbstractFilmVideo(query: AbstractFilmVideoRequest): Promise<AbstractFilmVideoResponse>;
    /**
     * 本文介绍视频人脸融合模版增加AddFaceVideoTemplate的语法及示例。
     */
    AddFaceVideoTemplate(query: AddFaceVideoTemplateRequest): Promise<AddFaceVideoTemplateResponse>;
    /**
     * 本文介绍视频校色AdjustVideoColor的语法及示例。
     */
    AdjustVideoColor(query: AdjustVideoColorRequest): Promise<AdjustVideoColorResponse>;
    /**
     * 本文介绍视频画幅变换ChangeVideoSize的语法及示例。
     */
    ChangeVideoSize(query: ChangeVideoSizeRequest): Promise<ChangeVideoSizeResponse>;
    /**
     * 本文介绍SDR转HDR ConvertHdrVideo的语法及示例。
     */
    ConvertHdrVideo(query: ConvertHdrVideoRequest): Promise<ConvertHdrVideoResponse>;
    /**
     * 本文介绍视频人脸融合模版删除DeleteFaceVideoTemplate的语法及示例。
     */
    DeleteFaceVideoTemplate(query: DeleteFaceVideoTemplateRequest): Promise<DeleteFaceVideoTemplateResponse>;
    /**
     * 本文介绍视频生产（videoenhan）类目下的视频人像增强EnhancePortraitVideo的语法及示例。
     */
    EnhancePortraitVideo(query: EnhancePortraitVideoRequest): Promise<EnhancePortraitVideoResponse>;
    /**
     * 本文介绍视频综合增强EnhanceVideoQuality的语法及示例。
     */
    EnhanceVideoQuality(query: EnhanceVideoQualityRequest): Promise<EnhanceVideoQualityResponse>;
    /**
     * 本文介绍视频标志擦除EraseVideoLogo的语法及示例。
     */
    EraseVideoLogo(query: EraseVideoLogoRequest): Promise<EraseVideoLogoResponse>;
    /**
     * 本文介绍视频字幕擦除EraseVideoSubtitles的语法及示例。
     */
    EraseVideoSubtitles(query: EraseVideoSubtitlesRequest): Promise<EraseVideoSubtitlesResponse>;
    /**
     * 本文介绍视频生产（videoenhan）类目下的视频人像卡通化GenerateHumanAnimeStyleVideo的语法及示例。
     */
    GenerateHumanAnimeStyleVideo(query: GenerateHumanAnimeStyleVideoRequest): Promise<GenerateHumanAnimeStyleVideoResponse>;
    /**
     * 本文介绍通用视频生成GenerateVideo的语法及示例。
     */
    GenerateVideo(query: GenerateVideoRequest): Promise<GenerateVideoResponse>;
    /**
     * 本文档介绍查询异步任务结果GetAsyncJobResult的语法及示例。
     */
    GetAsyncJobResult(query: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse>;
    /**
     * 本文介绍视频插帧InterpolateVideoFrame的语法及示例。
     */
    InterpolateVideoFrame(query: InterpolateVideoFrameRequest): Promise<InterpolateVideoFrameResponse>;
    /**
     * 本文介绍视频人脸融合MergeVideoFace的语法及示例。
     */
    MergeVideoFace(query: MergeVideoFaceRequest): Promise<MergeVideoFaceResponse>;
    /**
     * 本文介绍模版视频人脸融合MergeVideoModelFace的语法及示例。
     */
    MergeVideoModelFace(query: MergeVideoModelFaceRequest): Promise<MergeVideoModelFaceResponse>;
    /**
     * 本文介绍视频人脸融合模版查询QueryFaceVideoTemplate的语法及示例。
     */
    QueryFaceVideoTemplate(query: QueryFaceVideoTemplateRequest): Promise<QueryFaceVideoTemplateResponse>;
    /**
     * 本文介绍视频生产（videoenhan）类目下的视频降噪ReduceVideoNoise的语法及示例。
     */
    ReduceVideoNoise(query: ReduceVideoNoiseRequest): Promise<ReduceVideoNoiseResponse>;
    /**
     * 视频超分辨率。
     */
    SuperResolveVideo(query: SuperResolveVideoRequest): Promise<SuperResolveVideoResponse>;
    /**
     * 本文介绍视频SDR调色ToneSdrVideo的语法及示例。
     */
    ToneSdrVideo(query: ToneSdrVideoRequest): Promise<ToneSdrVideoResponse>;
}
export default VIDEOENHAN;
