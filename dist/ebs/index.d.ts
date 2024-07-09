import { ReprotectDiskReplicaPairRequest } from "./ReprotectDiskReplicaPair/req";
import { ReprotectDiskReplicaPairResponse } from "./ReprotectDiskReplicaPair/res";
import { ModifyDiskReplicaPairRequest } from "./ModifyDiskReplicaPair/req";
import { ModifyDiskReplicaPairResponse } from "./ModifyDiskReplicaPair/res";
import { FailoverDiskReplicaPairRequest } from "./FailoverDiskReplicaPair/req";
import { FailoverDiskReplicaPairResponse } from "./FailoverDiskReplicaPair/res";
import { DescribeDiskReplicaPairsRequest } from "./DescribeDiskReplicaPairs/req";
import { DescribeDiskReplicaPairsResponse } from "./DescribeDiskReplicaPairs/res";
import { DeleteDiskReplicaPairRequest } from "./DeleteDiskReplicaPair/req";
import { DeleteDiskReplicaPairResponse } from "./DeleteDiskReplicaPair/res";
import { StartDiskReplicaPairRequest } from "./StartDiskReplicaPair/req";
import { StartDiskReplicaPairResponse } from "./StartDiskReplicaPair/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { StopDiskReplicaPairRequest } from "./StopDiskReplicaPair/req";
import { StopDiskReplicaPairResponse } from "./StopDiskReplicaPair/res";
import { CreateDiskReplicaPairRequest } from "./CreateDiskReplicaPair/req";
import { CreateDiskReplicaPairResponse } from "./CreateDiskReplicaPair/res";
import { AddDiskReplicaPairRequest } from "./AddDiskReplicaPair/req";
import { AddDiskReplicaPairResponse } from "./AddDiskReplicaPair/res";
import { CreateDedicatedBlockStorageClusterRequest } from "./CreateDedicatedBlockStorageCluster/req";
import { CreateDedicatedBlockStorageClusterResponse } from "./CreateDedicatedBlockStorageCluster/res";
import { CreateDiskReplicaGroupRequest } from "./CreateDiskReplicaGroup/req";
import { CreateDiskReplicaGroupResponse } from "./CreateDiskReplicaGroup/res";
import { DeleteDiskReplicaGroupRequest } from "./DeleteDiskReplicaGroup/req";
import { DeleteDiskReplicaGroupResponse } from "./DeleteDiskReplicaGroup/res";
import { DescribeDedicatedBlockStorageClustersRequest } from "./DescribeDedicatedBlockStorageClusters/req";
import { DescribeDedicatedBlockStorageClustersResponse } from "./DescribeDedicatedBlockStorageClusters/res";
import { DescribeDiskEventsRequest } from "./DescribeDiskEvents/req";
import { DescribeDiskEventsResponse } from "./DescribeDiskEvents/res";
import { DescribeDiskReplicaGroupsRequest } from "./DescribeDiskReplicaGroups/req";
import { DescribeDiskReplicaGroupsResponse } from "./DescribeDiskReplicaGroups/res";
import { DescribeDisksRequest } from "./DescribeDisks/req";
import { DescribeDisksResponse } from "./DescribeDisks/res";
import { FailoverDiskReplicaGroupRequest } from "./FailoverDiskReplicaGroup/req";
import { FailoverDiskReplicaGroupResponse } from "./FailoverDiskReplicaGroup/res";
import { ModifyDiskReplicaGroupRequest } from "./ModifyDiskReplicaGroup/req";
import { ModifyDiskReplicaGroupResponse } from "./ModifyDiskReplicaGroup/res";
import { RemoveDiskReplicaPairRequest } from "./RemoveDiskReplicaPair/req";
import { RemoveDiskReplicaPairResponse } from "./RemoveDiskReplicaPair/res";
import { ReprotectDiskReplicaGroupRequest } from "./ReprotectDiskReplicaGroup/req";
import { ReprotectDiskReplicaGroupResponse } from "./ReprotectDiskReplicaGroup/res";
import { StartDiskReplicaGroupRequest } from "./StartDiskReplicaGroup/req";
import { StartDiskReplicaGroupResponse } from "./StartDiskReplicaGroup/res";
import { StopDiskReplicaGroupRequest } from "./StopDiskReplicaGroup/req";
import { StopDiskReplicaGroupResponse } from "./StopDiskReplicaGroup/res";
import { DescribeDedicatedBlockStorageClusterDisksRequest } from "./DescribeDedicatedBlockStorageClusterDisks/req";
import { DescribeDedicatedBlockStorageClusterDisksResponse } from "./DescribeDedicatedBlockStorageClusterDisks/res";
import { DescribeDiskReplicaPairProgressRequest } from "./DescribeDiskReplicaPairProgress/req";
import { DescribeDiskReplicaPairProgressResponse } from "./DescribeDiskReplicaPairProgress/res";
import { ApplyLensServiceRequest } from "./ApplyLensService/req";
import { ApplyLensServiceResponse } from "./ApplyLensService/res";
import { CancelLensServiceRequest } from "./CancelLensService/req";
import { CancelLensServiceResponse } from "./CancelLensService/res";
import { DescribeDiskMonitorDataRequest } from "./DescribeDiskMonitorData/req";
import { DescribeDiskMonitorDataResponse } from "./DescribeDiskMonitorData/res";
import { DescribeLensServiceStatusRequest } from "./DescribeLensServiceStatus/req";
import { DescribeLensServiceStatusResponse } from "./DescribeLensServiceStatus/res";
import { ModifyDedicatedBlockStorageClusterAttributeRequest } from "./ModifyDedicatedBlockStorageClusterAttribute/req";
import { ModifyDedicatedBlockStorageClusterAttributeResponse } from "./ModifyDedicatedBlockStorageClusterAttribute/res";
import { DescribeDiskMonitorDataListRequest } from "./DescribeDiskMonitorDataList/req";
import { DescribeDiskMonitorDataListResponse } from "./DescribeDiskMonitorDataList/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { QueryDedicatedBlockStorageClusterInventoryDataRequest } from "./QueryDedicatedBlockStorageClusterInventoryData/req";
import { QueryDedicatedBlockStorageClusterInventoryDataResponse } from "./QueryDedicatedBlockStorageClusterInventoryData/res";
import { ChangeResourceGroupRequest } from "./ChangeResourceGroup/req";
import { ChangeResourceGroupResponse } from "./ChangeResourceGroup/res";
import { DescribeEnterpriseSnapshotPolicyRequest } from "./DescribeEnterpriseSnapshotPolicy/req";
import { DescribeEnterpriseSnapshotPolicyResponse } from "./DescribeEnterpriseSnapshotPolicy/res";
import { DeleteEnterpriseSnapshotPolicyRequest } from "./DeleteEnterpriseSnapshotPolicy/req";
import { DeleteEnterpriseSnapshotPolicyResponse } from "./DeleteEnterpriseSnapshotPolicy/res";
import { UnbindEnterpriseSnapshotPolicyRequest } from "./UnbindEnterpriseSnapshotPolicy/req";
import { UnbindEnterpriseSnapshotPolicyResponse } from "./UnbindEnterpriseSnapshotPolicy/res";
import { CreateEnterpriseSnapshotPolicyRequest } from "./CreateEnterpriseSnapshotPolicy/req";
import { CreateEnterpriseSnapshotPolicyResponse } from "./CreateEnterpriseSnapshotPolicy/res";
import { BindEnterpriseSnapshotPolicyRequest } from "./BindEnterpriseSnapshotPolicy/req";
import { BindEnterpriseSnapshotPolicyResponse } from "./BindEnterpriseSnapshotPolicy/res";
import { UpdateEnterpriseSnapshotPolicyRequest } from "./UpdateEnterpriseSnapshotPolicy/req";
import { UpdateEnterpriseSnapshotPolicyResponse } from "./UpdateEnterpriseSnapshotPolicy/res";
import { UpdateSolutionInstanceAttributeRequest } from "./UpdateSolutionInstanceAttribute/req";
import { UpdateSolutionInstanceAttributeResponse } from "./UpdateSolutionInstanceAttribute/res";
import { GetDiskRequest } from "./GetDisk/req";
import { GetDiskResponse } from "./GetDisk/res";
import { DeleteDiskRequest } from "./DeleteDisk/req";
import { DeleteDiskResponse } from "./DeleteDisk/res";
import { DescribeMetricDataRequest } from "./DescribeMetricData/req";
import { DescribeMetricDataResponse } from "./DescribeMetricData/res";
import { DescribeSolutionInstanceConfigurationRequest } from "./DescribeSolutionInstanceConfiguration/req";
import { DescribeSolutionInstanceConfigurationResponse } from "./DescribeSolutionInstanceConfiguration/res";
import { DescribeEventsRequest } from "./DescribeEvents/req";
import { DescribeEventsResponse } from "./DescribeEvents/res";
import { StartPairDrillRequest } from "./StartPairDrill/req";
import { StartPairDrillResponse } from "./StartPairDrill/res";
import { ClearReplicaGroupDrillRequest } from "./ClearReplicaGroupDrill/req";
import { ClearReplicaGroupDrillResponse } from "./ClearReplicaGroupDrill/res";
import { ClearPairDrillRequest } from "./ClearPairDrill/req";
import { ClearPairDrillResponse } from "./ClearPairDrill/res";
import { DescribeReplicaGroupDrillsRequest } from "./DescribeReplicaGroupDrills/req";
import { DescribeReplicaGroupDrillsResponse } from "./DescribeReplicaGroupDrills/res";
import { StartReplicaGroupDrillRequest } from "./StartReplicaGroupDrill/req";
import { StartReplicaGroupDrillResponse } from "./StartReplicaGroupDrill/res";
import { DescribePairDrillsRequest } from "./DescribePairDrills/req";
import { DescribePairDrillsResponse } from "./DescribePairDrills/res";
import { QueryDedicatedBlockStorageClusterDiskThroughputStatusRequest } from "./QueryDedicatedBlockStorageClusterDiskThroughputStatus/req";
import { QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse } from "./QueryDedicatedBlockStorageClusterDiskThroughputStatus/res";
import { SetDedicatedBlockStorageClusterDiskThroughputRequest } from "./SetDedicatedBlockStorageClusterDiskThroughput/req";
import { SetDedicatedBlockStorageClusterDiskThroughputResponse } from "./SetDedicatedBlockStorageClusterDiskThroughput/res";
import { DescribeLensMonitorDisksRequest } from "./DescribeLensMonitorDisks/req";
import { DescribeLensMonitorDisksResponse } from "./DescribeLensMonitorDisks/res";

interface EBS {
    /**
     * 启用异步复制关系的反向复制功能。
     */
    ReprotectDiskReplicaPair(query: ReprotectDiskReplicaPairRequest): Promise<ReprotectDiskReplicaPairResponse>;
    /**
     * 修改一个云盘异步复制关系。
     */
    ModifyDiskReplicaPair(query: ModifyDiskReplicaPairRequest): Promise<ModifyDiskReplicaPairResponse>;
    /**
     * 启用异步复制关系的故障切换功能。
     */
    FailoverDiskReplicaPair(query: FailoverDiskReplicaPairRequest): Promise<FailoverDiskReplicaPairResponse>;
    /**
     * 查询指定地域下，一个或多个异步复制关系的信息。
     */
    DescribeDiskReplicaPairs(query: DescribeDiskReplicaPairsRequest): Promise<DescribeDiskReplicaPairsResponse>;
    /**
     * 删除一个异步复制关系。
     */
    DeleteDiskReplicaPair(query: DeleteDiskReplicaPairRequest): Promise<DeleteDiskReplicaPairResponse>;
    /**
     * 为指定的异步复制关系激活异步复制功能。
     */
    StartDiskReplicaPair(query: StartDiskReplicaPairRequest): Promise<StartDiskReplicaPairResponse>;
    /**
     * 查询块存储EBS相关功能异步复制、数据洞察、专属块存储集群支持的地域信息。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 为指定的异步复制关系停止异步复制功能。
     */
    StopDiskReplicaPair(query: StopDiskReplicaPairRequest): Promise<StopDiskReplicaPairResponse>;
    /**
     * 创建一个云盘异步复制关系。
     */
    CreateDiskReplicaPair(query: CreateDiskReplicaPairRequest): Promise<CreateDiskReplicaPairResponse>;
    /**
     * 添加复制对到一致性复制组。
     */
    AddDiskReplicaPair(query: AddDiskReplicaPairRequest): Promise<AddDiskReplicaPairResponse>;
    /**
     * 调用CreateDedicatedBlockStorageCluster创建专属块存储集群。
     */
    CreateDedicatedBlockStorageCluster(query: CreateDedicatedBlockStorageClusterRequest): Promise<CreateDedicatedBlockStorageClusterResponse>;
    /**
     * 创建一个一致性复制组。
     */
    CreateDiskReplicaGroup(query: CreateDiskReplicaGroupRequest): Promise<CreateDiskReplicaGroupResponse>;
    /**
     * 删除一致性复制组。
     */
    DeleteDiskReplicaGroup(query: DeleteDiskReplicaGroupRequest): Promise<DeleteDiskReplicaGroupResponse>;
    /**
     * 查询已创建的专属块存储集群列表。
     */
    DescribeDedicatedBlockStorageClusters(query: DescribeDedicatedBlockStorageClustersRequest): Promise<DescribeDedicatedBlockStorageClustersResponse>;
    /**
     * 查询云盘风险事件。API正在下线中，请切换至新API：DescribeEvents。
     */
    DescribeDiskEvents(query: DescribeDiskEventsRequest): Promise<DescribeDiskEventsResponse>;
    /**
     * 查询在指定地域下，一个或多个一致性复制组的信息。
     */
    DescribeDiskReplicaGroups(query: DescribeDiskReplicaGroupsRequest): Promise<DescribeDiskReplicaGroupsResponse>;
    DescribeDisks(query: DescribeDisksRequest): Promise<DescribeDisksResponse>;
    /**
     * 启用一致性复制组中复制对的故障切换功能。当一致性复制组中某些复制对的主盘出现故障时，可以调用该接口恢复从盘的读写权限。
     */
    FailoverDiskReplicaGroup(query: FailoverDiskReplicaGroupRequest): Promise<FailoverDiskReplicaGroupResponse>;
    /**
     * 修改一致性复制组的名称、描述信息或者RPO。
     */
    ModifyDiskReplicaGroup(query: ModifyDiskReplicaGroupRequest): Promise<ModifyDiskReplicaGroupResponse>;
    /**
     * 移除一致性复制组中的复制对。移除复制对只是解除了复制对和一致性复制组的绑定关系，不会删除复制对。
     */
    RemoveDiskReplicaPair(query: RemoveDiskReplicaPairRequest): Promise<RemoveDiskReplicaPairResponse>;
    /**
     * 启用一致性复制组中复制对的反向复制功能。启用反向复制功能后，可以将原灾备站点的云盘数据复制到原生产站点的云盘当中。反向复制数据时，一致性复制组中原有的站点信息不变，主从关系颠倒。
     */
    ReprotectDiskReplicaGroup(query: ReprotectDiskReplicaGroupRequest): Promise<ReprotectDiskReplicaGroupResponse>;
    /**
     * 启动一致性复制组中复制对的异步复制功能。首次同步时，系统会先进行一次全量同步，之后会按照保证RPO（Recovery Point Object）的时间周期内进行增量同步。
     */
    StartDiskReplicaGroup(query: StartDiskReplicaGroupRequest): Promise<StartDiskReplicaGroupResponse>;
    /**
     * 停止一致性复制组中复制对的异步复制功能。
     */
    StopDiskReplicaGroup(query: StopDiskReplicaGroupRequest): Promise<StopDiskReplicaGroupResponse>;
    /**
     * 查询一块或多块您已经创建的专属块存储集群的云盘信息。
     */
    DescribeDedicatedBlockStorageClusterDisks(query: DescribeDedicatedBlockStorageClusterDisksRequest): Promise<DescribeDedicatedBlockStorageClusterDisksResponse>;
    /**
     * 查询复制对的同步进度。
     */
    DescribeDiskReplicaPairProgress(query: DescribeDiskReplicaPairProgressRequest): Promise<DescribeDiskReplicaPairProgressResponse>;
    /**
     * 开通块存储数据洞察（CloudLens for EBS）。
     */
    ApplyLensService(query: ApplyLensServiceRequest): Promise<ApplyLensServiceResponse>;
    /**
     * 取消块存储数据洞察（CloudLens for EBS）。
     */
    CancelLensService(query: CancelLensServiceRequest): Promise<CancelLensServiceResponse>;
    /**
     * 查询单个云盘的秒级监控数据。
     */
    DescribeDiskMonitorData(query: DescribeDiskMonitorDataRequest): Promise<DescribeDiskMonitorDataResponse>;
    /**
     * 查询用户开通ebs数据洞察服务状态。
     */
    DescribeLensServiceStatus(query: DescribeLensServiceStatusRequest): Promise<DescribeLensServiceStatusResponse>;
    /**
     * 修改专属块存储集群的信息。
     */
    ModifyDedicatedBlockStorageClusterAttribute(query: ModifyDedicatedBlockStorageClusterAttributeRequest): Promise<ModifyDedicatedBlockStorageClusterAttributeResponse>;
    /**
     * 查询多个云盘的秒级监控数据。当前仅支持查询多个AutoPL云盘Burst数据，数据以小时聚合。
     */
    DescribeDiskMonitorDataList(query: DescribeDiskMonitorDataListRequest): Promise<DescribeDiskMonitorDataListResponse>;
    /**
     * 为指定的EBS资源统一解绑标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 为指定的EBS资源统一绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 查询一个或多个EBS资源已经绑定的标签信息，或查询指定的非默认资源组内的资源ID及标签信息。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 调用QueryDedicatedBlockStorageClusterInventoryData查询指定时间范围下，专属块存储集群容量趋势数据，包括可用容量和总容量。
     */
    QueryDedicatedBlockStorageClusterInventoryData(query: QueryDedicatedBlockStorageClusterInventoryDataRequest): Promise<QueryDedicatedBlockStorageClusterInventoryDataResponse>;
    /**
     * 修改EBS资源所在资源组。
     */
    ChangeResourceGroup(query: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse>;
    /**
     * 调用DescribeEnterpriseSnapshotPolicy查找企业级快照策略。
     */
    DescribeEnterpriseSnapshotPolicy(query: DescribeEnterpriseSnapshotPolicyRequest): Promise<DescribeEnterpriseSnapshotPolicyResponse>;
    /**
     * 调用DeleteEnterpriseSnapshotPolicy删除企业级快照策略。
     */
    DeleteEnterpriseSnapshotPolicy(query: DeleteEnterpriseSnapshotPolicyRequest): Promise<DeleteEnterpriseSnapshotPolicyResponse>;
    /**
     * 调用UnbindEnterpriseSnapshotPolicy为云盘解除企业级快照策略绑定。
     */
    UnbindEnterpriseSnapshotPolicy(query: UnbindEnterpriseSnapshotPolicyRequest): Promise<UnbindEnterpriseSnapshotPolicyResponse>;
    /**
     * 调用CreateEnterpriseSnapshotPolicy创建企业级快照策略。
     */
    CreateEnterpriseSnapshotPolicy(query: CreateEnterpriseSnapshotPolicyRequest): Promise<CreateEnterpriseSnapshotPolicyResponse>;
    /**
     * 调用BindEnterpriseSnapshotPolicy绑定云盘到企业级快照策略。
     */
    BindEnterpriseSnapshotPolicy(query: BindEnterpriseSnapshotPolicyRequest): Promise<BindEnterpriseSnapshotPolicyResponse>;
    /**
     * 调用UpdateEnterpriseSnapshotPolicy修改企业级快照策略配置。
     */
    UpdateEnterpriseSnapshotPolicy(query: UpdateEnterpriseSnapshotPolicyRequest): Promise<UpdateEnterpriseSnapshotPolicyResponse>;
    /**
     * 更新解决方案实例属性。
     */
    UpdateSolutionInstanceAttribute(query: UpdateSolutionInstanceAttributeRequest): Promise<UpdateSolutionInstanceAttributeResponse>;
    GetDisk(query: GetDiskRequest): Promise<GetDiskResponse>;
    DeleteDisk(query: DeleteDiskRequest): Promise<DeleteDiskResponse>;
    /**
     * 查询资源监控指标。
     */
    DescribeMetricData(query: DescribeMetricDataRequest): Promise<DescribeMetricDataResponse>;
    /**
     * 查询解决方案默认配置。
     */
    DescribeSolutionInstanceConfiguration(query: DescribeSolutionInstanceConfigurationRequest): Promise<DescribeSolutionInstanceConfigurationResponse>;
    /**
     * 查询云盘风险事件。
     */
    DescribeEvents(query: DescribeEventsRequest): Promise<DescribeEventsResponse>;
    /**
     * 您可以通过演练切换功能确保复制流程持续运行，同时将从盘最近恢复点的数据克隆至一块新的云盘，定期验证容灾站点应用的完整性和正确性。
     */
    StartPairDrill(query: StartPairDrillRequest): Promise<StartPairDrillResponse>;
    /**
     * 该接口可以清理之前复制组从盘启动的容灾演练，并尝试删除自动创建出来的演练盘。
     */
    ClearReplicaGroupDrill(query: ClearReplicaGroupDrillRequest): Promise<ClearReplicaGroupDrillResponse>;
    /**
     * 该接口可以清理之前复制对从盘启动的容灾演练，并尝试删除自动创建出来的演练盘。
     */
    ClearPairDrill(query: ClearPairDrillRequest): Promise<ClearPairDrillResponse>;
    /**
     * 该接口用于查询当前地域的盘作为复制组从端时，曾经对复制组所启动的容灾演练。
     */
    DescribeReplicaGroupDrills(query: DescribeReplicaGroupDrillsRequest): Promise<DescribeReplicaGroupDrillsResponse>;
    /**
     * 您可以通过演练切换功能确保复制流程持续运行，同时将从盘最近恢复点的数据克隆至一块新的云盘，定期验证容灾站点应用的完整性和正确性。
     */
    StartReplicaGroupDrill(query: StartReplicaGroupDrillRequest): Promise<StartReplicaGroupDrillResponse>;
    /**
     * 该接口用于查询当前地域的盘作为复制对从端时，曾经对复制对所启动的容灾演练。
     */
    DescribePairDrills(query: DescribePairDrillsRequest): Promise<DescribePairDrillsResponse>;
    /**
     * 查询通过SetDedicatedBlockStorageClusterDiskThroughput API设置的专用块存储集群磁盘的吞吐量状态。
     */
    QueryDedicatedBlockStorageClusterDiskThroughputStatus(query: QueryDedicatedBlockStorageClusterDiskThroughputStatusRequest): Promise<QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse>;
    /**
     * 弹性型专属存储集群内，方便您实现指定云盘目标的bps值的功能；只需要设置云盘ID和目标吞吐，简化您设置性能控制、修改预配置、调节云盘burst的步骤。
     */
    SetDedicatedBlockStorageClusterDiskThroughput(query: SetDedicatedBlockStorageClusterDiskThroughputRequest): Promise<SetDedicatedBlockStorageClusterDiskThroughputResponse>;
    /**
     * 查询一块或多块您已经创建的块存储云盘。
     */
    DescribeLensMonitorDisks(query: DescribeLensMonitorDisksRequest): Promise<DescribeLensMonitorDisksResponse>;
}
export default EBS;
