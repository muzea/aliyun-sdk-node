import { AddWorkNodeWorkforceRequest } from "./AddWorkNodeWorkforce/req";
import { AddWorkNodeWorkforceResponse } from "./AddWorkNodeWorkforce/res";
import { AppendAllDataToTaskRequest } from "./AppendAllDataToTask/req";
import { AppendAllDataToTaskResponse } from "./AppendAllDataToTask/res";
import { CreateTaskRequest } from "./CreateTask/req";
import { CreateTaskResponse } from "./CreateTask/res";
import { CreateTemplateRequest } from "./CreateTemplate/req";
import { CreateTemplateResponse } from "./CreateTemplate/res";
import { CreateUserRequest } from "./CreateUser/req";
import { CreateUserResponse } from "./CreateUser/res";
import { DeleteTaskRequest } from "./DeleteTask/req";
import { DeleteTaskResponse } from "./DeleteTask/res";
import { DeleteTemplateRequest } from "./DeleteTemplate/req";
import { DeleteTemplateResponse } from "./DeleteTemplate/res";
import { DeleteUserRequest } from "./DeleteUser/req";
import { DeleteUserResponse } from "./DeleteUser/res";
import { ExportAnnotationsRequest } from "./ExportAnnotations/req";
import { ExportAnnotationsResponse } from "./ExportAnnotations/res";
import { GetJobRequest } from "./GetJob/req";
import { GetJobResponse } from "./GetJob/res";
import { GetSubtaskRequest } from "./GetSubtask/req";
import { GetSubtaskResponse } from "./GetSubtask/res";
import { GetSubtaskItemRequest } from "./GetSubtaskItem/req";
import { GetSubtaskItemResponse } from "./GetSubtaskItem/res";
import { GetTaskRequest } from "./GetTask/req";
import { GetTaskResponse } from "./GetTask/res";
import { GetTaskStatisticsRequest } from "./GetTaskStatistics/req";
import { GetTaskStatisticsResponse } from "./GetTaskStatistics/res";
import { GetTaskStatusRequest } from "./GetTaskStatus/req";
import { GetTaskStatusResponse } from "./GetTaskStatus/res";
import { GetTaskTemplateRequest } from "./GetTaskTemplate/req";
import { GetTaskTemplateResponse } from "./GetTaskTemplate/res";
import { GetTaskTemplateQuestionsRequest } from "./GetTaskTemplateQuestions/req";
import { GetTaskTemplateQuestionsResponse } from "./GetTaskTemplateQuestions/res";
import { GetTaskTemplateViewsRequest } from "./GetTaskTemplateViews/req";
import { GetTaskTemplateViewsResponse } from "./GetTaskTemplateViews/res";
import { GetTaskWorkforceRequest } from "./GetTaskWorkforce/req";
import { GetTaskWorkforceResponse } from "./GetTaskWorkforce/res";
import { GetTaskWorkforceStatisticRequest } from "./GetTaskWorkforceStatistic/req";
import { GetTaskWorkforceStatisticResponse } from "./GetTaskWorkforceStatistic/res";
import { GetTemplateRequest } from "./GetTemplate/req";
import { GetTemplateResponse } from "./GetTemplate/res";
import { GetTemplateQuestionsRequest } from "./GetTemplateQuestions/req";
import { GetTemplateQuestionsResponse } from "./GetTemplateQuestions/res";
import { GetTemplateViewRequest } from "./GetTemplateView/req";
import { GetTemplateViewResponse } from "./GetTemplateView/res";
import { GetTenantRequest } from "./GetTenant/req";
import { GetTenantResponse } from "./GetTenant/res";
import { GetUserRequest } from "./GetUser/req";
import { GetUserResponse } from "./GetUser/res";
import { ListJobsRequest } from "./ListJobs/req";
import { ListJobsResponse } from "./ListJobs/res";
import { ListSubtaskItemsRequest } from "./ListSubtaskItems/req";
import { ListSubtaskItemsResponse } from "./ListSubtaskItems/res";
import { ListSubtasksRequest } from "./ListSubtasks/req";
import { ListSubtasksResponse } from "./ListSubtasks/res";
import { ListTasksRequest } from "./ListTasks/req";
import { ListTasksResponse } from "./ListTasks/res";
import { ListTemplatesRequest } from "./ListTemplates/req";
import { ListTemplatesResponse } from "./ListTemplates/res";
import { ListTenantsRequest } from "./ListTenants/req";
import { ListTenantsResponse } from "./ListTenants/res";
import { ListUsersRequest } from "./ListUsers/req";
import { ListUsersResponse } from "./ListUsers/res";
import { RemoveWorkNodeWorkforceRequest } from "./RemoveWorkNodeWorkforce/req";
import { RemoveWorkNodeWorkforceResponse } from "./RemoveWorkNodeWorkforce/res";
import { UpdateTaskRequest } from "./UpdateTask/req";
import { UpdateTaskResponse } from "./UpdateTask/res";
import { UpdateTaskWorkforceRequest } from "./UpdateTaskWorkforce/req";
import { UpdateTaskWorkforceResponse } from "./UpdateTaskWorkforce/res";
import { UpdateTemplateRequest } from "./UpdateTemplate/req";
import { UpdateTemplateResponse } from "./UpdateTemplate/res";
import { UpdateTenantRequest } from "./UpdateTenant/req";
import { UpdateTenantResponse } from "./UpdateTenant/res";
import { UpdateUserRequest } from "./UpdateUser/req";
import { UpdateUserResponse } from "./UpdateUser/res";

interface OPENITAG {
    /**
     * 为标注任务的工作节点（标注、质检和验收）进行人员分配。
     */
    AddWorkNodeWorkforce(query: AddWorkNodeWorkforceRequest): Promise<AddWorkNodeWorkforceResponse>;
    /**
     * 任务追加数据。
     */
    AppendAllDataToTask(query: AppendAllDataToTaskRequest): Promise<AppendAllDataToTaskResponse>;
    /**
     * 为当前租户新增标注任务。
     */
    CreateTask(query: CreateTaskRequest): Promise<CreateTaskResponse>;
    /**
     * 您可以为当前租户添加新的模板，并根据自身的业务需求自定义标注模板。
     */
    CreateTemplate(query: CreateTemplateRequest): Promise<CreateTemplateResponse>;
    /**
     * 租户内新增成员。
     */
    CreateUser(query: CreateUserRequest): Promise<CreateUserResponse>;
    /**
     * 删除当前租户下的某个任务。
     */
    DeleteTask(query: DeleteTaskRequest): Promise<DeleteTaskResponse>;
    /**
     * 删除当前租户下的模板。
     */
    DeleteTemplate(query: DeleteTemplateRequest): Promise<DeleteTemplateResponse>;
    /**
     * 删除租户内某个成员。
     */
    DeleteUser(query: DeleteUserRequest): Promise<DeleteUserResponse>;
    /**
     * 导出标注任务的结果数据。
     */
    ExportAnnotations(query: ExportAnnotationsRequest): Promise<ExportAnnotationsResponse>;
    /**
     * 查询单个标注导出结果的信息。
     */
    GetJob(query: GetJobRequest): Promise<GetJobResponse>;
    /**
     * 查询单个子任务包信息。
     */
    GetSubtask(query: GetSubtaskRequest): Promise<GetSubtaskResponse>;
    /**
     * 查询子任务包中的单个标注数据。
     */
    GetSubtaskItem(query: GetSubtaskItemRequest): Promise<GetSubtaskItemResponse>;
    /**
     * 查询单个标注任务信息。
     */
    GetTask(query: GetTaskRequest): Promise<GetTaskResponse>;
    /**
     * 查询任务当前的统计信息。
     */
    GetTaskStatistics(query: GetTaskStatisticsRequest): Promise<GetTaskStatisticsResponse>;
    /**
     * 查询任务当前的状态。
     */
    GetTaskStatus(query: GetTaskStatusRequest): Promise<GetTaskStatusResponse>;
    /**
     * 查询任务当前的模板信息。
     */
    GetTaskTemplate(query: GetTaskTemplateRequest): Promise<GetTaskTemplateResponse>;
    /**
     * 查询任务模板题目。
     */
    GetTaskTemplateQuestions(query: GetTaskTemplateQuestionsRequest): Promise<GetTaskTemplateQuestionsResponse>;
    /**
     * 查询任务模版中的数据展示信息。
     */
    GetTaskTemplateViews(query: GetTaskTemplateViewsRequest): Promise<GetTaskTemplateViewsResponse>;
    /**
     * 查询任务中各个结点配置的人员信息。
     */
    GetTaskWorkforce(query: GetTaskWorkforceRequest): Promise<GetTaskWorkforceResponse>;
    /**
     * 查询任务中各成员的统计数据。
     */
    GetTaskWorkforceStatistic(query: GetTaskWorkforceStatisticRequest): Promise<GetTaskWorkforceStatisticResponse>;
    /**
     * 查询租户下的模版信息。
     */
    GetTemplate(query: GetTemplateRequest): Promise<GetTemplateResponse>;
    /**
     * 查询模版中的单选、多选等题目信息。
     */
    GetTemplateQuestions(query: GetTemplateQuestionsRequest): Promise<GetTemplateQuestionsResponse>;
    /**
     * 查询模版中图片、文本、音频等展示信息。
     */
    GetTemplateView(query: GetTemplateViewRequest): Promise<GetTemplateViewResponse>;
    /**
     * 查询iTAG租户的相关信息。
     */
    GetTenant(query: GetTenantRequest): Promise<GetTenantResponse>;
    /**
     * 查询租户里单个成员的详细信息。
     */
    GetUser(query: GetUserRequest): Promise<GetUserResponse>;
    /**
     * 展示所有导出的标注结果的列表。
     */
    ListJobs(query: ListJobsRequest): Promise<ListJobsResponse>;
    /**
     * 展示单个子任务包的标注数据。
     */
    ListSubtaskItems(query: ListSubtaskItemsRequest): Promise<ListSubtaskItemsResponse>;
    /**
     * 展示子任务包列表。
     */
    ListSubtasks(query: ListSubtasksRequest): Promise<ListSubtasksResponse>;
    /**
     * 展示当前租户标注任务列表。
     */
    ListTasks(query: ListTasksRequest): Promise<ListTasksResponse>;
    /**
     * 展示当前租户的模板列表。
     */
    ListTemplates(query: ListTemplatesRequest): Promise<ListTemplatesResponse>;
    /**
     * 展示阿里云账号下的iTAG租户。
     */
    ListTenants(query: ListTenantsRequest): Promise<ListTenantsResponse>;
    /**
     * 展示当前租户下的全部标注成员。
     */
    ListUsers(query: ListUsersRequest): Promise<ListUsersResponse>;
    /**
     * 删除任务中某个工作结点（包括标注、质检或验收）的成员。
     */
    RemoveWorkNodeWorkforce(query: RemoveWorkNodeWorkforceRequest): Promise<RemoveWorkNodeWorkforceResponse>;
    /**
     * 修改当前租户下的任务。
     */
    UpdateTask(query: UpdateTaskRequest): Promise<UpdateTaskResponse>;
    /**
     * 更新任务成员。
     */
    UpdateTaskWorkforce(query: UpdateTaskWorkforceRequest): Promise<UpdateTaskWorkforceResponse>;
    /**
     * 修改当前租户下的模板。
     */
    UpdateTemplate(query: UpdateTemplateRequest): Promise<UpdateTemplateResponse>;
    /**
     * 修改iTAG租户的相关信息。
     */
    UpdateTenant(query: UpdateTenantRequest): Promise<UpdateTenantResponse>;
    /**
     * 更新租户内成员信息。
     */
    UpdateUser(query: UpdateUserRequest): Promise<UpdateUserResponse>;
}
export default OPENITAG;
