import { DeleteDeviceRequest } from "./DeleteDevice/req";
import { DeleteDeviceResponse } from "./DeleteDevice/res";
import { StartDeviceRequest } from "./StartDevice/req";
import { StartDeviceResponse } from "./StartDevice/res";
import { BatchStartDevicesRequest } from "./BatchStartDevices/req";
import { BatchStartDevicesResponse } from "./BatchStartDevices/res";
import { BatchDeleteDevicesRequest } from "./BatchDeleteDevices/req";
import { BatchDeleteDevicesResponse } from "./BatchDeleteDevices/res";
import { DescribeDeviceChannelsRequest } from "./DescribeDeviceChannels/req";
import { DescribeDeviceChannelsResponse } from "./DescribeDeviceChannels/res";
import { UnlockDeviceRequest } from "./UnlockDevice/req";
import { UnlockDeviceResponse } from "./UnlockDevice/res";
import { SyncCatalogsRequest } from "./SyncCatalogs/req";
import { SyncCatalogsResponse } from "./SyncCatalogs/res";
import { DescribeStreamRequest } from "./DescribeStream/req";
import { DescribeStreamResponse } from "./DescribeStream/res";
import { DescribeStreamsRequest } from "./DescribeStreams/req";
import { DescribeStreamsResponse } from "./DescribeStreams/res";
import { BatchStartStreamsRequest } from "./BatchStartStreams/req";
import { BatchStartStreamsResponse } from "./BatchStartStreams/res";
import { BatchStopStreamsRequest } from "./BatchStopStreams/req";
import { BatchStopStreamsResponse } from "./BatchStopStreams/res";
import { CreateStreamSnapshotRequest } from "./CreateStreamSnapshot/req";
import { CreateStreamSnapshotResponse } from "./CreateStreamSnapshot/res";
import { DeleteTemplateRequest } from "./DeleteTemplate/req";
import { DeleteTemplateResponse } from "./DeleteTemplate/res";
import { BindTemplateRequest } from "./BindTemplate/req";
import { BindTemplateResponse } from "./BindTemplate/res";
import { UnbindTemplateRequest } from "./UnbindTemplate/req";
import { UnbindTemplateResponse } from "./UnbindTemplate/res";
import { BatchBindTemplateRequest } from "./BatchBindTemplate/req";
import { BatchBindTemplateResponse } from "./BatchBindTemplate/res";
import { BatchUnbindTemplateRequest } from "./BatchUnbindTemplate/req";
import { BatchUnbindTemplateResponse } from "./BatchUnbindTemplate/res";
import { StartRecordStreamRequest } from "./StartRecordStream/req";
import { StartRecordStreamResponse } from "./StartRecordStream/res";
import { StopRecordStreamRequest } from "./StopRecordStream/req";
import { StopRecordStreamResponse } from "./StopRecordStream/res";
import { BatchDeleteVsDomainConfigsRequest } from "./BatchDeleteVsDomainConfigs/req";
import { BatchDeleteVsDomainConfigsResponse } from "./BatchDeleteVsDomainConfigs/res";
import { SetVsDomainCertificateRequest } from "./SetVsDomainCertificate/req";
import { SetVsDomainCertificateResponse } from "./SetVsDomainCertificate/res";
import { DescribeVsCertificateDetailRequest } from "./DescribeVsCertificateDetail/req";
import { DescribeVsCertificateDetailResponse } from "./DescribeVsCertificateDetail/res";
import { BatchUnbindDirectoriesRequest } from "./BatchUnbindDirectories/req";
import { BatchUnbindDirectoriesResponse } from "./BatchUnbindDirectories/res";
import { UnbindDirectoryRequest } from "./UnbindDirectory/req";
import { UnbindDirectoryResponse } from "./UnbindDirectory/res";
import { AddVsPullStreamInfoConfigRequest } from "./AddVsPullStreamInfoConfig/req";
import { AddVsPullStreamInfoConfigResponse } from "./AddVsPullStreamInfoConfig/res";
import { BatchBindDirectoriesRequest } from "./BatchBindDirectories/req";
import { BatchBindDirectoriesResponse } from "./BatchBindDirectories/res";
import { BatchBindParentPlatformDevicesRequest } from "./BatchBindParentPlatformDevices/req";
import { BatchBindParentPlatformDevicesResponse } from "./BatchBindParentPlatformDevices/res";
import { BatchBindPurchasedDevicesRequest } from "./BatchBindPurchasedDevices/req";
import { BatchBindPurchasedDevicesResponse } from "./BatchBindPurchasedDevices/res";
import { BatchBindTemplatesRequest } from "./BatchBindTemplates/req";
import { BatchBindTemplatesResponse } from "./BatchBindTemplates/res";
import { BatchForbidVsStreamRequest } from "./BatchForbidVsStream/req";
import { BatchForbidVsStreamResponse } from "./BatchForbidVsStream/res";
import { BatchResumeVsStreamRequest } from "./BatchResumeVsStream/req";
import { BatchResumeVsStreamResponse } from "./BatchResumeVsStream/res";
import { BatchSetVsDomainConfigsRequest } from "./BatchSetVsDomainConfigs/req";
import { BatchSetVsDomainConfigsResponse } from "./BatchSetVsDomainConfigs/res";
import { BatchStopDevicesRequest } from "./BatchStopDevices/req";
import { BatchStopDevicesResponse } from "./BatchStopDevices/res";
import { BatchUnbindParentPlatformDevicesRequest } from "./BatchUnbindParentPlatformDevices/req";
import { BatchUnbindParentPlatformDevicesResponse } from "./BatchUnbindParentPlatformDevices/res";
import { BatchUnbindPurchasedDevicesRequest } from "./BatchUnbindPurchasedDevices/req";
import { BatchUnbindPurchasedDevicesResponse } from "./BatchUnbindPurchasedDevices/res";
import { BatchUnbindTemplatesRequest } from "./BatchUnbindTemplates/req";
import { BatchUnbindTemplatesResponse } from "./BatchUnbindTemplates/res";
import { BindDirectoryRequest } from "./BindDirectory/req";
import { BindDirectoryResponse } from "./BindDirectory/res";
import { BindParentPlatformDeviceRequest } from "./BindParentPlatformDevice/req";
import { BindParentPlatformDeviceResponse } from "./BindParentPlatformDevice/res";
import { BindPurchasedDeviceRequest } from "./BindPurchasedDevice/req";
import { BindPurchasedDeviceResponse } from "./BindPurchasedDevice/res";
import { ContinuousAdjustRequest } from "./ContinuousAdjust/req";
import { ContinuousAdjustResponse } from "./ContinuousAdjust/res";
import { ContinuousMoveRequest } from "./ContinuousMove/req";
import { ContinuousMoveResponse } from "./ContinuousMove/res";
import { CreateDeviceRequest } from "./CreateDevice/req";
import { CreateDeviceResponse } from "./CreateDevice/res";
import { CreateDeviceAlarmRequest } from "./CreateDeviceAlarm/req";
import { CreateDeviceAlarmResponse } from "./CreateDeviceAlarm/res";
import { CreateDirectoryRequest } from "./CreateDirectory/req";
import { CreateDirectoryResponse } from "./CreateDirectory/res";
import { CreateGroupRequest } from "./CreateGroup/req";
import { CreateGroupResponse } from "./CreateGroup/res";
import { CreateParentPlatformRequest } from "./CreateParentPlatform/req";
import { CreateParentPlatformResponse } from "./CreateParentPlatform/res";
import { CreateTemplateRequest } from "./CreateTemplate/req";
import { CreateTemplateResponse } from "./CreateTemplate/res";
import { DeleteDirectoryRequest } from "./DeleteDirectory/req";
import { DeleteDirectoryResponse } from "./DeleteDirectory/res";
import { DeleteGroupRequest } from "./DeleteGroup/req";
import { DeleteGroupResponse } from "./DeleteGroup/res";
import { DeleteParentPlatformRequest } from "./DeleteParentPlatform/req";
import { DeleteParentPlatformResponse } from "./DeleteParentPlatform/res";
import { DeletePresetRequest } from "./DeletePreset/req";
import { DeletePresetResponse } from "./DeletePreset/res";
import { DeleteVsPullStreamInfoConfigRequest } from "./DeleteVsPullStreamInfoConfig/req";
import { DeleteVsPullStreamInfoConfigResponse } from "./DeleteVsPullStreamInfoConfig/res";
import { DeleteVsStreamsNotifyUrlConfigRequest } from "./DeleteVsStreamsNotifyUrlConfig/req";
import { DeleteVsStreamsNotifyUrlConfigResponse } from "./DeleteVsStreamsNotifyUrlConfig/res";
import { DescribeAccountStatRequest } from "./DescribeAccountStat/req";
import { DescribeAccountStatResponse } from "./DescribeAccountStat/res";
import { DescribeDeviceRequest } from "./DescribeDevice/req";
import { DescribeDeviceResponse } from "./DescribeDevice/res";
import { DescribeDeviceGatewayRequest } from "./DescribeDeviceGateway/req";
import { DescribeDeviceGatewayResponse } from "./DescribeDeviceGateway/res";
import { DescribeDeviceURLRequest } from "./DescribeDeviceURL/req";
import { DescribeDeviceURLResponse } from "./DescribeDeviceURL/res";
import { DescribeDevicesRequest } from "./DescribeDevices/req";
import { DescribeDevicesResponse } from "./DescribeDevices/res";
import { DescribeDirectoriesRequest } from "./DescribeDirectories/req";
import { DescribeDirectoriesResponse } from "./DescribeDirectories/res";
import { DescribeDirectoryRequest } from "./DescribeDirectory/req";
import { DescribeDirectoryResponse } from "./DescribeDirectory/res";
import { DescribeGroupRequest } from "./DescribeGroup/req";
import { DescribeGroupResponse } from "./DescribeGroup/res";
import { DescribeGroupsRequest } from "./DescribeGroups/req";
import { DescribeGroupsResponse } from "./DescribeGroups/res";
import { DescribeParentPlatformRequest } from "./DescribeParentPlatform/req";
import { DescribeParentPlatformResponse } from "./DescribeParentPlatform/res";
import { DescribeParentPlatformDevicesRequest } from "./DescribeParentPlatformDevices/req";
import { DescribeParentPlatformDevicesResponse } from "./DescribeParentPlatformDevices/res";
import { DescribeParentPlatformsRequest } from "./DescribeParentPlatforms/req";
import { DescribeParentPlatformsResponse } from "./DescribeParentPlatforms/res";
import { DescribePresetsRequest } from "./DescribePresets/req";
import { DescribePresetsResponse } from "./DescribePresets/res";
import { DescribePurchasedDeviceRequest } from "./DescribePurchasedDevice/req";
import { DescribePurchasedDeviceResponse } from "./DescribePurchasedDevice/res";
import { DescribePurchasedDevicesRequest } from "./DescribePurchasedDevices/req";
import { DescribePurchasedDevicesResponse } from "./DescribePurchasedDevices/res";
import { DescribeRecordsRequest } from "./DescribeRecords/req";
import { DescribeRecordsResponse } from "./DescribeRecords/res";
import { DescribeStreamURLRequest } from "./DescribeStreamURL/req";
import { DescribeStreamURLResponse } from "./DescribeStreamURL/res";
import { DescribeStreamVodListRequest } from "./DescribeStreamVodList/req";
import { DescribeStreamVodListResponse } from "./DescribeStreamVodList/res";
import { DescribeTemplateRequest } from "./DescribeTemplate/req";
import { DescribeTemplateResponse } from "./DescribeTemplate/res";
import { DescribeTemplatesRequest } from "./DescribeTemplates/req";
import { DescribeTemplatesResponse } from "./DescribeTemplates/res";
import { DescribeVodStreamURLRequest } from "./DescribeVodStreamURL/req";
import { DescribeVodStreamURLResponse } from "./DescribeVodStreamURL/res";
import { DescribeVsCertificateListRequest } from "./DescribeVsCertificateList/req";
import { DescribeVsCertificateListResponse } from "./DescribeVsCertificateList/res";
import { DescribeVsDomainBpsDataRequest } from "./DescribeVsDomainBpsData/req";
import { DescribeVsDomainBpsDataResponse } from "./DescribeVsDomainBpsData/res";
import { DescribeVsDomainCertificateInfoRequest } from "./DescribeVsDomainCertificateInfo/req";
import { DescribeVsDomainCertificateInfoResponse } from "./DescribeVsDomainCertificateInfo/res";
import { DescribeVsDomainConfigsRequest } from "./DescribeVsDomainConfigs/req";
import { DescribeVsDomainConfigsResponse } from "./DescribeVsDomainConfigs/res";
import { DescribeVsDomainDetailRequest } from "./DescribeVsDomainDetail/req";
import { DescribeVsDomainDetailResponse } from "./DescribeVsDomainDetail/res";
import { DescribeVsDomainPvDataRequest } from "./DescribeVsDomainPvData/req";
import { DescribeVsDomainPvDataResponse } from "./DescribeVsDomainPvData/res";
import { DescribeVsDomainPvUvDataRequest } from "./DescribeVsDomainPvUvData/req";
import { DescribeVsDomainPvUvDataResponse } from "./DescribeVsDomainPvUvData/res";
import { DescribeVsDomainRecordDataRequest } from "./DescribeVsDomainRecordData/req";
import { DescribeVsDomainRecordDataResponse } from "./DescribeVsDomainRecordData/res";
import { DescribeVsDomainRegionDataRequest } from "./DescribeVsDomainRegionData/req";
import { DescribeVsDomainRegionDataResponse } from "./DescribeVsDomainRegionData/res";
import { DescribeVsDomainReqBpsDataRequest } from "./DescribeVsDomainReqBpsData/req";
import { DescribeVsDomainReqBpsDataResponse } from "./DescribeVsDomainReqBpsData/res";
import { DescribeVsDomainReqTrafficDataRequest } from "./DescribeVsDomainReqTrafficData/req";
import { DescribeVsDomainReqTrafficDataResponse } from "./DescribeVsDomainReqTrafficData/res";
import { DescribeVsDomainSnapshotDataRequest } from "./DescribeVsDomainSnapshotData/req";
import { DescribeVsDomainSnapshotDataResponse } from "./DescribeVsDomainSnapshotData/res";
import { DescribeVsDomainTrafficDataRequest } from "./DescribeVsDomainTrafficData/req";
import { DescribeVsDomainTrafficDataResponse } from "./DescribeVsDomainTrafficData/res";
import { DescribeVsDomainUvDataRequest } from "./DescribeVsDomainUvData/req";
import { DescribeVsDomainUvDataResponse } from "./DescribeVsDomainUvData/res";
import { DescribeVsPullStreamInfoConfigRequest } from "./DescribeVsPullStreamInfoConfig/req";
import { DescribeVsPullStreamInfoConfigResponse } from "./DescribeVsPullStreamInfoConfig/res";
import { DescribeVsStreamsNotifyUrlConfigRequest } from "./DescribeVsStreamsNotifyUrlConfig/req";
import { DescribeVsStreamsNotifyUrlConfigResponse } from "./DescribeVsStreamsNotifyUrlConfig/res";
import { DescribeVsStreamsOnlineListRequest } from "./DescribeVsStreamsOnlineList/req";
import { DescribeVsStreamsOnlineListResponse } from "./DescribeVsStreamsOnlineList/res";
import { DescribeVsStreamsPublishListRequest } from "./DescribeVsStreamsPublishList/req";
import { DescribeVsStreamsPublishListResponse } from "./DescribeVsStreamsPublishList/res";
import { DescribeVsTopDomainsByFlowRequest } from "./DescribeVsTopDomainsByFlow/req";
import { DescribeVsTopDomainsByFlowResponse } from "./DescribeVsTopDomainsByFlow/res";
import { DescribeVsUpPeakPublishStreamDataRequest } from "./DescribeVsUpPeakPublishStreamData/req";
import { DescribeVsUpPeakPublishStreamDataResponse } from "./DescribeVsUpPeakPublishStreamData/res";
import { DescribeVsUserResourcePackageRequest } from "./DescribeVsUserResourcePackage/req";
import { DescribeVsUserResourcePackageResponse } from "./DescribeVsUserResourcePackage/res";
import { ForbidVsStreamRequest } from "./ForbidVsStream/req";
import { ForbidVsStreamResponse } from "./ForbidVsStream/res";
import { GotoPresetRequest } from "./GotoPreset/req";
import { GotoPresetResponse } from "./GotoPreset/res";
import { ModifyDeviceRequest } from "./ModifyDevice/req";
import { ModifyDeviceResponse } from "./ModifyDevice/res";
import { ModifyDeviceAlarmRequest } from "./ModifyDeviceAlarm/req";
import { ModifyDeviceAlarmResponse } from "./ModifyDeviceAlarm/res";
import { ModifyDeviceCaptureRequest } from "./ModifyDeviceCapture/req";
import { ModifyDeviceCaptureResponse } from "./ModifyDeviceCapture/res";
import { ModifyDeviceChannelsRequest } from "./ModifyDeviceChannels/req";
import { ModifyDeviceChannelsResponse } from "./ModifyDeviceChannels/res";
import { ModifyDirectoryRequest } from "./ModifyDirectory/req";
import { ModifyDirectoryResponse } from "./ModifyDirectory/res";
import { ModifyGroupRequest } from "./ModifyGroup/req";
import { ModifyGroupResponse } from "./ModifyGroup/res";
import { ModifyParentPlatformRequest } from "./ModifyParentPlatform/req";
import { ModifyParentPlatformResponse } from "./ModifyParentPlatform/res";
import { ModifyTemplateRequest } from "./ModifyTemplate/req";
import { ModifyTemplateResponse } from "./ModifyTemplate/res";
import { ResumeVsStreamRequest } from "./ResumeVsStream/req";
import { ResumeVsStreamResponse } from "./ResumeVsStream/res";
import { SetPresetRequest } from "./SetPreset/req";
import { SetPresetResponse } from "./SetPreset/res";
import { SetVsStreamsNotifyUrlConfigRequest } from "./SetVsStreamsNotifyUrlConfig/req";
import { SetVsStreamsNotifyUrlConfigResponse } from "./SetVsStreamsNotifyUrlConfig/res";
import { StartParentPlatformRequest } from "./StartParentPlatform/req";
import { StartParentPlatformResponse } from "./StartParentPlatform/res";
import { StartStreamRequest } from "./StartStream/req";
import { StartStreamResponse } from "./StartStream/res";
import { StartTransferStreamRequest } from "./StartTransferStream/req";
import { StartTransferStreamResponse } from "./StartTransferStream/res";
import { StopAdjustRequest } from "./StopAdjust/req";
import { StopAdjustResponse } from "./StopAdjust/res";
import { StopDeviceRequest } from "./StopDevice/req";
import { StopDeviceResponse } from "./StopDevice/res";
import { StopMoveRequest } from "./StopMove/req";
import { StopMoveResponse } from "./StopMove/res";
import { StopStreamRequest } from "./StopStream/req";
import { StopStreamResponse } from "./StopStream/res";
import { StopTransferStreamRequest } from "./StopTransferStream/req";
import { StopTransferStreamResponse } from "./StopTransferStream/res";
import { UnbindParentPlatformDeviceRequest } from "./UnbindParentPlatformDevice/req";
import { UnbindParentPlatformDeviceResponse } from "./UnbindParentPlatformDevice/res";
import { UnbindPurchasedDeviceRequest } from "./UnbindPurchasedDevice/req";
import { UnbindPurchasedDeviceResponse } from "./UnbindPurchasedDevice/res";
import { UpdateVsPullStreamInfoConfigRequest } from "./UpdateVsPullStreamInfoConfig/req";
import { UpdateVsPullStreamInfoConfigResponse } from "./UpdateVsPullStreamInfoConfig/res";
import { OpenVsServiceRequest } from "./OpenVsService/req";
import { OpenVsServiceResponse } from "./OpenVsService/res";
import { CreateClusterRequest } from "./CreateCluster/req";
import { CreateClusterResponse } from "./CreateCluster/res";
import { DeleteClusterRequest } from "./DeleteCluster/req";
import { DeleteClusterResponse } from "./DeleteCluster/res";
import { DescribeClusterRequest } from "./DescribeCluster/req";
import { DescribeClusterResponse } from "./DescribeCluster/res";
import { DescribeClusterDevicesRequest } from "./DescribeClusterDevices/req";
import { DescribeClusterDevicesResponse } from "./DescribeClusterDevices/res";
import { DescribeClustersRequest } from "./DescribeClusters/req";
import { DescribeClustersResponse } from "./DescribeClusters/res";
import { UpdateClusterRequest } from "./UpdateCluster/req";
import { UpdateClusterResponse } from "./UpdateCluster/res";
import { DescribeVsDevicesDataRequest } from "./DescribeVsDevicesData/req";
import { DescribeVsDevicesDataResponse } from "./DescribeVsDevicesData/res";
import { DescribeContainerInstanceIdRequest } from "./DescribeContainerInstanceId/req";
import { DescribeContainerInstanceIdResponse } from "./DescribeContainerInstanceId/res";
import { DescribeUserDevicesRequest } from "./DescribeUserDevices/req";
import { DescribeUserDevicesResponse } from "./DescribeUserDevices/res";
import { VerifyVsDomainOwnerRequest } from "./VerifyVsDomainOwner/req";
import { VerifyVsDomainOwnerResponse } from "./VerifyVsDomainOwner/res";
import { DescribeVsVerifyContentRequest } from "./DescribeVsVerifyContent/req";
import { DescribeVsVerifyContentResponse } from "./DescribeVsVerifyContent/res";
import { StartPublishStreamRequest } from "./StartPublishStream/req";
import { StartPublishStreamResponse } from "./StartPublishStream/res";
import { DescribePublishStreamStatusRequest } from "./DescribePublishStreamStatus/req";
import { DescribePublishStreamStatusResponse } from "./DescribePublishStreamStatus/res";
import { StopPublishStreamRequest } from "./StopPublishStream/req";
import { StopPublishStreamResponse } from "./StopPublishStream/res";
import { ListRenderingInstancesRequest } from "./ListRenderingInstances/req";
import { ListRenderingInstancesResponse } from "./ListRenderingInstances/res";
import { GetRenderingInstanceStreamingInfoRequest } from "./GetRenderingInstanceStreamingInfo/req";
import { GetRenderingInstanceStreamingInfoResponse } from "./GetRenderingInstanceStreamingInfo/res";
import { DescribeRenderingInstanceRequest } from "./DescribeRenderingInstance/req";
import { DescribeRenderingInstanceResponse } from "./DescribeRenderingInstance/res";
import { InstallCloudAppRequest } from "./InstallCloudApp/req";
import { InstallCloudAppResponse } from "./InstallCloudApp/res";
import { UninstallCloudAppRequest } from "./UninstallCloudApp/req";
import { UninstallCloudAppResponse } from "./UninstallCloudApp/res";
import { UpdateCloudAppInfoRequest } from "./UpdateCloudAppInfo/req";
import { UpdateCloudAppInfoResponse } from "./UpdateCloudAppInfo/res";
import { ListCloudAppsRequest } from "./ListCloudApps/req";
import { ListCloudAppsResponse } from "./ListCloudApps/res";
import { ManageLoginRequest } from "./ManageLogin/req";
import { ManageLoginResponse } from "./ManageLogin/res";
import { DeleteCloudAppRequest } from "./DeleteCloudApp/req";
import { DeleteCloudAppResponse } from "./DeleteCloudApp/res";
import { ListPublicKeysRequest } from "./ListPublicKeys/req";
import { ListPublicKeysResponse } from "./ListPublicKeys/res";
import { UploadCloudAppRequest } from "./UploadCloudApp/req";
import { UploadCloudAppResponse } from "./UploadCloudApp/res";
import { DeletePublicKeyRequest } from "./DeletePublicKey/req";
import { DeletePublicKeyResponse } from "./DeletePublicKey/res";
import { ListCloudAppInstallationsRequest } from "./ListCloudAppInstallations/req";
import { ListCloudAppInstallationsResponse } from "./ListCloudAppInstallations/res";
import { UploadPublicKeyRequest } from "./UploadPublicKey/req";
import { UploadPublicKeyResponse } from "./UploadPublicKey/res";
import { CreateRenderingInstanceRequest } from "./CreateRenderingInstance/req";
import { CreateRenderingInstanceResponse } from "./CreateRenderingInstance/res";
import { RenewRenderingInstanceRequest } from "./RenewRenderingInstance/req";
import { RenewRenderingInstanceResponse } from "./RenewRenderingInstance/res";
import { ReleaseRenderingInstanceRequest } from "./ReleaseRenderingInstance/req";
import { ReleaseRenderingInstanceResponse } from "./ReleaseRenderingInstance/res";
import { RebootRenderingInstanceRequest } from "./RebootRenderingInstance/req";
import { RebootRenderingInstanceResponse } from "./RebootRenderingInstance/res";
import { DescribeRenderingInstanceConfigurationRequest } from "./DescribeRenderingInstanceConfiguration/req";
import { DescribeRenderingInstanceConfigurationResponse } from "./DescribeRenderingInstanceConfiguration/res";
import { DeleteRenderingInstanceConfigurationRequest } from "./DeleteRenderingInstanceConfiguration/req";
import { DeleteRenderingInstanceConfigurationResponse } from "./DeleteRenderingInstanceConfiguration/res";
import { ModifyRenderingInstanceBandwidthRequest } from "./ModifyRenderingInstanceBandwidth/req";
import { ModifyRenderingInstanceBandwidthResponse } from "./ModifyRenderingInstanceBandwidth/res";
import { SendRenderingInstanceCommandsRequest } from "./SendRenderingInstanceCommands/req";
import { SendRenderingInstanceCommandsResponse } from "./SendRenderingInstanceCommands/res";
import { UpdateRenderingInstanceConfigurationRequest } from "./UpdateRenderingInstanceConfiguration/req";
import { UpdateRenderingInstanceConfigurationResponse } from "./UpdateRenderingInstanceConfiguration/res";
import { DeleteFileRequest } from "./DeleteFile/req";
import { DeleteFileResponse } from "./DeleteFile/res";
import { UpdateFileInfoRequest } from "./UpdateFileInfo/req";
import { UpdateFileInfoResponse } from "./UpdateFileInfo/res";
import { ListFilesRequest } from "./ListFiles/req";
import { ListFilesResponse } from "./ListFiles/res";
import { PushFileRequest } from "./PushFile/req";
import { PushFileResponse } from "./PushFile/res";
import { UploadFileRequest } from "./UploadFile/req";
import { UploadFileResponse } from "./UploadFile/res";
import { ListFilePushStatusesRequest } from "./ListFilePushStatuses/req";
import { ListFilePushStatusesResponse } from "./ListFilePushStatuses/res";

interface VS {
    /**
     * 需先停止设备再删除。
     */
    DeleteDevice(query: DeleteDeviceRequest): Promise<DeleteDeviceResponse>;
    /**
     * 启动设备拉流，会启动设备上的所有流。
     */
    StartDevice(query: StartDeviceRequest): Promise<StartDeviceResponse>;
    /**
     * 批量启动设备拉流。
     */
    BatchStartDevices(query: BatchStartDevicesRequest): Promise<BatchStartDevicesResponse>;
    /**
     * 批量删除设备。
     */
    BatchDeleteDevices(query: BatchDeleteDevicesRequest): Promise<BatchDeleteDevicesResponse>;
    /**
     * 查询设备通道列表。
     */
    DescribeDeviceChannels(query: DescribeDeviceChannelsRequest): Promise<DescribeDeviceChannelsResponse>;
    /**
     * 解锁设备。
     */
    UnlockDevice(query: UnlockDeviceRequest): Promise<UnlockDeviceResponse>;
    /**
     * 同步平台通道信息。
     */
    SyncCatalogs(query: SyncCatalogsRequest): Promise<SyncCatalogsResponse>;
    /**
     * 查询流信息。
     */
    DescribeStream(query: DescribeStreamRequest): Promise<DescribeStreamResponse>;
    /**
     * 查询流的列表信息，支持通过流的ID，名称，空间ID，设备ID等过滤筛选。
     */
    DescribeStreams(query: DescribeStreamsRequest): Promise<DescribeStreamsResponse>;
    /**
     * 批量启动流。
     */
    BatchStartStreams(query: BatchStartStreamsRequest): Promise<BatchStartStreamsResponse>;
    /**
     * 批量停止流。
     */
    BatchStopStreams(query: BatchStopStreamsRequest): Promise<BatchStopStreamsResponse>;
    /**
     * 对指定流，按需创建新的截图。
     */
    CreateStreamSnapshot(query: CreateStreamSnapshotRequest): Promise<CreateStreamSnapshotResponse>;
    /**
     * 删除模板。
     */
    DeleteTemplate(query: DeleteTemplateRequest): Promise<DeleteTemplateResponse>;
    /**
     * 绑定模板到指定的实例，比如：绑定到空间和流的实例。
     */
    BindTemplate(query: BindTemplateRequest): Promise<BindTemplateResponse>;
    /**
     * 解除绑定模板到指定的实例，比如：解除绑定到空间和流的实例。
     */
    UnbindTemplate(query: UnbindTemplateRequest): Promise<UnbindTemplateResponse>;
    /**
     * 绑定模板到指定的多个实例，比如：绑定到空间和流的实例。
     */
    BatchBindTemplate(query: BatchBindTemplateRequest): Promise<BatchBindTemplateResponse>;
    /**
     * 解除绑定模板到指定的多个实例，比如：解除绑定到空间和流的实例。
     */
    BatchUnbindTemplate(query: BatchUnbindTemplateRequest): Promise<BatchUnbindTemplateResponse>;
    /**
     * 对指定流启动按需录制。
     */
    StartRecordStream(query: StartRecordStreamRequest): Promise<StartRecordStreamResponse>;
    /**
     * 对指定流停止按需录制。
     */
    StopRecordStream(query: StopRecordStreamRequest): Promise<StopRecordStreamResponse>;
    /**
     * 批量删除域名配置。
     */
    BatchDeleteVsDomainConfigs(query: BatchDeleteVsDomainConfigsRequest): Promise<BatchDeleteVsDomainConfigsResponse>;
    /**
     * 设置某域名下证书功能是否启用。
     */
    SetVsDomainCertificate(query: SetVsDomainCertificateRequest): Promise<SetVsDomainCertificateResponse>;
    /**
     * 获取证书详细信息。
     */
    DescribeVsCertificateDetail(query: DescribeVsCertificateDetailRequest): Promise<DescribeVsCertificateDetailResponse>;
    /**
     * 从目录内批量解绑多个设备。
     */
    BatchUnbindDirectories(query: BatchUnbindDirectoriesRequest): Promise<BatchUnbindDirectoriesResponse>;
    /**
     * 从目录里解绑设备。
     */
    UnbindDirectory(query: UnbindDirectoryRequest): Promise<UnbindDirectoryResponse>;
    /**
     * 添加拉流配置信息。
     */
    AddVsPullStreamInfoConfig(query: AddVsPullStreamInfoConfigRequest): Promise<AddVsPullStreamInfoConfigResponse>;
    /**
     * 批量绑定多个设备到目录。
     */
    BatchBindDirectories(query: BatchBindDirectoriesRequest): Promise<BatchBindDirectoriesResponse>;
    /**
     * 批量绑定多个设备到上级平台推送。
     */
    BatchBindParentPlatformDevices(query: BatchBindParentPlatformDevicesRequest): Promise<BatchBindParentPlatformDevicesResponse>;
    /**
     * 批量绑定购买设备。
     */
    BatchBindPurchasedDevices(query: BatchBindPurchasedDevicesRequest): Promise<BatchBindPurchasedDevicesResponse>;
    /**
     * 批量绑定模板。
     */
    BatchBindTemplates(query: BatchBindTemplatesRequest): Promise<BatchBindTemplatesResponse>;
    /**
     * 禁止某条流的推送，可以预设某个时刻将流恢复。
     */
    BatchForbidVsStream(query: BatchForbidVsStreamRequest): Promise<BatchForbidVsStreamResponse>;
    /**
     * 恢复某条流的推送。
     */
    BatchResumeVsStream(query: BatchResumeVsStreamRequest): Promise<BatchResumeVsStreamResponse>;
    /**
     * 域名批量配置。
     */
    BatchSetVsDomainConfigs(query: BatchSetVsDomainConfigsRequest): Promise<BatchSetVsDomainConfigsResponse>;
    /**
     * 批量停止设备拉流。
     */
    BatchStopDevices(query: BatchStopDevicesRequest): Promise<BatchStopDevicesResponse>;
    /**
     * 从上级平台推送中批量解绑多个设备。
     */
    BatchUnbindParentPlatformDevices(query: BatchUnbindParentPlatformDevicesRequest): Promise<BatchUnbindParentPlatformDevicesResponse>;
    /**
     * 从空间批量解绑多个已购设备。
     */
    BatchUnbindPurchasedDevices(query: BatchUnbindPurchasedDevicesRequest): Promise<BatchUnbindPurchasedDevicesResponse>;
    /**
     * 批量解除绑定模板。
     */
    BatchUnbindTemplates(query: BatchUnbindTemplatesRequest): Promise<BatchUnbindTemplatesResponse>;
    /**
     * 绑定设备至目录。
     */
    BindDirectory(query: BindDirectoryRequest): Promise<BindDirectoryResponse>;
    /**
     * 绑定设备到上级平台推送。
     */
    BindParentPlatformDevice(query: BindParentPlatformDeviceRequest): Promise<BindParentPlatformDeviceResponse>;
    /**
     * 绑定已购买设备至空间。
     */
    BindPurchasedDevice(query: BindPurchasedDeviceRequest): Promise<BindPurchasedDeviceResponse>;
    /**
     * 持续调节镜头，如光圈、变焦等。
     */
    ContinuousAdjust(query: ContinuousAdjustRequest): Promise<ContinuousAdjustResponse>;
    /**
     * 持续转动镜头，如水平、垂直、缩放等。
     */
    ContinuousMove(query: ContinuousMoveRequest): Promise<ContinuousMoveResponse>;
    /**
     * 添加新的设备。
     */
    CreateDevice(query: CreateDeviceRequest): Promise<CreateDeviceResponse>;
    /**
     * 上报设备告警。
     */
    CreateDeviceAlarm(query: CreateDeviceAlarmRequest): Promise<CreateDeviceAlarmResponse>;
    /**
     * 创建新的目录。
     */
    CreateDirectory(query: CreateDirectoryRequest): Promise<CreateDirectoryResponse>;
    /**
     * 创建新业务空间。
     */
    CreateGroup(query: CreateGroupRequest): Promise<CreateGroupResponse>;
    /**
     * 添加新的上级平台。
     */
    CreateParentPlatform(query: CreateParentPlatformRequest): Promise<CreateParentPlatformResponse>;
    /**
     * 创建新模板。
     */
    CreateTemplate(query: CreateTemplateRequest): Promise<CreateTemplateResponse>;
    /**
     * 删除目录。
     */
    DeleteDirectory(query: DeleteDirectoryRequest): Promise<DeleteDirectoryResponse>;
    /**
     * 删除业务空间，注意：空间需先停用才能删除。
     */
    DeleteGroup(query: DeleteGroupRequest): Promise<DeleteGroupResponse>;
    /**
     * 删除上级平台。
     */
    DeleteParentPlatform(query: DeleteParentPlatformRequest): Promise<DeleteParentPlatformResponse>;
    /**
     * 删除预置位。
     */
    DeletePreset(query: DeletePresetRequest): Promise<DeletePresetResponse>;
    /**
     * 删除拉流信息。
     */
    DeleteVsPullStreamInfoConfig(query: DeleteVsPullStreamInfoConfigRequest): Promise<DeleteVsPullStreamInfoConfigResponse>;
    /**
     * 删除推流回调配置。
     */
    DeleteVsStreamsNotifyUrlConfig(query: DeleteVsStreamsNotifyUrlConfigRequest): Promise<DeleteVsStreamsNotifyUrlConfigResponse>;
    /**
     * 查询某个账号在指定地域下的所有资源信息。
     */
    DescribeAccountStat(query: DescribeAccountStatRequest): Promise<DescribeAccountStatResponse>;
    /**
     * 查询设备信息。
     */
    DescribeDevice(query: DescribeDeviceRequest): Promise<DescribeDeviceResponse>;
    /**
     * 查询设备网关。
     */
    DescribeDeviceGateway(query: DescribeDeviceGatewayRequest): Promise<DescribeDeviceGatewayResponse>;
    /**
     * 查询设备流的URL信息。
     */
    DescribeDeviceURL(query: DescribeDeviceURLRequest): Promise<DescribeDeviceURLResponse>;
    /**
     * 查询设备列表。
     */
    DescribeDevices(query: DescribeDevicesRequest): Promise<DescribeDevicesResponse>;
    /**
     * 查询目录列表。
     */
    DescribeDirectories(query: DescribeDirectoriesRequest): Promise<DescribeDirectoriesResponse>;
    /**
     * 查询目录。
     */
    DescribeDirectory(query: DescribeDirectoryRequest): Promise<DescribeDirectoryResponse>;
    /**
     * 获取空间信息。
     */
    DescribeGroup(query: DescribeGroupRequest): Promise<DescribeGroupResponse>;
    /**
     * 查询空间列表。
     */
    DescribeGroups(query: DescribeGroupsRequest): Promise<DescribeGroupsResponse>;
    /**
     * 查询上级平台信息。
     */
    DescribeParentPlatform(query: DescribeParentPlatformRequest): Promise<DescribeParentPlatformResponse>;
    /**
     * 查询上级平台下的设备列表。
     */
    DescribeParentPlatformDevices(query: DescribeParentPlatformDevicesRequest): Promise<DescribeParentPlatformDevicesResponse>;
    /**
     * 查询上级平台列表。
     */
    DescribeParentPlatforms(query: DescribeParentPlatformsRequest): Promise<DescribeParentPlatformsResponse>;
    /**
     * 获取预置位列表。
     */
    DescribePresets(query: DescribePresetsRequest): Promise<DescribePresetsResponse>;
    /**
     * 查询已购买设备信息。
     */
    DescribePurchasedDevice(query: DescribePurchasedDeviceRequest): Promise<DescribePurchasedDeviceResponse>;
    /**
     * 查询已购买设备列表。
     */
    DescribePurchasedDevices(query: DescribePurchasedDevicesRequest): Promise<DescribePurchasedDevicesResponse>;
    /**
     * 查询录制记录列表。
     */
    DescribeRecords(query: DescribeRecordsRequest): Promise<DescribeRecordsResponse>;
    /**
     * 获取流URL信息。
     */
    DescribeStreamURL(query: DescribeStreamURLRequest): Promise<DescribeStreamURLResponse>;
    /**
     * 获取流点播记录列表，例如来自NVR的历史流列表。
     */
    DescribeStreamVodList(query: DescribeStreamVodListRequest): Promise<DescribeStreamVodListResponse>;
    /**
     * 查询模板信息。
     */
    DescribeTemplate(query: DescribeTemplateRequest): Promise<DescribeTemplateResponse>;
    /**
     * 查询模板列表。
     */
    DescribeTemplates(query: DescribeTemplatesRequest): Promise<DescribeTemplatesResponse>;
    /**
     * 获取点播流的URL信息。
     */
    DescribeVodStreamURL(query: DescribeVodStreamURLRequest): Promise<DescribeVodStreamURLResponse>;
    /**
     * 获取域名证书列表信息。
     */
    DescribeVsCertificateList(query: DescribeVsCertificateListRequest): Promise<DescribeVsCertificateListResponse>;
    /**
     * 查询域名网络带宽监控数据。
     */
    DescribeVsDomainBpsData(query: DescribeVsDomainBpsDataRequest): Promise<DescribeVsDomainBpsDataResponse>;
    /**
     * 获取指定加速域名证书信息。
     */
    DescribeVsDomainCertificateInfo(query: DescribeVsDomainCertificateInfoRequest): Promise<DescribeVsDomainCertificateInfoResponse>;
    /**
     * 查询域名配置，一次可查询多个功能配置。
     */
    DescribeVsDomainConfigs(query: DescribeVsDomainConfigsRequest): Promise<DescribeVsDomainConfigsResponse>;
    /**
     * 获取指定视图计算域名配置的基本信息。
     */
    DescribeVsDomainDetail(query: DescribeVsDomainDetailRequest): Promise<DescribeVsDomainDetailResponse>;
    /**
     * 获取域名PV数据。
     */
    DescribeVsDomainPvData(query: DescribeVsDomainPvDataRequest): Promise<DescribeVsDomainPvDataResponse>;
    /**
     * 获取vs域名pv和uv数据。
     */
    DescribeVsDomainPvUvData(query: DescribeVsDomainPvUvDataRequest): Promise<DescribeVsDomainPvUvDataResponse>;
    /**
     * 获取 vs 域名记录数据。
     */
    DescribeVsDomainRecordData(query: DescribeVsDomainRecordDataRequest): Promise<DescribeVsDomainRecordDataResponse>;
    /**
     * 获取域名区域数据。
     */
    DescribeVsDomainRegionData(query: DescribeVsDomainRegionDataRequest): Promise<DescribeVsDomainRegionDataResponse>;
    /**
     * 获取域名网络请求监控数据。
     */
    DescribeVsDomainReqBpsData(query: DescribeVsDomainReqBpsDataRequest): Promise<DescribeVsDomainReqBpsDataResponse>;
    /**
     * 获取 vs 域名请求流量数据。
     */
    DescribeVsDomainReqTrafficData(query: DescribeVsDomainReqTrafficDataRequest): Promise<DescribeVsDomainReqTrafficDataResponse>;
    /**
     * 获取域名快照数据。
     */
    DescribeVsDomainSnapshotData(query: DescribeVsDomainSnapshotDataRequest): Promise<DescribeVsDomainSnapshotDataResponse>;
    /**
     * 获取域名流量数据。
     */
    DescribeVsDomainTrafficData(query: DescribeVsDomainTrafficDataRequest): Promise<DescribeVsDomainTrafficDataResponse>;
    /**
     * 获取 vs 域名 uv 数据	。
     */
    DescribeVsDomainUvData(query: DescribeVsDomainUvDataRequest): Promise<DescribeVsDomainUvDataResponse>;
    /**
     * 查询域名下拉流配置信息。
     */
    DescribeVsPullStreamInfoConfig(query: DescribeVsPullStreamInfoConfigRequest): Promise<DescribeVsPullStreamInfoConfigResponse>;
    /**
     * 查询推流回调配置。
     */
    DescribeVsStreamsNotifyUrlConfig(query: DescribeVsStreamsNotifyUrlConfigRequest): Promise<DescribeVsStreamsNotifyUrlConfigResponse>;
    /**
     * 查看指定域名下（或者指定域名下某个应用）的所有正在推的流的信息。
     */
    DescribeVsStreamsOnlineList(query: DescribeVsStreamsOnlineListRequest): Promise<DescribeVsStreamsOnlineListResponse>;
    /**
     * 获取某一时间段内某个域名（或域名下某应用或某个流）的推流记录。
     */
    DescribeVsStreamsPublishList(query: DescribeVsStreamsPublishListRequest): Promise<DescribeVsStreamsPublishListResponse>;
    /**
     * 获取用户按流量排名的域名
     * 不指定StartTime和EndTime时，默认读取当月的数据，同时支持按指定的起止时间查询，两者需要同时指定。
     * * 最多可获取90天的数据。
     */
    DescribeVsTopDomainsByFlow(query: DescribeVsTopDomainsByFlowRequest): Promise<DescribeVsTopDomainsByFlowResponse>;
    /**
     * 查询用户的每日上行并发推流数峰值。
     */
    DescribeVsUpPeakPublishStreamData(query: DescribeVsUpPeakPublishStreamDataRequest): Promise<DescribeVsUpPeakPublishStreamDataResponse>;
    DescribeVsUserResourcePackage(query: DescribeVsUserResourcePackageRequest): Promise<DescribeVsUserResourcePackageResponse>;
    /**
     * 禁止某条流的推送，可以预设某个时刻将流恢复。
     */
    ForbidVsStream(query: ForbidVsStreamRequest): Promise<ForbidVsStreamResponse>;
    /**
     * 移动至预置位。
     */
    GotoPreset(query: GotoPresetRequest): Promise<GotoPresetResponse>;
    /**
     * 修改设备信息。
     */
    ModifyDevice(query: ModifyDeviceRequest): Promise<ModifyDeviceResponse>;
    /**
     * 更新设备告警状态。
     */
    ModifyDeviceAlarm(query: ModifyDeviceAlarmRequest): Promise<ModifyDeviceAlarmResponse>;
    /**
     * 修改设备图传配置。
     */
    ModifyDeviceCapture(query: ModifyDeviceCaptureRequest): Promise<ModifyDeviceCaptureResponse>;
    /**
     * 更新设备通道列表。
     */
    ModifyDeviceChannels(query: ModifyDeviceChannelsRequest): Promise<ModifyDeviceChannelsResponse>;
    /**
     * 修改目录信息。
     */
    ModifyDirectory(query: ModifyDirectoryRequest): Promise<ModifyDirectoryResponse>;
    /**
     * 修改空间信息。
     */
    ModifyGroup(query: ModifyGroupRequest): Promise<ModifyGroupResponse>;
    /**
     * 修改上级平台信息。
     */
    ModifyParentPlatform(query: ModifyParentPlatformRequest): Promise<ModifyParentPlatformResponse>;
    /**
     * 修改模板信息。
     */
    ModifyTemplate(query: ModifyTemplateRequest): Promise<ModifyTemplateResponse>;
    /**
     * 恢复某条流的推送。
     */
    ResumeVsStream(query: ResumeVsStreamRequest): Promise<ResumeVsStreamResponse>;
    /**
     * 设置预置位。
     */
    SetPreset(query: SetPresetRequest): Promise<SetPresetResponse>;
    /**
     * 设置推流回调配置。
     */
    SetVsStreamsNotifyUrlConfig(query: SetVsStreamsNotifyUrlConfigRequest): Promise<SetVsStreamsNotifyUrlConfigResponse>;
    /**
     * 启动上级平台交互，如注册、保活等。
     */
    StartParentPlatform(query: StartParentPlatformRequest): Promise<StartParentPlatformResponse>;
    /**
     * 启动流。
     */
    StartStream(query: StartStreamRequest): Promise<StartStreamResponse>;
    /**
     * 启动转推流到外部的地址。
     */
    StartTransferStream(query: StartTransferStreamRequest): Promise<StartTransferStreamResponse>;
    /**
     * 停止调节镜头，如光圈、变焦等。
     */
    StopAdjust(query: StopAdjustRequest): Promise<StopAdjustResponse>;
    /**
     * 停止设备拉流，会停止设备上的所有流。
     */
    StopDevice(query: StopDeviceRequest): Promise<StopDeviceResponse>;
    /**
     * 停止转动镜头，如水平、垂直、缩放等。
     */
    StopMove(query: StopMoveRequest): Promise<StopMoveResponse>;
    /**
     * 停止流。
     */
    StopStream(query: StopStreamRequest): Promise<StopStreamResponse>;
    /**
     * 停止流。
     */
    StopTransferStream(query: StopTransferStreamRequest): Promise<StopTransferStreamResponse>;
    /**
     * 从上级平台推送中解绑设备，不再推送。
     */
    UnbindParentPlatformDevice(query: UnbindParentPlatformDeviceRequest): Promise<UnbindParentPlatformDeviceResponse>;
    /**
     * 从空间解绑已购买设备。
     */
    UnbindPurchasedDevice(query: UnbindPurchasedDeviceRequest): Promise<UnbindPurchasedDeviceResponse>;
    /**
     * 更新拉流信息，修改已经添加的拉流任务中的源站地址的开始时间和结束时间。
     */
    UpdateVsPullStreamInfoConfig(query: UpdateVsPullStreamInfoConfigRequest): Promise<UpdateVsPullStreamInfoConfigResponse>;
    /**
     * 开通服务。
     */
    OpenVsService(query: OpenVsServiceRequest): Promise<OpenVsServiceResponse>;
    CreateCluster(query: CreateClusterRequest): Promise<CreateClusterResponse>;
    DeleteCluster(query: DeleteClusterRequest): Promise<DeleteClusterResponse>;
    DescribeCluster(query: DescribeClusterRequest): Promise<DescribeClusterResponse>;
    DescribeClusterDevices(query: DescribeClusterDevicesRequest): Promise<DescribeClusterDevicesResponse>;
    DescribeClusters(query: DescribeClustersRequest): Promise<DescribeClustersResponse>;
    UpdateCluster(query: UpdateClusterRequest): Promise<UpdateClusterResponse>;
    /**
     * 获取接入设备用量数据。
     */
    DescribeVsDevicesData(query: DescribeVsDevicesDataRequest): Promise<DescribeVsDevicesDataResponse>;
    DescribeContainerInstanceId(query: DescribeContainerInstanceIdRequest): Promise<DescribeContainerInstanceIdResponse>;
    DescribeUserDevices(query: DescribeUserDevicesRequest): Promise<DescribeUserDevicesResponse>;
    VerifyVsDomainOwner(query: VerifyVsDomainOwnerRequest): Promise<VerifyVsDomainOwnerResponse>;
    DescribeVsVerifyContent(query: DescribeVsVerifyContentRequest): Promise<DescribeVsVerifyContentResponse>;
    StartPublishStream(query: StartPublishStreamRequest): Promise<StartPublishStreamResponse>;
    DescribePublishStreamStatus(query: DescribePublishStreamStatusRequest): Promise<DescribePublishStreamStatusResponse>;
    StopPublishStream(query: StopPublishStreamRequest): Promise<StopPublishStreamResponse>;
    /**
     * 查询云应用服务实例基本信息列表，支持分页查询。
     */
    ListRenderingInstances(query: ListRenderingInstancesRequest): Promise<ListRenderingInstancesResponse>;
    /**
     * 获取一个云应用服务实例的流连接信息，每次流化建联前都需要调用此接口获取最新连接信息。
     */
    GetRenderingInstanceStreamingInfo(query: GetRenderingInstanceStreamingInfoRequest): Promise<GetRenderingInstanceStreamingInfoResponse>;
    /**
     * 查询一个云应用服务实例的详细信息。
     */
    DescribeRenderingInstance(query: DescribeRenderingInstanceRequest): Promise<DescribeRenderingInstanceResponse>;
    /**
     * 安装一个云应用到一个指定云应用实例。
     * 属于异步接口，可通过ListCloudAppInstallations接口查询安装进度。
     */
    InstallCloudApp(query: InstallCloudAppRequest): Promise<InstallCloudAppResponse>;
    /**
     * 卸载一个指定云应用实例上的一个指定云应用。
     * 属于异步接口。可通过ListCloudAppInstallations接口查询卸载进度，卸载成功后，查询接口将不再输出相关内容。
     */
    UninstallCloudApp(query: UninstallCloudAppRequest): Promise<UninstallCloudAppResponse>;
    /**
     * 更新一个云应用的基本信息，如描述信息。
     */
    UpdateCloudAppInfo(query: UpdateCloudAppInfoRequest): Promise<UpdateCloudAppInfoResponse>;
    /**
     * 查询云应用列表，支持分页查询。
     */
    ListCloudApps(query: ListCloudAppsRequest): Promise<ListCloudAppsResponse>;
    /**
     * 管理一个云应用服务实例的公钥授权，支持生效/失效一个公钥/公钥分组。
     */
    ManageLogin(query: ManageLoginRequest): Promise<ManageLoginResponse>;
    /**
     * 删除一个云应用。使用中的云应用不允许删除。
     */
    DeleteCloudApp(query: DeleteCloudAppRequest): Promise<DeleteCloudAppResponse>;
    /**
     * 查询满足条件的公钥信息列表，支持分页查询。
     */
    ListPublicKeys(query: ListPublicKeysRequest): Promise<ListPublicKeysResponse>;
    /**
     * 上传/上架一个云应用包。
     * 属于异步接口，可通过ListCloudApps接口查询上传进度。
     */
    UploadCloudApp(query: UploadCloudAppRequest): Promise<UploadCloudAppResponse>;
    /**
     * 删除一个指定公钥。该公钥关联的所有云应用服务实例将自动失效登录授权。
     */
    DeletePublicKey(query: DeletePublicKeyRequest): Promise<DeletePublicKeyResponse>;
    /**
     * 查询云应用的安装信息列表，返回信息包括云应用服务实例的安装状态，支持分页查询。
     */
    ListCloudAppInstallations(query: ListCloudAppInstallationsRequest): Promise<ListCloudAppInstallationsResponse>;
    /**
     * 上传一个新的公钥信息。
     */
    UploadPublicKey(query: UploadPublicKeyRequest): Promise<UploadPublicKeyResponse>;
    /**
     * 调用CreateRenderingInstance创建一个云应用服务实例
     */
    CreateRenderingInstance(query: CreateRenderingInstanceRequest): Promise<CreateRenderingInstanceResponse>;
    /**
     * 调用RenewRenderingInstance续费一个云应用服务实例
     */
    RenewRenderingInstance(query: RenewRenderingInstanceRequest): Promise<RenewRenderingInstanceResponse>;
    /**
     * 调用ReleaseRenderingInstance释放一个云应用服务实例
     */
    ReleaseRenderingInstance(query: ReleaseRenderingInstanceRequest): Promise<ReleaseRenderingInstanceResponse>;
    /**
     * 重启一个云应用资源实例。
     * 可通过查询接口DescribeRenderingInstance获取重启进度。
     */
    RebootRenderingInstance(query: RebootRenderingInstanceRequest): Promise<RebootRenderingInstanceResponse>;
    /**
     * 查询一个云应用服务实例系统配置的实时信息。
     */
    DescribeRenderingInstanceConfiguration(query: DescribeRenderingInstanceConfigurationRequest): Promise<DescribeRenderingInstanceConfigurationResponse>;
    /**
     * 清除一个云应用服务实例的配置设置。仅可删除通过UpdateRenderingInstanceConfiguration接口已配置的模块属性。
     */
    DeleteRenderingInstanceConfiguration(query: DeleteRenderingInstanceConfigurationRequest): Promise<DeleteRenderingInstanceConfigurationResponse>;
    /**
     * 更新一个云应用服务实例的限速带宽。
     * 可以通过实例查询接口DescribeRenderingInstance，获取限速值与限速更新状态。
     */
    ModifyRenderingInstanceBandwidth(query: ModifyRenderingInstanceBandwidthRequest): Promise<ModifyRenderingInstanceBandwidthResponse>;
    /**
     * 向一个云应用服务实例下发shell控制指令，并同步响应命令执行结果。
     * 本接口不适用于耗时命令。
     */
    SendRenderingInstanceCommands(query: SendRenderingInstanceCommandsRequest): Promise<SendRenderingInstanceCommandsResponse>;
    /**
     * 更新一个云应用服务实例的配置参数。支持修改云安卓系统的prop/location/network 等各种配置，构建真机仿真。
     * 可通过实例查询接口DescribeRenderingInstance，获取已设置的真机仿真配置值。
     * 查询实时环境的配置参数，参考接口DescribeRenderingInstanceConfiguration。
     */
    UpdateRenderingInstanceConfiguration(query: UpdateRenderingInstanceConfigurationRequest): Promise<UpdateRenderingInstanceConfigurationResponse>;
    /**
     * 删除一个文件对象。
     * 文件在上传/预推中时，不允许删除。文件删除后，所有相关的推送记录将失效，可重新推送同名文件。
     */
    DeleteFile(query: DeleteFileRequest): Promise<DeleteFileResponse>;
    /**
     * 更新一个文件的基本信息，如描述信息。
     */
    UpdateFileInfo(query: UpdateFileInfoRequest): Promise<UpdateFileInfoResponse>;
    /**
     * 查询上传的文件列表，返回内容包含文件的上传状态，支持分页查询。
     */
    ListFiles(query: ListFilesRequest): Promise<ListFilesResponse>;
    /**
     * 推送一个文件到一个指定云应用服务实例。
     * 属于异步操作，可通过ListFilePushStatuses接口查询推送进度。
     */
    PushFile(query: PushFileRequest): Promise<PushFileResponse>;
    /**
     * 上传一个文件。基于外链URL（公网可下载文件）实现文件上传到本地/云存储。
     * 属于异步操作，可通过ListFiles接口查询上传进度。
     */
    UploadFile(query: UploadFileRequest): Promise<UploadFileResponse>;
    /**
     * 查询文件的云应用服务实例推送状态信息列表，支持分页查询。
     */
    ListFilePushStatuses(query: ListFilePushStatusesRequest): Promise<ListFilePushStatusesResponse>;
}
export default VS;
