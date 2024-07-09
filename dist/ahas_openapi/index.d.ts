import { CheckExperimentRunnableRequest } from "./CheckExperimentRunnable/req";
import { CheckExperimentRunnableResponse } from "./CheckExperimentRunnable/res";
import { CreateExperimentRequest } from "./CreateExperiment/req";
import { CreateExperimentResponse } from "./CreateExperiment/res";
import { CreateDegradeRuleRequest } from "./CreateDegradeRule/req";
import { CreateDegradeRuleResponse } from "./CreateDegradeRule/res";
import { CreateFlowRuleRequest } from "./CreateFlowRule/req";
import { CreateFlowRuleResponse } from "./CreateFlowRule/res";
import { CreateHotParamItemsRequest } from "./CreateHotParamItems/req";
import { CreateHotParamItemsResponse } from "./CreateHotParamItems/res";
import { CreateHotParamRuleRequest } from "./CreateHotParamRule/req";
import { CreateHotParamRuleResponse } from "./CreateHotParamRule/res";
import { CreateIsolationRuleRequest } from "./CreateIsolationRule/req";
import { CreateIsolationRuleResponse } from "./CreateIsolationRule/res";
import { CreateSystemRuleRequest } from "./CreateSystemRule/req";
import { CreateSystemRuleResponse } from "./CreateSystemRule/res";
import { DeleteDegradeRuleRequest } from "./DeleteDegradeRule/req";
import { DeleteDegradeRuleResponse } from "./DeleteDegradeRule/res";
import { DeleteFlowRuleRequest } from "./DeleteFlowRule/req";
import { DeleteFlowRuleResponse } from "./DeleteFlowRule/res";
import { DeleteHotParamRuleRequest } from "./DeleteHotParamRule/req";
import { DeleteHotParamRuleResponse } from "./DeleteHotParamRule/res";
import { DeleteIsolationRuleRequest } from "./DeleteIsolationRule/req";
import { DeleteIsolationRuleResponse } from "./DeleteIsolationRule/res";
import { DeleteSystemRuleRequest } from "./DeleteSystemRule/req";
import { DeleteSystemRuleResponse } from "./DeleteSystemRule/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DisableDegradeRuleRequest } from "./DisableDegradeRule/req";
import { DisableDegradeRuleResponse } from "./DisableDegradeRule/res";
import { DisableFlowRuleRequest } from "./DisableFlowRule/req";
import { DisableFlowRuleResponse } from "./DisableFlowRule/res";
import { DisableHotParamRuleRequest } from "./DisableHotParamRule/req";
import { DisableHotParamRuleResponse } from "./DisableHotParamRule/res";
import { DisableIsolationRuleRequest } from "./DisableIsolationRule/req";
import { DisableIsolationRuleResponse } from "./DisableIsolationRule/res";
import { DisableSystemRuleRequest } from "./DisableSystemRule/req";
import { DisableSystemRuleResponse } from "./DisableSystemRule/res";
import { EnableDegradeRuleRequest } from "./EnableDegradeRule/req";
import { EnableDegradeRuleResponse } from "./EnableDegradeRule/res";
import { EnableFlowRuleRequest } from "./EnableFlowRule/req";
import { EnableFlowRuleResponse } from "./EnableFlowRule/res";
import { EnableHotParamRuleRequest } from "./EnableHotParamRule/req";
import { EnableHotParamRuleResponse } from "./EnableHotParamRule/res";
import { EnableIsolationRuleRequest } from "./EnableIsolationRule/req";
import { EnableIsolationRuleResponse } from "./EnableIsolationRule/res";
import { ExecuteExperimentRequest } from "./ExecuteExperiment/req";
import { ExecuteExperimentResponse } from "./ExecuteExperiment/res";
import { EnableSystemRuleRequest } from "./EnableSystemRule/req";
import { EnableSystemRuleResponse } from "./EnableSystemRule/res";
import { FinishExperimentTaskRequest } from "./FinishExperimentTask/req";
import { FinishExperimentTaskResponse } from "./FinishExperimentTask/res";
import { GetActivityTaskRequest } from "./GetActivityTask/req";
import { GetActivityTaskResponse } from "./GetActivityTask/res";
import { GetExperimentMetaRequest } from "./GetExperimentMeta/req";
import { GetExperimentMetaResponse } from "./GetExperimentMeta/res";
import { GetExperimentTaskRequest } from "./GetExperimentTask/req";
import { GetExperimentTaskResponse } from "./GetExperimentTask/res";
import { GetLicenseKeyRequest } from "./GetLicenseKey/req";
import { GetLicenseKeyResponse } from "./GetLicenseKey/res";
import { GetMetricsOfAppRequest } from "./GetMetricsOfApp/req";
import { GetMetricsOfAppResponse } from "./GetMetricsOfApp/res";
import { GetUserApplicationsRequest } from "./GetUserApplications/req";
import { GetUserApplicationsResponse } from "./GetUserApplications/res";
import { GetSentinelAppSumMetricRequest } from "./GetSentinelAppSumMetric/req";
import { GetSentinelAppSumMetricResponse } from "./GetSentinelAppSumMetric/res";
import { GetMetricsOfResourceRequest } from "./GetMetricsOfResource/req";
import { GetMetricsOfResourceResponse } from "./GetMetricsOfResource/res";
import { ListActiveAppsRequest } from "./ListActiveApps/req";
import { ListActiveAppsResponse } from "./ListActiveApps/res";
import { ListDegradeRulesOfAppRequest } from "./ListDegradeRulesOfApp/req";
import { ListDegradeRulesOfAppResponse } from "./ListDegradeRulesOfApp/res";
import { ListDegradeRulesOfResourceRequest } from "./ListDegradeRulesOfResource/req";
import { ListDegradeRulesOfResourceResponse } from "./ListDegradeRulesOfResource/res";
import { ListExperimentMetasRequest } from "./ListExperimentMetas/req";
import { ListExperimentMetasResponse } from "./ListExperimentMetas/res";
import { ListFlowRulesOfAppRequest } from "./ListFlowRulesOfApp/req";
import { ListFlowRulesOfAppResponse } from "./ListFlowRulesOfApp/res";
import { ListFlowRulesOfResourceRequest } from "./ListFlowRulesOfResource/req";
import { ListFlowRulesOfResourceResponse } from "./ListFlowRulesOfResource/res";
import { ListHotParamRulesOfAppRequest } from "./ListHotParamRulesOfApp/req";
import { ListHotParamRulesOfAppResponse } from "./ListHotParamRulesOfApp/res";
import { ListHotParamRulesOfResourceRequest } from "./ListHotParamRulesOfResource/req";
import { ListHotParamRulesOfResourceResponse } from "./ListHotParamRulesOfResource/res";
import { ListIsolationRulesOfAppRequest } from "./ListIsolationRulesOfApp/req";
import { ListIsolationRulesOfAppResponse } from "./ListIsolationRulesOfApp/res";
import { ListIsolationRulesOfResourceRequest } from "./ListIsolationRulesOfResource/req";
import { ListIsolationRulesOfResourceResponse } from "./ListIsolationRulesOfResource/res";
import { ListSystemRulesRequest } from "./ListSystemRules/req";
import { ListSystemRulesResponse } from "./ListSystemRules/res";
import { ModifyDegradeRuleRequest } from "./ModifyDegradeRule/req";
import { ModifyDegradeRuleResponse } from "./ModifyDegradeRule/res";
import { ModifyFlowRuleRequest } from "./ModifyFlowRule/req";
import { ModifyFlowRuleResponse } from "./ModifyFlowRule/res";
import { ModifyHotParamRuleRequest } from "./ModifyHotParamRule/req";
import { ModifyHotParamRuleResponse } from "./ModifyHotParamRule/res";
import { ModifyIsolationRuleRequest } from "./ModifyIsolationRule/req";
import { ModifyIsolationRuleResponse } from "./ModifyIsolationRule/res";
import { ModifySystemRuleRequest } from "./ModifySystemRule/req";
import { ModifySystemRuleResponse } from "./ModifySystemRule/res";
import { OpenAhasServiceRequest } from "./OpenAhasService/req";
import { OpenAhasServiceResponse } from "./OpenAhasService/res";
import { PushExperimentTaskRequest } from "./PushExperimentTask/req";
import { PushExperimentTaskResponse } from "./PushExperimentTask/res";
import { UpdateExperimentRequest } from "./UpdateExperiment/req";
import { UpdateExperimentResponse } from "./UpdateExperiment/res";
import { UpdateExperimentBasicInfoRequest } from "./UpdateExperimentBasicInfo/req";
import { UpdateExperimentBasicInfoResponse } from "./UpdateExperimentBasicInfo/res";
import { PageableQueryExperimentTaskByExperimentIdRequest } from "./PageableQueryExperimentTaskByExperimentId/req";
import { PageableQueryExperimentTaskByExperimentIdResponse } from "./PageableQueryExperimentTaskByExperimentId/res";
import { PageableQueryUserExperimentRequest } from "./PageableQueryUserExperiment/req";
import { PageableQueryUserExperimentResponse } from "./PageableQueryUserExperiment/res";
import { GetUserWorkspaceRequest } from "./GetUserWorkspace/req";
import { GetUserWorkspaceResponse } from "./GetUserWorkspace/res";
import { PageableQueryExperimentTaskByClusterIdRequest } from "./PageableQueryExperimentTaskByClusterId/req";
import { PageableQueryExperimentTaskByClusterIdResponse } from "./PageableQueryExperimentTaskByClusterId/res";
import { GetUserApplicationGroupsRequest } from "./GetUserApplicationGroups/req";
import { GetUserApplicationGroupsResponse } from "./GetUserApplicationGroups/res";

interface AHAS_OPENAPI {
    /**
     * 校验演练是否可以执行。
     */
    CheckExperimentRunnable(query: CheckExperimentRunnableRequest): Promise<CheckExperimentRunnableResponse>;
    /**
     * 调用CreateExperiment接口新建一个故障演练。
     */
    CreateExperiment(query: CreateExperimentRequest): Promise<CreateExperimentResponse>;
    /**
     * 调用CreateDegradeRule接口创建降级规则。
     */
    CreateDegradeRule(query: CreateDegradeRuleRequest): Promise<CreateDegradeRuleResponse>;
    /**
     * 调用CreateFlowRule接口创建流控规则。
     */
    CreateFlowRule(query: CreateFlowRuleRequest): Promise<CreateFlowRuleResponse>;
    /**
     * 调用CreateHotParamItems接口创建热点规则例外项。
     */
    CreateHotParamItems(query: CreateHotParamItemsRequest): Promise<CreateHotParamItemsResponse>;
    /**
     * 调用CreateHotParamRule接口创建热点规则。
     */
    CreateHotParamRule(query: CreateHotParamRuleRequest): Promise<CreateHotParamRuleResponse>;
    /**
     * 调用CreateIsolationRule接口创建隔离规则。
     */
    CreateIsolationRule(query: CreateIsolationRuleRequest): Promise<CreateIsolationRuleResponse>;
    /**
     * 调用CreateSystemRule接口创建系统规则。
     */
    CreateSystemRule(query: CreateSystemRuleRequest): Promise<CreateSystemRuleResponse>;
    /**
     * 调用DeleteDegradeRule接口删除降级规则。
     */
    DeleteDegradeRule(query: DeleteDegradeRuleRequest): Promise<DeleteDegradeRuleResponse>;
    /**
     * 调用DeleteFlowRule接口删除流控规则。
     */
    DeleteFlowRule(query: DeleteFlowRuleRequest): Promise<DeleteFlowRuleResponse>;
    /**
     * 调用DeleteHotParamRule接口删除热点规则。
     */
    DeleteHotParamRule(query: DeleteHotParamRuleRequest): Promise<DeleteHotParamRuleResponse>;
    /**
     * 调用DeleteIsolationRule接口删除隔离规则。
     */
    DeleteIsolationRule(query: DeleteIsolationRuleRequest): Promise<DeleteIsolationRuleResponse>;
    /**
     * 调用DeleteSystemRule接口删除系统规则。
     */
    DeleteSystemRule(query: DeleteSystemRuleRequest): Promise<DeleteSystemRuleResponse>;
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 调用DisableDegradeRule接口关闭降级规则。
     */
    DisableDegradeRule(query: DisableDegradeRuleRequest): Promise<DisableDegradeRuleResponse>;
    /**
     * 调用DisableFlowRule接口关闭流控规则。
     */
    DisableFlowRule(query: DisableFlowRuleRequest): Promise<DisableFlowRuleResponse>;
    /**
     * 调用DisableHotParamRule接口关闭热点规则。
     */
    DisableHotParamRule(query: DisableHotParamRuleRequest): Promise<DisableHotParamRuleResponse>;
    /**
     * 调用DisableIsolationRule接口关闭隔离规则。
     */
    DisableIsolationRule(query: DisableIsolationRuleRequest): Promise<DisableIsolationRuleResponse>;
    /**
     * 调用DisableSystemRule接口关闭系统规则。
     */
    DisableSystemRule(query: DisableSystemRuleRequest): Promise<DisableSystemRuleResponse>;
    /**
     * 调用EnableDegradeRule接口开启降级规则。
     */
    EnableDegradeRule(query: EnableDegradeRuleRequest): Promise<EnableDegradeRuleResponse>;
    /**
     * 调用EnableFlowRule接口开启流控规则。
     */
    EnableFlowRule(query: EnableFlowRuleRequest): Promise<EnableFlowRuleResponse>;
    /**
     * 调用EnableHotParamRule接口开启热点规则。
     */
    EnableHotParamRule(query: EnableHotParamRuleRequest): Promise<EnableHotParamRuleResponse>;
    /**
     * 调用EnableIsolationRule接口开启隔离规则。
     */
    EnableIsolationRule(query: EnableIsolationRuleRequest): Promise<EnableIsolationRuleResponse>;
    /**
     * 调用ExecuteExperiment接口执行故障演练。
     */
    ExecuteExperiment(query: ExecuteExperimentRequest): Promise<ExecuteExperimentResponse>;
    /**
     * 调用EnableSystemRule接口开启系统规则。
     */
    EnableSystemRule(query: EnableSystemRuleRequest): Promise<EnableSystemRuleResponse>;
    /**
     * 调用FinishExperimentTask接口停止故障演练任务。
     */
    FinishExperimentTask(query: FinishExperimentTaskRequest): Promise<FinishExperimentTaskResponse>;
    /**
     * 调用GetActivityTask接口查询节点任务详情。
     */
    GetActivityTask(query: GetActivityTaskRequest): Promise<GetActivityTaskResponse>;
    /**
     * 获取演练基本数据信息。
     */
    GetExperimentMeta(query: GetExperimentMetaRequest): Promise<GetExperimentMetaResponse>;
    /**
     * 调用GetExperimentTask接口查询故障演练任务详情。
     */
    GetExperimentTask(query: GetExperimentTaskRequest): Promise<GetExperimentTaskResponse>;
    GetLicenseKey(query: GetLicenseKeyRequest): Promise<GetLicenseKeyResponse>;
    /**
     * 调用GetMetricsOfApp接口获取应用监控指标。
     */
    GetMetricsOfApp(query: GetMetricsOfAppRequest): Promise<GetMetricsOfAppResponse>;
    /**
     * 获取用户应用列表。
     */
    GetUserApplications(query: GetUserApplicationsRequest): Promise<GetUserApplicationsResponse>;
    GetSentinelAppSumMetric(query: GetSentinelAppSumMetricRequest): Promise<GetSentinelAppSumMetricResponse>;
    /**
     * 调用GetMetricsOfResource接口获取资源metric数据。
     */
    GetMetricsOfResource(query: GetMetricsOfResourceRequest): Promise<GetMetricsOfResourceResponse>;
    ListActiveApps(query: ListActiveAppsRequest): Promise<ListActiveAppsResponse>;
    /**
     * 调用ListDegradeRulesOfApp接口获取应用降级规则。
     */
    ListDegradeRulesOfApp(query: ListDegradeRulesOfAppRequest): Promise<ListDegradeRulesOfAppResponse>;
    /**
     * 调用ListDegradeRulesOfResource接口获取资源对应的降级规则。
     */
    ListDegradeRulesOfResource(query: ListDegradeRulesOfResourceRequest): Promise<ListDegradeRulesOfResourceResponse>;
    /**
     * 调用ListExperimentMetas接口分页查询演练列表。
     */
    ListExperimentMetas(query: ListExperimentMetasRequest): Promise<ListExperimentMetasResponse>;
    /**
     * 调用ListFlowRulesOfApp接口获取应用流控规则列表。
     */
    ListFlowRulesOfApp(query: ListFlowRulesOfAppRequest): Promise<ListFlowRulesOfAppResponse>;
    /**
     * 调用ListFlowRulesOfResource接口获取资源对应的流控规则列表。
     */
    ListFlowRulesOfResource(query: ListFlowRulesOfResourceRequest): Promise<ListFlowRulesOfResourceResponse>;
    /**
     * 调用ListHotParamRulesOfApp接口获取应用热点规则。
     */
    ListHotParamRulesOfApp(query: ListHotParamRulesOfAppRequest): Promise<ListHotParamRulesOfAppResponse>;
    /**
     * 调用ListHotParamRulesOfResource接口获取资源对应的热点规则。
     */
    ListHotParamRulesOfResource(query: ListHotParamRulesOfResourceRequest): Promise<ListHotParamRulesOfResourceResponse>;
    /**
     * 调用ListIsolationRulesOfApp接口获取应用隔离规则。
     */
    ListIsolationRulesOfApp(query: ListIsolationRulesOfAppRequest): Promise<ListIsolationRulesOfAppResponse>;
    /**
     * 调用ListIsolationRulesOfResource接口获取资源对应的隔离规则。
     */
    ListIsolationRulesOfResource(query: ListIsolationRulesOfResourceRequest): Promise<ListIsolationRulesOfResourceResponse>;
    /**
     * 调用ListSystemRules接口获取系统规则。
     */
    ListSystemRules(query: ListSystemRulesRequest): Promise<ListSystemRulesResponse>;
    /**
     * 调用ModifyDegradeRule接口修改降级规则。
     */
    ModifyDegradeRule(query: ModifyDegradeRuleRequest): Promise<ModifyDegradeRuleResponse>;
    /**
     * 调用ModifyFlowRule接口修改流控规则。
     */
    ModifyFlowRule(query: ModifyFlowRuleRequest): Promise<ModifyFlowRuleResponse>;
    /**
     * 调用ModifyHotParamRule接口修改热点规则。
     */
    ModifyHotParamRule(query: ModifyHotParamRuleRequest): Promise<ModifyHotParamRuleResponse>;
    /**
     * 调用ModifyIsolationRule接口修改隔离规则。
     */
    ModifyIsolationRule(query: ModifyIsolationRuleRequest): Promise<ModifyIsolationRuleResponse>;
    /**
     * 调用ModifySystemRule接口修改系统规则。
     */
    ModifySystemRule(query: ModifySystemRuleRequest): Promise<ModifySystemRuleResponse>;
    /**
     * 开通AHAS服务。
     */
    OpenAhasService(query: OpenAhasServiceRequest): Promise<OpenAhasServiceResponse>;
    /**
     * 调用PushExperimentTask接口推进故障演练任务。
     */
    PushExperimentTask(query: PushExperimentTaskRequest): Promise<PushExperimentTaskResponse>;
    /**
     * 调用UpdateExperiment接口编辑故障演练基本信息及流程定义。
     */
    UpdateExperiment(query: UpdateExperimentRequest): Promise<UpdateExperimentResponse>;
    /**
     * 修改演练基本信息。
     */
    UpdateExperimentBasicInfo(query: UpdateExperimentBasicInfoRequest): Promise<UpdateExperimentBasicInfoResponse>;
    /**
     * 根据演练ID分页查询演练任务。
     */
    PageableQueryExperimentTaskByExperimentId(query: PageableQueryExperimentTaskByExperimentIdRequest): Promise<PageableQueryExperimentTaskByExperimentIdResponse>;
    /**
     * 查询用户演练列表。
     */
    PageableQueryUserExperiment(query: PageableQueryUserExperimentRequest): Promise<PageableQueryUserExperimentResponse>;
    /**
     * 查询用户下所有演练空间，包括默认空间、管理空间和参与空间。
     */
    GetUserWorkspace(query: GetUserWorkspaceRequest): Promise<GetUserWorkspaceResponse>;
    PageableQueryExperimentTaskByClusterId(query: PageableQueryExperimentTaskByClusterIdRequest): Promise<PageableQueryExperimentTaskByClusterIdResponse>;
    /**
     * 查询用户应用。
     */
    GetUserApplicationGroups(query: GetUserApplicationGroupsRequest): Promise<GetUserApplicationGroupsResponse>;
}
export default AHAS_OPENAPI;
