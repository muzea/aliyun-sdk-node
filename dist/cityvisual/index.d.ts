import { DeleteResourceProfileRequest } from "./DeleteResourceProfile/req";
import { DeleteResourceProfileResponse } from "./DeleteResourceProfile/res";
import { ModifyWorkGroupRequest } from "./ModifyWorkGroup/req";
import { ModifyWorkGroupResponse } from "./ModifyWorkGroup/res";
import { ListComputeJobLogsRequest } from "./ListComputeJobLogs/req";
import { ListComputeJobLogsResponse } from "./ListComputeJobLogs/res";
import { DeleteAlgoLibRequest } from "./DeleteAlgoLib/req";
import { DeleteAlgoLibResponse } from "./DeleteAlgoLib/res";
import { DescribeJobGroupsRequest } from "./DescribeJobGroups/req";
import { DescribeJobGroupsResponse } from "./DescribeJobGroups/res";
import { DescribeCapabilitiesRequest } from "./DescribeCapabilities/req";
import { DescribeCapabilitiesResponse } from "./DescribeCapabilities/res";
import { CreateCapabilityRequest } from "./CreateCapability/req";
import { CreateCapabilityResponse } from "./CreateCapability/res";
import { ModifyCapabilityRequest } from "./ModifyCapability/req";
import { ModifyCapabilityResponse } from "./ModifyCapability/res";
import { BatchModifyCameraStatusRequest } from "./BatchModifyCameraStatus/req";
import { BatchModifyCameraStatusResponse } from "./BatchModifyCameraStatus/res";
import { AttachStreamRequest } from "./AttachStream/req";
import { AttachStreamResponse } from "./AttachStream/res";
import { CreateJobGroupRequest } from "./CreateJobGroup/req";
import { CreateJobGroupResponse } from "./CreateJobGroup/res";
import { CreateInstanceRequest } from "./CreateInstance/req";
import { CreateInstanceResponse } from "./CreateInstance/res";
import { DeleteWorkGroupRequest } from "./DeleteWorkGroup/req";
import { DeleteWorkGroupResponse } from "./DeleteWorkGroup/res";
import { GetComputeJobLogRequest } from "./GetComputeJobLog/req";
import { GetComputeJobLogResponse } from "./GetComputeJobLog/res";
import { CreateResourceProfileRequest } from "./CreateResourceProfile/req";
import { CreateResourceProfileResponse } from "./CreateResourceProfile/res";
import { DescribeStreamsRequest } from "./DescribeStreams/req";
import { DescribeStreamsResponse } from "./DescribeStreams/res";
import { ModifyAlgoLibRequest } from "./ModifyAlgoLib/req";
import { ModifyAlgoLibResponse } from "./ModifyAlgoLib/res";
import { StopJobGroupRequest } from "./StopJobGroup/req";
import { StopJobGroupResponse } from "./StopJobGroup/res";
import { StartJobGroupRequest } from "./StartJobGroup/req";
import { StartJobGroupResponse } from "./StartJobGroup/res";
import { ModifyCameraRequest } from "./ModifyCamera/req";
import { ModifyCameraResponse } from "./ModifyCamera/res";
import { DescribeInstancesRequest } from "./DescribeInstances/req";
import { DescribeInstancesResponse } from "./DescribeInstances/res";
import { DescribeResourceProfilesRequest } from "./DescribeResourceProfiles/req";
import { DescribeResourceProfilesResponse } from "./DescribeResourceProfiles/res";
import { CreateCameraRequest } from "./CreateCamera/req";
import { CreateCameraResponse } from "./CreateCamera/res";
import { DeleteCapabilityRequest } from "./DeleteCapability/req";
import { DeleteCapabilityResponse } from "./DeleteCapability/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { ModifyResourceProfileRequest } from "./ModifyResourceProfile/req";
import { ModifyResourceProfileResponse } from "./ModifyResourceProfile/res";
import { ModifyInstanceRequest } from "./ModifyInstance/req";
import { ModifyInstanceResponse } from "./ModifyInstance/res";
import { ModifyJobGroupRequest } from "./ModifyJobGroup/req";
import { ModifyJobGroupResponse } from "./ModifyJobGroup/res";
import { DescribeProtocolsRequest } from "./DescribeProtocols/req";
import { DescribeProtocolsResponse } from "./DescribeProtocols/res";
import { DescribeCamerasRequest } from "./DescribeCameras/req";
import { DescribeCamerasResponse } from "./DescribeCameras/res";
import { SearchImagesRequest } from "./SearchImages/req";
import { SearchImagesResponse } from "./SearchImages/res";
import { CreateAlgoLibRequest } from "./CreateAlgoLib/req";
import { CreateAlgoLibResponse } from "./CreateAlgoLib/res";
import { DetachStreamRequest } from "./DetachStream/req";
import { DetachStreamResponse } from "./DetachStream/res";
import { DescribeAlgoLibsRequest } from "./DescribeAlgoLibs/req";
import { DescribeAlgoLibsResponse } from "./DescribeAlgoLibs/res";
import { DeleteJobGroupRequest } from "./DeleteJobGroup/req";
import { DeleteJobGroupResponse } from "./DeleteJobGroup/res";
import { DeleteInstanceRequest } from "./DeleteInstance/req";
import { DeleteInstanceResponse } from "./DeleteInstance/res";
import { CreateWorkGroupRequest } from "./CreateWorkGroup/req";
import { CreateWorkGroupResponse } from "./CreateWorkGroup/res";
import { DeleteCameraRequest } from "./DeleteCamera/req";
import { DeleteCameraResponse } from "./DeleteCamera/res";
import { DescribeWorkGroupsRequest } from "./DescribeWorkGroups/req";
import { DescribeWorkGroupsResponse } from "./DescribeWorkGroups/res";
import { ListStreamsForCamerasRequest } from "./ListStreamsForCameras/req";
import { ListStreamsForCamerasResponse } from "./ListStreamsForCameras/res";

interface CITYVISUAL {
    /**
    * 调用DeleteResourceProfile删除指定的计算资源配置。
    */ DeleteResourceProfile(query: DeleteResourceProfileRequest): Promise<DeleteResourceProfileResponse>;
    /**
    * 调用ModifyWorkGroup修改接流工作组信息。
    */ ModifyWorkGroup(query: ModifyWorkGroupRequest): Promise<ModifyWorkGroupResponse>;
    /**
    * 调用ListComputeJobLogs获取计算日志名称列表。
    */ ListComputeJobLogs(query: ListComputeJobLogsRequest): Promise<ListComputeJobLogsResponse>;
    /**
    * 调用DeleteAlgoLib删除指定的算法库。
    */ DeleteAlgoLib(query: DeleteAlgoLibRequest): Promise<DeleteAlgoLibResponse>;
    /**
    * 调用DescribeJobGroups获取已创建的计算工作组信息。
    */ DescribeJobGroups(query: DescribeJobGroupsRequest): Promise<DescribeJobGroupsResponse>;
    /**
    * 调用DescribeCapabilities获取已创建的算法库能力集信息。
    */ DescribeCapabilities(query: DescribeCapabilitiesRequest): Promise<DescribeCapabilitiesResponse>;
    /**
    * 调用CreateCapability创建算法库能力集。
    */ CreateCapability(query: CreateCapabilityRequest): Promise<CreateCapabilityResponse>;
    /**
    * 调用ModifyCapability修改算法库能力集。
    */ ModifyCapability(query: ModifyCapabilityRequest): Promise<ModifyCapabilityResponse>;
    /**
    * 调用BatchModifyCameraStatus批量修改点位状态。
    */ BatchModifyCameraStatus(query: BatchModifyCameraStatusRequest): Promise<BatchModifyCameraStatusResponse>;
    /**
    * 调用AttachStream给指定的计算工作组绑定Stream。
    */ AttachStream(query: AttachStreamRequest): Promise<AttachStreamResponse>;
    /**
    * 调用CreateJobGroup创建计算工作组信息。
    */ CreateJobGroup(query: CreateJobGroupRequest): Promise<CreateJobGroupResponse>;
    /**
    * 调用CreateInstance创建一个实例。
    */ CreateInstance(query: CreateInstanceRequest): Promise<CreateInstanceResponse>;
    /**
    * 调用DeleteWorkGroup删除指定的接流工作组。
    */ DeleteWorkGroup(query: DeleteWorkGroupRequest): Promise<DeleteWorkGroupResponse>;
    /**
    * 调用GetComputeJobLog获取计算Job日志。
    */ GetComputeJobLog(query: GetComputeJobLogRequest): Promise<GetComputeJobLogResponse>;
    /**
    * 调用CreateResourceProfile创建计算资源配置信息。
    */ CreateResourceProfile(query: CreateResourceProfileRequest): Promise<CreateResourceProfileResponse>;
    /**
    * 调用DescribeStreams获取指定的计算工作组已绑定的视频流。
    */ DescribeStreams(query: DescribeStreamsRequest): Promise<DescribeStreamsResponse>;
    /**
    * 调用ModifyAlgoLib修改算法库信息。
    */ ModifyAlgoLib(query: ModifyAlgoLibRequest): Promise<ModifyAlgoLibResponse>;
    /**
    * 调用StopJobGroup停止指定的计算工作组。
    */ StopJobGroup(query: StopJobGroupRequest): Promise<StopJobGroupResponse>;
    /**
    * 调用StartJobGroup启动指定的计算工作组。
    */ StartJobGroup(query: StartJobGroupRequest): Promise<StartJobGroupResponse>;
    /**
    * 调用ModifyCamera修改视频点位信息。
    */ ModifyCamera(query: ModifyCameraRequest): Promise<ModifyCameraResponse>;
    /**
    * 调用DescribeInstances查询一个或多个实例的详细信息。
    */ DescribeInstances(query: DescribeInstancesRequest): Promise<DescribeInstancesResponse>;
    /**
    * 调用DescribeResourceProfiles获取已创建的计算资源配置信息。
    */ DescribeResourceProfiles(query: DescribeResourceProfilesRequest): Promise<DescribeResourceProfilesResponse>;
    /**
    * 调用CreateCamera创建视频点位信息。
    */ CreateCamera(query: CreateCameraRequest): Promise<CreateCameraResponse>;
    /**
    * 调用DeleteCapability删除指定的算法库能力集。
    */ DeleteCapability(query: DeleteCapabilityRequest): Promise<DeleteCapabilityResponse>;
    /**
    * 调用DescribeRegions查询您可以使用的阿里云地域。
    */ DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
    * 调用ModifyResourceProfile修改资源参数集。
    */ ModifyResourceProfile(query: ModifyResourceProfileRequest): Promise<ModifyResourceProfileResponse>;
    /**
    * 调用ModifyInstance修改实例。
    */ ModifyInstance(query: ModifyInstanceRequest): Promise<ModifyInstanceResponse>;
    /**
    * 调用ModifyJobGroup修改计算工作组信息。
    */ ModifyJobGroup(query: ModifyJobGroupRequest): Promise<ModifyJobGroupResponse>;
    /**
    * 调用DescribeProtocols获取已支持的工作组协议。
    */ DescribeProtocols(query: DescribeProtocolsRequest): Promise<DescribeProtocolsResponse>;
    /**
    * 调用DescribeCameras获取已创建的视频点位信息。
    */ DescribeCameras(query: DescribeCamerasRequest): Promise<DescribeCamerasResponse>;
    /**
    * 调用SearchImages搜索图片。
    */ SearchImages(query: SearchImagesRequest): Promise<SearchImagesResponse>;
    /**
    * 调用CreateAlgoLib创建算法库。
    */ CreateAlgoLib(query: CreateAlgoLibRequest): Promise<CreateAlgoLibResponse>;
    /**
    * 调用DetachStream给指定的计算工作组解绑视频流。
    */ DetachStream(query: DetachStreamRequest): Promise<DetachStreamResponse>;
    /**
    * 调用DescribeAlgoLibs获取已创建的算法库信息。
    */ DescribeAlgoLibs(query: DescribeAlgoLibsRequest): Promise<DescribeAlgoLibsResponse>;
    /**
    * 调用DeleteJobGroup删除指定的计算工作组。
    */ DeleteJobGroup(query: DeleteJobGroupRequest): Promise<DeleteJobGroupResponse>;
    /**
    * 调用DeleteInstance释放一台到期的预付费（包年包月）实例。
    */ DeleteInstance(query: DeleteInstanceRequest): Promise<DeleteInstanceResponse>;
    CreateWorkGroup(query: CreateWorkGroupRequest): Promise<CreateWorkGroupResponse>;
    DeleteCamera(query: DeleteCameraRequest): Promise<DeleteCameraResponse>;
    DescribeWorkGroups(query: DescribeWorkGroupsRequest): Promise<DescribeWorkGroupsResponse>;
    ListStreamsForCameras(query: ListStreamsForCamerasRequest): Promise<ListStreamsForCamerasResponse>;
}
export default CITYVISUAL;
