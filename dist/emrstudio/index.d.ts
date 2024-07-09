import { CreateWorkflowRequest } from "./CreateWorkflow/req";
import { CreateWorkflowResponse } from "./CreateWorkflow/res";
import { DeleteWorkflowRequest } from "./DeleteWorkflow/req";
import { DeleteWorkflowResponse } from "./DeleteWorkflow/res";
import { DescribeManualTaskRequest } from "./DescribeManualTask/req";
import { DescribeManualTaskResponse } from "./DescribeManualTask/res";
import { DescribeManualTaskInstanceRequest } from "./DescribeManualTaskInstance/req";
import { DescribeManualTaskInstanceResponse } from "./DescribeManualTaskInstance/res";
import { DescribeProjectRequest } from "./DescribeProject/req";
import { DescribeProjectResponse } from "./DescribeProject/res";
import { DescribeTaskRequest } from "./DescribeTask/req";
import { DescribeTaskResponse } from "./DescribeTask/res";
import { DescribeTaskInstanceRequest } from "./DescribeTaskInstance/req";
import { DescribeTaskInstanceResponse } from "./DescribeTaskInstance/res";
import { DescribeWorkflowRequest } from "./DescribeWorkflow/req";
import { DescribeWorkflowResponse } from "./DescribeWorkflow/res";
import { DescribeWorkflowInstanceRequest } from "./DescribeWorkflowInstance/req";
import { DescribeWorkflowInstanceResponse } from "./DescribeWorkflowInstance/res";
import { ListManualTaskInstancesRequest } from "./ListManualTaskInstances/req";
import { ListManualTaskInstancesResponse } from "./ListManualTaskInstances/res";
import { ListManualTasksRequest } from "./ListManualTasks/req";
import { ListManualTasksResponse } from "./ListManualTasks/res";
import { ListProjectsRequest } from "./ListProjects/req";
import { ListProjectsResponse } from "./ListProjects/res";
import { ListTaskInstancesRequest } from "./ListTaskInstances/req";
import { ListTaskInstancesResponse } from "./ListTaskInstances/res";
import { ListTasksRequest } from "./ListTasks/req";
import { ListTasksResponse } from "./ListTasks/res";
import { ListWorkflowInstancesRequest } from "./ListWorkflowInstances/req";
import { ListWorkflowInstancesResponse } from "./ListWorkflowInstances/res";
import { ListWorkflowsRequest } from "./ListWorkflows/req";
import { ListWorkflowsResponse } from "./ListWorkflows/res";
import { RunWorkflowRequest } from "./RunWorkflow/req";
import { RunWorkflowResponse } from "./RunWorkflow/res";
import { UpdateWorkflowRequest } from "./UpdateWorkflow/req";
import { UpdateWorkflowResponse } from "./UpdateWorkflow/res";

interface EMRSTUDIO {
    /**
     * 创建工作流
     */
    CreateWorkflow(query: CreateWorkflowRequest): Promise<CreateWorkflowResponse>;
    /**
     * 删除工作流
     */
    DeleteWorkflow(query: DeleteWorkflowRequest): Promise<DeleteWorkflowResponse>;
    /**
     * 获取手动任务详情
     */
    DescribeManualTask(query: DescribeManualTaskRequest): Promise<DescribeManualTaskResponse>;
    /**
     * 获取手动任务实例详情
     */
    DescribeManualTaskInstance(query: DescribeManualTaskInstanceRequest): Promise<DescribeManualTaskInstanceResponse>;
    /**
     * 获取项目详情
     */
    DescribeProject(query: DescribeProjectRequest): Promise<DescribeProjectResponse>;
    /**
     * 获取任务详情
     */
    DescribeTask(query: DescribeTaskRequest): Promise<DescribeTaskResponse>;
    /**
     * 获取任务实例详情
     */
    DescribeTaskInstance(query: DescribeTaskInstanceRequest): Promise<DescribeTaskInstanceResponse>;
    /**
     * 获取工作流详情
     */
    DescribeWorkflow(query: DescribeWorkflowRequest): Promise<DescribeWorkflowResponse>;
    /**
     * 获取工作流实例详情
     */
    DescribeWorkflowInstance(query: DescribeWorkflowInstanceRequest): Promise<DescribeWorkflowInstanceResponse>;
    /**
     * 获取手动任务实例列表
     */
    ListManualTaskInstances(query: ListManualTaskInstancesRequest): Promise<ListManualTaskInstancesResponse>;
    /**
     * 获取手动任务列表
     */
    ListManualTasks(query: ListManualTasksRequest): Promise<ListManualTasksResponse>;
    /**
     * 获取项目列表
     */
    ListProjects(query: ListProjectsRequest): Promise<ListProjectsResponse>;
    /**
     * 获取任务实例列表
     */
    ListTaskInstances(query: ListTaskInstancesRequest): Promise<ListTaskInstancesResponse>;
    /**
     * 获取任务列表
     */
    ListTasks(query: ListTasksRequest): Promise<ListTasksResponse>;
    /**
     * 获取工作流实例列表
     */
    ListWorkflowInstances(query: ListWorkflowInstancesRequest): Promise<ListWorkflowInstancesResponse>;
    /**
     * 获取工作流列表
     */
    ListWorkflows(query: ListWorkflowsRequest): Promise<ListWorkflowsResponse>;
    /**
     * 运行工作流
     */
    RunWorkflow(query: RunWorkflowRequest): Promise<RunWorkflowResponse>;
    /**
     * 更新工作流
     */
    UpdateWorkflow(query: UpdateWorkflowRequest): Promise<UpdateWorkflowResponse>;
}
export default EMRSTUDIO;
