import { CreateBackupPlanRequest } from "./CreateBackupPlan/req";
import { CreateBackupPlanResponse } from "./CreateBackupPlan/res";
import { ConfigureBackupPlanRequest } from "./ConfigureBackupPlan/req";
import { ConfigureBackupPlanResponse } from "./ConfigureBackupPlan/res";
import { CreateAndStartBackupPlanRequest } from "./CreateAndStartBackupPlan/req";
import { CreateAndStartBackupPlanResponse } from "./CreateAndStartBackupPlan/res";
import { RenewBackupPlanRequest } from "./RenewBackupPlan/req";
import { RenewBackupPlanResponse } from "./RenewBackupPlan/res";
import { UpgradeBackupPlanRequest } from "./UpgradeBackupPlan/req";
import { UpgradeBackupPlanResponse } from "./UpgradeBackupPlan/res";
import { DescribeBackupPlanListRequest } from "./DescribeBackupPlanList/req";
import { DescribeBackupPlanListResponse } from "./DescribeBackupPlanList/res";
import { StartBackupPlanRequest } from "./StartBackupPlan/req";
import { StartBackupPlanResponse } from "./StartBackupPlan/res";
import { EnableBackupLogRequest } from "./EnableBackupLog/req";
import { EnableBackupLogResponse } from "./EnableBackupLog/res";
import { StopBackupPlanRequest } from "./StopBackupPlan/req";
import { StopBackupPlanResponse } from "./StopBackupPlan/res";
import { DisableBackupLogRequest } from "./DisableBackupLog/req";
import { DisableBackupLogResponse } from "./DisableBackupLog/res";
import { ReleaseBackupPlanRequest } from "./ReleaseBackupPlan/req";
import { ReleaseBackupPlanResponse } from "./ReleaseBackupPlan/res";
import { ModifyStorageStrategyRequest } from "./ModifyStorageStrategy/req";
import { ModifyStorageStrategyResponse } from "./ModifyStorageStrategy/res";
import { ModifyBackupObjectsRequest } from "./ModifyBackupObjects/req";
import { ModifyBackupObjectsResponse } from "./ModifyBackupObjects/res";
import { ModifyBackupSourceEndpointRequest } from "./ModifyBackupSourceEndpoint/req";
import { ModifyBackupSourceEndpointResponse } from "./ModifyBackupSourceEndpoint/res";
import { ModifyBackupPlanNameRequest } from "./ModifyBackupPlanName/req";
import { ModifyBackupPlanNameResponse } from "./ModifyBackupPlanName/res";
import { ModifyBackupStrategyRequest } from "./ModifyBackupStrategy/req";
import { ModifyBackupStrategyResponse } from "./ModifyBackupStrategy/res";
import { DescribeRestoreRangeInfoRequest } from "./DescribeRestoreRangeInfo/req";
import { DescribeRestoreRangeInfoResponse } from "./DescribeRestoreRangeInfo/res";
import { DescribeBackupPlanBillingRequest } from "./DescribeBackupPlanBilling/req";
import { DescribeBackupPlanBillingResponse } from "./DescribeBackupPlanBilling/res";
import { DescribeIncrementBackupListRequest } from "./DescribeIncrementBackupList/req";
import { DescribeIncrementBackupListResponse } from "./DescribeIncrementBackupList/res";
import { DescribeFullBackupListRequest } from "./DescribeFullBackupList/req";
import { DescribeFullBackupListResponse } from "./DescribeFullBackupList/res";
import { StartRestoreTaskRequest } from "./StartRestoreTask/req";
import { StartRestoreTaskResponse } from "./StartRestoreTask/res";
import { CreateRestoreTaskRequest } from "./CreateRestoreTask/req";
import { CreateRestoreTaskResponse } from "./CreateRestoreTask/res";
import { DescribeRestoreTaskListRequest } from "./DescribeRestoreTaskList/req";
import { DescribeRestoreTaskListResponse } from "./DescribeRestoreTaskList/res";
import { DescribeDLAServiceRequest } from "./DescribeDLAService/req";
import { DescribeDLAServiceResponse } from "./DescribeDLAService/res";
import { DescribeBackupGatewayListRequest } from "./DescribeBackupGatewayList/req";
import { DescribeBackupGatewayListResponse } from "./DescribeBackupGatewayList/res";
import { InitializeDbsServiceLinkedRoleRequest } from "./InitializeDbsServiceLinkedRole/req";
import { InitializeDbsServiceLinkedRoleResponse } from "./InitializeDbsServiceLinkedRole/res";
import { DescribeNodeCidrListRequest } from "./DescribeNodeCidrList/req";
import { DescribeNodeCidrListResponse } from "./DescribeNodeCidrList/res";
import { DescribeJobErrorCodeRequest } from "./DescribeJobErrorCode/req";
import { DescribeJobErrorCodeResponse } from "./DescribeJobErrorCode/res";
import { CreateGetDBListFromAgentTaskRequest } from "./CreateGetDBListFromAgentTask/req";
import { CreateGetDBListFromAgentTaskResponse } from "./CreateGetDBListFromAgentTask/res";
import { DescribePreCheckProgressListRequest } from "./DescribePreCheckProgressList/req";
import { DescribePreCheckProgressListResponse } from "./DescribePreCheckProgressList/res";
import { GetDBListFromAgentRequest } from "./GetDBListFromAgent/req";
import { GetDBListFromAgentResponse } from "./GetDBListFromAgent/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DescribeBackupSetDownloadTaskListRequest } from "./DescribeBackupSetDownloadTaskList/req";
import { DescribeBackupSetDownloadTaskListResponse } from "./DescribeBackupSetDownloadTaskList/res";
import { ModifyBackupSetDownloadRulesRequest } from "./ModifyBackupSetDownloadRules/req";
import { ModifyBackupSetDownloadRulesResponse } from "./ModifyBackupSetDownloadRules/res";
import { CreateFullBackupSetDownloadRequest } from "./CreateFullBackupSetDownload/req";
import { CreateFullBackupSetDownloadResponse } from "./CreateFullBackupSetDownload/res";
import { CreateIncrementBackupSetDownloadRequest } from "./CreateIncrementBackupSetDownload/req";
import { CreateIncrementBackupSetDownloadResponse } from "./CreateIncrementBackupSetDownload/res";

interface DBS {
    /**
     * 该接口用于创建一个DBS备份计划。
     */
    CreateBackupPlan(query: CreateBackupPlanRequest): Promise<CreateBackupPlanResponse>;
    /**
     * 该接口用于配置一个DBS备份计划。
     */
    ConfigureBackupPlan(query: ConfigureBackupPlanRequest): Promise<ConfigureBackupPlanResponse>;
    /**
     * 该接口用于创建、配置并启动备份计划。
     */
    CreateAndStartBackupPlan(query: CreateAndStartBackupPlanRequest): Promise<CreateAndStartBackupPlanResponse>;
    /**
     * 该接口用于续费一个DBS备份计划。
     */
    RenewBackupPlan(query: RenewBackupPlanRequest): Promise<RenewBackupPlanResponse>;
    /**
     * 该接口用于升级一个DBS备份计划。
     */
    UpgradeBackupPlan(query: UpgradeBackupPlanRequest): Promise<UpgradeBackupPlanResponse>;
    /**
     * 该接口用于查看一个DBS备份计划。
     */
    DescribeBackupPlanList(query: DescribeBackupPlanListRequest): Promise<DescribeBackupPlanListResponse>;
    /**
     * 该接口用于启动一个DBS备份计划。
     */
    StartBackupPlan(query: StartBackupPlanRequest): Promise<StartBackupPlanResponse>;
    /**
     * 该接口用于开启备份计划中的增量备份。
     */
    EnableBackupLog(query: EnableBackupLogRequest): Promise<EnableBackupLogResponse>;
    /**
     * 该接口用于暂停一个DBS备份计划。
     */
    StopBackupPlan(query: StopBackupPlanRequest): Promise<StopBackupPlanResponse>;
    /**
     * 该接口用于关闭备份计划中的增量备份。
     */
    DisableBackupLog(query: DisableBackupLogRequest): Promise<DisableBackupLogResponse>;
    /**
     * 该接口用于释放一个按量付费的备份计划。
     */
    ReleaseBackupPlan(query: ReleaseBackupPlanRequest): Promise<ReleaseBackupPlanResponse>;
    /**
     * 该接口用于修改备份计划中的存储数据的生命周期。
     */
    ModifyStorageStrategy(query: ModifyStorageStrategyRequest): Promise<ModifyStorageStrategyResponse>;
    /**
     * 该接口用于修改一个DBS备份计划的备份对象。
     */
    ModifyBackupObjects(query: ModifyBackupObjectsRequest): Promise<ModifyBackupObjectsResponse>;
    /**
     * 该接口用于修改数据库备份源。
     */
    ModifyBackupSourceEndpoint(query: ModifyBackupSourceEndpointRequest): Promise<ModifyBackupSourceEndpointResponse>;
    /**
     * 该接口用于修改一个备份计划名称。
     */
    ModifyBackupPlanName(query: ModifyBackupPlanNameRequest): Promise<ModifyBackupPlanNameResponse>;
    /**
     * 该接口用于修改备份计划的备份时间。
     */
    ModifyBackupStrategy(query: ModifyBackupStrategyRequest): Promise<ModifyBackupStrategyResponse>;
    /**
     * 该接口用于查看一个备份计划可恢复时间段详情。
     */
    DescribeRestoreRangeInfo(query: DescribeRestoreRangeInfoRequest): Promise<DescribeRestoreRangeInfoResponse>;
    /**
     * 该接口用于查看备份计划计费信息。
     */
    DescribeBackupPlanBilling(query: DescribeBackupPlanBillingRequest): Promise<DescribeBackupPlanBillingResponse>;
    /**
     * 该接口用于查看DBS增量备份任务列表。
     */
    DescribeIncrementBackupList(query: DescribeIncrementBackupListRequest): Promise<DescribeIncrementBackupListResponse>;
    /**
     * 该接口用于查看DBS全量备份任务列表。
     */
    DescribeFullBackupList(query: DescribeFullBackupListRequest): Promise<DescribeFullBackupListResponse>;
    /**
     * 该接口用于启动一个DBS恢复任务。
     */
    StartRestoreTask(query: StartRestoreTaskRequest): Promise<StartRestoreTaskResponse>;
    /**
     * 该接口用于创建DBS恢复任务。
     */
    CreateRestoreTask(query: CreateRestoreTaskRequest): Promise<CreateRestoreTaskResponse>;
    /**
     * 该接口用于查看DBS恢复任务列表。
     */
    DescribeRestoreTaskList(query: DescribeRestoreTaskListRequest): Promise<DescribeRestoreTaskListResponse>;
    /**
     * 该接口用于查看备份计划的数据查询服务（DLA）。
     */
    DescribeDLAService(query: DescribeDLAServiceRequest): Promise<DescribeDLAServiceResponse>;
    /**
     * 该接口用于查看DBS备份网关列表。
     */
    DescribeBackupGatewayList(query: DescribeBackupGatewayListRequest): Promise<DescribeBackupGatewayListResponse>;
    /**
     * 该接口用于将服务关联角色（AliyunServiceRoleForDBS）授权给DBS。
     */
    InitializeDbsServiceLinkedRole(query: InitializeDbsServiceLinkedRoleRequest): Promise<InitializeDbsServiceLinkedRoleResponse>;
    /**
     * 该接口用于查看DBS运行节点网段列表。
     */
    DescribeNodeCidrList(query: DescribeNodeCidrListRequest): Promise<DescribeNodeCidrListResponse>;
    /**
     * 该接口用于查看DBS任务错误码信息。
     */
    DescribeJobErrorCode(query: DescribeJobErrorCodeRequest): Promise<DescribeJobErrorCodeResponse>;
    /**
     * 该接口用于通过备份网关获取数据库列表任务。
     */
    CreateGetDBListFromAgentTask(query: CreateGetDBListFromAgentTaskRequest): Promise<CreateGetDBListFromAgentTaskResponse>;
    /**
     * 该接口用于查看备份计划预检查进度和恢复任务预检查进度。
     */
    DescribePreCheckProgressList(query: DescribePreCheckProgressListRequest): Promise<DescribePreCheckProgressListResponse>;
    /**
     * 该接口用于通过备份网关获取物理备份的库表数据。
     */
    GetDBListFromAgent(query: GetDBListFromAgentRequest): Promise<GetDBListFromAgentResponse>;
    /**
     * 该接口用于查看DBS支持地域。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 该接口用于查看DBS备份集下载列表。
     */
    DescribeBackupSetDownloadTaskList(query: DescribeBackupSetDownloadTaskListRequest): Promise<DescribeBackupSetDownloadTaskListResponse>;
    /**
     * 该接口用于开启、修改、关闭自动下载功能。
     */
    ModifyBackupSetDownloadRules(query: ModifyBackupSetDownloadRulesRequest): Promise<ModifyBackupSetDownloadRulesResponse>;
    /**
     * 该接口用于创建并启动全量备份集下载任务。
     */
    CreateFullBackupSetDownload(query: CreateFullBackupSetDownloadRequest): Promise<CreateFullBackupSetDownloadResponse>;
    /**
     * 该接口用于创建并启动增量备份集下载任务。
     */
    CreateIncrementBackupSetDownload(query: CreateIncrementBackupSetDownloadRequest): Promise<CreateIncrementBackupSetDownloadResponse>;
}
export default DBS;
