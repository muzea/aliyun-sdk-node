import { AddEventRecordPlanDeviceRequest } from "./AddEventRecordPlanDevice/req";
import { AddEventRecordPlanDeviceResponse } from "./AddEventRecordPlanDevice/res";
import { AddFaceDeviceGroupRequest } from "./AddFaceDeviceGroup/req";
import { AddFaceDeviceGroupResponse } from "./AddFaceDeviceGroup/res";
import { AddFaceDeviceToDeviceGroupRequest } from "./AddFaceDeviceToDeviceGroup/req";
import { AddFaceDeviceToDeviceGroupResponse } from "./AddFaceDeviceToDeviceGroup/res";
import { AddFaceUserRequest } from "./AddFaceUser/req";
import { AddFaceUserResponse } from "./AddFaceUser/res";
import { AddFaceUserGroupRequest } from "./AddFaceUserGroup/req";
import { AddFaceUserGroupResponse } from "./AddFaceUserGroup/res";
import { AddFaceUserGroupAndDeviceGroupRelationRequest } from "./AddFaceUserGroupAndDeviceGroupRelation/req";
import { AddFaceUserGroupAndDeviceGroupRelationResponse } from "./AddFaceUserGroupAndDeviceGroupRelation/res";
import { AddFaceUserToUserGroupRequest } from "./AddFaceUserToUserGroup/req";
import { AddFaceUserToUserGroupResponse } from "./AddFaceUserToUserGroup/res";
import { AddRecordPlanDeviceRequest } from "./AddRecordPlanDevice/req";
import { AddRecordPlanDeviceResponse } from "./AddRecordPlanDevice/res";
import { BindPictureSearchAppWithDevicesRequest } from "./BindPictureSearchAppWithDevices/req";
import { BindPictureSearchAppWithDevicesResponse } from "./BindPictureSearchAppWithDevices/res";
import { CheckFaceUserDoExistOnDeviceRequest } from "./CheckFaceUserDoExistOnDevice/req";
import { CheckFaceUserDoExistOnDeviceResponse } from "./CheckFaceUserDoExistOnDevice/res";
import { ClearFaceDeviceDBRequest } from "./ClearFaceDeviceDB/req";
import { ClearFaceDeviceDBResponse } from "./ClearFaceDeviceDB/res";
import { CreateEventRecordPlanRequest } from "./CreateEventRecordPlan/req";
import { CreateEventRecordPlanResponse } from "./CreateEventRecordPlan/res";
import { CreatePictureSearchAppRequest } from "./CreatePictureSearchApp/req";
import { CreatePictureSearchAppResponse } from "./CreatePictureSearchApp/res";
import { CreateRecordPlanRequest } from "./CreateRecordPlan/req";
import { CreateRecordPlanResponse } from "./CreateRecordPlan/res";
import { CreateTimeTemplateRequest } from "./CreateTimeTemplate/req";
import { CreateTimeTemplateResponse } from "./CreateTimeTemplate/res";
import { DeleteEventRecordPlanRequest } from "./DeleteEventRecordPlan/req";
import { DeleteEventRecordPlanResponse } from "./DeleteEventRecordPlan/res";
import { DeleteEventRecordPlanDeviceRequest } from "./DeleteEventRecordPlanDevice/req";
import { DeleteEventRecordPlanDeviceResponse } from "./DeleteEventRecordPlanDevice/res";
import { DeleteFaceDeviceGroupRequest } from "./DeleteFaceDeviceGroup/req";
import { DeleteFaceDeviceGroupResponse } from "./DeleteFaceDeviceGroup/res";
import { DeleteFaceUserRequest } from "./DeleteFaceUser/req";
import { DeleteFaceUserResponse } from "./DeleteFaceUser/res";
import { DeleteFaceUserGroupRequest } from "./DeleteFaceUserGroup/req";
import { DeleteFaceUserGroupResponse } from "./DeleteFaceUserGroup/res";
import { DeleteFaceUserGroupAndDeviceGroupRelationRequest } from "./DeleteFaceUserGroupAndDeviceGroupRelation/req";
import { DeleteFaceUserGroupAndDeviceGroupRelationResponse } from "./DeleteFaceUserGroupAndDeviceGroupRelation/res";
import { DeleteRecordPlanRequest } from "./DeleteRecordPlan/req";
import { DeleteRecordPlanResponse } from "./DeleteRecordPlan/res";
import { DeleteRecordPlanDeviceRequest } from "./DeleteRecordPlanDevice/req";
import { DeleteRecordPlanDeviceResponse } from "./DeleteRecordPlanDevice/res";
import { DeleteTimeTemplateRequest } from "./DeleteTimeTemplate/req";
import { DeleteTimeTemplateResponse } from "./DeleteTimeTemplate/res";
import { DetectUserFaceByUrlRequest } from "./DetectUserFaceByUrl/req";
import { DetectUserFaceByUrlResponse } from "./DetectUserFaceByUrl/res";
import { PictureSearchPictureRequest } from "./PictureSearchPicture/req";
import { PictureSearchPictureResponse } from "./PictureSearchPicture/res";
import { QueryDeviceEventRequest } from "./QueryDeviceEvent/req";
import { QueryDeviceEventResponse } from "./QueryDeviceEvent/res";
import { QueryDeviceEventPictureRequest } from "./QueryDeviceEventPicture/req";
import { QueryDeviceEventPictureResponse } from "./QueryDeviceEventPicture/res";
import { QueryDeviceEventRecordRequest } from "./QueryDeviceEventRecord/req";
import { QueryDeviceEventRecordResponse } from "./QueryDeviceEventRecord/res";
import { QueryDevicePictureFileRequest } from "./QueryDevicePictureFile/req";
import { QueryDevicePictureFileResponse } from "./QueryDevicePictureFile/res";
import { QueryDevicePictureLifeCycleRequest } from "./QueryDevicePictureLifeCycle/req";
import { QueryDevicePictureLifeCycleResponse } from "./QueryDevicePictureLifeCycle/res";
import { QueryDeviceRecordLifeCycleRequest } from "./QueryDeviceRecordLifeCycle/req";
import { QueryDeviceRecordLifeCycleResponse } from "./QueryDeviceRecordLifeCycle/res";
import { QueryDeviceVodUrlRequest } from "./QueryDeviceVodUrl/req";
import { QueryDeviceVodUrlResponse } from "./QueryDeviceVodUrl/res";
import { QueryEventRecordPlanDetailRequest } from "./QueryEventRecordPlanDetail/req";
import { QueryEventRecordPlanDetailResponse } from "./QueryEventRecordPlanDetail/res";
import { QueryEventRecordPlanDeviceByDeviceRequest } from "./QueryEventRecordPlanDeviceByDevice/req";
import { QueryEventRecordPlanDeviceByDeviceResponse } from "./QueryEventRecordPlanDeviceByDevice/res";
import { QueryEventRecordPlanDeviceByPlanRequest } from "./QueryEventRecordPlanDeviceByPlan/req";
import { QueryEventRecordPlanDeviceByPlanResponse } from "./QueryEventRecordPlanDeviceByPlan/res";
import { QueryEventRecordPlansRequest } from "./QueryEventRecordPlans/req";
import { QueryEventRecordPlansResponse } from "./QueryEventRecordPlans/res";
import { QueryFaceAllDeviceGroupRequest } from "./QueryFaceAllDeviceGroup/req";
import { QueryFaceAllDeviceGroupResponse } from "./QueryFaceAllDeviceGroup/res";
import { QueryFaceAllUserGroupRequest } from "./QueryFaceAllUserGroup/req";
import { QueryFaceAllUserGroupResponse } from "./QueryFaceAllUserGroup/res";
import { QueryFaceAllUserGroupAndDeviceGroupRelationRequest } from "./QueryFaceAllUserGroupAndDeviceGroupRelation/req";
import { QueryFaceAllUserGroupAndDeviceGroupRelationResponse } from "./QueryFaceAllUserGroupAndDeviceGroupRelation/res";
import { QueryFaceAllUserIdsByGroupIdRequest } from "./QueryFaceAllUserIdsByGroupId/req";
import { QueryFaceAllUserIdsByGroupIdResponse } from "./QueryFaceAllUserIdsByGroupId/res";
import { QueryFaceCustomUserIdByUserIdRequest } from "./QueryFaceCustomUserIdByUserId/req";
import { QueryFaceCustomUserIdByUserIdResponse } from "./QueryFaceCustomUserIdByUserId/res";
import { QueryFaceDeviceGroupsByDeviceRequest } from "./QueryFaceDeviceGroupsByDevice/req";
import { QueryFaceDeviceGroupsByDeviceResponse } from "./QueryFaceDeviceGroupsByDevice/res";
import { QueryFaceUserRequest } from "./QueryFaceUser/req";
import { QueryFaceUserResponse } from "./QueryFaceUser/res";
import { QueryFaceUserGroupRequest } from "./QueryFaceUserGroup/req";
import { QueryFaceUserGroupResponse } from "./QueryFaceUserGroup/res";
import { QueryFaceUserGroupAndDeviceGroupRelationRequest } from "./QueryFaceUserGroupAndDeviceGroupRelation/req";
import { QueryFaceUserGroupAndDeviceGroupRelationResponse } from "./QueryFaceUserGroupAndDeviceGroupRelation/res";
import { QueryFaceUserIdByCustomUserIdRequest } from "./QueryFaceUserIdByCustomUserId/req";
import { QueryFaceUserIdByCustomUserIdResponse } from "./QueryFaceUserIdByCustomUserId/res";
import { QueryLiveStreamingRequest } from "./QueryLiveStreaming/req";
import { QueryLiveStreamingResponse } from "./QueryLiveStreaming/res";
import { QueryMonthRecordRequest } from "./QueryMonthRecord/req";
import { QueryMonthRecordResponse } from "./QueryMonthRecord/res";
import { QueryPictureFilesRequest } from "./QueryPictureFiles/req";
import { QueryPictureFilesResponse } from "./QueryPictureFiles/res";
import { QueryPictureSearchDevicesRequest } from "./QueryPictureSearchDevices/req";
import { QueryPictureSearchDevicesResponse } from "./QueryPictureSearchDevices/res";
import { QueryRecordRequest } from "./QueryRecord/req";
import { QueryRecordResponse } from "./QueryRecord/res";
import { QueryRecordByRecordIdRequest } from "./QueryRecordByRecordId/req";
import { QueryRecordByRecordIdResponse } from "./QueryRecordByRecordId/res";
import { QueryRecordPlanDetailRequest } from "./QueryRecordPlanDetail/req";
import { QueryRecordPlanDetailResponse } from "./QueryRecordPlanDetail/res";
import { QueryRecordPlanDeviceByDeviceRequest } from "./QueryRecordPlanDeviceByDevice/req";
import { QueryRecordPlanDeviceByDeviceResponse } from "./QueryRecordPlanDeviceByDevice/res";
import { QueryRecordPlanDeviceByPlanRequest } from "./QueryRecordPlanDeviceByPlan/req";
import { QueryRecordPlanDeviceByPlanResponse } from "./QueryRecordPlanDeviceByPlan/res";
import { QueryRecordPlansRequest } from "./QueryRecordPlans/req";
import { QueryRecordPlansResponse } from "./QueryRecordPlans/res";
import { QueryRecordUrlRequest } from "./QueryRecordUrl/req";
import { QueryRecordUrlResponse } from "./QueryRecordUrl/res";
import { QueryTimeTemplateRequest } from "./QueryTimeTemplate/req";
import { QueryTimeTemplateResponse } from "./QueryTimeTemplate/res";
import { QueryTimeTemplateDetailRequest } from "./QueryTimeTemplateDetail/req";
import { QueryTimeTemplateDetailResponse } from "./QueryTimeTemplateDetail/res";
import { RemoveFaceDeviceFromDeviceGroupRequest } from "./RemoveFaceDeviceFromDeviceGroup/req";
import { RemoveFaceDeviceFromDeviceGroupResponse } from "./RemoveFaceDeviceFromDeviceGroup/res";
import { RemoveFaceUserFromUserGroupRequest } from "./RemoveFaceUserFromUserGroup/req";
import { RemoveFaceUserFromUserGroupResponse } from "./RemoveFaceUserFromUserGroup/res";
import { SetDevicePictureLifeCycleRequest } from "./SetDevicePictureLifeCycle/req";
import { SetDevicePictureLifeCycleResponse } from "./SetDevicePictureLifeCycle/res";
import { SetDeviceRecordLifeCycleRequest } from "./SetDeviceRecordLifeCycle/req";
import { SetDeviceRecordLifeCycleResponse } from "./SetDeviceRecordLifeCycle/res";
import { StopLiveStreamingRequest } from "./StopLiveStreaming/req";
import { StopLiveStreamingResponse } from "./StopLiveStreaming/res";
import { StopTriggeredRecordRequest } from "./StopTriggeredRecord/req";
import { StopTriggeredRecordResponse } from "./StopTriggeredRecord/res";
import { TriggerCapturePictureRequest } from "./TriggerCapturePicture/req";
import { TriggerCapturePictureResponse } from "./TriggerCapturePicture/res";
import { TriggerRecordRequest } from "./TriggerRecord/req";
import { TriggerRecordResponse } from "./TriggerRecord/res";
import { UnbindPictureSearchAppWithDevicesRequest } from "./UnbindPictureSearchAppWithDevices/req";
import { UnbindPictureSearchAppWithDevicesResponse } from "./UnbindPictureSearchAppWithDevices/res";
import { UpdateEventRecordPlanRequest } from "./UpdateEventRecordPlan/req";
import { UpdateEventRecordPlanResponse } from "./UpdateEventRecordPlan/res";
import { UpdateFaceUserRequest } from "./UpdateFaceUser/req";
import { UpdateFaceUserResponse } from "./UpdateFaceUser/res";
import { UpdateFaceUserGroupAndDeviceGroupRelationRequest } from "./UpdateFaceUserGroupAndDeviceGroupRelation/req";
import { UpdateFaceUserGroupAndDeviceGroupRelationResponse } from "./UpdateFaceUserGroupAndDeviceGroupRelation/res";
import { UpdateRecordPlanRequest } from "./UpdateRecordPlan/req";
import { UpdateRecordPlanResponse } from "./UpdateRecordPlan/res";
import { UpdateTimeTemplateRequest } from "./UpdateTimeTemplate/req";
import { UpdateTimeTemplateResponse } from "./UpdateTimeTemplate/res";
import { AddFaceUserPictureRequest } from "./AddFaceUserPicture/req";
import { AddFaceUserPictureResponse } from "./AddFaceUserPicture/res";
import { DeleteFaceUserPictureRequest } from "./DeleteFaceUserPicture/req";
import { DeleteFaceUserPictureResponse } from "./DeleteFaceUserPicture/res";
import { QueryVoiceIntercomRequest } from "./QueryVoiceIntercom/req";
import { QueryVoiceIntercomResponse } from "./QueryVoiceIntercom/res";
import { QueryPictureSearchAiboxesRequest } from "./QueryPictureSearchAiboxes/req";
import { QueryPictureSearchAiboxesResponse } from "./QueryPictureSearchAiboxes/res";
import { CreatePictureSearchJobRequest } from "./CreatePictureSearchJob/req";
import { CreatePictureSearchJobResponse } from "./CreatePictureSearchJob/res";
import { GetPictureSearchJobStatusRequest } from "./GetPictureSearchJobStatus/req";
import { GetPictureSearchJobStatusResponse } from "./GetPictureSearchJobStatus/res";
import { QueryPictureSearchAppsRequest } from "./QueryPictureSearchApps/req";
import { QueryPictureSearchAppsResponse } from "./QueryPictureSearchApps/res";
import { QueryPictureSearchJobRequest } from "./QueryPictureSearchJob/req";
import { QueryPictureSearchJobResponse } from "./QueryPictureSearchJob/res";
import { QueryPictureSearchJobResultRequest } from "./QueryPictureSearchJobResult/req";
import { QueryPictureSearchJobResultResponse } from "./QueryPictureSearchJobResult/res";
import { UpdatePictureSearchAppRequest } from "./UpdatePictureSearchApp/req";
import { UpdatePictureSearchAppResponse } from "./UpdatePictureSearchApp/res";
import { QueryDeviceVodUrlByTimeRequest } from "./QueryDeviceVodUrlByTime/req";
import { QueryDeviceVodUrlByTimeResponse } from "./QueryDeviceVodUrlByTime/res";
import { QueryDevicePictureByListRequest } from "./QueryDevicePictureByList/req";
import { QueryDevicePictureByListResponse } from "./QueryDevicePictureByList/res";
import { TransferDeviceInstanceRequest } from "./TransferDeviceInstance/req";
import { TransferDeviceInstanceResponse } from "./TransferDeviceInstance/res";
import { QueryRecordDownloadUrlRequest } from "./QueryRecordDownloadUrl/req";
import { QueryRecordDownloadUrlResponse } from "./QueryRecordDownloadUrl/res";
import { CreateLocalFileUploadJobRequest } from "./CreateLocalFileUploadJob/req";
import { CreateLocalFileUploadJobResponse } from "./CreateLocalFileUploadJob/res";
import { DeleteLocalFileUploadJobRequest } from "./DeleteLocalFileUploadJob/req";
import { DeleteLocalFileUploadJobResponse } from "./DeleteLocalFileUploadJob/res";
import { QueryLocalFileUploadJobRequest } from "./QueryLocalFileUploadJob/req";
import { QueryLocalFileUploadJobResponse } from "./QueryLocalFileUploadJob/res";
import { QueryFaceUserBatchRequest } from "./QueryFaceUserBatch/req";
import { QueryFaceUserBatchResponse } from "./QueryFaceUserBatch/res";
import { QueryFaceUserByNameRequest } from "./QueryFaceUserByName/req";
import { QueryFaceUserByNameResponse } from "./QueryFaceUserByName/res";
import { DeleteRecordRequest } from "./DeleteRecord/req";
import { DeleteRecordResponse } from "./DeleteRecord/res";
import { QueryRecordUrlByTimeRequest } from "./QueryRecordUrlByTime/req";
import { QueryRecordUrlByTimeResponse } from "./QueryRecordUrlByTime/res";
import { QueryCarProcessEventsRequest } from "./QueryCarProcessEvents/req";
import { QueryCarProcessEventsResponse } from "./QueryCarProcessEvents/res";
import { DeletePictureRequest } from "./DeletePicture/req";
import { DeletePictureResponse } from "./DeletePicture/res";
import { UpdateInstanceInternetProtocolRequest } from "./UpdateInstanceInternetProtocol/req";
import { UpdateInstanceInternetProtocolResponse } from "./UpdateInstanceInternetProtocol/res";
import { CreateRecordDownloadByTimeJobRequest } from "./CreateRecordDownloadByTimeJob/req";
import { CreateRecordDownloadByTimeJobResponse } from "./CreateRecordDownloadByTimeJob/res";
import { QueryRecordDownloadJobByIdRequest } from "./QueryRecordDownloadJobById/req";
import { QueryRecordDownloadJobByIdResponse } from "./QueryRecordDownloadJobById/res";
import { QueryRecordDownloadJobListRequest } from "./QueryRecordDownloadJobList/req";
import { QueryRecordDownloadJobListResponse } from "./QueryRecordDownloadJobList/res";
import { CreateLocalRecordDownloadByTimeJobRequest } from "./CreateLocalRecordDownloadByTimeJob/req";
import { CreateLocalRecordDownloadByTimeJobResponse } from "./CreateLocalRecordDownloadByTimeJob/res";
import { BatchQueryVisionDeviceInfoRequest } from "./BatchQueryVisionDeviceInfo/req";
import { BatchQueryVisionDeviceInfoResponse } from "./BatchQueryVisionDeviceInfo/res";
import { CreateRtmpDeviceRequest } from "./CreateRtmpDevice/req";
import { CreateRtmpDeviceResponse } from "./CreateRtmpDevice/res";
import { DeleteRtmpDeviceRequest } from "./DeleteRtmpDevice/req";
import { DeleteRtmpDeviceResponse } from "./DeleteRtmpDevice/res";
import { DeleteRtmpKeyRequest } from "./DeleteRtmpKey/req";
import { DeleteRtmpKeyResponse } from "./DeleteRtmpKey/res";
import { QueryRtmpKeyRequest } from "./QueryRtmpKey/req";
import { QueryRtmpKeyResponse } from "./QueryRtmpKey/res";
import { QueryVisionDeviceInfoRequest } from "./QueryVisionDeviceInfo/req";
import { QueryVisionDeviceInfoResponse } from "./QueryVisionDeviceInfo/res";
import { UpdateRtmpKeyRequest } from "./UpdateRtmpKey/req";
import { UpdateRtmpKeyResponse } from "./UpdateRtmpKey/res";
import { CreateGbDeviceRequest } from "./CreateGbDevice/req";
import { CreateGbDeviceResponse } from "./CreateGbDevice/res";
import { DeleteGbDeviceRequest } from "./DeleteGbDevice/req";
import { DeleteGbDeviceResponse } from "./DeleteGbDevice/res";
import { EnableGbSubDeviceRequest } from "./EnableGbSubDevice/req";
import { EnableGbSubDeviceResponse } from "./EnableGbSubDevice/res";
import { QueryGbSubDeviceListRequest } from "./QueryGbSubDeviceList/req";
import { QueryGbSubDeviceListResponse } from "./QueryGbSubDeviceList/res";
import { RefreshGbSubDeviceListRequest } from "./RefreshGbSubDeviceList/req";
import { RefreshGbSubDeviceListResponse } from "./RefreshGbSubDeviceList/res";
import { UpdateGbDeviceRequest } from "./UpdateGbDevice/req";
import { UpdateGbDeviceResponse } from "./UpdateGbDevice/res";
import { CreateStreamPushJobRequest } from "./CreateStreamPushJob/req";
import { CreateStreamPushJobResponse } from "./CreateStreamPushJob/res";
import { CreateStreamSnapshotJobRequest } from "./CreateStreamSnapshotJob/req";
import { CreateStreamSnapshotJobResponse } from "./CreateStreamSnapshotJob/res";
import { DeleteStreamPushJobRequest } from "./DeleteStreamPushJob/req";
import { DeleteStreamPushJobResponse } from "./DeleteStreamPushJob/res";
import { DeleteStreamSnapshotJobRequest } from "./DeleteStreamSnapshotJob/req";
import { DeleteStreamSnapshotJobResponse } from "./DeleteStreamSnapshotJob/res";
import { QueryStreamPushJobRequest } from "./QueryStreamPushJob/req";
import { QueryStreamPushJobResponse } from "./QueryStreamPushJob/res";
import { QueryStreamPushJobListRequest } from "./QueryStreamPushJobList/req";
import { QueryStreamPushJobListResponse } from "./QueryStreamPushJobList/res";
import { QueryStreamSnapshotJobRequest } from "./QueryStreamSnapshotJob/req";
import { QueryStreamSnapshotJobResponse } from "./QueryStreamSnapshotJob/res";

interface LINKVISUAL {
    /**
     * 调用该接口为IPC设备添加智能告警事件录像计划。
     */
    AddEventRecordPlanDevice(query: AddEventRecordPlanDeviceRequest): Promise<AddEventRecordPlanDeviceResponse>;
    /**
     * 调用该接口创建人脸底库设备组。
     */
    AddFaceDeviceGroup(query: AddFaceDeviceGroupRequest): Promise<AddFaceDeviceGroupResponse>;
    /**
     * 将设备加入设备分组。
     */
    AddFaceDeviceToDeviceGroup(query: AddFaceDeviceToDeviceGroupRequest): Promise<AddFaceDeviceToDeviceGroupResponse>;
    /**
     * 调用该接口向人脸底库添加一个用户。
     */
    AddFaceUser(query: AddFaceUserRequest): Promise<AddFaceUserResponse>;
    /**
     * 调用该接口创建用户组。
     */
    AddFaceUserGroup(query: AddFaceUserGroupRequest): Promise<AddFaceUserGroupResponse>;
    /**
     * 用户组、设备组添加人脸同步关系。
     */
    AddFaceUserGroupAndDeviceGroupRelation(query: AddFaceUserGroupAndDeviceGroupRelationRequest): Promise<AddFaceUserGroupAndDeviceGroupRelationResponse>;
    /**
     * 调用该接口将用户添加到用户组。
     */
    AddFaceUserToUserGroup(query: AddFaceUserToUserGroupRequest): Promise<AddFaceUserToUserGroupResponse>;
    /**
     * 调用该接口为IPC设备添加连续录像计划。
     */
    AddRecordPlanDevice(query: AddRecordPlanDeviceRequest): Promise<AddRecordPlanDeviceResponse>;
    /**
     * 调用该接口可用以图搜图实例批量绑定设备。
     */
    BindPictureSearchAppWithDevices(query: BindPictureSearchAppWithDevicesRequest): Promise<BindPictureSearchAppWithDevicesResponse>;
    /**
     * 检查指定用户是否在设备上同步人脸成功。
     */
    CheckFaceUserDoExistOnDevice(query: CheckFaceUserDoExistOnDeviceRequest): Promise<CheckFaceUserDoExistOnDeviceResponse>;
    /**
     * 调用该接口，清空V系列边缘一体机的指定业务隔离ID下所有人脸底库。
     */
    ClearFaceDeviceDB(query: ClearFaceDeviceDBRequest): Promise<ClearFaceDeviceDBResponse>;
    /**
     * 调用该接口创建智能告警事件录像计划。
     */
    CreateEventRecordPlan(query: CreateEventRecordPlanRequest): Promise<CreateEventRecordPlanResponse>;
    /**
     * 调用该接口创建以图搜图应用实例。
     */
    CreatePictureSearchApp(query: CreatePictureSearchAppRequest): Promise<CreatePictureSearchAppResponse>;
    /**
     * 调用该接口，根据时间模板创建录像计划。
     */
    CreateRecordPlan(query: CreateRecordPlanRequest): Promise<CreateRecordPlanResponse>;
    /**
     * 调用该接口创建时间模板。
     */
    CreateTimeTemplate(query: CreateTimeTemplateRequest): Promise<CreateTimeTemplateResponse>;
    /**
     * 调用该接口删除智能事件录像计划。
     */
    DeleteEventRecordPlan(query: DeleteEventRecordPlanRequest): Promise<DeleteEventRecordPlanResponse>;
    /**
     * 调用该接口删除智能告警事件录像计划关联的IPC设备。
     */
    DeleteEventRecordPlanDevice(query: DeleteEventRecordPlanDeviceRequest): Promise<DeleteEventRecordPlanDeviceResponse>;
    /**
     * 删除设备分组。
     */
    DeleteFaceDeviceGroup(query: DeleteFaceDeviceGroupRequest): Promise<DeleteFaceDeviceGroupResponse>;
    /**
     * 向人脸管理服务删除一个用户。
     */
    DeleteFaceUser(query: DeleteFaceUserRequest): Promise<DeleteFaceUserResponse>;
    /**
     * 调用该接口删除指定的用户组。
     */
    DeleteFaceUserGroup(query: DeleteFaceUserGroupRequest): Promise<DeleteFaceUserGroupResponse>;
    /**
     * 调用该接口，删除用户组与设备组之间的人脸同步关系。
     */
    DeleteFaceUserGroupAndDeviceGroupRelation(query: DeleteFaceUserGroupAndDeviceGroupRelationRequest): Promise<DeleteFaceUserGroupAndDeviceGroupRelationResponse>;
    /**
     * 调用该接口删除录像计划。
     */
    DeleteRecordPlan(query: DeleteRecordPlanRequest): Promise<DeleteRecordPlanResponse>;
    /**
     * 调用该接口删除IPC设备关联的录像计划。
     */
    DeleteRecordPlanDevice(query: DeleteRecordPlanDeviceRequest): Promise<DeleteRecordPlanDeviceResponse>;
    /**
     * 调用该接口删除时间模板。
     */
    DeleteTimeTemplate(query: DeleteTimeTemplateRequest): Promise<DeleteTimeTemplateResponse>;
    /**
     * 调用该接口检测人脸。
     */
    DetectUserFaceByUrl(query: DetectUserFaceByUrlRequest): Promise<DetectUserFaceByUrlResponse>;
    /**
     * 调用该接口启动以图搜图应用实例，进行图片检索。
     */
    PictureSearchPicture(query: PictureSearchPictureRequest): Promise<PictureSearchPictureResponse>;
    /**
     * 调用该接口查询IPC设备的智能告警事件列表。
     */
    QueryDeviceEvent(query: QueryDeviceEventRequest): Promise<QueryDeviceEventResponse>;
    /**
     * 调用该接口，获取触发智能告警事件时，IPC设备拍摄上传的图片。
     */
    QueryDeviceEventPicture(query: QueryDeviceEventPictureRequest): Promise<QueryDeviceEventPictureResponse>;
    /**
     * 调用该接口获取IPC设备的指定智能告警事件，对应的录像文件URL。
     */
    QueryDeviceEventRecord(query: QueryDeviceEventRecordRequest): Promise<QueryDeviceEventRecordResponse>;
    /**
     * 调用该接口查询IPC设备获取的图片信息。
     */
    QueryDevicePictureFile(query: QueryDevicePictureFileRequest): Promise<QueryDevicePictureFileResponse>;
    /**
     * 调用该接口查询IPC设备的云存储图片生命周期。
     */
    QueryDevicePictureLifeCycle(query: QueryDevicePictureLifeCycleRequest): Promise<QueryDevicePictureLifeCycleResponse>;
    /**
     * 调用该接口，获取IPC设备在云端保存录像文件的时间，即录像生命周期。
     */
    QueryDeviceRecordLifeCycle(query: QueryDeviceRecordLifeCycleRequest): Promise<QueryDeviceRecordLifeCycleResponse>;
    /**
     * 调用该接口，获取本地NVR设备或IPC设备的存储卡中，指定录像文件名的录像文件URL。
     */
    QueryDeviceVodUrl(query: QueryDeviceVodUrlRequest): Promise<QueryDeviceVodUrlResponse>;
    /**
     * 调用该接口查询智能告警事件录像计划详情。
     */
    QueryEventRecordPlanDetail(query: QueryEventRecordPlanDetailRequest): Promise<QueryEventRecordPlanDetailResponse>;
    /**
     * 调用该接口，根据IPC的设备ID查询智能告警事件录像计划。
     */
    QueryEventRecordPlanDeviceByDevice(query: QueryEventRecordPlanDeviceByDeviceRequest): Promise<QueryEventRecordPlanDeviceByDeviceResponse>;
    /**
     * 调用该接口，查询智能告警事件录像计划，关联的摄像头列表。
     */
    QueryEventRecordPlanDeviceByPlan(query: QueryEventRecordPlanDeviceByPlanRequest): Promise<QueryEventRecordPlanDeviceByPlanResponse>;
    /**
     * 调用该接口查询智能告警事件录像计划列表。
     */
    QueryEventRecordPlans(query: QueryEventRecordPlansRequest): Promise<QueryEventRecordPlansResponse>;
    /**
     * 查询所有设备分组。
     */
    QueryFaceAllDeviceGroup(query: QueryFaceAllDeviceGroupRequest): Promise<QueryFaceAllDeviceGroupResponse>;
    /**
     * 查询所有用户分组。
     */
    QueryFaceAllUserGroup(query: QueryFaceAllUserGroupRequest): Promise<QueryFaceAllUserGroupResponse>;
    /**
     * 查询已添加人脸同步关系的用户组和设备组。
     */
    QueryFaceAllUserGroupAndDeviceGroupRelation(query: QueryFaceAllUserGroupAndDeviceGroupRelationRequest): Promise<QueryFaceAllUserGroupAndDeviceGroupRelationResponse>;
    /**
     * 查询用户组下的所有用户。
     */
    QueryFaceAllUserIdsByGroupId(query: QueryFaceAllUserIdsByGroupIdRequest): Promise<QueryFaceAllUserIdsByGroupIdResponse>;
    /**
     * 根据人脸底库同步服务用户 ID 查询调用者服务中的用户 ID。
     */
    QueryFaceCustomUserIdByUserId(query: QueryFaceCustomUserIdByUserIdRequest): Promise<QueryFaceCustomUserIdByUserIdResponse>;
    /**
     * 查询设备所在的设备分组。
     */
    QueryFaceDeviceGroupsByDevice(query: QueryFaceDeviceGroupsByDeviceRequest): Promise<QueryFaceDeviceGroupsByDeviceResponse>;
    /**
     * 查询用户详细信息。
     */
    QueryFaceUser(query: QueryFaceUserRequest): Promise<QueryFaceUserResponse>;
    /**
     * 查询用户所在的用户组。
     */
    QueryFaceUserGroup(query: QueryFaceUserGroupRequest): Promise<QueryFaceUserGroupResponse>;
    /**
     * 查询用户组、设备组人脸同步关系。
     */
    QueryFaceUserGroupAndDeviceGroupRelation(query: QueryFaceUserGroupAndDeviceGroupRelationRequest): Promise<QueryFaceUserGroupAndDeviceGroupRelationResponse>;
    /**
     * 根据调用者系统中的用户Id查询人脸底库同步服务中的用户Id。
     */
    QueryFaceUserIdByCustomUserId(query: QueryFaceUserIdByCustomUserIdRequest): Promise<QueryFaceUserIdByCustomUserIdResponse>;
    /**
     * 调用该接口获取IPC设备的直播开播地址。
     */
    QueryLiveStreaming(query: QueryLiveStreamingRequest): Promise<QueryLiveStreamingResponse>;
    /**
     * 调用该接口，查询IPC设备某月份的每一天是否有录像。
     */
    QueryMonthRecord(query: QueryMonthRecordRequest): Promise<QueryMonthRecordResponse>;
    /**
     * 调用该接口获取图片列表。
     */
    QueryPictureFiles(query: QueryPictureFilesRequest): Promise<QueryPictureFilesResponse>;
    /**
     * 调用该接口，查询以图搜图应用实例绑定的设备列表。
     */
    QueryPictureSearchDevices(query: QueryPictureSearchDevicesRequest): Promise<QueryPictureSearchDevicesResponse>;
    /**
     * 调用该接口查询云端录像列表。
     */
    QueryRecord(query: QueryRecordRequest): Promise<QueryRecordResponse>;
    /**
     * 调用该接口通过录像文件ID查询录像文件URL。
     */
    QueryRecordByRecordId(query: QueryRecordByRecordIdRequest): Promise<QueryRecordByRecordIdResponse>;
    /**
     * 调用该接口查询录像计划详情。
     */
    QueryRecordPlanDetail(query: QueryRecordPlanDetailRequest): Promise<QueryRecordPlanDetailResponse>;
    /**
     * 调用该接口根据IPC的设备ID，查询该视频设备的录像计划。
     */
    QueryRecordPlanDeviceByDevice(query: QueryRecordPlanDeviceByDeviceRequest): Promise<QueryRecordPlanDeviceByDeviceResponse>;
    /**
     * 调用该接口查询录像计划关联的设备。
     */
    QueryRecordPlanDeviceByPlan(query: QueryRecordPlanDeviceByPlanRequest): Promise<QueryRecordPlanDeviceByPlanResponse>;
    /**
     * 调用该接口查询录像计划列表。
     */
    QueryRecordPlans(query: QueryRecordPlansRequest): Promise<QueryRecordPlansResponse>;
    /**
     * 调用该接口查询云端录像文件的播放地址。
     */
    QueryRecordUrl(query: QueryRecordUrlRequest): Promise<QueryRecordUrlResponse>;
    /**
     * 调用该接口查询设备的时间模板信息。
     */
    QueryTimeTemplate(query: QueryTimeTemplateRequest): Promise<QueryTimeTemplateResponse>;
    /**
     * 调用该接口查询指定时间模板的详情信息。
     */
    QueryTimeTemplateDetail(query: QueryTimeTemplateDetailRequest): Promise<QueryTimeTemplateDetailResponse>;
    /**
     * 将设备移出设备分组。
     */
    RemoveFaceDeviceFromDeviceGroup(query: RemoveFaceDeviceFromDeviceGroupRequest): Promise<RemoveFaceDeviceFromDeviceGroupResponse>;
    /**
     * 将用户从用户分组中移除。
     */
    RemoveFaceUserFromUserGroup(query: RemoveFaceUserFromUserGroupRequest): Promise<RemoveFaceUserFromUserGroupResponse>;
    /**
     * 调用该接口设置IPC设备的云存储图片生命周期。
     */
    SetDevicePictureLifeCycle(query: SetDevicePictureLifeCycleRequest): Promise<SetDevicePictureLifeCycleResponse>;
    /**
     * 调用该接口，设置IPC设备的录像生命周期，即录像文件在云端存储的天数。
     */
    SetDeviceRecordLifeCycle(query: SetDeviceRecordLifeCycleRequest): Promise<SetDeviceRecordLifeCycleResponse>;
    /**
     * 调用该接口停止IPC设备推流。
     */
    StopLiveStreaming(query: StopLiveStreamingRequest): Promise<StopLiveStreamingResponse>;
    /**
     * 调用该接口使IPC设备停止主动触发录像。
     */
    StopTriggeredRecord(query: StopTriggeredRecordRequest): Promise<StopTriggeredRecordResponse>;
    /**
     * 调用该接口主动触发IPC设备拍摄图片并上传至云端。
     */
    TriggerCapturePicture(query: TriggerCapturePictureRequest): Promise<TriggerCapturePictureResponse>;
    /**
     * 调用该接口立即触发指定IPC设备开始录像，并上传录像文件至云端。
     */
    TriggerRecord(query: TriggerRecordRequest): Promise<TriggerRecordResponse>;
    /**
     * 调用该接口，批量解绑以图搜图应用实例关联的设备。
     */
    UnbindPictureSearchAppWithDevices(query: UnbindPictureSearchAppWithDevicesRequest): Promise<UnbindPictureSearchAppWithDevicesResponse>;
    /**
     * 调用该接口更新智能告警事件录像计划。
     */
    UpdateEventRecordPlan(query: UpdateEventRecordPlanRequest): Promise<UpdateEventRecordPlanResponse>;
    /**
     * 更新用户信息。
     */
    UpdateFaceUser(query: UpdateFaceUserRequest): Promise<UpdateFaceUserResponse>;
    /**
     * 调用该接口，更新用户组与设备组之间的人脸同步关系。
     */
    UpdateFaceUserGroupAndDeviceGroupRelation(query: UpdateFaceUserGroupAndDeviceGroupRelationRequest): Promise<UpdateFaceUserGroupAndDeviceGroupRelationResponse>;
    /**
     * 调用该接口更新录像计划。
     */
    UpdateRecordPlan(query: UpdateRecordPlanRequest): Promise<UpdateRecordPlanResponse>;
    /**
     * 调用该接口更新时间模板。
     */
    UpdateTimeTemplate(query: UpdateTimeTemplateRequest): Promise<UpdateTimeTemplateResponse>;
    /**
     * 调用该接口，为人脸底库中的用户增加一张人脸图片。
     */
    AddFaceUserPicture(query: AddFaceUserPictureRequest): Promise<AddFaceUserPictureResponse>;
    /**
     * 调用该接口，从人脸底库的用户中删除指定的人脸图片。
     */
    DeleteFaceUserPicture(query: DeleteFaceUserPictureRequest): Promise<DeleteFaceUserPictureResponse>;
    /**
     * 调用该接口获取IPC设备的语音对讲地址。
     */
    QueryVoiceIntercom(query: QueryVoiceIntercomRequest): Promise<QueryVoiceIntercomResponse>;
    /**
     * 调用该接口，查询以图搜图应用实例绑定的V系列边缘一体机列表。
     */
    QueryPictureSearchAiboxes(query: QueryPictureSearchAiboxesRequest): Promise<QueryPictureSearchAiboxesResponse>;
    /**
     * 调用该接口创建一体化以图搜图任务。
     */
    CreatePictureSearchJob(query: CreatePictureSearchJobRequest): Promise<CreatePictureSearchJobResponse>;
    /**
     * 调用该接口获取一体化以图搜图任务的状态。
     */
    GetPictureSearchJobStatus(query: GetPictureSearchJobStatusRequest): Promise<GetPictureSearchJobStatusResponse>;
    /**
     * 调用该接口，查询已创建的以图搜图应用实例列表。
     */
    QueryPictureSearchApps(query: QueryPictureSearchAppsRequest): Promise<QueryPictureSearchAppsResponse>;
    /**
     * 调用该接口，查询一体化以图搜图任务列表。
     */
    QueryPictureSearchJob(query: QueryPictureSearchJobRequest): Promise<QueryPictureSearchJobResponse>;
    /**
     * 调用该接口，查询一体化以图搜图任务的图片检索结果。
     */
    QueryPictureSearchJobResult(query: QueryPictureSearchJobResultRequest): Promise<QueryPictureSearchJobResultResponse>;
    /**
     * 调用该接口修改以图搜图应用实例的信息。
     */
    UpdatePictureSearchApp(query: UpdatePictureSearchAppRequest): Promise<UpdatePictureSearchAppResponse>;
    /**
     * 调用该接口，获取本地NVR设备或IPC设备存储卡中，指定录像时间范围的录像文件播放地址。
     */
    QueryDeviceVodUrlByTime(query: QueryDeviceVodUrlByTimeRequest): Promise<QueryDeviceVodUrlByTimeResponse>;
    /**
     * ，根据图片ID列表，获取图片地址。
     */
    QueryDevicePictureByList(query: QueryDevicePictureByListRequest): Promise<QueryDevicePictureByListResponse>;
    /**
     * ，迁移设备所在的实例。
     */
    TransferDeviceInstance(query: TransferDeviceInstanceRequest): Promise<TransferDeviceInstanceResponse>;
    /**
     * 请求云端录像文件的下载地址。
     */
    QueryRecordDownloadUrl(query: QueryRecordDownloadUrlRequest): Promise<QueryRecordDownloadUrlResponse>;
    /**
     * 调用该接口用于创建本地录像上传任务。
     */
    CreateLocalFileUploadJob(query: CreateLocalFileUploadJobRequest): Promise<CreateLocalFileUploadJobResponse>;
    /**
     * 调用该接口停止本地录像上传任务。
     */
    DeleteLocalFileUploadJob(query: DeleteLocalFileUploadJobRequest): Promise<DeleteLocalFileUploadJobResponse>;
    /**
     * 查询本地录像上传任务结果。
     */
    QueryLocalFileUploadJob(query: QueryLocalFileUploadJobRequest): Promise<QueryLocalFileUploadJobResponse>;
    /**
     * 根据用户ID列表批量获取用户信息。
     */
    QueryFaceUserBatch(query: QueryFaceUserBatchRequest): Promise<QueryFaceUserBatchResponse>;
    /**
     * 通过人脸名称查找人脸数据。
     */
    QueryFaceUserByName(query: QueryFaceUserByNameRequest): Promise<QueryFaceUserByNameResponse>;
    /**
     * 删除云端存储的录像文件。
     */
    DeleteRecord(query: DeleteRecordRequest): Promise<DeleteRecordResponse>;
    /**
     * 获取指定时间范围内的录像文件的播放URL。
     */
    QueryRecordUrlByTime(query: QueryRecordUrlByTimeRequest): Promise<QueryRecordUrlByTimeResponse>;
    /**
     * 调用该接口查询车辆作业的智能告警事件列表。
     */
    QueryCarProcessEvents(query: QueryCarProcessEventsRequest): Promise<QueryCarProcessEventsResponse>;
    /**
     * 调用该接口，批量删除指定IPC设备下指定图片ID的云端图片。
     */
    DeletePicture(query: DeletePictureRequest): Promise<DeletePictureResponse>;
    /**
     * 调用该接口设置实例支持的IP协议版本。
     */
    UpdateInstanceInternetProtocol(query: UpdateInstanceInternetProtocolRequest): Promise<UpdateInstanceInternetProtocolResponse>;
    /**
     * 调用该接口创建按时间下载云端录像的任务。
     */
    CreateRecordDownloadByTimeJob(query: CreateRecordDownloadByTimeJobRequest): Promise<CreateRecordDownloadByTimeJobResponse>;
    /**
     * 调用该接口按任务ID查询云端录像下载任务的详细信息，包括起始时间、录像进度、录像类型和下载地址等。
     */
    QueryRecordDownloadJobById(query: QueryRecordDownloadJobByIdRequest): Promise<QueryRecordDownloadJobByIdResponse>;
    /**
     * 调用该接口查询云端录像下载任务的列表。
     */
    QueryRecordDownloadJobList(query: QueryRecordDownloadJobListRequest): Promise<QueryRecordDownloadJobListResponse>;
    /**
     * 调用该接口创建按时间下载本地录像的任务。
     */
    CreateLocalRecordDownloadByTimeJob(query: CreateLocalRecordDownloadByTimeJobRequest): Promise<CreateLocalRecordDownloadByTimeJobResponse>;
    BatchQueryVisionDeviceInfo(query: BatchQueryVisionDeviceInfoRequest): Promise<BatchQueryVisionDeviceInfoResponse>;
    CreateRtmpDevice(query: CreateRtmpDeviceRequest): Promise<CreateRtmpDeviceResponse>;
    DeleteRtmpDevice(query: DeleteRtmpDeviceRequest): Promise<DeleteRtmpDeviceResponse>;
    DeleteRtmpKey(query: DeleteRtmpKeyRequest): Promise<DeleteRtmpKeyResponse>;
    QueryRtmpKey(query: QueryRtmpKeyRequest): Promise<QueryRtmpKeyResponse>;
    QueryVisionDeviceInfo(query: QueryVisionDeviceInfoRequest): Promise<QueryVisionDeviceInfoResponse>;
    UpdateRtmpKey(query: UpdateRtmpKeyRequest): Promise<UpdateRtmpKeyResponse>;
    CreateGbDevice(query: CreateGbDeviceRequest): Promise<CreateGbDeviceResponse>;
    DeleteGbDevice(query: DeleteGbDeviceRequest): Promise<DeleteGbDeviceResponse>;
    EnableGbSubDevice(query: EnableGbSubDeviceRequest): Promise<EnableGbSubDeviceResponse>;
    QueryGbSubDeviceList(query: QueryGbSubDeviceListRequest): Promise<QueryGbSubDeviceListResponse>;
    RefreshGbSubDeviceList(query: RefreshGbSubDeviceListRequest): Promise<RefreshGbSubDeviceListResponse>;
    UpdateGbDevice(query: UpdateGbDeviceRequest): Promise<UpdateGbDeviceResponse>;
    /**
     * 调用接口CreateStreamPushJob创建视频推流任务。
     */
    CreateStreamPushJob(query: CreateStreamPushJobRequest): Promise<CreateStreamPushJobResponse>;
    /**
     * 调用接口CreateStreamSnapshotJob设置云端截图任务。
     */
    CreateStreamSnapshotJob(query: CreateStreamSnapshotJobRequest): Promise<CreateStreamSnapshotJobResponse>;
    /**
     * 调用接口DeleteStreamPushJob删除视频推流任务。
     */
    DeleteStreamPushJob(query: DeleteStreamPushJobRequest): Promise<DeleteStreamPushJobResponse>;
    /**
     * 调用接口DeleteStreamSnapshotJob删除视频截图任务。
     */
    DeleteStreamSnapshotJob(query: DeleteStreamSnapshotJobRequest): Promise<DeleteStreamSnapshotJobResponse>;
    /**
     * 调用接口QueryStreamPushJob查询视频推流任务详情：创建时间、当前推流状态、任务类型、推流地址等。
     */
    QueryStreamPushJob(query: QueryStreamPushJobRequest): Promise<QueryStreamPushJobResponse>;
    /**
     * 调用接口QueryStreamPushJobList查询视频推流任务列表及详情：创建时间、当前推流状态、任务类型、推流地址等。
     */
    QueryStreamPushJobList(query: QueryStreamPushJobListRequest): Promise<QueryStreamPushJobListResponse>;
    /**
     * 调用接口QueryStreamSnapshotJob查询云端截图任务列表及详情：截图时间的间隔、码流类型。
     */
    QueryStreamSnapshotJob(query: QueryStreamSnapshotJobRequest): Promise<QueryStreamSnapshotJobResponse>;
}
export default LINKVISUAL;
