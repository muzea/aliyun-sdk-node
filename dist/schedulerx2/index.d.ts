import { CreateAppGroupRequest } from "./CreateAppGroup/req";
import { CreateAppGroupResponse } from "./CreateAppGroup/res";
import { DeleteJobRequest } from "./DeleteJob/req";
import { DeleteJobResponse } from "./DeleteJob/res";
import { CreateJobRequest } from "./CreateJob/req";
import { CreateJobResponse } from "./CreateJob/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DeleteWorkflowRequest } from "./DeleteWorkflow/req";
import { DeleteWorkflowResponse } from "./DeleteWorkflow/res";
import { DisableJobRequest } from "./DisableJob/req";
import { DisableJobResponse } from "./DisableJob/res";
import { DisableWorkflowRequest } from "./DisableWorkflow/req";
import { DisableWorkflowResponse } from "./DisableWorkflow/res";
import { EnableJobRequest } from "./EnableJob/req";
import { EnableJobResponse } from "./EnableJob/res";
import { EnableWorkflowRequest } from "./EnableWorkflow/req";
import { EnableWorkflowResponse } from "./EnableWorkflow/res";
import { ExecuteJobRequest } from "./ExecuteJob/req";
import { ExecuteJobResponse } from "./ExecuteJob/res";
import { ExecuteWorkflowRequest } from "./ExecuteWorkflow/req";
import { ExecuteWorkflowResponse } from "./ExecuteWorkflow/res";
import { GetJobInfoRequest } from "./GetJobInfo/req";
import { GetJobInfoResponse } from "./GetJobInfo/res";
import { GetJobInstanceRequest } from "./GetJobInstance/req";
import { GetJobInstanceResponse } from "./GetJobInstance/res";
import { GrantPermissionRequest } from "./GrantPermission/req";
import { GrantPermissionResponse } from "./GrantPermission/res";
import { GetJobInstanceListRequest } from "./GetJobInstanceList/req";
import { GetJobInstanceListResponse } from "./GetJobInstanceList/res";
import { RevokePermissionRequest } from "./RevokePermission/req";
import { RevokePermissionResponse } from "./RevokePermission/res";
import { StopInstanceRequest } from "./StopInstance/req";
import { StopInstanceResponse } from "./StopInstance/res";
import { UpdateJobRequest } from "./UpdateJob/req";
import { UpdateJobResponse } from "./UpdateJob/res";
import { BatchDeleteJobsRequest } from "./BatchDeleteJobs/req";
import { BatchDeleteJobsResponse } from "./BatchDeleteJobs/res";
import { BatchDisableJobsRequest } from "./BatchDisableJobs/req";
import { BatchDisableJobsResponse } from "./BatchDisableJobs/res";
import { BatchEnableJobsRequest } from "./BatchEnableJobs/req";
import { BatchEnableJobsResponse } from "./BatchEnableJobs/res";
import { ListGroupsRequest } from "./ListGroups/req";
import { ListGroupsResponse } from "./ListGroups/res";
import { ListJobsRequest } from "./ListJobs/req";
import { ListJobsResponse } from "./ListJobs/res";
import { ListNamespacesRequest } from "./ListNamespaces/req";
import { ListNamespacesResponse } from "./ListNamespaces/res";
import { GetWorkFlowRequest } from "./GetWorkFlow/req";
import { GetWorkFlowResponse } from "./GetWorkFlow/res";
import { DesignateWorkersRequest } from "./DesignateWorkers/req";
import { DesignateWorkersResponse } from "./DesignateWorkers/res";
import { GetWorkerListRequest } from "./GetWorkerList/req";
import { GetWorkerListResponse } from "./GetWorkerList/res";
import { CreateNamespaceRequest } from "./CreateNamespace/req";
import { CreateNamespaceResponse } from "./CreateNamespace/res";
import { GetAppGroupRequest } from "./GetAppGroup/req";
import { GetAppGroupResponse } from "./GetAppGroup/res";
import { DeleteAppGroupRequest } from "./DeleteAppGroup/req";
import { DeleteAppGroupResponse } from "./DeleteAppGroup/res";
import { UpdateAppGroupRequest } from "./UpdateAppGroup/req";
import { UpdateAppGroupResponse } from "./UpdateAppGroup/res";
import { CreateRouteStrategyRequest } from "./CreateRouteStrategy/req";
import { CreateRouteStrategyResponse } from "./CreateRouteStrategy/res";
import { SetJobInstanceSuccessRequest } from "./SetJobInstanceSuccess/req";
import { SetJobInstanceSuccessResponse } from "./SetJobInstanceSuccess/res";
import { UpdateWorkflowDagRequest } from "./UpdateWorkflowDag/req";
import { UpdateWorkflowDagResponse } from "./UpdateWorkflowDag/res";
import { UpdateWorkflowRequest } from "./UpdateWorkflow/req";
import { UpdateWorkflowResponse } from "./UpdateWorkflow/res";
import { ListWorkflowInstanceRequest } from "./ListWorkflowInstance/req";
import { ListWorkflowInstanceResponse } from "./ListWorkflowInstance/res";
import { RerunJobRequest } from "./RerunJob/req";
import { RerunJobResponse } from "./RerunJob/res";
import { RetryJobInstanceRequest } from "./RetryJobInstance/req";
import { RetryJobInstanceResponse } from "./RetryJobInstance/res";
import { GetWorkflowInstanceRequest } from "./GetWorkflowInstance/req";
import { GetWorkflowInstanceResponse } from "./GetWorkflowInstance/res";
import { SetWfInstanceSuccessRequest } from "./SetWfInstanceSuccess/req";
import { SetWfInstanceSuccessResponse } from "./SetWfInstanceSuccess/res";
import { GetLogRequest } from "./GetLog/req";
import { GetLogResponse } from "./GetLog/res";
import { CreateWorkflowRequest } from "./CreateWorkflow/req";
import { CreateWorkflowResponse } from "./CreateWorkflow/res";
import { BatchDeleteRouteStrategyRequest } from "./BatchDeleteRouteStrategy/req";
import { BatchDeleteRouteStrategyResponse } from "./BatchDeleteRouteStrategy/res";
import { DeleteRouteStrategyRequest } from "./DeleteRouteStrategy/req";
import { DeleteRouteStrategyResponse } from "./DeleteRouteStrategy/res";
import { GetOverviewRequest } from "./GetOverview/req";
import { GetOverviewResponse } from "./GetOverview/res";

interface SCHEDULERX2 {
    /**
     * 创建应用分组，返回appKey。
     */
    CreateAppGroup(query: CreateAppGroupRequest): Promise<CreateAppGroupResponse>;
    /**
     * 删除指定任务。
     */
    DeleteJob(query: DeleteJobRequest): Promise<DeleteJobResponse>;
    /**
     * 创建任务并返回任务ID。
     */
    CreateJob(query: CreateJobRequest): Promise<CreateJobResponse>;
    /**
     * 返回可用region列表。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 删除指定工作流。
     */
    DeleteWorkflow(query: DeleteWorkflowRequest): Promise<DeleteWorkflowResponse>;
    /**
     * 停用指定任务。
     */
    DisableJob(query: DisableJobRequest): Promise<DisableJobResponse>;
    /**
     * 禁用指定工作流。
     */
    DisableWorkflow(query: DisableWorkflowRequest): Promise<DisableWorkflowResponse>;
    /**
     * 启用指定任务。
     */
    EnableJob(query: EnableJobRequest): Promise<EnableJobResponse>;
    /**
     * 启用指定工作流。
     */
    EnableWorkflow(query: EnableWorkflowRequest): Promise<EnableWorkflowResponse>;
    /**
     * 触发一次任务立即运行。
     */
    ExecuteJob(query: ExecuteJobRequest): Promise<ExecuteJobResponse>;
    /**
     * 触发一次工作流立即运行。
     */
    ExecuteWorkflow(query: ExecuteWorkflowRequest): Promise<ExecuteWorkflowResponse>;
    /**
     * 获取指定Jobid任务详情，通常用来更新任务。
     */
    GetJobInfo(query: GetJobInfoRequest): Promise<GetJobInfoResponse>;
    /**
     * 返回任务实例的信息，可以查看任务实例的状态和进度。
     */
    GetJobInstance(query: GetJobInstanceRequest): Promise<GetJobInstanceResponse>;
    /**
     * 给指定分组授权。
     */
    GrantPermission(query: GrantPermissionRequest): Promise<GrantPermissionResponse>;
    /**
     * 根据关键字过滤，返回任务执行的历史记录。
     */
    GetJobInstanceList(query: GetJobInstanceListRequest): Promise<GetJobInstanceListResponse>;
    /**
     * 取消指定阿里云子账号的权限。
     */
    RevokePermission(query: RevokePermissionRequest): Promise<RevokePermissionResponse>;
    /**
     * 终止某次正在运行的实例。
     */
    StopInstance(query: StopInstanceRequest): Promise<StopInstanceResponse>;
    /**
     * 更新任务配置信息。默认先调用获取任务找到对应字段进行修改。
     */
    UpdateJob(query: UpdateJobRequest): Promise<UpdateJobResponse>;
    /**
     * 批量删除任务。
     */
    BatchDeleteJobs(query: BatchDeleteJobsRequest): Promise<BatchDeleteJobsResponse>;
    /**
     * 批量禁用任务。
     */
    BatchDisableJobs(query: BatchDisableJobsRequest): Promise<BatchDisableJobsResponse>;
    /**
     * 批量启用任务。
     */
    BatchEnableJobs(query: BatchEnableJobsRequest): Promise<BatchEnableJobsResponse>;
    /**
     * 获取应用列表。
     */
    ListGroups(query: ListGroupsRequest): Promise<ListGroupsResponse>;
    /**
     * 获取任务列表。
     */
    ListJobs(query: ListJobsRequest): Promise<ListJobsResponse>;
    /**
     * 获取命名空间列表。
     */
    ListNamespaces(query: ListNamespacesRequest): Promise<ListNamespacesResponse>;
    /**
     * 获取工作流信息。
     */
    GetWorkFlow(query: GetWorkFlowRequest): Promise<GetWorkFlowResponse>;
    /**
     * 指定机器。
     */
    DesignateWorkers(query: DesignateWorkersRequest): Promise<DesignateWorkersResponse>;
    /**
     * 获取接入某个应用的worker列表。
     */
    GetWorkerList(query: GetWorkerListRequest): Promise<GetWorkerListResponse>;
    /**
     * 创建命名空间。
     */
    CreateNamespace(query: CreateNamespaceRequest): Promise<CreateNamespaceResponse>;
    /**
     * 获取应用分组。
     */
    GetAppGroup(query: GetAppGroupRequest): Promise<GetAppGroupResponse>;
    /**
     * 删除应用分组。
     */
    DeleteAppGroup(query: DeleteAppGroupRequest): Promise<DeleteAppGroupResponse>;
    /**
     * 更新应用分组。
     */
    UpdateAppGroup(query: UpdateAppGroupRequest): Promise<UpdateAppGroupResponse>;
    /**
     * 创建路由策略。
     */
    CreateRouteStrategy(query: CreateRouteStrategyRequest): Promise<CreateRouteStrategyResponse>;
    /**
     * 强制设置任务实例状态为成功状态，只有专业版才支持。
     */
    SetJobInstanceSuccess(query: SetJobInstanceSuccessRequest): Promise<SetJobInstanceSuccessResponse>;
    /**
     * 更新工作流的节点及依赖关系，专业版应用才支持。
     */
    UpdateWorkflowDag(query: UpdateWorkflowDagRequest): Promise<UpdateWorkflowDagResponse>;
    /**
     * 更新工作流的基本信息，只有专业版才支持。
     */
    UpdateWorkflow(query: UpdateWorkflowRequest): Promise<UpdateWorkflowResponse>;
    /**
     * 获取工作流的历史执行记录，只有专业版才支持。
     */
    ListWorkflowInstance(query: ListWorkflowInstanceRequest): Promise<ListWorkflowInstanceResponse>;
    /**
     * 重跑任务的历史数据，只有专业版才支持。
     */
    RerunJob(query: RerunJobRequest): Promise<RerunJobResponse>;
    /**
     * 重跑失败或者成功状态的任务实例，只有专业版才支持。
     */
    RetryJobInstance(query: RetryJobInstanceRequest): Promise<RetryJobInstanceResponse>;
    /**
     * 获取指定工作流实例的详情，包含实例状态，依赖关系，每个任务实例的状态等。专业版应用才支持。
     */
    GetWorkflowInstance(query: GetWorkflowInstanceRequest): Promise<GetWorkflowInstanceResponse>;
    /**
     * 强制设置工作流实例状态为成功状态，只有专业版才支持。
     */
    SetWfInstanceSuccess(query: SetWfInstanceSuccessRequest): Promise<SetWfInstanceSuccessResponse>;
    /**
     * 通过该API可以查询任务的运行日志，需要开通专业版才支持。
     */
    GetLog(query: GetLogRequest): Promise<GetLogResponse>;
    /**
     * 创建工作流，默认禁用状态，更新完DAG后，需要手动或者通过API启动用工作流，只有专业版才支持。
     */
    CreateWorkflow(query: CreateWorkflowRequest): Promise<CreateWorkflowResponse>;
    /**
     * 批量删除路由策略。
     */
    BatchDeleteRouteStrategy(query: BatchDeleteRouteStrategyRequest): Promise<BatchDeleteRouteStrategyResponse>;
    /**
     * 删除路由策略。
     */
    DeleteRouteStrategy(query: DeleteRouteStrategyRequest): Promise<DeleteRouteStrategyResponse>;
    /**
     * 获取专业版应用任务调度概览数据信息。
     */
    GetOverview(query: GetOverviewRequest): Promise<GetOverviewResponse>;
}
export default SCHEDULERX2;
