import { CancelExecutionRequest } from "./CancelExecution/req";
import { CancelExecutionResponse } from "./CancelExecution/res";
import { CreateTemplateRequest } from "./CreateTemplate/req";
import { CreateTemplateResponse } from "./CreateTemplate/res";
import { DeleteExecutionsRequest } from "./DeleteExecutions/req";
import { DeleteExecutionsResponse } from "./DeleteExecutions/res";
import { DeleteTemplateRequest } from "./DeleteTemplate/req";
import { DeleteTemplateResponse } from "./DeleteTemplate/res";
import { GenerateExecutionPolicyRequest } from "./GenerateExecutionPolicy/req";
import { GenerateExecutionPolicyResponse } from "./GenerateExecutionPolicy/res";
import { GetExecutionTemplateRequest } from "./GetExecutionTemplate/req";
import { GetExecutionTemplateResponse } from "./GetExecutionTemplate/res";
import { GetTemplateRequest } from "./GetTemplate/req";
import { GetTemplateResponse } from "./GetTemplate/res";
import { ListActionsRequest } from "./ListActions/req";
import { ListActionsResponse } from "./ListActions/res";
import { ListExecutionLogsRequest } from "./ListExecutionLogs/req";
import { ListExecutionLogsResponse } from "./ListExecutionLogs/res";
import { ListExecutionsRequest } from "./ListExecutions/req";
import { ListExecutionsResponse } from "./ListExecutions/res";
import { ListTaskExecutionsRequest } from "./ListTaskExecutions/req";
import { ListTaskExecutionsResponse } from "./ListTaskExecutions/res";
import { ListTemplatesRequest } from "./ListTemplates/req";
import { ListTemplatesResponse } from "./ListTemplates/res";
import { NotifyExecutionRequest } from "./NotifyExecution/req";
import { NotifyExecutionResponse } from "./NotifyExecution/res";
import { StartExecutionRequest } from "./StartExecution/req";
import { StartExecutionResponse } from "./StartExecution/res";
import { UpdateTemplateRequest } from "./UpdateTemplate/req";
import { UpdateTemplateResponse } from "./UpdateTemplate/res";
import { ValidateTemplateContentRequest } from "./ValidateTemplateContent/req";
import { ValidateTemplateContentResponse } from "./ValidateTemplateContent/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { ListExecutionRiskyTasksRequest } from "./ListExecutionRiskyTasks/req";
import { ListExecutionRiskyTasksResponse } from "./ListExecutionRiskyTasks/res";

interface OOS {
    CancelExecution(query: CancelExecutionRequest): Promise<CancelExecutionResponse>;
    CreateTemplate(query: CreateTemplateRequest): Promise<CreateTemplateResponse>;
    DeleteExecutions(query: DeleteExecutionsRequest): Promise<DeleteExecutionsResponse>;
    DeleteTemplate(query: DeleteTemplateRequest): Promise<DeleteTemplateResponse>;
    GenerateExecutionPolicy(query: GenerateExecutionPolicyRequest): Promise<GenerateExecutionPolicyResponse>;
    GetExecutionTemplate(query: GetExecutionTemplateRequest): Promise<GetExecutionTemplateResponse>;
    GetTemplate(query: GetTemplateRequest): Promise<GetTemplateResponse>;
    ListActions(query: ListActionsRequest): Promise<ListActionsResponse>;
    ListExecutionLogs(query: ListExecutionLogsRequest): Promise<ListExecutionLogsResponse>;
    ListExecutions(query: ListExecutionsRequest): Promise<ListExecutionsResponse>;
    ListTaskExecutions(query: ListTaskExecutionsRequest): Promise<ListTaskExecutionsResponse>;
    ListTemplates(query: ListTemplatesRequest): Promise<ListTemplatesResponse>;
    NotifyExecution(query: NotifyExecutionRequest): Promise<NotifyExecutionResponse>;
    StartExecution(query: StartExecutionRequest): Promise<StartExecutionResponse>;
    UpdateTemplate(query: UpdateTemplateRequest): Promise<UpdateTemplateResponse>;
    ValidateTemplateContent(query: ValidateTemplateContentRequest): Promise<ValidateTemplateContentResponse>;
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    ListExecutionRiskyTasks(query: ListExecutionRiskyTasksRequest): Promise<ListExecutionRiskyTasksResponse>;
}
export default OOS;
