import { GetHotspotConfigRequest } from "./GetHotspotConfig/req";
import { GetHotspotConfigResponse } from "./GetHotspotConfig/res";
import { GetHotspotTagRequest } from "./GetHotspotTag/req";
import { GetHotspotTagResponse } from "./GetHotspotTag/res";
import { GetWindowConfigRequest } from "./GetWindowConfig/req";
import { GetWindowConfigResponse } from "./GetWindowConfig/res";
import { PublishHotspotRequest } from "./PublishHotspot/req";
import { PublishHotspotResponse } from "./PublishHotspot/res";
import { SaveHotspotConfigRequest } from "./SaveHotspotConfig/req";
import { SaveHotspotConfigResponse } from "./SaveHotspotConfig/res";
import { SaveHotspotTagRequest } from "./SaveHotspotTag/req";
import { SaveHotspotTagResponse } from "./SaveHotspotTag/res";
import { ListSceneRequest } from "./ListScene/req";
import { ListSceneResponse } from "./ListScene/res";
import { TempPreviewStatusRequest } from "./TempPreviewStatus/req";
import { TempPreviewStatusResponse } from "./TempPreviewStatus/res";
import { DropSceneRequest } from "./DropScene/req";
import { DropSceneResponse } from "./DropScene/res";
import { DropProjectRequest } from "./DropProject/req";
import { DropProjectResponse } from "./DropProject/res";
import { GetSingleConnDataRequest } from "./GetSingleConnData/req";
import { GetSingleConnDataResponse } from "./GetSingleConnData/res";
import { AddProjectRequest } from "./AddProject/req";
import { AddProjectResponse } from "./AddProject/res";
import { ListProjectRequest } from "./ListProject/req";
import { ListProjectResponse } from "./ListProject/res";
import { DetailSceneRequest } from "./DetailScene/req";
import { DetailSceneResponse } from "./DetailScene/res";
import { GetTaskStatusRequest } from "./GetTaskStatus/req";
import { GetTaskStatusResponse } from "./GetTaskStatus/res";
import { AddSubSceneRequest } from "./AddSubScene/req";
import { AddSubSceneResponse } from "./AddSubScene/res";
import { UpdateSceneRequest } from "./UpdateScene/req";
import { UpdateSceneResponse } from "./UpdateScene/res";
import { DetailProjectRequest } from "./DetailProject/req";
import { DetailProjectResponse } from "./DetailProject/res";
import { AddSceneRequest } from "./AddScene/req";
import { AddSceneResponse } from "./AddScene/res";
import { RectVerticalRequest } from "./RectVertical/req";
import { RectVerticalResponse } from "./RectVertical/res";
import { GetLayoutDataRequest } from "./GetLayoutData/req";
import { GetLayoutDataResponse } from "./GetLayoutData/res";
import { TempPreviewRequest } from "./TempPreview/req";
import { TempPreviewResponse } from "./TempPreview/res";
import { ScenePublishRequest } from "./ScenePublish/req";
import { ScenePublishResponse } from "./ScenePublish/res";
import { LabelBuildRequest } from "./LabelBuild/req";
import { LabelBuildResponse } from "./LabelBuild/res";
import { GetOssPolicyRequest } from "./GetOssPolicy/req";
import { GetOssPolicyResponse } from "./GetOssPolicy/res";
import { PredictionWallLineRequest } from "./PredictionWallLine/req";
import { PredictionWallLineResponse } from "./PredictionWallLine/res";
import { GetSceneBuildTaskStatusRequest } from "./GetSceneBuildTaskStatus/req";
import { GetSceneBuildTaskStatusResponse } from "./GetSceneBuildTaskStatus/res";
import { ListSubSceneRequest } from "./ListSubScene/req";
import { ListSubSceneResponse } from "./ListSubScene/res";
import { UpdateConnDataRequest } from "./UpdateConnData/req";
import { UpdateConnDataResponse } from "./UpdateConnData/res";
import { PredImageRequest } from "./PredImage/req";
import { PredImageResponse } from "./PredImage/res";
import { DropSubSceneRequest } from "./DropSubScene/req";
import { DropSubSceneResponse } from "./DropSubScene/res";
import { DetailSubSceneRequest } from "./DetailSubScene/req";
import { DetailSubSceneResponse } from "./DetailSubScene/res";
import { GetRectifyImageRequest } from "./GetRectifyImage/req";
import { GetRectifyImageResponse } from "./GetRectifyImage/res";
import { GetOriginLayoutDataRequest } from "./GetOriginLayoutData/req";
import { GetOriginLayoutDataResponse } from "./GetOriginLayoutData/res";
import { UpdateSubSceneRequest } from "./UpdateSubScene/req";
import { UpdateSubSceneResponse } from "./UpdateSubScene/res";
import { RectifyImageRequest } from "./RectifyImage/req";
import { RectifyImageResponse } from "./RectifyImage/res";
import { LinkImageRequest } from "./LinkImage/req";
import { LinkImageResponse } from "./LinkImage/res";
import { OptimizeRightAngleRequest } from "./OptimizeRightAngle/req";
import { OptimizeRightAngleResponse } from "./OptimizeRightAngle/res";
import { GetConnDataRequest } from "./GetConnData/req";
import { GetConnDataResponse } from "./GetConnData/res";
import { UpdateProjectRequest } from "./UpdateProject/req";
import { UpdateProjectResponse } from "./UpdateProject/res";
import { UpdateLayoutDataRequest } from "./UpdateLayoutData/req";
import { UpdateLayoutDataResponse } from "./UpdateLayoutData/res";
import { GetSubSceneTaskStatusRequest } from "./GetSubSceneTaskStatus/req";
import { GetSubSceneTaskStatusResponse } from "./GetSubSceneTaskStatus/res";
import { PublishSceneRequest } from "./PublishScene/req";
import { PublishSceneResponse } from "./PublishScene/res";
import { AddRelativePositionRequest } from "./AddRelativePosition/req";
import { AddRelativePositionResponse } from "./AddRelativePosition/res";
import { GetScenePreviewInfoRequest } from "./GetScenePreviewInfo/req";
import { GetScenePreviewInfoResponse } from "./GetScenePreviewInfo/res";
import { GetHotspotSceneDataRequest } from "./GetHotspotSceneData/req";
import { GetHotspotSceneDataResponse } from "./GetHotspotSceneData/res";
import { AddMosaicsRequest } from "./AddMosaics/req";
import { AddMosaicsResponse } from "./AddMosaics/res";
import { RecoveryOriginImageRequest } from "./RecoveryOriginImage/req";
import { RecoveryOriginImageResponse } from "./RecoveryOriginImage/res";
import { RollbackSubSceneRequest } from "./RollbackSubScene/req";
import { RollbackSubSceneResponse } from "./RollbackSubScene/res";
import { PublishStatusRequest } from "./PublishStatus/req";
import { PublishStatusResponse } from "./PublishStatus/res";
import { AddRoomPlanRequest } from "./AddRoomPlan/req";
import { AddRoomPlanResponse } from "./AddRoomPlan/res";
import { GetScenePreviewDataRequest } from "./GetScenePreviewData/req";
import { GetScenePreviewDataResponse } from "./GetScenePreviewData/res";
import { CheckUserPropertyRequest } from "./CheckUserProperty/req";
import { CheckUserPropertyResponse } from "./CheckUserProperty/res";
import { GetScenePreviewResourceRequest } from "./GetScenePreviewResource/req";
import { GetScenePreviewResourceResponse } from "./GetScenePreviewResource/res";
import { GetPackSceneTaskStatusRequest } from "./GetPackSceneTaskStatus/req";
import { GetPackSceneTaskStatusResponse } from "./GetPackSceneTaskStatus/res";
import { GetScenePackUrlRequest } from "./GetScenePackUrl/req";
import { GetScenePackUrlResponse } from "./GetScenePackUrl/res";
import { PackSceneRequest } from "./PackScene/req";
import { PackSceneResponse } from "./PackScene/res";
import { GetCopySceneTaskStatusRequest } from "./GetCopySceneTaskStatus/req";
import { GetCopySceneTaskStatusResponse } from "./GetCopySceneTaskStatus/res";
import { UpdateSubSceneSeqRequest } from "./UpdateSubSceneSeq/req";
import { UpdateSubSceneSeqResponse } from "./UpdateSubSceneSeq/res";
import { CopySceneRequest } from "./CopyScene/req";
import { CopySceneResponse } from "./CopyScene/res";
import { GetSourcePackStatusRequest } from "./GetSourcePackStatus/req";
import { GetSourcePackStatusResponse } from "./GetSourcePackStatus/res";
import { PackSourceRequest } from "./PackSource/req";
import { PackSourceResponse } from "./PackSource/res";
import { SaveHotspotTagListRequest } from "./SaveHotspotTagList/req";
import { SaveHotspotTagListResponse } from "./SaveHotspotTagList/res";
import { SaveModelConfigRequest } from "./SaveModelConfig/req";
import { SaveModelConfigResponse } from "./SaveModelConfig/res";
import { CreateUploadPolicyRequest } from "./CreateUploadPolicy/req";
import { CreateUploadPolicyResponse } from "./CreateUploadPolicy/res";
import { PublishHotspotConfigRequest } from "./PublishHotspotConfig/req";
import { PublishHotspotConfigResponse } from "./PublishHotspotConfig/res";
import { AddHotspotFileRequest } from "./AddHotspotFile/req";
import { AddHotspotFileResponse } from "./AddHotspotFile/res";
import { SaveMinimapRequest } from "./SaveMinimap/req";
import { SaveMinimapResponse } from "./SaveMinimap/res";

interface TDSR {
    /**
     * 查询热点标注配置,后处理时使用。
     */
    GetHotspotConfig(query: GetHotspotConfigRequest): Promise<GetHotspotConfigResponse>;
    /**
     * 获取热点标注信息，后处理时使用。
     */
    GetHotspotTag(query: GetHotspotTagRequest): Promise<GetHotspotTagResponse>;
    /**
     * 获取系统配置信息，预览、后处理时使用。
     */
    GetWindowConfig(query: GetWindowConfigRequest): Promise<GetWindowConfigResponse>;
    /**
     * 发布热点信息。
     */
    PublishHotspot(query: PublishHotspotRequest): Promise<PublishHotspotResponse>;
    /**
     * 保存热点标注配置，后处理时使用。
     */
    SaveHotspotConfig(query: SaveHotspotConfigRequest): Promise<SaveHotspotConfigResponse>;
    /**
     * 保存热点标注信息，后处理时使用。
     */
    SaveHotspotTag(query: SaveHotspotTagRequest): Promise<SaveHotspotTagResponse>;
    /**
     * 获取指定项目下的所有主场景列表。
     */
    ListScene(query: ListSceneRequest): Promise<ListSceneResponse>;
    /**
     * 查询预览任务状态，调用TempPreview后可以使用此接口查看任务状态，当任务结束后才可以使用预览链接进行预览，需要在调用TempPreview接口后10分钟之内调用。
     */
    TempPreviewStatus(query: TempPreviewStatusRequest): Promise<TempPreviewStatusResponse>;
    /**
     * 删除指定主场景。
     */
    DropScene(query: DropSceneRequest): Promise<DropSceneResponse>;
    /**
     * 删除已有项目，项目下存在已发布场景的不支持删除。
     */
    DropProject(query: DropProjectRequest): Promise<DropProjectResponse>;
    /**
     * 获取单图的关联信息。
     */
    GetSingleConnData(query: GetSingleConnDataRequest): Promise<GetSingleConnDataResponse>;
    /**
     * 创建一个新项目。
     */
    AddProject(query: AddProjectRequest): Promise<AddProjectResponse>;
    /**
     * 分页获取所有项目列表。
     */
    ListProject(query: ListProjectRequest): Promise<ListProjectResponse>;
    /**
     * 获取指定主场景信息。
     */
    DetailScene(query: DetailSceneRequest): Promise<DetailSceneResponse>;
    /**
     * 查询任务状态，可以查询所有类型任务状态。
     */
    GetTaskStatus(query: GetTaskStatusRequest): Promise<GetTaskStatusResponse>;
    /**
     * 在指定的主场景下添加新的子场景。
     */
    AddSubScene(query: AddSubSceneRequest): Promise<AddSubSceneResponse>;
    /**
     * 更新场景信息名称。
     */
    UpdateScene(query: UpdateSceneRequest): Promise<UpdateSceneResponse>;
    /**
     * 查询项目基本信息。
     */
    DetailProject(query: DetailProjectRequest): Promise<DetailProjectResponse>;
    /**
     * 创建特定类型的主场景。
     */
    AddScene(query: AddSceneRequest): Promise<AddSceneResponse>;
    /**
     * 对指定子场景下的图片进行垂直矫正，矫正后会删除该子场景关联关系。
     */
    RectVertical(query: RectVerticalRequest): Promise<RectVerticalResponse>;
    /**
     * 获取最新标注信息，标注时使用。
     */
    GetLayoutData(query: GetLayoutDataRequest): Promise<GetLayoutDataResponse>;
    /**
     * 重建后可以调用此预览接口获取预览链接。
     */
    TempPreview(query: TempPreviewRequest): Promise<TempPreviewResponse>;
    /**
     * 发布
     */
    ScenePublish(query: ScenePublishRequest): Promise<ScenePublishResponse>;
    /**
     * 3D模型重建。
     */
    LabelBuild(query: LabelBuildRequest): Promise<LabelBuildResponse>;
    /**
     * 获取oss授权，获取授权后使用OSS SDK往指定路径上传图片或视频文件，上传完后直接调用LinkImage接口往子场景中添加图片。
     */
    GetOssPolicy(query: GetOssPolicyRequest): Promise<GetOssPolicyResponse>;
    /**
     * 墙线预测，返回taskId以及subsceneId，可以根据taskId查询任务状态，任务结束后可以根据subsceneId查询具体墙线数据。
     */
    PredictionWallLine(query: PredictionWallLineRequest): Promise<PredictionWallLineResponse>;
    /**
     * 查询场景重建任务状态。
     */
    GetSceneBuildTaskStatus(query: GetSceneBuildTaskStatusRequest): Promise<GetSceneBuildTaskStatusResponse>;
    /**
     * 分页查看子场景列表。
     */
    ListSubScene(query: ListSubSceneRequest): Promise<ListSubSceneResponse>;
    /**
     * 更新关联信息，标注时使用，保存最新关联数据。
     */
    UpdateConnData(query: UpdateConnDataRequest): Promise<UpdateConnDataResponse>;
    /**
     * 图片预处理，包括垂直矫正、墙线预测、门预测，自动门预测与切图失败时可使用此接口发起重试。
     */
    PredImage(query: PredImageRequest): Promise<PredImageResponse>;
    /**
     * 删除指定子场景。
     */
    DropSubScene(query: DropSubSceneRequest): Promise<DropSubSceneResponse>;
    /**
     * 查看子场景信息。
     */
    DetailSubScene(query: DetailSubSceneRequest): Promise<DetailSubSceneResponse>;
    /**
     * 获取垂直矫正后的图片。
     */
    GetRectifyImage(query: GetRectifyImageRequest): Promise<GetRectifyImageResponse>;
    /**
     * 获取原始标注信息，可以配合更新标注信息接口使用来还原标注信息。
     */
    GetOriginLayoutData(query: GetOriginLayoutDataRequest): Promise<GetOriginLayoutDataResponse>;
    /**
     * 更新指定的子场景信息。
     */
    UpdateSubScene(query: UpdateSubSceneRequest): Promise<UpdateSubSceneResponse>;
    /**
     * 对输入图片进行垂直矫正。
     */
    RectifyImage(query: RectifyImageRequest): Promise<RectifyImageResponse>;
    /**
     * 关联图片或视频到子场景，目前一个子场景只能关联一张图片或者一个视频。
     */
    LinkImage(query: LinkImageRequest): Promise<LinkImageResponse>;
    /**
     * 将墙交汇处优化为直角。
     */
    OptimizeRightAngle(query: OptimizeRightAngleRequest): Promise<OptimizeRightAngleResponse>;
    /**
     * 获取关联信息，标注时使用。
     */
    GetConnData(query: GetConnDataRequest): Promise<GetConnDataResponse>;
    /**
     * 更新指定的项目信息。
     */
    UpdateProject(query: UpdateProjectRequest): Promise<UpdateProjectResponse>;
    /**
     * 更新标注信息，标注后可以使用此接口保存标注信息。
     */
    UpdateLayoutData(query: UpdateLayoutDataRequest): Promise<UpdateLayoutDataResponse>;
    /**
     * 子场景的预处理及切图状态。
     */
    GetSubSceneTaskStatus(query: GetSubSceneTaskStatusRequest): Promise<GetSubSceneTaskStatusResponse>;
    /**
     * 场景发布。
     */
    PublishScene(query: PublishSceneRequest): Promise<PublishSceneResponse>;
    /**
     * 提交子场景间相对位置。
     */
    AddRelativePosition(query: AddRelativePositionRequest): Promise<AddRelativePositionResponse>;
    /**
     * 获取场景模型点位信息。
     */
    GetScenePreviewInfo(query: GetScenePreviewInfoRequest): Promise<GetScenePreviewInfoResponse>;
    /**
     * 根据预览token查询场景模型预览数据。
     */
    GetHotspotSceneData(query: GetHotspotSceneDataRequest): Promise<GetHotspotSceneDataResponse>;
    /**
     * 自定义区域打马赛克。
     */
    AddMosaics(query: AddMosaicsRequest): Promise<AddMosaicsResponse>;
    /**
     * 该接口用于打马赛克图片的重置恢复。
     */
    RecoveryOriginImage(query: RecoveryOriginImageRequest): Promise<RecoveryOriginImageResponse>;
    /**
     * 用于全景类型场景中已删除的子场景的恢复。
     */
    RollbackSubScene(query: RollbackSubSceneRequest): Promise<RollbackSubSceneResponse>;
    /**
     * 查询发布状态。
     */
    PublishStatus(query: PublishStatusRequest): Promise<PublishStatusResponse>;
    /**
     * 通过移动端算法处理会生成相应的房屋数据，将该数据上传至云端后，可通过云端算法模块进行三维模型重建。
     */
    AddRoomPlan(query: AddRoomPlanRequest): Promise<AddRoomPlanResponse>;
    /**
     * 场景预览数据，用于模型渲染。
     */
    GetScenePreviewData(query: GetScenePreviewDataRequest): Promise<GetScenePreviewDataResponse>;
    /**
     * 检查用户是否具有指定业务属性。
     */
    CheckUserProperty(query: CheckUserPropertyRequest): Promise<CheckUserPropertyResponse>;
    /**
     * 用于模型类场景的预览。
     */
    GetScenePreviewResource(query: GetScenePreviewResourceRequest): Promise<GetScenePreviewResourceResponse>;
    /**
     * 获取场景数据打包状态。
     */
    GetPackSceneTaskStatus(query: GetPackSceneTaskStatusRequest): Promise<GetPackSceneTaskStatusResponse>;
    /**
     * 用于调用PackScene接口后，获取数据包地址，以便于下载。
     */
    GetScenePackUrl(query: GetScenePackUrlRequest): Promise<GetScenePackUrlResponse>;
    /**
     * 打包场景数据，入参type为download可下载到本地，入参type为sync可可同步到自己的阿里云oss（前提是自己已开通）。
     */
    PackScene(query: PackSceneRequest): Promise<PackSceneResponse>;
    /**
     * 查询复制场景任务状态。
     */
    GetCopySceneTaskStatus(query: GetCopySceneTaskStatusRequest): Promise<GetCopySceneTaskStatusResponse>;
    /**
     * 此接口用于预览页面中子场景的顺序。
     */
    UpdateSubSceneSeq(query: UpdateSubSceneSeqRequest): Promise<UpdateSubSceneSeqResponse>;
    /**
     * 可以把原来的场景复制一份。
     */
    CopyScene(query: CopySceneRequest): Promise<CopySceneResponse>;
    /**
     * 获取全景图文件打包状态。
     */
    GetSourcePackStatus(query: GetSourcePackStatusRequest): Promise<GetSourcePackStatusResponse>;
    /**
     * 获取3D模型类型下所有全景图片。
     */
    PackSource(query: PackSourceRequest): Promise<PackSourceResponse>;
    /**
     * 保存热点数据。
     */
    SaveHotspotTagList(query: SaveHotspotTagListRequest): Promise<SaveHotspotTagListResponse>;
    /**
     * 保存模型配置。
     */
    SaveModelConfig(query: SaveModelConfigRequest): Promise<SaveModelConfigResponse>;
    /**
     * 获取上传凭据。
     */
    CreateUploadPolicy(query: CreateUploadPolicyRequest): Promise<CreateUploadPolicyResponse>;
    /**
     * 发布热点配置。
     */
    PublishHotspotConfig(query: PublishHotspotConfigRequest): Promise<PublishHotspotConfigResponse>;
    /**
     * 保存模型文件
     */
    AddHotspotFile(query: AddHotspotFileRequest): Promise<AddHotspotFileResponse>;
    /**
     * 保存小地图数据
     */
    SaveMinimap(query: SaveMinimapRequest): Promise<SaveMinimapResponse>;
}
export default TDSR;
