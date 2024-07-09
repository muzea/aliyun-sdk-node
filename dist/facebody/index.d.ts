import { AddFaceRequest } from "./AddFace/req";
import { AddFaceResponse } from "./AddFace/res";
import { BlurFaceRequest } from "./BlurFace/req";
import { BlurFaceResponse } from "./BlurFace/res";
import { AddFaceEntityRequest } from "./AddFaceEntity/req";
import { AddFaceEntityResponse } from "./AddFaceEntity/res";
import { BodyPostureRequest } from "./BodyPosture/req";
import { BodyPostureResponse } from "./BodyPosture/res";
import { CompareFaceRequest } from "./CompareFace/req";
import { CompareFaceResponse } from "./CompareFace/res";
import { CreateFaceDbRequest } from "./CreateFaceDb/req";
import { CreateFaceDbResponse } from "./CreateFaceDb/res";
import { DeleteFaceRequest } from "./DeleteFace/req";
import { DeleteFaceResponse } from "./DeleteFace/res";
import { DeleteFaceDbRequest } from "./DeleteFaceDb/req";
import { DeleteFaceDbResponse } from "./DeleteFaceDb/res";
import { DeleteFaceEntityRequest } from "./DeleteFaceEntity/req";
import { DeleteFaceEntityResponse } from "./DeleteFaceEntity/res";
import { DetectBodyCountRequest } from "./DetectBodyCount/req";
import { DetectBodyCountResponse } from "./DetectBodyCount/res";
import { DetectCelebrityRequest } from "./DetectCelebrity/req";
import { DetectCelebrityResponse } from "./DetectCelebrity/res";
import { DetectFaceRequest } from "./DetectFace/req";
import { DetectFaceResponse } from "./DetectFace/res";
import { DetectLivingFaceRequest } from "./DetectLivingFace/req";
import { DetectLivingFaceResponse } from "./DetectLivingFace/res";
import { DetectPedestrianRequest } from "./DetectPedestrian/req";
import { DetectPedestrianResponse } from "./DetectPedestrian/res";
import { DetectPedestrianIntrusionRequest } from "./DetectPedestrianIntrusion/req";
import { DetectPedestrianIntrusionResponse } from "./DetectPedestrianIntrusion/res";
import { DetectVideoLivingFaceRequest } from "./DetectVideoLivingFace/req";
import { DetectVideoLivingFaceResponse } from "./DetectVideoLivingFace/res";
import { EnhanceFaceRequest } from "./EnhanceFace/req";
import { EnhanceFaceResponse } from "./EnhanceFace/res";
import { FaceBeautyRequest } from "./FaceBeauty/req";
import { FaceBeautyResponse } from "./FaceBeauty/res";
import { FaceFilterRequest } from "./FaceFilter/req";
import { FaceFilterResponse } from "./FaceFilter/res";
import { FaceMakeupRequest } from "./FaceMakeup/req";
import { FaceMakeupResponse } from "./FaceMakeup/res";
import { FaceTidyupRequest } from "./FaceTidyup/req";
import { FaceTidyupResponse } from "./FaceTidyup/res";
import { GenerateHumanAnimeStyleRequest } from "./GenerateHumanAnimeStyle/req";
import { GenerateHumanAnimeStyleResponse } from "./GenerateHumanAnimeStyle/res";
import { GetFaceEntityRequest } from "./GetFaceEntity/req";
import { GetFaceEntityResponse } from "./GetFaceEntity/res";
import { HandPostureRequest } from "./HandPosture/req";
import { HandPostureResponse } from "./HandPosture/res";
import { ListFaceDbsRequest } from "./ListFaceDbs/req";
import { ListFaceDbsResponse } from "./ListFaceDbs/res";
import { ListFaceEntitiesRequest } from "./ListFaceEntities/req";
import { ListFaceEntitiesResponse } from "./ListFaceEntities/res";
import { PedestrianDetectAttributeRequest } from "./PedestrianDetectAttribute/req";
import { PedestrianDetectAttributeResponse } from "./PedestrianDetectAttribute/res";
import { RecognizeActionRequest } from "./RecognizeAction/req";
import { RecognizeActionResponse } from "./RecognizeAction/res";
import { RecognizeExpressionRequest } from "./RecognizeExpression/req";
import { RecognizeExpressionResponse } from "./RecognizeExpression/res";
import { RecognizeFaceRequest } from "./RecognizeFace/req";
import { RecognizeFaceResponse } from "./RecognizeFace/res";
import { RecognizePublicFaceRequest } from "./RecognizePublicFace/req";
import { RecognizePublicFaceResponse } from "./RecognizePublicFace/res";
import { SearchFaceRequest } from "./SearchFace/req";
import { SearchFaceResponse } from "./SearchFace/res";
import { UpdateFaceEntityRequest } from "./UpdateFaceEntity/req";
import { UpdateFaceEntityResponse } from "./UpdateFaceEntity/res";
import { GenRealPersonVerificationTokenRequest } from "./GenRealPersonVerificationToken/req";
import { GenRealPersonVerificationTokenResponse } from "./GenRealPersonVerificationToken/res";
import { GetRealPersonVerificationResultRequest } from "./GetRealPersonVerificationResult/req";
import { GetRealPersonVerificationResultResponse } from "./GetRealPersonVerificationResult/res";
import { GenerateHumanSketchStyleRequest } from "./GenerateHumanSketchStyle/req";
import { GenerateHumanSketchStyleResponse } from "./GenerateHumanSketchStyle/res";
import { AddFaceImageTemplateRequest } from "./AddFaceImageTemplate/req";
import { AddFaceImageTemplateResponse } from "./AddFaceImageTemplate/res";
import { DeleteFaceImageTemplateRequest } from "./DeleteFaceImageTemplate/req";
import { DeleteFaceImageTemplateResponse } from "./DeleteFaceImageTemplate/res";
import { MergeImageFaceRequest } from "./MergeImageFace/req";
import { MergeImageFaceResponse } from "./MergeImageFace/res";
import { QueryFaceImageTemplateRequest } from "./QueryFaceImageTemplate/req";
import { QueryFaceImageTemplateResponse } from "./QueryFaceImageTemplate/res";
import { RecognizeHandGestureRequest } from "./RecognizeHandGesture/req";
import { RecognizeHandGestureResponse } from "./RecognizeHandGesture/res";
import { MonitorExaminationRequest } from "./MonitorExamination/req";
import { MonitorExaminationResponse } from "./MonitorExamination/res";
import { ExtractFingerPrintRequest } from "./ExtractFingerPrint/req";
import { ExtractFingerPrintResponse } from "./ExtractFingerPrint/res";
import { RetouchBodyRequest } from "./RetouchBody/req";
import { RetouchBodyResponse } from "./RetouchBody/res";
import { LiquifyFaceRequest } from "./LiquifyFace/req";
import { LiquifyFaceResponse } from "./LiquifyFace/res";
import { RetouchSkinRequest } from "./RetouchSkin/req";
import { RetouchSkinResponse } from "./RetouchSkin/res";
import { BatchAddFacesRequest } from "./BatchAddFaces/req";
import { BatchAddFacesResponse } from "./BatchAddFaces/res";
import { CompareFaceWithMaskRequest } from "./CompareFaceWithMask/req";
import { CompareFaceWithMaskResponse } from "./CompareFaceWithMask/res";
import { DetectInfraredLivingFaceRequest } from "./DetectInfraredLivingFace/req";
import { DetectInfraredLivingFaceResponse } from "./DetectInfraredLivingFace/res";
import { DeepfakeFaceRequest } from "./DeepfakeFace/req";
import { DeepfakeFaceResponse } from "./DeepfakeFace/res";

interface FACEBODY {
    /**
     * 本文介绍添加人脸数据AddFace的语法及示例。
     */
    AddFace(query: AddFaceRequest): Promise<AddFaceResponse>;
    /**
     * 本文介绍人脸信息脱敏BlurFace的语法及示例。
     */
    BlurFace(query: BlurFaceRequest): Promise<BlurFaceResponse>;
    /**
     * 本文介绍添加人脸样本AddFaceEntity的语法及示例。
     */
    AddFaceEntity(query: AddFaceEntityRequest): Promise<AddFaceEntityResponse>;
    /**
     * 本文介绍人体姿态关键点BodyPosture的语法及示例。
     */
    BodyPosture(query: BodyPostureRequest): Promise<BodyPostureResponse>;
    /**
     * 本文介绍人脸比对CompareFace的语法及示例。
     */
    CompareFace(query: CompareFaceRequest): Promise<CompareFaceResponse>;
    /**
     * 本文介绍创建人脸数据库CreateFaceDb的语法及示例。
     */
    CreateFaceDb(query: CreateFaceDbRequest): Promise<CreateFaceDbResponse>;
    /**
     * 本文介绍删除人脸DeleteFace的语法及示例。
     */
    DeleteFace(query: DeleteFaceRequest): Promise<DeleteFaceResponse>;
    /**
     * 本文介绍删除数据库DeleteFaceDb的语法及示例。
     */
    DeleteFaceDb(query: DeleteFaceDbRequest): Promise<DeleteFaceDbResponse>;
    /**
     * 本文介绍删除人脸样本DeleteFaceEntity的语法及示例。
     */
    DeleteFaceEntity(query: DeleteFaceEntityRequest): Promise<DeleteFaceEntityResponse>;
    /**
     * 本文为您介绍人体计数DetectBodyCount的语法及示例。
     */
    DetectBodyCount(query: DetectBodyCountRequest): Promise<DetectBodyCountResponse>;
    /**
     * 本文介绍明星识别DetectCelebrity的语法及示例。
     */
    DetectCelebrity(query: DetectCelebrityRequest): Promise<DetectCelebrityResponse>;
    /**
     * 本文介绍人脸检测与五官定位DetectFace的语法及示例。
     */
    DetectFace(query: DetectFaceRequest): Promise<DetectFaceResponse>;
    /**
     * 本文为您介绍人脸活体检测DetectLivingFace的语法及示例。
     */
    DetectLivingFace(query: DetectLivingFaceRequest): Promise<DetectLivingFaceResponse>;
    /**
     * 本文介绍人体检测DetectPedestrian的语法及示例。
     */
    DetectPedestrian(query: DetectPedestrianRequest): Promise<DetectPedestrianResponse>;
    /**
     * 本文介绍行人区域进入检测DetectPedestrianIntrusion的语法及示例。
     */
    DetectPedestrianIntrusion(query: DetectPedestrianIntrusionRequest): Promise<DetectPedestrianIntrusionResponse>;
    /**
     * 本文介绍视频活体检测DetectVideoLivingFace的语法及示例。
     */
    DetectVideoLivingFace(query: DetectVideoLivingFaceRequest): Promise<DetectVideoLivingFaceResponse>;
    /**
     * 本文介绍人脸修复增强EnhanceFace的语法及示例。
     */
    EnhanceFace(query: EnhanceFaceRequest): Promise<EnhanceFaceResponse>;
    /**
     * 本文介绍人脸美颜FaceBeauty的语法及示例。
     */
    FaceBeauty(query: FaceBeautyRequest): Promise<FaceBeautyResponse>;
    /**
     * 本文介绍人脸滤镜FaceFilter的语法及示例。
     */
    FaceFilter(query: FaceFilterRequest): Promise<FaceFilterResponse>;
    /**
     * 本文介绍人脸美妆FaceMakeup的语法及示例。
     */
    FaceMakeup(query: FaceMakeupRequest): Promise<FaceMakeupResponse>;
    /**
     * 文本介绍人脸美型。
     */
    FaceTidyup(query: FaceTidyupRequest): Promise<FaceTidyupResponse>;
    /**
     * 本文介绍人物动漫化GenerateHumanAnimeStyle的语法及示例。
     */
    GenerateHumanAnimeStyle(query: GenerateHumanAnimeStyleRequest): Promise<GenerateHumanAnimeStyleResponse>;
    /**
     * 本文介绍查询人脸样本GetFaceEntity的语法及示例。
     */
    GetFaceEntity(query: GetFaceEntityRequest): Promise<GetFaceEntityResponse>;
    /**
     * 本文介绍手势关键点检测HandPosture的语法及示例。
     */
    HandPosture(query: HandPostureRequest): Promise<HandPostureResponse>;
    /**
     * 本文介绍查看数据库列表ListFaceDbs的语法及示例。
     */
    ListFaceDbs(query: ListFaceDbsRequest): Promise<ListFaceDbsResponse>;
    /**
     * 本文介绍查询人脸样本列表ListFaceEntities的语法及示例。
     */
    ListFaceEntities(query: ListFaceEntitiesRequest): Promise<ListFaceEntitiesResponse>;
    /**
     * 本文介绍人体结构化属性PedestrianDetectAttribute的语法及示例。
     */
    PedestrianDetectAttribute(query: PedestrianDetectAttributeRequest): Promise<PedestrianDetectAttributeResponse>;
    /**
     * 本文介绍动作行为识别RecognizeAction的语法及示例。
     */
    RecognizeAction(query: RecognizeActionRequest): Promise<RecognizeActionResponse>;
    /**
     * 本文为您介绍表情识别RecognizeExpression的语法及示例。
     */
    RecognizeExpression(query: RecognizeExpressionRequest): Promise<RecognizeExpressionResponse>;
    /**
     * 检测人脸的性别、年龄、表情、眼镜、帽子五种属性，返回人脸的1024维深度学习特征。
     */
    RecognizeFace(query: RecognizeFaceRequest): Promise<RecognizeFaceResponse>;
    /**
     * 本文介绍公众人物识别RecognizePublicFace的语法及示例。
     */
    RecognizePublicFace(query: RecognizePublicFaceRequest): Promise<RecognizePublicFaceResponse>;
    /**
     * 本文介绍人脸搜索SearchFace的语法及示例。
     */
    SearchFace(query: SearchFaceRequest): Promise<SearchFaceResponse>;
    /**
     * 更更新人脸样本。
     */
    UpdateFaceEntity(query: UpdateFaceEntityRequest): Promise<UpdateFaceEntityResponse>;
    /**
     * 核身认证请求。
     */
    GenRealPersonVerificationToken(query: GenRealPersonVerificationTokenRequest): Promise<GenRealPersonVerificationTokenResponse>;
    /**
     * 本文介绍核身认证移动端查询GetRealPersonVerificationResult的语法及示例。
     */
    GetRealPersonVerificationResult(query: GetRealPersonVerificationResultRequest): Promise<GetRealPersonVerificationResultResponse>;
    /**
     * 添加人像素描风格化。
     */
    GenerateHumanSketchStyle(query: GenerateHumanSketchStyleRequest): Promise<GenerateHumanSketchStyleResponse>;
    /**
     * 本文介绍图像人脸融合模板增加AddFaceImageTemplate的语法及示例。
     */
    AddFaceImageTemplate(query: AddFaceImageTemplateRequest): Promise<AddFaceImageTemplateResponse>;
    /**
     * 本文介绍图像人脸融合模板删除DeleteFaceImageTemplate的语法及示例。
     */
    DeleteFaceImageTemplate(query: DeleteFaceImageTemplateRequest): Promise<DeleteFaceImageTemplateResponse>;
    /**
     * 本文介绍图像人脸融合MergeImageFace的语法及示例。
     */
    MergeImageFace(query: MergeImageFaceRequest): Promise<MergeImageFaceResponse>;
    /**
     * 本文介绍图像人脸融合模板查询QueryFaceImageTemplate的语法及示例。
     */
    QueryFaceImageTemplate(query: QueryFaceImageTemplateRequest): Promise<QueryFaceImageTemplateResponse>;
    /**
     * 本文介绍静态手势识别RecognizeHandGesture的语法及示例。
     */
    RecognizeHandGesture(query: RecognizeHandGestureRequest): Promise<RecognizeHandGestureResponse>;
    /**
     * 本文介绍线上监考MonitorExamination的语法及示例。
     */
    MonitorExamination(query: MonitorExaminationRequest): Promise<MonitorExaminationResponse>;
    /**
     * 本文介绍指纹提取ExtractFingerPrint的语法及示例。
     */
    ExtractFingerPrint(query: ExtractFingerPrintRequest): Promise<ExtractFingerPrintResponse>;
    /**
     * 本文介绍身体美型RetouchBody的语法及示例。
     */
    RetouchBody(query: RetouchBodyRequest): Promise<RetouchBodyResponse>;
    /**
     * 本文介绍智能瘦脸LiquifyFace的语法及示例。
     */
    LiquifyFace(query: LiquifyFaceRequest): Promise<LiquifyFaceResponse>;
    /**
     * 本文介绍智能美肤RetouchSkin的语法及示例。
     */
    RetouchSkin(query: RetouchSkinRequest): Promise<RetouchSkinResponse>;
    /**
     * 本文介绍批量添加人脸数据BatchAddFaces的语法及示例。
     */
    BatchAddFaces(query: BatchAddFacesRequest): Promise<BatchAddFacesResponse>;
    /**
     * 本文介绍口罩人脸比对1:1CompareFaceWithMask的语法及示例。
     */
    CompareFaceWithMask(query: CompareFaceWithMaskRequest): Promise<CompareFaceWithMaskResponse>;
    /**
     * 本文为您介绍红外人脸活体检测DetectInfraredLivingFace的语法及示例。
     */
    DetectInfraredLivingFace(query: DetectInfraredLivingFaceRequest): Promise<DetectInfraredLivingFaceResponse>;
    /**
     * 本文介绍人脸人体（facebody）类目下的换脸鉴别DeepfakeFace的语法及示例。
     */
    DeepfakeFace(query: DeepfakeFaceRequest): Promise<DeepfakeFaceResponse>;
}
export default FACEBODY;
