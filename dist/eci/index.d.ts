import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { CreateContainerGroupRequest } from "./CreateContainerGroup/req";
import { CreateContainerGroupResponse } from "./CreateContainerGroup/res";
import { DeleteContainerGroupRequest } from "./DeleteContainerGroup/req";
import { DeleteContainerGroupResponse } from "./DeleteContainerGroup/res";
import { UpdateContainerGroupRequest } from "./UpdateContainerGroup/req";
import { UpdateContainerGroupResponse } from "./UpdateContainerGroup/res";
import { DescribeContainerGroupsRequest } from "./DescribeContainerGroups/req";
import { DescribeContainerGroupsResponse } from "./DescribeContainerGroups/res";
import { RestartContainerGroupRequest } from "./RestartContainerGroup/req";
import { RestartContainerGroupResponse } from "./RestartContainerGroup/res";
import { DescribeContainerGroupEventsRequest } from "./DescribeContainerGroupEvents/req";
import { DescribeContainerGroupEventsResponse } from "./DescribeContainerGroupEvents/res";
import { ExecContainerCommandRequest } from "./ExecContainerCommand/req";
import { ExecContainerCommandResponse } from "./ExecContainerCommand/res";
import { DescribeContainerGroupStatusRequest } from "./DescribeContainerGroupStatus/req";
import { DescribeContainerGroupStatusResponse } from "./DescribeContainerGroupStatus/res";
import { ResizeContainerGroupVolumeRequest } from "./ResizeContainerGroupVolume/req";
import { ResizeContainerGroupVolumeResponse } from "./ResizeContainerGroupVolume/res";
import { CommitContainerRequest } from "./CommitContainer/req";
import { CommitContainerResponse } from "./CommitContainer/res";
import { DescribeCommitContainerTaskRequest } from "./DescribeCommitContainerTask/req";
import { DescribeCommitContainerTaskResponse } from "./DescribeCommitContainerTask/res";
import { CreateImageCacheRequest } from "./CreateImageCache/req";
import { CreateImageCacheResponse } from "./CreateImageCache/res";
import { DeleteImageCacheRequest } from "./DeleteImageCache/req";
import { DeleteImageCacheResponse } from "./DeleteImageCache/res";
import { UpdateImageCacheRequest } from "./UpdateImageCache/req";
import { UpdateImageCacheResponse } from "./UpdateImageCache/res";
import { DescribeImageCachesRequest } from "./DescribeImageCaches/req";
import { DescribeImageCachesResponse } from "./DescribeImageCaches/res";
import { CreateVirtualNodeRequest } from "./CreateVirtualNode/req";
import { CreateVirtualNodeResponse } from "./CreateVirtualNode/res";
import { DescribeVirtualNodesRequest } from "./DescribeVirtualNodes/req";
import { DescribeVirtualNodesResponse } from "./DescribeVirtualNodes/res";
import { DeleteVirtualNodeRequest } from "./DeleteVirtualNode/req";
import { DeleteVirtualNodeResponse } from "./DeleteVirtualNode/res";
import { UpdateVirtualNodeRequest } from "./UpdateVirtualNode/req";
import { UpdateVirtualNodeResponse } from "./UpdateVirtualNode/res";
import { DescribeContainerGroupMetricRequest } from "./DescribeContainerGroupMetric/req";
import { DescribeContainerGroupMetricResponse } from "./DescribeContainerGroupMetric/res";
import { DescribeContainerLogRequest } from "./DescribeContainerLog/req";
import { DescribeContainerLogResponse } from "./DescribeContainerLog/res";
import { DescribeMultiContainerGroupMetricRequest } from "./DescribeMultiContainerGroupMetric/req";
import { DescribeMultiContainerGroupMetricResponse } from "./DescribeMultiContainerGroupMetric/res";
import { CreateInstanceOpsTaskRequest } from "./CreateInstanceOpsTask/req";
import { CreateInstanceOpsTaskResponse } from "./CreateInstanceOpsTask/res";
import { DescribeInstanceOpsRecordsRequest } from "./DescribeInstanceOpsRecords/req";
import { DescribeInstanceOpsRecordsResponse } from "./DescribeInstanceOpsRecords/res";
import { ListUsageRequest } from "./ListUsage/req";
import { ListUsageResponse } from "./ListUsage/res";
import { DescribeAvailableResourceRequest } from "./DescribeAvailableResource/req";
import { DescribeAvailableResourceResponse } from "./DescribeAvailableResource/res";
import { DescribeContainerGroupPriceRequest } from "./DescribeContainerGroupPrice/req";
import { DescribeContainerGroupPriceResponse } from "./DescribeContainerGroupPrice/res";
import { DeleteDataCacheRequest } from "./DeleteDataCache/req";
import { DeleteDataCacheResponse } from "./DeleteDataCache/res";
import { DescribeDataCachesRequest } from "./DescribeDataCaches/req";
import { DescribeDataCachesResponse } from "./DescribeDataCaches/res";
import { CreateDataCacheRequest } from "./CreateDataCache/req";
import { CreateDataCacheResponse } from "./CreateDataCache/res";
import { UpdateDataCacheRequest } from "./UpdateDataCache/req";
import { UpdateDataCacheResponse } from "./UpdateDataCache/res";
import { CopyDataCacheRequest } from "./CopyDataCache/req";
import { CopyDataCacheResponse } from "./CopyDataCache/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";

interface ECI {
    /**
     * 查询弹性容器实例支持的地域和可用区信息。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 调用CreateContainerGroup创建一个ECI实例（即容器组）。
     */
    CreateContainerGroup(query: CreateContainerGroupRequest): Promise<CreateContainerGroupResponse>;
    /**
     * 调用DeleteContainerGroup删除一个ECI实例。
     */
    DeleteContainerGroup(query: DeleteContainerGroupRequest): Promise<DeleteContainerGroupResponse>;
    /**
     * 更新实例。
     */
    UpdateContainerGroup(query: UpdateContainerGroupRequest): Promise<UpdateContainerGroupResponse>;
    /**
     * 调用DescribeContainerGroups批量查询ECI实例的信息。
     */
    DescribeContainerGroups(query: DescribeContainerGroupsRequest): Promise<DescribeContainerGroupsResponse>;
    /**
     * 调用RestartContainerGroup重启一个ECI实例。
     */
    RestartContainerGroup(query: RestartContainerGroupRequest): Promise<RestartContainerGroupResponse>;
    /**
     * 调用DescribeContainerGroupEvents批量查询ECI实例的事件信息。
     */
    DescribeContainerGroupEvents(query: DescribeContainerGroupEventsRequest): Promise<DescribeContainerGroupEventsResponse>;
    /**
     * 调用ExecContainerCommand在容器内部执行命令。
     */
    ExecContainerCommand(query: ExecContainerCommandRequest): Promise<ExecContainerCommandResponse>;
    /**
     * 调用DescribeContainerGroupStatus批量查询ECI实例的状态。
     */
    DescribeContainerGroupStatus(query: DescribeContainerGroupStatusRequest): Promise<DescribeContainerGroupStatusResponse>;
    /**
     * 扩容指定ECI实例的数据卷。
     */
    ResizeContainerGroupVolume(query: ResizeContainerGroupVolumeRequest): Promise<ResizeContainerGroupVolumeResponse>;
    /**
     * 调用CommitContainer接口创建异步任务，将ECI实例中的指定容器保存为镜像，并推送至阿里云ACR的镜像仓库中。
     */
    CommitContainer(query: CommitContainerRequest): Promise<CommitContainerResponse>;
    /**
     * 调用DescribeCommitContainerTask查询CommitContainer任务的详情。
     */
    DescribeCommitContainerTask(query: DescribeCommitContainerTaskRequest): Promise<DescribeCommitContainerTaskResponse>;
    /**
     * 调用CreateImageCache接口创建一个镜像缓存，以便后续创建ECI实例可以加速镜像拉取，减少实例启动耗时。
     */
    CreateImageCache(query: CreateImageCacheRequest): Promise<CreateImageCacheResponse>;
    /**
     * 调用DeleteImageCache删除一个镜像缓存。
     */
    DeleteImageCache(query: DeleteImageCacheRequest): Promise<DeleteImageCacheResponse>;
    /**
     * 调用UpdateImageCache更新一个镜像缓存。
     */
    UpdateImageCache(query: UpdateImageCacheRequest): Promise<UpdateImageCacheResponse>;
    /**
     * 调用DescribeImageCaches批量查询镜像缓存信息。
     */
    DescribeImageCaches(query: DescribeImageCachesRequest): Promise<DescribeImageCachesResponse>;
    /**
     * 调用CreateVirtualNode创建一个虚拟节点（VNode），用于对接自建Kubernetes集群，使其可以扩展资源到ECI。
     */
    CreateVirtualNode(query: CreateVirtualNodeRequest): Promise<CreateVirtualNodeResponse>;
    /**
     * 调用DescribeVirtualNodes批量查询虚拟节点的详细信息。
     */
    DescribeVirtualNodes(query: DescribeVirtualNodesRequest): Promise<DescribeVirtualNodesResponse>;
    /**
     * 调用DeleteVirtualNode删除一个虚拟节点。
     */
    DeleteVirtualNode(query: DeleteVirtualNodeRequest): Promise<DeleteVirtualNodeResponse>;
    /**
     * 调用UpdateVirtualNode更新一个虚拟节点的属性。
     */
    UpdateVirtualNode(query: UpdateVirtualNodeRequest): Promise<UpdateVirtualNodeResponse>;
    /**
     * 调用DescribeContainerGroupMetric查询一个ECI实例的监控数据。
     */
    DescribeContainerGroupMetric(query: DescribeContainerGroupMetricRequest): Promise<DescribeContainerGroupMetricResponse>;
    /**
     * 调用DescribeContainerLog获取容器组内某个容器的日志信息。
     */
    DescribeContainerLog(query: DescribeContainerLogRequest): Promise<DescribeContainerLogResponse>;
    /**
     * 调用DescribeContainerGroupMetric查询一个ECI实例的监控数据。
     */
    DescribeMultiContainerGroupMetric(query: DescribeMultiContainerGroupMetricRequest): Promise<DescribeMultiContainerGroupMetricResponse>;
    /**
     * 调用CreateInstanceOpsTask创建一个运维任务。
     */
    CreateInstanceOpsTask(query: CreateInstanceOpsTaskRequest): Promise<CreateInstanceOpsTaskResponse>;
    /**
     * 调用DescribeInstanceOpsRecords查询运维任务信息。
     */
    DescribeInstanceOpsRecords(query: DescribeInstanceOpsRecordsRequest): Promise<DescribeInstanceOpsRecordsResponse>;
    /**
     * 调用ListUsage查询指定地域的权益配额，包括已使用量和使用上限。
     */
    ListUsage(query: ListUsageRequest): Promise<ListUsageResponse>;
    /**
     * 调用DescribeAvailableResource查询指定地域和可用区下可售ECS实例规格族。
     */
    DescribeAvailableResource(query: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse>;
    /**
     * 调用DescribeContainerGroupPrice查询实例的价格。
     */
    DescribeContainerGroupPrice(query: DescribeContainerGroupPriceRequest): Promise<DescribeContainerGroupPriceResponse>;
    /**
     * 删除一个数据缓存。
     */
    DeleteDataCache(query: DeleteDataCacheRequest): Promise<DeleteDataCacheResponse>;
    /**
     * 查询数据缓存信息。
     */
    DescribeDataCaches(query: DescribeDataCachesRequest): Promise<DescribeDataCachesResponse>;
    /**
     * 创建一个数据缓存。
     */
    CreateDataCache(query: CreateDataCacheRequest): Promise<CreateDataCacheResponse>;
    /**
     * 更新一个数据缓存。
     */
    UpdateDataCache(query: UpdateDataCacheRequest): Promise<UpdateDataCacheResponse>;
    /**
     * 将数据缓存从一个地域拷贝到另一个地域。
     */
    CopyDataCache(query: CopyDataCacheRequest): Promise<CopyDataCacheResponse>;
    /**
     * 调用ListTagResources查询ECI资源绑定的标签信息。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 调用UntagResources为指定的ECI资源解绑标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 调用TagResources为指定的ECI资源绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
}
export default ECI;
