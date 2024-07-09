import { ChangeRecoveryPointRequest } from "./ChangeRecoveryPoint/req";
import { ChangeRecoveryPointResponse } from "./ChangeRecoveryPoint/res";
import { CommitFailoverRequest } from "./CommitFailover/req";
import { CommitFailoverResponse } from "./CommitFailover/res";
import { CreateRecoveryPlanRequest } from "./CreateRecoveryPlan/req";
import { CreateRecoveryPlanResponse } from "./CreateRecoveryPlan/res";
import { CreateSitePairRequest } from "./CreateSitePair/req";
import { CreateSitePairResponse } from "./CreateSitePair/res";
import { DeleteRecoveryPlanRequest } from "./DeleteRecoveryPlan/req";
import { DeleteRecoveryPlanResponse } from "./DeleteRecoveryPlan/res";
import { DeleteSitePairRequest } from "./DeleteSitePair/req";
import { DeleteSitePairResponse } from "./DeleteSitePair/res";
import { DescribeAvailableInstanceTypesRequest } from "./DescribeAvailableInstanceTypes/req";
import { DescribeAvailableInstanceTypesResponse } from "./DescribeAvailableInstanceTypes/res";
import { DescribeInfrastructuresRequest } from "./DescribeInfrastructures/req";
import { DescribeInfrastructuresResponse } from "./DescribeInfrastructures/res";
import { DescribeRecoveryPlanRequest } from "./DescribeRecoveryPlan/req";
import { DescribeRecoveryPlanResponse } from "./DescribeRecoveryPlan/res";
import { DescribeRecoveryPointsRequest } from "./DescribeRecoveryPoints/req";
import { DescribeRecoveryPointsResponse } from "./DescribeRecoveryPoints/res";
import { DescribeRecoveryPlansRequest } from "./DescribeRecoveryPlans/req";
import { DescribeRecoveryPlansResponse } from "./DescribeRecoveryPlans/res";
import { DescribeServerRequest } from "./DescribeServer/req";
import { DescribeServerResponse } from "./DescribeServer/res";
import { DescribeServersRequest } from "./DescribeServers/req";
import { DescribeServersResponse } from "./DescribeServers/res";
import { DescribeSiteRequest } from "./DescribeSite/req";
import { DescribeSiteResponse } from "./DescribeSite/res";
import { DescribeSitePairRequest } from "./DescribeSitePair/req";
import { DescribeSitePairResponse } from "./DescribeSitePair/res";
import { DescribeSitePairStatisticsRequest } from "./DescribeSitePairStatistics/req";
import { DescribeSitePairStatisticsResponse } from "./DescribeSitePairStatistics/res";
import { DescribeSitePairsRequest } from "./DescribeSitePairs/req";
import { DescribeSitePairsResponse } from "./DescribeSitePairs/res";
import { DescribeSummaryRequest } from "./DescribeSummary/req";
import { DescribeSummaryResponse } from "./DescribeSummary/res";
import { DescribeTaskRequest } from "./DescribeTask/req";
import { DescribeTaskResponse } from "./DescribeTask/res";
import { DescribeTasksRequest } from "./DescribeTasks/req";
import { DescribeTasksResponse } from "./DescribeTasks/res";
import { DisableReplicationRequest } from "./DisableReplication/req";
import { DisableReplicationResponse } from "./DisableReplication/res";
import { EnableReplicationRequest } from "./EnableReplication/req";
import { EnableReplicationResponse } from "./EnableReplication/res";
import { FailbackRequest } from "./Failback/req";
import { FailbackResponse } from "./Failback/res";
import { ForcedFailoverRequest } from "./ForcedFailover/req";
import { ForcedFailoverResponse } from "./ForcedFailover/res";
import { RegisterServersRequest } from "./RegisterServers/req";
import { RegisterServersResponse } from "./RegisterServers/res";
import { ReversedDisableReplicationRequest } from "./ReversedDisableReplication/req";
import { ReversedDisableReplicationResponse } from "./ReversedDisableReplication/res";
import { ReversedEnableReplicationRequest } from "./ReversedEnableReplication/req";
import { ReversedEnableReplicationResponse } from "./ReversedEnableReplication/res";
import { TestCleanupRequest } from "./TestCleanup/req";
import { TestCleanupResponse } from "./TestCleanup/res";
import { TestFailoverRequest } from "./TestFailover/req";
import { TestFailoverResponse } from "./TestFailover/res";
import { TriggerReversedRegisterRequest } from "./TriggerReversedRegister/req";
import { TriggerReversedRegisterResponse } from "./TriggerReversedRegister/res";
import { UnregisterServerRequest } from "./UnregisterServer/req";
import { UnregisterServerResponse } from "./UnregisterServer/res";
import { UpdateRecoveryPlanRequest } from "./UpdateRecoveryPlan/req";
import { UpdateRecoveryPlanResponse } from "./UpdateRecoveryPlan/res";

interface HDR {
    /**
     * 更换恢复点。
     */
    ChangeRecoveryPoint(query: ChangeRecoveryPointRequest): Promise<ChangeRecoveryPointResponse>;
    /**
     * 确认故障切换。
     */
    CommitFailover(query: CommitFailoverRequest): Promise<CommitFailoverResponse>;
    /**
     * 创建恢复计划。
     */
    CreateRecoveryPlan(query: CreateRecoveryPlanRequest): Promise<CreateRecoveryPlanResponse>;
    /**
     * 创建容灾站点对。
     */
    CreateSitePair(query: CreateSitePairRequest): Promise<CreateSitePairResponse>;
    /**
     * 根据恢复计划ID删除指定的恢复计划。
     */
    DeleteRecoveryPlan(query: DeleteRecoveryPlanRequest): Promise<DeleteRecoveryPlanResponse>;
    /**
     * 删除站点对。
     */
    DeleteSitePair(query: DeleteSitePairRequest): Promise<DeleteSitePairResponse>;
    /**
     * 查询（演练、故障切换、故障恢复等场景的）可用规格。
     */
    DescribeAvailableInstanceTypes(query: DescribeAvailableInstanceTypesRequest): Promise<DescribeAvailableInstanceTypesResponse>;
    /**
     * 查询站点基础设施信息，混合云容灾服务支持IDC上云容灾、跨区域容灾、跨可用区容灾，不同场景下站点使用的基础设施不同，例如IDC上云容灾的源端站点可能使用物理机、VCenter作为基础设施；跨区域容灾与跨可用区容灾目前主要使用阿里云作为基础设施。
     */
    DescribeInfrastructures(query: DescribeInfrastructuresRequest): Promise<DescribeInfrastructuresResponse>;
    /**
     * 查询恢复计划详情。
     */
    DescribeRecoveryPlan(query: DescribeRecoveryPlanRequest): Promise<DescribeRecoveryPlanResponse>;
    /**
     * 查询可用恢复点。
     */
    DescribeRecoveryPoints(query: DescribeRecoveryPointsRequest): Promise<DescribeRecoveryPointsResponse>;
    /**
     * 查询站点对中的恢复计划列表。
     */
    DescribeRecoveryPlans(query: DescribeRecoveryPlansRequest): Promise<DescribeRecoveryPlansResponse>;
    /**
     * 查询受保护服务器。
     */
    DescribeServer(query: DescribeServerRequest): Promise<DescribeServerResponse>;
    /**
     * 查询受保护服务器。
     */
    DescribeServers(query: DescribeServersRequest): Promise<DescribeServersResponse>;
    /**
     * 查询站点信息。
     */
    DescribeSite(query: DescribeSiteRequest): Promise<DescribeSiteResponse>;
    /**
     * 查询站点对信息。
     */
    DescribeSitePair(query: DescribeSitePairRequest): Promise<DescribeSitePairResponse>;
    /**
     * 查询站点对统计信息。
     */
    DescribeSitePairStatistics(query: DescribeSitePairStatisticsRequest): Promise<DescribeSitePairStatisticsResponse>;
    /**
     * 查询站点对信息。
     */
    DescribeSitePairs(query: DescribeSitePairsRequest): Promise<DescribeSitePairsResponse>;
    /**
     * 查询概览信息。
     */
    DescribeSummary(query: DescribeSummaryRequest): Promise<DescribeSummaryResponse>;
    /**
     * 查询任务。
     */
    DescribeTask(query: DescribeTaskRequest): Promise<DescribeTaskResponse>;
    /**
     * 查询任务列表。
     */
    DescribeTasks(query: DescribeTasksRequest): Promise<DescribeTasksResponse>;
    /**
     * 停止复制。
     */
    DisableReplication(query: DisableReplicationRequest): Promise<DisableReplicationResponse>;
    /**
     * 启动复制。
     */
    EnableReplication(query: EnableReplicationRequest): Promise<EnableReplicationResponse>;
    /**
     * 故障恢复。
     */
    Failback(query: FailbackRequest): Promise<FailbackResponse>;
    /**
     * 故障切换。
     */
    ForcedFailover(query: ForcedFailoverRequest): Promise<ForcedFailoverResponse>;
    /**
     * 添加受保护服务器。
     */
    RegisterServers(query: RegisterServersRequest): Promise<RegisterServersResponse>;
    /**
     * 停止反向复制。
     */
    ReversedDisableReplication(query: ReversedDisableReplicationRequest): Promise<ReversedDisableReplicationResponse>;
    /**
     * 启动反向复制。
     */
    ReversedEnableReplication(query: ReversedEnableReplicationRequest): Promise<ReversedEnableReplicationResponse>;
    /**
     * 清理容灾演练环境。
     */
    TestCleanup(query: TestCleanupRequest): Promise<TestCleanupResponse>;
    /**
     * 容灾演练。
     */
    TestFailover(query: TestFailoverRequest): Promise<TestFailoverResponse>;
    /**
     * 反向注册，将完成故障切换的实例从目的端站点反向注册到源端站点，为后续启动反向复制实现故障恢复做准备。
     */
    TriggerReversedRegister(query: TriggerReversedRegisterRequest): Promise<TriggerReversedRegisterResponse>;
    /**
     * 注销受保护服务器。
     */
    UnregisterServer(query: UnregisterServerRequest): Promise<UnregisterServerResponse>;
    /**
     * 编辑恢复计划内容。
     */
    UpdateRecoveryPlan(query: UpdateRecoveryPlanRequest): Promise<UpdateRecoveryPlanResponse>;
}
export default HDR;
