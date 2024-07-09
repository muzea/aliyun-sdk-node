import { UpdateApplicationConfigsRequest } from "./UpdateApplicationConfigs/req";
import { UpdateApplicationConfigsResponse } from "./UpdateApplicationConfigs/res";
import { ListApplicationsRequest } from "./ListApplications/req";
import { ListApplicationsResponse } from "./ListApplications/res";
import { RunApplicationActionRequest } from "./RunApplicationAction/req";
import { RunApplicationActionResponse } from "./RunApplicationAction/res";
import { ListApplicationConfigsRequest } from "./ListApplicationConfigs/req";
import { ListApplicationConfigsResponse } from "./ListApplicationConfigs/res";
import { GetApplicationRequest } from "./GetApplication/req";
import { GetApplicationResponse } from "./GetApplication/res";
import { ListComponentInstancesRequest } from "./ListComponentInstances/req";
import { ListComponentInstancesResponse } from "./ListComponentInstances/res";
import { ListComponentsRequest } from "./ListComponents/req";
import { ListComponentsResponse } from "./ListComponents/res";
import { CreateClusterRequest } from "./CreateCluster/req";
import { CreateClusterResponse } from "./CreateCluster/res";
import { CreateNodeGroupRequest } from "./CreateNodeGroup/req";
import { CreateNodeGroupResponse } from "./CreateNodeGroup/res";
import { DecreaseNodesRequest } from "./DecreaseNodes/req";
import { DecreaseNodesResponse } from "./DecreaseNodes/res";
import { DeleteClusterRequest } from "./DeleteCluster/req";
import { DeleteClusterResponse } from "./DeleteCluster/res";
import { GetClusterRequest } from "./GetCluster/req";
import { GetClusterResponse } from "./GetCluster/res";
import { GetNodeGroupRequest } from "./GetNodeGroup/req";
import { GetNodeGroupResponse } from "./GetNodeGroup/res";
import { GetOperationRequest } from "./GetOperation/req";
import { GetOperationResponse } from "./GetOperation/res";
import { IncreaseNodesRequest } from "./IncreaseNodes/req";
import { IncreaseNodesResponse } from "./IncreaseNodes/res";
import { ListClustersRequest } from "./ListClusters/req";
import { ListClustersResponse } from "./ListClusters/res";
import { ListNodeGroupsRequest } from "./ListNodeGroups/req";
import { ListNodeGroupsResponse } from "./ListNodeGroups/res";
import { ListNodesRequest } from "./ListNodes/req";
import { ListNodesResponse } from "./ListNodes/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { ListResourceHealthInspectionsRequest } from "./ListResourceHealthInspections/req";
import { ListResourceHealthInspectionsResponse } from "./ListResourceHealthInspections/res";
import { ListScriptsRequest } from "./ListScripts/req";
import { ListScriptsResponse } from "./ListScripts/res";
import { ListReleaseVersionsRequest } from "./ListReleaseVersions/req";
import { ListReleaseVersionsResponse } from "./ListReleaseVersions/res";
import { DeleteScriptRequest } from "./DeleteScript/req";
import { DeleteScriptResponse } from "./DeleteScript/res";
import { CreateScriptRequest } from "./CreateScript/req";
import { CreateScriptResponse } from "./CreateScript/res";
import { UpdateScriptRequest } from "./UpdateScript/req";
import { UpdateScriptResponse } from "./UpdateScript/res";
import { ListAutoScalingActivitiesRequest } from "./ListAutoScalingActivities/req";
import { ListAutoScalingActivitiesResponse } from "./ListAutoScalingActivities/res";
import { JoinResourceGroupRequest } from "./JoinResourceGroup/req";
import { JoinResourceGroupResponse } from "./JoinResourceGroup/res";
import { GetAutoScalingActivityRequest } from "./GetAutoScalingActivity/req";
import { GetAutoScalingActivityResponse } from "./GetAutoScalingActivity/res";
import { GetAutoScalingPolicyRequest } from "./GetAutoScalingPolicy/req";
import { GetAutoScalingPolicyResponse } from "./GetAutoScalingPolicy/res";
import { ListInstanceTypesRequest } from "./ListInstanceTypes/req";
import { ListInstanceTypesResponse } from "./ListInstanceTypes/res";
import { RemoveAutoScalingPolicyRequest } from "./RemoveAutoScalingPolicy/req";
import { RemoveAutoScalingPolicyResponse } from "./RemoveAutoScalingPolicy/res";
import { PutAutoScalingPolicyRequest } from "./PutAutoScalingPolicy/req";
import { PutAutoScalingPolicyResponse } from "./PutAutoScalingPolicy/res";
import { GetApiTemplateRequest } from "./GetApiTemplate/req";
import { GetApiTemplateResponse } from "./GetApiTemplate/res";
import { ListApiTemplatesRequest } from "./ListApiTemplates/req";
import { ListApiTemplatesResponse } from "./ListApiTemplates/res";
import { UpdateApiTemplateRequest } from "./UpdateApiTemplate/req";
import { UpdateApiTemplateResponse } from "./UpdateApiTemplate/res";
import { RunApiTemplateRequest } from "./RunApiTemplate/req";
import { RunApiTemplateResponse } from "./RunApiTemplate/res";
import { DeleteApiTemplateRequest } from "./DeleteApiTemplate/req";
import { DeleteApiTemplateResponse } from "./DeleteApiTemplate/res";
import { CreateApiTemplateRequest } from "./CreateApiTemplate/req";
import { CreateApiTemplateResponse } from "./CreateApiTemplate/res";
import { ListDoctorJobsStatsRequest } from "./ListDoctorJobsStats/req";
import { ListDoctorJobsStatsResponse } from "./ListDoctorJobsStats/res";
import { ListInspectionHistoryRequest } from "./ListInspectionHistory/req";
import { ListInspectionHistoryResponse } from "./ListInspectionHistory/res";
import { GetDoctorReportComponentSummaryRequest } from "./GetDoctorReportComponentSummary/req";
import { GetDoctorReportComponentSummaryResponse } from "./GetDoctorReportComponentSummary/res";
import { ListDoctorReportsRequest } from "./ListDoctorReports/req";
import { ListDoctorReportsResponse } from "./ListDoctorReports/res";
import { GetDoctorHiveDatabaseRequest } from "./GetDoctorHiveDatabase/req";
import { GetDoctorHiveDatabaseResponse } from "./GetDoctorHiveDatabase/res";
import { ListDoctorHiveTablesRequest } from "./ListDoctorHiveTables/req";
import { ListDoctorHiveTablesResponse } from "./ListDoctorHiveTables/res";
import { GetDoctorHiveTableRequest } from "./GetDoctorHiveTable/req";
import { GetDoctorHiveTableResponse } from "./GetDoctorHiveTable/res";
import { GetDoctorHDFSUGIRequest } from "./GetDoctorHDFSUGI/req";
import { GetDoctorHDFSUGIResponse } from "./GetDoctorHDFSUGI/res";
import { GetDoctorHiveClusterRequest } from "./GetDoctorHiveCluster/req";
import { GetDoctorHiveClusterResponse } from "./GetDoctorHiveCluster/res";
import { ListDoctorHiveDatabasesRequest } from "./ListDoctorHiveDatabases/req";
import { ListDoctorHiveDatabasesResponse } from "./ListDoctorHiveDatabases/res";
import { GetDoctorHDFSDirectoryRequest } from "./GetDoctorHDFSDirectory/req";
import { GetDoctorHDFSDirectoryResponse } from "./GetDoctorHDFSDirectory/res";
import { ListDoctorHDFSDirectoriesRequest } from "./ListDoctorHDFSDirectories/req";
import { ListDoctorHDFSDirectoriesResponse } from "./ListDoctorHDFSDirectories/res";
import { GetDoctorHDFSClusterRequest } from "./GetDoctorHDFSCluster/req";
import { GetDoctorHDFSClusterResponse } from "./GetDoctorHDFSCluster/res";
import { ListDoctorHDFSUGIRequest } from "./ListDoctorHDFSUGI/req";
import { ListDoctorHDFSUGIResponse } from "./ListDoctorHDFSUGI/res";
import { ListDoctorHBaseRegionServersRequest } from "./ListDoctorHBaseRegionServers/req";
import { ListDoctorHBaseRegionServersResponse } from "./ListDoctorHBaseRegionServers/res";
import { GetDoctorHBaseRegionRequest } from "./GetDoctorHBaseRegion/req";
import { GetDoctorHBaseRegionResponse } from "./GetDoctorHBaseRegion/res";
import { GetDoctorHBaseTableRequest } from "./GetDoctorHBaseTable/req";
import { GetDoctorHBaseTableResponse } from "./GetDoctorHBaseTable/res";
import { GetDoctorHBaseClusterRequest } from "./GetDoctorHBaseCluster/req";
import { GetDoctorHBaseClusterResponse } from "./GetDoctorHBaseCluster/res";
import { ListDoctorHBaseTablesRequest } from "./ListDoctorHBaseTables/req";
import { ListDoctorHBaseTablesResponse } from "./ListDoctorHBaseTables/res";
import { GetDoctorJobRequest } from "./GetDoctorJob/req";
import { GetDoctorJobResponse } from "./GetDoctorJob/res";
import { GetDoctorComputeSummaryRequest } from "./GetDoctorComputeSummary/req";
import { GetDoctorComputeSummaryResponse } from "./GetDoctorComputeSummary/res";
import { ListDoctorComputeSummaryRequest } from "./ListDoctorComputeSummary/req";
import { ListDoctorComputeSummaryResponse } from "./ListDoctorComputeSummary/res";
import { GetDoctorApplicationRequest } from "./GetDoctorApplication/req";
import { GetDoctorApplicationResponse } from "./GetDoctorApplication/res";
import { ListDoctorJobsRequest } from "./ListDoctorJobs/req";
import { ListDoctorJobsResponse } from "./ListDoctorJobs/res";
import { ListDoctorApplicationsRequest } from "./ListDoctorApplications/req";
import { ListDoctorApplicationsResponse } from "./ListDoctorApplications/res";
import { GetDoctorHBaseRegionServerRequest } from "./GetDoctorHBaseRegionServer/req";
import { GetDoctorHBaseRegionServerResponse } from "./GetDoctorHBaseRegionServer/res";

interface EMR {
    UpdateApplicationConfigs(query: UpdateApplicationConfigsRequest): Promise<UpdateApplicationConfigsResponse>;
    ListApplications(query: ListApplicationsRequest): Promise<ListApplicationsResponse>;
    RunApplicationAction(query: RunApplicationActionRequest): Promise<RunApplicationActionResponse>;
    ListApplicationConfigs(query: ListApplicationConfigsRequest): Promise<ListApplicationConfigsResponse>;
    GetApplication(query: GetApplicationRequest): Promise<GetApplicationResponse>;
    ListComponentInstances(query: ListComponentInstancesRequest): Promise<ListComponentInstancesResponse>;
    ListComponents(query: ListComponentsRequest): Promise<ListComponentsResponse>;
    /**
     * 创建一个按量付费或者预付费（包年包月）的集群。
     */
    CreateCluster(query: CreateClusterRequest): Promise<CreateClusterResponse>;
    /**
     * 创建节点组。
     */
    CreateNodeGroup(query: CreateNodeGroupRequest): Promise<CreateNodeGroupResponse>;
    /**
     * 对目标节点组执行缩容操作。
     */
    DecreaseNodes(query: DecreaseNodesRequest): Promise<DecreaseNodesResponse>;
    /**
     * 删除一个按量付费的集群。
     */
    DeleteCluster(query: DeleteClusterRequest): Promise<DeleteClusterResponse>;
    /**
     * 获取集群详情。
     */
    GetCluster(query: GetClusterRequest): Promise<GetClusterResponse>;
    /**
     * 获取节点组详情。
     */
    GetNodeGroup(query: GetNodeGroupRequest): Promise<GetNodeGroupResponse>;
    /**
     * 获取一个异步操作详情。
     */
    GetOperation(query: GetOperationRequest): Promise<GetOperationResponse>;
    /**
     * 对目标节点组执行扩容操作。
     */
    IncreaseNodes(query: IncreaseNodesRequest): Promise<IncreaseNodesResponse>;
    /**
     * 查询EMR集群列表。
     */
    ListClusters(query: ListClustersRequest): Promise<ListClustersResponse>;
    /**
     * 查询EMR集群节点组列表。
     */
    ListNodeGroups(query: ListNodeGroupsRequest): Promise<ListNodeGroupsResponse>;
    /**
     * 查询EMR集群节点列表。
     */
    ListNodes(query: ListNodesRequest): Promise<ListNodesResponse>;
    /**
     * 查询EMR集群绑定的标签列表。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 为指定的EMR集群绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 为指定的EMR集群列统一解绑标签。解绑后，如果该标签没有绑定其他任何资源，该标签会被自动删除。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    ListResourceHealthInspections(query: ListResourceHealthInspectionsRequest): Promise<ListResourceHealthInspectionsResponse>;
    /**
     * 查询EMR集群引导脚本或普通脚本。
     */
    ListScripts(query: ListScriptsRequest): Promise<ListScriptsResponse>;
    /**
     * 查看EMR发布主板本。
     */
    ListReleaseVersions(query: ListReleaseVersionsRequest): Promise<ListReleaseVersionsResponse>;
    /**
     * 删除引导脚本或者普通脚本。
     */
    DeleteScript(query: DeleteScriptRequest): Promise<DeleteScriptResponse>;
    /**
     * 创建引导脚本或者普通集群脚本。
     */
    CreateScript(query: CreateScriptRequest): Promise<CreateScriptResponse>;
    /**
     * 更新引导脚本或者普通脚本。
     */
    UpdateScript(query: UpdateScriptRequest): Promise<UpdateScriptResponse>;
    ListAutoScalingActivities(query: ListAutoScalingActivitiesRequest): Promise<ListAutoScalingActivitiesResponse>;
    /**
     * 将一个EMR资源加入目标资源组。一个资源只能属于一个资源组。
     */
    JoinResourceGroup(query: JoinResourceGroupRequest): Promise<JoinResourceGroupResponse>;
    GetAutoScalingActivity(query: GetAutoScalingActivityRequest): Promise<GetAutoScalingActivityResponse>;
    GetAutoScalingPolicy(query: GetAutoScalingPolicyRequest): Promise<GetAutoScalingPolicyResponse>;
    /**
     * 获取EMR机型列表。
     */
    ListInstanceTypes(query: ListInstanceTypesRequest): Promise<ListInstanceTypesResponse>;
    RemoveAutoScalingPolicy(query: RemoveAutoScalingPolicyRequest): Promise<RemoveAutoScalingPolicyResponse>;
    /**
     * 配置弹性伸缩策略。
     */
    PutAutoScalingPolicy(query: PutAutoScalingPolicyRequest): Promise<PutAutoScalingPolicyResponse>;
    /**
     * 获取特定API模板的详细配置信息。
     */
    GetApiTemplate(query: GetApiTemplateRequest): Promise<GetApiTemplateResponse>;
    /**
     * 查看API模板列表。
     */
    ListApiTemplates(query: ListApiTemplatesRequest): Promise<ListApiTemplatesResponse>;
    /**
     * 更新API模板。
     */
    UpdateApiTemplate(query: UpdateApiTemplateRequest): Promise<UpdateApiTemplateResponse>;
    /**
     * 调用API模板。
     */
    RunApiTemplate(query: RunApiTemplateRequest): Promise<RunApiTemplateResponse>;
    /**
     * 删除指定的API模板。
     */
    DeleteApiTemplate(query: DeleteApiTemplateRequest): Promise<DeleteApiTemplateResponse>;
    /**
     * 创建一个预定义的API模板，该模板包含了API的基本结构、请求方式、URL路径、请求参数和响应格式等信息。
     */
    CreateApiTemplate(query: CreateApiTemplateRequest): Promise<CreateApiTemplateResponse>;
    /**
     * 通过EMR Doctor批量获取任务基本运行汇总信息。
     */
    ListDoctorJobsStats(query: ListDoctorJobsStatsRequest): Promise<ListDoctorJobsStatsResponse>;
    ListInspectionHistory(query: ListInspectionHistoryRequest): Promise<ListInspectionHistoryResponse>;
    /**
     * 获取 EMR Doctor 指定组件分析结果报告。
     */
    GetDoctorReportComponentSummary(query: GetDoctorReportComponentSummaryRequest): Promise<GetDoctorReportComponentSummaryResponse>;
    /**
     * 批量获取 EMR Doctor 整体分析结果报告。
     */
    ListDoctorReports(query: ListDoctorReportsRequest): Promise<ListDoctorReportsResponse>;
    /**
     * 获取 Hive 库维度分析结果。
     */
    GetDoctorHiveDatabase(query: GetDoctorHiveDatabaseRequest): Promise<GetDoctorHiveDatabaseResponse>;
    /**
     * 通过EMR Doctor批量获取Hive表分析结果。
     */
    ListDoctorHiveTables(query: ListDoctorHiveTablesRequest): Promise<ListDoctorHiveTablesResponse>;
    /**
     * 通过EMR Doctor获取集群Hive特定表分析结果。
     */
    GetDoctorHiveTable(query: GetDoctorHiveTableRequest): Promise<GetDoctorHiveTableResponse>;
    /**
     * 通过EMR Doctor获取特定属主或者属组的HDFS分析结果。
     */
    GetDoctorHDFSUGI(query: GetDoctorHDFSUGIRequest): Promise<GetDoctorHDFSUGIResponse>;
    /**
     * 获取 Hive 集群维度分析结果。
     */
    GetDoctorHiveCluster(query: GetDoctorHiveClusterRequest): Promise<GetDoctorHiveClusterResponse>;
    /**
     * 批量获取 Hive 库维度分析结果。
     */
    ListDoctorHiveDatabases(query: ListDoctorHiveDatabasesRequest): Promise<ListDoctorHiveDatabasesResponse>;
    /**
     * 通过EMR Doctor获取集群HDFS特定目录数据分析结果，目录不超过5级。
     */
    GetDoctorHDFSDirectory(query: GetDoctorHDFSDirectoryRequest): Promise<GetDoctorHDFSDirectoryResponse>;
    /**
     * 通过EMR Doctor批量获取特定目录分析结果，目录不超过5级。
     */
    ListDoctorHDFSDirectories(query: ListDoctorHDFSDirectoriesRequest): Promise<ListDoctorHDFSDirectoriesResponse>;
    /**
     * 通过EMR Doctor获取集群HDFS数据分析结果。
     */
    GetDoctorHDFSCluster(query: GetDoctorHDFSClusterRequest): Promise<GetDoctorHDFSClusterResponse>;
    /**
     * 通过EMR Doctor批量获取属主或者属组的HDFS分析结果。
     */
    ListDoctorHDFSUGI(query: ListDoctorHDFSUGIRequest): Promise<ListDoctorHDFSUGIResponse>;
    /**
     * 批量获取 HBase ReagionServer 信息。
     */
    ListDoctorHBaseRegionServers(query: ListDoctorHBaseRegionServersRequest): Promise<ListDoctorHBaseRegionServersResponse>;
    /**
     * 获取 HBase Region 信息。
     */
    GetDoctorHBaseRegion(query: GetDoctorHBaseRegionRequest): Promise<GetDoctorHBaseRegionResponse>;
    /**
     * 获取 HBase Table 信息。
     */
    GetDoctorHBaseTable(query: GetDoctorHBaseTableRequest): Promise<GetDoctorHBaseTableResponse>;
    /**
     * 获取 HBase 集群维度指标信息。
     */
    GetDoctorHBaseCluster(query: GetDoctorHBaseClusterRequest): Promise<GetDoctorHBaseClusterResponse>;
    /**
     * 批量获取 HBase Table 信息。
     */
    ListDoctorHBaseTables(query: ListDoctorHBaseTablesRequest): Promise<ListDoctorHBaseTablesResponse>;
    /**
     * 通过EMR Doctor获取任务基本运行信息。
     */
    GetDoctorJob(query: GetDoctorJobRequest): Promise<GetDoctorJobResponse>;
    /**
     * 通过EMR Doctor获取集群单个资源使用结果。
     */
    GetDoctorComputeSummary(query: GetDoctorComputeSummaryRequest): Promise<GetDoctorComputeSummaryResponse>;
    /**
     * 通过EMR Doctor根据过滤条件批量获取集群资源使用情况。
     */
    ListDoctorComputeSummary(query: ListDoctorComputeSummaryRequest): Promise<ListDoctorComputeSummaryResponse>;
    /**
     * 通过EMR Doctor获取任务分析信息。
     */
    GetDoctorApplication(query: GetDoctorApplicationRequest): Promise<GetDoctorApplicationResponse>;
    /**
     * 通过EMR Doctor批量获取任务基本运行信息。
     */
    ListDoctorJobs(query: ListDoctorJobsRequest): Promise<ListDoctorJobsResponse>;
    /**
     * 通过EMR Doctor获取批量任务分析结果。
     */
    ListDoctorApplications(query: ListDoctorApplicationsRequest): Promise<ListDoctorApplicationsResponse>;
    /**
     * 获取 HBase ReagionServer 信息。
     */
    GetDoctorHBaseRegionServer(query: GetDoctorHBaseRegionServerRequest): Promise<GetDoctorHBaseRegionServerResponse>;
}
export default EMR;
