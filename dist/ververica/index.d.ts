import { DeleteVariableRequest } from "./DeleteVariable/req";
import { DeleteVariableResponse } from "./DeleteVariable/res";
import { CreateVariableRequest } from "./CreateVariable/req";
import { CreateVariableResponse } from "./CreateVariable/res";
import { ListVariablesRequest } from "./ListVariables/req";
import { ListVariablesResponse } from "./ListVariables/res";
import { ListJobsRequest } from "./ListJobs/req";
import { ListJobsResponse } from "./ListJobs/res";
import { UpdateDeploymentRequest } from "./UpdateDeployment/req";
import { UpdateDeploymentResponse } from "./UpdateDeployment/res";
import { StopJobRequest } from "./StopJob/req";
import { StopJobResponse } from "./StopJob/res";
import { StartJobRequest } from "./StartJob/req";
import { StartJobResponse } from "./StartJob/res";
import { ListEngineVersionMetadataRequest } from "./ListEngineVersionMetadata/req";
import { ListEngineVersionMetadataResponse } from "./ListEngineVersionMetadata/res";
import { ListDeploymentsRequest } from "./ListDeployments/req";
import { ListDeploymentsResponse } from "./ListDeployments/res";
import { ListDeploymentTargetsRequest } from "./ListDeploymentTargets/req";
import { ListDeploymentTargetsResponse } from "./ListDeploymentTargets/res";
import { GetSavepointRequest } from "./GetSavepoint/req";
import { GetSavepointResponse } from "./GetSavepoint/res";
import { GetJobRequest } from "./GetJob/req";
import { GetJobResponse } from "./GetJob/res";
import { GetGenerateResourcePlanResultRequest } from "./GetGenerateResourcePlanResult/req";
import { GetGenerateResourcePlanResultResponse } from "./GetGenerateResourcePlanResult/res";
import { GetDeploymentRequest } from "./GetDeployment/req";
import { GetDeploymentResponse } from "./GetDeployment/res";
import { FlinkApiProxyRequest } from "./FlinkApiProxy/req";
import { FlinkApiProxyResponse } from "./FlinkApiProxy/res";
import { DeleteSavepointRequest } from "./DeleteSavepoint/req";
import { DeleteSavepointResponse } from "./DeleteSavepoint/res";
import { DeleteJobRequest } from "./DeleteJob/req";
import { DeleteJobResponse } from "./DeleteJob/res";
import { DeleteDeploymentRequest } from "./DeleteDeployment/req";
import { DeleteDeploymentResponse } from "./DeleteDeployment/res";
import { CreateSavepointRequest } from "./CreateSavepoint/req";
import { CreateSavepointResponse } from "./CreateSavepoint/res";
import { CreateDeploymentRequest } from "./CreateDeployment/req";
import { CreateDeploymentResponse } from "./CreateDeployment/res";
import { GenerateResourcePlanWithFlinkConfAsyncRequest } from "./GenerateResourcePlanWithFlinkConfAsync/req";
import { GenerateResourcePlanWithFlinkConfAsyncResponse } from "./GenerateResourcePlanWithFlinkConfAsync/res";
import { ListSavepointsRequest } from "./ListSavepoints/req";
import { ListSavepointsResponse } from "./ListSavepoints/res";
import { StartJobWithParamsRequest } from "./StartJobWithParams/req";
import { StartJobWithParamsResponse } from "./StartJobWithParams/res";
import { GetMemberRequest } from "./GetMember/req";
import { GetMemberResponse } from "./GetMember/res";
import { UpdateMemberRequest } from "./UpdateMember/req";
import { UpdateMemberResponse } from "./UpdateMember/res";
import { CreateMemberRequest } from "./CreateMember/req";
import { CreateMemberResponse } from "./CreateMember/res";
import { ListMembersRequest } from "./ListMembers/req";
import { ListMembersResponse } from "./ListMembers/res";
import { DeleteMemberRequest } from "./DeleteMember/req";
import { DeleteMemberResponse } from "./DeleteMember/res";
import { GetLatestJobStartLogRequest } from "./GetLatestJobStartLog/req";
import { GetLatestJobStartLogResponse } from "./GetLatestJobStartLog/res";
import { ValidateSqlStatementRequest } from "./ValidateSqlStatement/req";
import { ValidateSqlStatementResponse } from "./ValidateSqlStatement/res";

interface VERVERICA {
    /**
     * 删除变量。
     */
    DeleteVariable(query: DeleteVariableRequest): Promise<DeleteVariableResponse>;
    /**
     * 创建变量。
     */
    CreateVariable(query: CreateVariableRequest): Promise<CreateVariableResponse>;
    /**
     * 获取变量列表。
     */
    ListVariables(query: ListVariablesRequest): Promise<ListVariablesResponse>;
    /**
     * 获取到某个已部署作业下所有作业实例的信息。
     */
    ListJobs(query: ListJobsRequest): Promise<ListJobsResponse>;
    /**
     * 更新已部署作业的信息。
     */
    UpdateDeployment(query: UpdateDeploymentRequest): Promise<UpdateDeploymentResponse>;
    /**
     * 停止一个作业实例。
     */
    StopJob(query: StopJobRequest): Promise<StopJobResponse>;
    /**
     * 创建并启动一个作业实例。
     */
    StartJob(query: StartJobRequest): Promise<StartJobResponse>;
    /**
     * 获取系统支持的引擎版本列表。
     */
    ListEngineVersionMetadata(query: ListEngineVersionMetadataRequest): Promise<ListEngineVersionMetadataResponse>;
    /**
     * 获取所有已部署作业的信息。
     */
    ListDeployments(query: ListDeploymentsRequest): Promise<ListDeploymentsResponse>;
    /**
     * 获取作业可部署目标的列表，部署目标是session集群或者perjob集群。
     */
    ListDeploymentTargets(query: ListDeploymentTargetsRequest): Promise<ListDeploymentTargetsResponse>;
    /**
     * 获取快照和系统检查点的详细信息。
     */
    GetSavepoint(query: GetSavepointRequest): Promise<GetSavepointResponse>;
    /**
     * 获取作业实例的详细信息。
     */
    GetJob(query: GetJobRequest): Promise<GetJobResponse>;
    /**
     * 根据异步工单ID获取异步生成细粒度资源结果。
     */
    GetGenerateResourcePlanResult(query: GetGenerateResourcePlanResultRequest): Promise<GetGenerateResourcePlanResultResponse>;
    /**
     * 获取已部署作业的详细信息。
     */
    GetDeployment(query: GetDeploymentRequest): Promise<GetDeploymentResponse>;
    /**
     * 代理Flink请求，获取请求结果。
     */
    FlinkApiProxy(query: FlinkApiProxyRequest): Promise<FlinkApiProxyResponse>;
    /**
     * 删除快照。
     */
    DeleteSavepoint(query: DeleteSavepointRequest): Promise<DeleteSavepointResponse>;
    /**
     * 删除一个作业下非运行状态的作业实例信息。
     */
    DeleteJob(query: DeleteJobRequest): Promise<DeleteJobResponse>;
    /**
     * 根据已部署作业ID删除已部署作业。
     */
    DeleteDeployment(query: DeleteDeploymentRequest): Promise<DeleteDeploymentResponse>;
    /**
     * 创建快照。
     */
    CreateSavepoint(query: CreateSavepointRequest): Promise<CreateSavepointResponse>;
    /**
     * 创建一个已部署作业。
     */
    CreateDeployment(query: CreateDeploymentRequest): Promise<CreateDeploymentResponse>;
    /**
     * 提交异步生成resource plan工单，返回一个异步工单ID用于查询工单结果。
     */
    GenerateResourcePlanWithFlinkConfAsync(query: GenerateResourcePlanWithFlinkConfAsyncRequest): Promise<GenerateResourcePlanWithFlinkConfAsyncResponse>;
    /**
     * 获取作业快照及最近系统检查点列表。
     */
    ListSavepoints(query: ListSavepointsRequest): Promise<ListSavepointsResponse>;
    /**
     * 启动一个作业实例。
     */
    StartJobWithParams(query: StartJobWithParamsRequest): Promise<StartJobWithParamsResponse>;
    /**
     * 查看用户授权详情。
     */
    GetMember(query: GetMemberRequest): Promise<GetMemberResponse>;
    /**
     * 更新特定项目空间下某个或某些用户的权限。
     */
    UpdateMember(query: UpdateMemberRequest): Promise<UpdateMemberResponse>;
    /**
     * 将一个用户添加到对应项目空间下并授予对应权限。
     */
    CreateMember(query: CreateMemberRequest): Promise<CreateMemberResponse>;
    /**
     * 查看特定项目下用户UID和授权的对应关系。
     */
    ListMembers(query: ListMembersRequest): Promise<ListMembersResponse>;
    /**
     * 删除指定的用户权限信息。
     */
    DeleteMember(query: DeleteMemberRequest): Promise<DeleteMemberResponse>;
    /**
     * 获取作业实例最新的启动日志。
     */
    GetLatestJobStartLog(query: GetLatestJobStartLogRequest): Promise<GetLatestJobStartLogResponse>;
    /**
     * 校验sql作业代码。
     */
    ValidateSqlStatement(query: ValidateSqlStatementRequest): Promise<ValidateSqlStatementResponse>;
}
export default VERVERICA;
