import { CancelPipelineRequest } from "./CancelPipeline/req";
import { CancelPipelineResponse } from "./CancelPipeline/res";
import { CancelTaskRequest } from "./CancelTask/req";
import { CancelTaskResponse } from "./CancelTask/res";
import { PutTaskStatusRequest } from "./PutTaskStatus/req";
import { PutTaskStatusResponse } from "./PutTaskStatus/res";
import { CreateTaskRequest } from "./CreateTask/req";
import { CreateTaskResponse } from "./CreateTask/res";
import { ResumeTaskRequest } from "./ResumeTask/req";
import { ResumeTaskResponse } from "./ResumeTask/res";
import { GetPipelineRequest } from "./GetPipeline/req";
import { GetPipelineResponse } from "./GetPipeline/res";
import { CreatePipelineRequest } from "./CreatePipeline/req";
import { CreatePipelineResponse } from "./CreatePipeline/res";
import { ListPipelinesRequest } from "./ListPipelines/req";
import { ListPipelinesResponse } from "./ListPipelines/res";
import { ListTasksRequest } from "./ListTasks/req";
import { ListTasksResponse } from "./ListTasks/res";
import { GetTaskRequest } from "./GetTask/req";
import { GetTaskResponse } from "./GetTask/res";
import { RetryTaskRequest } from "./RetryTask/req";
import { RetryTaskResponse } from "./RetryTask/res";
import { PutPipelineStatusRequest } from "./PutPipelineStatus/req";
import { PutPipelineStatusResponse } from "./PutPipelineStatus/res";
import { StartPipelineRequest } from "./StartPipeline/req";
import { StartPipelineResponse } from "./StartPipeline/res";
import { StartTaskRequest } from "./StartTask/req";
import { StartTaskResponse } from "./StartTask/res";
import { UpdatePipelineTriggerRequest } from "./UpdatePipelineTrigger/req";
import { UpdatePipelineTriggerResponse } from "./UpdatePipelineTrigger/res";
import { CreatePipelineTriggerEventRequest } from "./CreatePipelineTriggerEvent/req";
import { CreatePipelineTriggerEventResponse } from "./CreatePipelineTriggerEvent/res";
import { GetPipelineTriggerEventRequest } from "./GetPipelineTriggerEvent/req";
import { GetPipelineTriggerEventResponse } from "./GetPipelineTriggerEvent/res";
import { ListPipelineTriggerEventsRequest } from "./ListPipelineTriggerEvents/req";
import { ListPipelineTriggerEventsResponse } from "./ListPipelineTriggerEvents/res";
import { CreatePipelineTriggerRequest } from "./CreatePipelineTrigger/req";
import { CreatePipelineTriggerResponse } from "./CreatePipelineTrigger/res";
import { GetPipelineTriggerRequest } from "./GetPipelineTrigger/req";
import { GetPipelineTriggerResponse } from "./GetPipelineTrigger/res";
import { PutPipelineTriggerRequest } from "./PutPipelineTrigger/req";
import { PutPipelineTriggerResponse } from "./PutPipelineTrigger/res";
import { ListPipelineTriggersRequest } from "./ListPipelineTriggers/req";
import { ListPipelineTriggersResponse } from "./ListPipelineTriggers/res";
import { DeletePipelineTriggerEventRequest } from "./DeletePipelineTriggerEvent/req";
import { DeletePipelineTriggerEventResponse } from "./DeletePipelineTriggerEvent/res";
import { DeletePipelineTriggerRequest } from "./DeletePipelineTrigger/req";
import { DeletePipelineTriggerResponse } from "./DeletePipelineTrigger/res";
import { RefreshConnectionRequest } from "./RefreshConnection/req";
import { RefreshConnectionResponse } from "./RefreshConnection/res";
import { PutEnvironmentRequest } from "./PutEnvironment/req";
import { PutEnvironmentResponse } from "./PutEnvironment/res";
import { GetRepositoryRequest } from "./GetRepository/req";
import { GetRepositoryResponse } from "./GetRepository/res";
import { ListRepositoriesRequest } from "./ListRepositories/req";
import { ListRepositoriesResponse } from "./ListRepositories/res";
import { CreateRepositoryRequest } from "./CreateRepository/req";
import { CreateRepositoryResponse } from "./CreateRepository/res";
import { ListEnvironmentsRequest } from "./ListEnvironments/req";
import { ListEnvironmentsResponse } from "./ListEnvironments/res";
import { GetEnvironmentRequest } from "./GetEnvironment/req";
import { GetEnvironmentResponse } from "./GetEnvironment/res";
import { UpdateEnvironmentRequest } from "./UpdateEnvironment/req";
import { UpdateEnvironmentResponse } from "./UpdateEnvironment/res";
import { CreateEnvironmentRequest } from "./CreateEnvironment/req";
import { CreateEnvironmentResponse } from "./CreateEnvironment/res";
import { PutProjectRequest } from "./PutProject/req";
import { PutProjectResponse } from "./PutProject/res";
import { ListConnectionsRequest } from "./ListConnections/req";
import { ListConnectionsResponse } from "./ListConnections/res";
import { CreateConnectionRequest } from "./CreateConnection/req";
import { CreateConnectionResponse } from "./CreateConnection/res";
import { GetConnectionRequest } from "./GetConnection/req";
import { GetConnectionResponse } from "./GetConnection/res";
import { ListProjectsRequest } from "./ListProjects/req";
import { ListProjectsResponse } from "./ListProjects/res";
import { UpdateProjectRequest } from "./UpdateProject/req";
import { UpdateProjectResponse } from "./UpdateProject/res";
import { GetProjectRequest } from "./GetProject/req";
import { GetProjectResponse } from "./GetProject/res";
import { CreateProjectRequest } from "./CreateProject/req";
import { CreateProjectResponse } from "./CreateProject/res";
import { DeleteConnectionRequest } from "./DeleteConnection/req";
import { DeleteConnectionResponse } from "./DeleteConnection/res";
import { DeleteProjectRequest } from "./DeleteProject/req";
import { DeleteProjectResponse } from "./DeleteProject/res";
import { DeleteRepositoryRequest } from "./DeleteRepository/req";
import { DeleteRepositoryResponse } from "./DeleteRepository/res";
import { DeleteEnvironmentRequest } from "./DeleteEnvironment/req";
import { DeleteEnvironmentResponse } from "./DeleteEnvironment/res";

interface DEVS {
    /**
     * 取消流水线执行。流水线以及任务将被尽快取消执行。
     */
    CancelPipeline(query: CancelPipelineRequest): Promise<CancelPipelineResponse>;
    /**
     * 取消流水线任务执行。
     */
    CancelTask(query: CancelTaskRequest): Promise<CancelTaskResponse>;
    /**
     * 替换流水线任务执行状态。
     */
    PutTaskStatus(query: PutTaskStatusRequest): Promise<PutTaskStatusResponse>;
    /**
     * 创建流水线任务执行。
     */
    CreateTask(query: CreateTaskRequest): Promise<CreateTaskResponse>;
    /**
     * 恢复流水线任务执行。
     */
    ResumeTask(query: ResumeTaskRequest): Promise<ResumeTaskResponse>;
    /**
     * 查询流水线执行。
     */
    GetPipeline(query: GetPipelineRequest): Promise<GetPipelineResponse>;
    /**
     * 创建流水线执行。流水线将被异步地执行，并按照配置，产生具体的流水线任务。
     */
    CreatePipeline(query: CreatePipelineRequest): Promise<CreatePipelineResponse>;
    /**
     * 批量查询流水线执行。请尽可能提供更多的查询条件以缩小查询范围。
     */
    ListPipelines(query: ListPipelinesRequest): Promise<ListPipelinesResponse>;
    /**
     * 批量查询流水线任务执行。
     */
    ListTasks(query: ListTasksRequest): Promise<ListTasksResponse>;
    /**
     * 查询流水线任务执行。
     */
    GetTask(query: GetTaskRequest): Promise<GetTaskResponse>;
    /**
     * 重试流水线任务执行。
     */
    RetryTask(query: RetryTaskRequest): Promise<RetryTaskResponse>;
    /**
     * 替换流水线执行状态。
     */
    PutPipelineStatus(query: PutPipelineStatusRequest): Promise<PutPipelineStatusResponse>;
    /**
     * 启动流水线执行。
     */
    StartPipeline(query: StartPipelineRequest): Promise<StartPipelineResponse>;
    /**
     * 启动流水线任务执行。
     */
    StartTask(query: StartTaskRequest): Promise<StartTaskResponse>;
    /**
     * 修改流水线触发器，您指定的可写字段将被更新，未指定或不可改的字段将保持不变。
     */
    UpdatePipelineTrigger(query: UpdatePipelineTriggerRequest): Promise<UpdatePipelineTriggerResponse>;
    /**
     * 尝试提交流水线触发事件，不满足流水线触发器配置条件的触发事件将不会触发流水线运行。
     */
    CreatePipelineTriggerEvent(query: CreatePipelineTriggerEventRequest): Promise<CreatePipelineTriggerEventResponse>;
    /**
     * 查询流水线触发历史。
     */
    GetPipelineTriggerEvent(query: GetPipelineTriggerEventRequest): Promise<GetPipelineTriggerEventResponse>;
    /**
     * 批量查询流水线触发历史。
     */
    ListPipelineTriggerEvents(query: ListPipelineTriggerEventsRequest): Promise<ListPipelineTriggerEventsResponse>;
    /**
     * 创建流水线触发器，描述流水线触发的条件以及触发后的执行行为。
     */
    CreatePipelineTrigger(query: CreatePipelineTriggerRequest): Promise<CreatePipelineTriggerResponse>;
    /**
     * 查询流水线触发器。
     */
    GetPipelineTrigger(query: GetPipelineTriggerRequest): Promise<GetPipelineTriggerResponse>;
    /**
     * 使用新的流水线配置替换已有的流水线配置，不能修改的字段将被忽略。
     */
    PutPipelineTrigger(query: PutPipelineTriggerRequest): Promise<PutPipelineTriggerResponse>;
    /**
     * 批量查询流水线触发器。
     */
    ListPipelineTriggers(query: ListPipelineTriggersRequest): Promise<ListPipelineTriggersResponse>;
    /**
     * 删除流水线触发历史。
     */
    DeletePipelineTriggerEvent(query: DeletePipelineTriggerEventRequest): Promise<DeletePipelineTriggerEventResponse>;
    /**
     * 删除流水线触发器，删除后将不会有关联的流水线执行历史产生。
     */
    DeletePipelineTrigger(query: DeletePipelineTriggerRequest): Promise<DeletePipelineTriggerResponse>;
    /**
     * 刷新身份绑定。检查并按需刷新身份绑定中的凭证信息和代码托管平台账号信息，若刷新失败，则将状态转换为不可用。
     */
    RefreshConnection(query: RefreshConnectionRequest): Promise<RefreshConnectionResponse>;
    /**
     * 使用新的环境配置替换已有的环境配置；当开启自动部署时，会在模板参数变化时自动部署该环境。
     */
    PutEnvironment(query: PutEnvironmentRequest): Promise<PutEnvironmentResponse>;
    /**
     * 查询一个仓库绑定实体。
     */
    GetRepository(query: GetRepositoryRequest): Promise<GetRepositoryResponse>;
    /**
     * 批量查询满足条件的仓库绑定。
     */
    ListRepositories(query: ListRepositoriesRequest): Promise<ListRepositoriesResponse>;
    /**
     * 创建一个仓库绑定。将阿里云主账号与一个第三方代码托管平台（GitHub、Gitee、Codeup、...）的代码仓库建立关联。
     */
    CreateRepository(query: CreateRepositoryRequest): Promise<CreateRepositoryResponse>;
    /**
     * 批量查询满足条件的环境。
     */
    ListEnvironments(query: ListEnvironmentsRequest): Promise<ListEnvironmentsResponse>;
    /**
     * 查询一个环境。
     */
    GetEnvironment(query: GetEnvironmentRequest): Promise<GetEnvironmentResponse>;
    /**
     * 修改环境，并在模板参数变化时自动部署该环境。
     */
    UpdateEnvironment(query: UpdateEnvironmentRequest): Promise<UpdateEnvironmentResponse>;
    /**
     * 创建项目下的环境，并可选地根据模板自动部署该环境。
     * 服务会部署到指定的环境中，环境可以绑定代码仓库的某个分支或者某个项目模板。环境还可以设置基础设施堆栈，被环境下的所有服务所共享。
     */
    CreateEnvironment(query: CreateEnvironmentRequest): Promise<CreateEnvironmentResponse>;
    /**
     * 使用新的项目配置替换已有的项目配置，并在模板参数变化时自动部署该项目。
     */
    PutProject(query: PutProjectRequest): Promise<PutProjectResponse>;
    /**
     * 批量查询满足条件的身份绑定。
     */
    ListConnections(query: ListConnectionsRequest): Promise<ListConnectionsResponse>;
    /**
     * 创建一个身份绑定，将阿里云主账号与一个第三方代码托管平台（GitHub、Gitee、Codeup、...）的账号建立关联。
     */
    CreateConnection(query: CreateConnectionRequest): Promise<CreateConnectionResponse>;
    /**
     * 查询一个身份绑定。
     */
    GetConnection(query: GetConnectionRequest): Promise<GetConnectionResponse>;
    /**
     * 批量查询满足条件的项目。
     */
    ListProjects(query: ListProjectsRequest): Promise<ListProjectsResponse>;
    /**
     * 修改项目，并在模板参数变化时自动部署该项目。
     */
    UpdateProject(query: UpdateProjectRequest): Promise<UpdateProjectResponse>;
    /**
     * 查询一个项目。
     */
    GetProject(query: GetProjectRequest): Promise<GetProjectResponse>;
    /**
     * 创建项目，并在指定模板配置时自动部署此项目。
     */
    CreateProject(query: CreateProjectRequest): Promise<CreateProjectResponse>;
    /**
     * 删除一个身份绑定。
     */
    DeleteConnection(query: DeleteConnectionRequest): Promise<DeleteConnectionResponse>;
    /**
     * 删除一个项目，并级联删除项目下的其他实体（包括环境、流水线触发器、流水线触发记录、流水线模板、流水线）。
     */
    DeleteProject(query: DeleteProjectRequest): Promise<DeleteProjectResponse>;
    /**
     * 删除一个仓库绑定实体。
     */
    DeleteRepository(query: DeleteRepositoryRequest): Promise<DeleteRepositoryResponse>;
    /**
     * 删除一个环境，并级联删除项目下的其他实体（包括流水线触发器、流水线触发记录、流水线模板、流水线）。
     */
    DeleteEnvironment(query: DeleteEnvironmentRequest): Promise<DeleteEnvironmentResponse>;
}
export default DEVS;
