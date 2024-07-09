import { CreateClusterRequest } from "./CreateCluster/req";
import { CreateClusterResponse } from "./CreateCluster/res";
import { CreateDataCenterRequest } from "./CreateDataCenter/req";
import { CreateDataCenterResponse } from "./CreateDataCenter/res";
import { DeleteClusterRequest } from "./DeleteCluster/req";
import { DeleteClusterResponse } from "./DeleteCluster/res";
import { DescribeClusterRequest } from "./DescribeCluster/req";
import { DescribeClusterResponse } from "./DescribeCluster/res";
import { DescribeClustersRequest } from "./DescribeClusters/req";
import { DescribeClustersResponse } from "./DescribeClusters/res";
import { DescribeClusterStatusRequest } from "./DescribeClusterStatus/req";
import { DescribeClusterStatusResponse } from "./DescribeClusterStatus/res";
import { DescribeDeletedClustersRequest } from "./DescribeDeletedClusters/req";
import { DescribeDeletedClustersResponse } from "./DescribeDeletedClusters/res";
import { DescribeDataCenterRequest } from "./DescribeDataCenter/req";
import { DescribeDataCenterResponse } from "./DescribeDataCenter/res";
import { DescribeInstanceTypeRequest } from "./DescribeInstanceType/req";
import { DescribeInstanceTypeResponse } from "./DescribeInstanceType/res";
import { ModifyClusterRequest } from "./ModifyCluster/req";
import { ModifyClusterResponse } from "./ModifyCluster/res";
import { ModifyInstanceMaintainTimeRequest } from "./ModifyInstanceMaintainTime/req";
import { ModifyInstanceMaintainTimeResponse } from "./ModifyInstanceMaintainTime/res";
import { ModifyInstanceTypeRequest } from "./ModifyInstanceType/req";
import { ModifyInstanceTypeResponse } from "./ModifyInstanceType/res";
import { PurgeClusterRequest } from "./PurgeCluster/req";
import { PurgeClusterResponse } from "./PurgeCluster/res";
import { RebootClusterRequest } from "./RebootCluster/req";
import { RebootClusterResponse } from "./RebootCluster/res";
import { ResizeDiskSizeRequest } from "./ResizeDiskSize/req";
import { ResizeDiskSizeResponse } from "./ResizeDiskSize/res";
import { ResizeNodeCountRequest } from "./ResizeNodeCount/req";
import { ResizeNodeCountResponse } from "./ResizeNodeCount/res";
import { UpgradeClusterVersionRequest } from "./UpgradeClusterVersion/req";
import { UpgradeClusterVersionResponse } from "./UpgradeClusterVersion/res";
import { ModifyIpWhitelistRequest } from "./ModifyIpWhitelist/req";
import { ModifyIpWhitelistResponse } from "./ModifyIpWhitelist/res";
import { DescribeIpWhitelistRequest } from "./DescribeIpWhitelist/req";
import { DescribeIpWhitelistResponse } from "./DescribeIpWhitelist/res";
import { DescribeIpWhitelistGroupsRequest } from "./DescribeIpWhitelistGroups/req";
import { DescribeIpWhitelistGroupsResponse } from "./DescribeIpWhitelistGroups/res";
import { ModifyIpWhitelistGroupRequest } from "./ModifyIpWhitelistGroup/req";
import { ModifyIpWhitelistGroupResponse } from "./ModifyIpWhitelistGroup/res";
import { DescribeSecurityGroupsRequest } from "./DescribeSecurityGroups/req";
import { DescribeSecurityGroupsResponse } from "./DescribeSecurityGroups/res";
import { ModifySecurityGroupsRequest } from "./ModifySecurityGroups/req";
import { ModifySecurityGroupsResponse } from "./ModifySecurityGroups/res";
import { DescribeAccountsRequest } from "./DescribeAccounts/req";
import { DescribeAccountsResponse } from "./DescribeAccounts/res";
import { ModifyAccountPasswordRequest } from "./ModifyAccountPassword/req";
import { ModifyAccountPasswordResponse } from "./ModifyAccountPassword/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DeleteDataCenterRequest } from "./DeleteDataCenter/req";
import { DeleteDataCenterResponse } from "./DeleteDataCenter/res";
import { ModifyDataCenterRequest } from "./ModifyDataCenter/req";
import { ModifyDataCenterResponse } from "./ModifyDataCenter/res";
import { DescribeDataCentersRequest } from "./DescribeDataCenters/req";
import { DescribeDataCentersResponse } from "./DescribeDataCenters/res";
import { DescribeBackupRequest } from "./DescribeBackup/req";
import { DescribeBackupResponse } from "./DescribeBackup/res";
import { DeleteBackupPlanRequest } from "./DeleteBackupPlan/req";
import { DeleteBackupPlanResponse } from "./DeleteBackupPlan/res";
import { CreateBackupPlanRequest } from "./CreateBackupPlan/req";
import { CreateBackupPlanResponse } from "./CreateBackupPlan/res";
import { DescribeBackupPlanRequest } from "./DescribeBackupPlan/req";
import { DescribeBackupPlanResponse } from "./DescribeBackupPlan/res";
import { DescribeBackupsRequest } from "./DescribeBackups/req";
import { DescribeBackupsResponse } from "./DescribeBackups/res";
import { ModifyBackupPlanRequest } from "./ModifyBackupPlan/req";
import { ModifyBackupPlanResponse } from "./ModifyBackupPlan/res";
import { DescribeBackupPlansRequest } from "./DescribeBackupPlans/req";
import { DescribeBackupPlansResponse } from "./DescribeBackupPlans/res";
import { AllocatePublicContactPointsRequest } from "./AllocatePublicContactPoints/req";
import { AllocatePublicContactPointsResponse } from "./AllocatePublicContactPoints/res";
import { DescribeContactPointsRequest } from "./DescribeContactPoints/req";
import { DescribeContactPointsResponse } from "./DescribeContactPoints/res";
import { ReleasePublicContactPointsRequest } from "./ReleasePublicContactPoints/req";
import { ReleasePublicContactPointsResponse } from "./ReleasePublicContactPoints/res";
import { DescribeNodeToolExecutionHistoryRequest } from "./DescribeNodeToolExecutionHistory/req";
import { DescribeNodeToolExecutionHistoryResponse } from "./DescribeNodeToolExecutionHistory/res";
import { DescribeNodeToolExecutionHistoriesRequest } from "./DescribeNodeToolExecutionHistories/req";
import { DescribeNodeToolExecutionHistoriesResponse } from "./DescribeNodeToolExecutionHistories/res";
import { ExecuteNodeToolRequest } from "./ExecuteNodeTool/req";
import { ExecuteNodeToolResponse } from "./ExecuteNodeTool/res";
import { DeleteNodeToolExecutionHistoryRequest } from "./DeleteNodeToolExecutionHistory/req";
import { DeleteNodeToolExecutionHistoryResponse } from "./DeleteNodeToolExecutionHistory/res";
import { DescribeParameterModificationHistoriesRequest } from "./DescribeParameterModificationHistories/req";
import { DescribeParameterModificationHistoriesResponse } from "./DescribeParameterModificationHistories/res";
import { ModifyParameterRequest } from "./ModifyParameter/req";
import { ModifyParameterResponse } from "./ModifyParameter/res";
import { DescribeParametersRequest } from "./DescribeParameters/req";
import { DescribeParametersResponse } from "./DescribeParameters/res";
import { DescribeClusterDashboardRequest } from "./DescribeClusterDashboard/req";
import { DescribeClusterDashboardResponse } from "./DescribeClusterDashboard/res";
import { GetCmsUrlRequest } from "./GetCmsUrl/req";
import { GetCmsUrlResponse } from "./GetCmsUrl/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { ListTagsRequest } from "./ListTags/req";
import { ListTagsResponse } from "./ListTags/res";
import { UnTagResourcesRequest } from "./UnTagResources/req";
import { UnTagResourcesResponse } from "./UnTagResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { MoveResourceGroupRequest } from "./MoveResourceGroup/req";
import { MoveResourceGroupResponse } from "./MoveResourceGroup/res";

interface CASSANDRA {
    /**
     * 创建一个Cassandra实例。
     */
    CreateCluster(query: CreateClusterRequest): Promise<CreateClusterResponse>;
    /**
     * 调用CreateDataCenter为集群添加数据中心。
     */
    CreateDataCenter(query: CreateDataCenterRequest): Promise<CreateDataCenterResponse>;
    /**
     * 调用DeleteCluster删除指定ID集群。
     */
    DeleteCluster(query: DeleteClusterRequest): Promise<DeleteClusterResponse>;
    /**
     * 查询Cassandra实例的详细信息。
     */
    DescribeCluster(query: DescribeClusterRequest): Promise<DescribeClusterResponse>;
    /**
     * 调用DescribeClusters查询指定地域下的所有集群信息。
     */
    DescribeClusters(query: DescribeClustersRequest): Promise<DescribeClustersResponse>;
    /**
     * 调用DescribeClusterStatus查询集群的运行状态。
     */
    DescribeClusterStatus(query: DescribeClusterStatusRequest): Promise<DescribeClusterStatusResponse>;
    /**
     * 调用DescribeDeletedClusters查询已删除的集群列表。
     */
    DescribeDeletedClusters(query: DescribeDeletedClustersRequest): Promise<DescribeDeletedClustersResponse>;
    /**
     * 获取单个数据中心详情。
     */
    DescribeDataCenter(query: DescribeDataCenterRequest): Promise<DescribeDataCenterResponse>;
    /**
     * 如cpu、mem。
     */
    DescribeInstanceType(query: DescribeInstanceTypeRequest): Promise<DescribeInstanceTypeResponse>;
    /**
     * 调用ModifyCluster修改集群名称。
     */
    ModifyCluster(query: ModifyClusterRequest): Promise<ModifyClusterResponse>;
    /**
     * 调用ModifyInstanceMaintainTime修改实例运维起始时间。
     */
    ModifyInstanceMaintainTime(query: ModifyInstanceMaintainTimeRequest): Promise<ModifyInstanceMaintainTimeResponse>;
    /**
     * 调用ModifyInstanceType修改实例规格类型。
     */
    ModifyInstanceType(query: ModifyInstanceTypeRequest): Promise<ModifyInstanceTypeResponse>;
    /**
     * 调用PurgeCluster清除已被删除的集群。
     */
    PurgeCluster(query: PurgeClusterRequest): Promise<PurgeClusterResponse>;
    /**
     * 调用RebootCluster重启集群。
     */
    RebootCluster(query: RebootClusterRequest): Promise<RebootClusterResponse>;
    /**
     * 扩容磁盘。
     */
    ResizeDiskSize(query: ResizeDiskSizeRequest): Promise<ResizeDiskSizeResponse>;
    /**
     * 调用ResizeNodeCount扩容数据中心的节点。
     */
    ResizeNodeCount(query: ResizeNodeCountRequest): Promise<ResizeNodeCountResponse>;
    /**
     * 调用UpgradeClusterVersion升级集群小版本。
     */
    UpgradeClusterVersion(query: UpgradeClusterVersionRequest): Promise<UpgradeClusterVersionResponse>;
    /**
     * 调用ModifyIpWhitelist修改集群网络访问白名单。
     */
    ModifyIpWhitelist(query: ModifyIpWhitelistRequest): Promise<ModifyIpWhitelistResponse>;
    /**
     * 根据集群 ID 获取集群白名单信息列表。
     */
    DescribeIpWhitelist(query: DescribeIpWhitelistRequest): Promise<DescribeIpWhitelistResponse>;
    /**
     * 调用DescribeIpWhitelistGroups查询白名单分组列表。
     */
    DescribeIpWhitelistGroups(query: DescribeIpWhitelistGroupsRequest): Promise<DescribeIpWhitelistGroupsResponse>;
    /**
     * 调用ModifyIpWhitelistGroup修改集群白名单组。
     */
    ModifyIpWhitelistGroup(query: ModifyIpWhitelistGroupRequest): Promise<ModifyIpWhitelistGroupResponse>;
    /**
     * 调用DescribeSecurityGroups查询安全组。
     */
    DescribeSecurityGroups(query: DescribeSecurityGroupsRequest): Promise<DescribeSecurityGroupsResponse>;
    /**
     * 调用ModifySecurityGroups修改安全组。
     */
    ModifySecurityGroups(query: ModifySecurityGroupsRequest): Promise<ModifySecurityGroupsResponse>;
    /**
     * 查找指定ID实例的帐户列表信息。
     */
    DescribeAccounts(query: DescribeAccountsRequest): Promise<DescribeAccountsResponse>;
    /**
     * 修改数据库的账号密码。
     */
    ModifyAccountPassword(query: ModifyAccountPasswordRequest): Promise<ModifyAccountPasswordResponse>;
    /**
     * 调用DescribeRegions查询可用地域。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 调用DeleteDataCenter删除集群数据中心。
     */
    DeleteDataCenter(query: DeleteDataCenterRequest): Promise<DeleteDataCenterResponse>;
    /**
     * 调用ModifyDataCenter修改数据中心名称。
     */
    ModifyDataCenter(query: ModifyDataCenterRequest): Promise<ModifyDataCenterResponse>;
    /**
     * 调用DescribeDataCenters获取数据中心信息。
     */
    DescribeDataCenters(query: DescribeDataCentersRequest): Promise<DescribeDataCentersResponse>;
    /**
     * 调用DescribeBackup获取备份概要信息。
     */
    DescribeBackup(query: DescribeBackupRequest): Promise<DescribeBackupResponse>;
    /**
     * 调用DeleteBackupPlan删除备份计划。
     */
    DeleteBackupPlan(query: DeleteBackupPlanRequest): Promise<DeleteBackupPlanResponse>;
    /**
     * 调用CreateBackupPlan创建备份计划。
     */
    CreateBackupPlan(query: CreateBackupPlanRequest): Promise<CreateBackupPlanResponse>;
    /**
     * 调用DescribeBackupPlan描述备份计划。
     */
    DescribeBackupPlan(query: DescribeBackupPlanRequest): Promise<DescribeBackupPlanResponse>;
    /**
     * 调用DescribeBackups获取集群备份列表。
     */
    DescribeBackups(query: DescribeBackupsRequest): Promise<DescribeBackupsResponse>;
    /**
     * 调用ModifyBackupPlan修改备份计划。
     */
    ModifyBackupPlan(query: ModifyBackupPlanRequest): Promise<ModifyBackupPlanResponse>;
    /**
     * 调用DescribeBackupPlans查询备份计划列表。
     */
    DescribeBackupPlans(query: DescribeBackupPlansRequest): Promise<DescribeBackupPlansResponse>;
    /**
     * 调用AllocatePublicContactPoints分配公共联系点。
     */
    AllocatePublicContactPoints(query: AllocatePublicContactPointsRequest): Promise<AllocatePublicContactPointsResponse>;
    /**
     * 调用DescribeContactPoints获取集群数据库连接信息  。
     */
    DescribeContactPoints(query: DescribeContactPointsRequest): Promise<DescribeContactPointsResponse>;
    /**
     * 调用ReleasePublicContactPoints释放公网连接点。
     */
    ReleasePublicContactPoints(query: ReleasePublicContactPointsRequest): Promise<ReleasePublicContactPointsResponse>;
    /**
     * 获取单个命令执行的信息（包含执行结果result）。
     */
    DescribeNodeToolExecutionHistory(query: DescribeNodeToolExecutionHistoryRequest): Promise<DescribeNodeToolExecutionHistoryResponse>;
    /**
     * 分页获取nodetool执行记录。
     */
    DescribeNodeToolExecutionHistories(query: DescribeNodeToolExecutionHistoriesRequest): Promise<DescribeNodeToolExecutionHistoriesResponse>;
    /**
     * 调用ExecuteNodeTool在指定dc执行nodetool命令。
     */
    ExecuteNodeTool(query: ExecuteNodeToolRequest): Promise<ExecuteNodeToolResponse>;
    /**
     * 调用DeleteNodeToolExecutionHistory删除nodetool执行记录。
     */
    DeleteNodeToolExecutionHistory(query: DeleteNodeToolExecutionHistoryRequest): Promise<DeleteNodeToolExecutionHistoryResponse>;
    /**
     * 调用DescribeParameterModificationHistories查看参数修改历史。
     */
    DescribeParameterModificationHistories(query: DescribeParameterModificationHistoriesRequest): Promise<DescribeParameterModificationHistoriesResponse>;
    /**
     * 调用ModifyParameter修改参数设置中的参数。
     */
    ModifyParameter(query: ModifyParameterRequest): Promise<ModifyParameterResponse>;
    /**
     * 调用DescribeParameters查询参数设置中的所有参数。
     */
    DescribeParameters(query: DescribeParametersRequest): Promise<DescribeParametersResponse>;
    /**
     * 调用DescribeClusterDashboard查询仪表盘数据。
     */
    DescribeClusterDashboard(query: DescribeClusterDashboardRequest): Promise<DescribeClusterDashboardResponse>;
    /**
     * 调用GetCmsUrl跳转云监控控制台。
     */
    GetCmsUrl(query: GetCmsUrlRequest): Promise<GetCmsUrlResponse>;
    /**
     * 通过ResourceId或者Tag（Key查询、key和value同时查询）获取标签列表。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 根据region获取该region下所有Tag。
     */
    ListTags(query: ListTagsRequest): Promise<ListTagsResponse>;
    /**
     * 调用UnTagResources接口删除资源标签。对照TagResources创建接口。
     */
    UnTagResources(query: UnTagResourcesRequest): Promise<UnTagResourcesResponse>;
    /**
     * 调用TagResources接口为实例增加Tag标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 通过MoveResourceGroup移动资源所在的资源组。
     */
    MoveResourceGroup(query: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse>;
}
export default CASSANDRA;
