import { CreateFlowRequest } from "./CreateFlow/req";
import { CreateFlowResponse } from "./CreateFlow/res";
import { DeleteFlowRequest } from "./DeleteFlow/req";
import { DeleteFlowResponse } from "./DeleteFlow/res";
import { CreateScheduleRequest } from "./CreateSchedule/req";
import { CreateScheduleResponse } from "./CreateSchedule/res";
import { DeleteScheduleRequest } from "./DeleteSchedule/req";
import { DeleteScheduleResponse } from "./DeleteSchedule/res";
import { DescribeExecutionRequest } from "./DescribeExecution/req";
import { DescribeExecutionResponse } from "./DescribeExecution/res";
import { DescribeFlowRequest } from "./DescribeFlow/req";
import { DescribeFlowResponse } from "./DescribeFlow/res";
import { DescribeScheduleRequest } from "./DescribeSchedule/req";
import { DescribeScheduleResponse } from "./DescribeSchedule/res";
import { GetExecutionHistoryRequest } from "./GetExecutionHistory/req";
import { GetExecutionHistoryResponse } from "./GetExecutionHistory/res";
import { ListExecutionsRequest } from "./ListExecutions/req";
import { ListExecutionsResponse } from "./ListExecutions/res";
import { ListFlowsRequest } from "./ListFlows/req";
import { ListFlowsResponse } from "./ListFlows/res";
import { ListSchedulesRequest } from "./ListSchedules/req";
import { ListSchedulesResponse } from "./ListSchedules/res";
import { ReportTaskFailedRequest } from "./ReportTaskFailed/req";
import { ReportTaskFailedResponse } from "./ReportTaskFailed/res";
import { ReportTaskSucceededRequest } from "./ReportTaskSucceeded/req";
import { ReportTaskSucceededResponse } from "./ReportTaskSucceeded/res";
import { StartExecutionRequest } from "./StartExecution/req";
import { StartExecutionResponse } from "./StartExecution/res";
import { StopExecutionRequest } from "./StopExecution/req";
import { StopExecutionResponse } from "./StopExecution/res";
import { UpdateFlowRequest } from "./UpdateFlow/req";
import { UpdateFlowResponse } from "./UpdateFlow/res";
import { UpdateScheduleRequest } from "./UpdateSchedule/req";
import { UpdateScheduleResponse } from "./UpdateSchedule/res";
import { StartSyncExecutionRequest } from "./StartSyncExecution/req";
import { StartSyncExecutionResponse } from "./StartSyncExecution/res";

interface FNF {
    /**
     * 创建一个流程。
     */
    CreateFlow(query: CreateFlowRequest): Promise<CreateFlowResponse>;
    /**
     * 删除一个已存在的流程。
     */
    DeleteFlow(query: DeleteFlowRequest): Promise<DeleteFlowResponse>;
    /**
     * 创建一个定时调度。
     */
    CreateSchedule(query: CreateScheduleRequest): Promise<CreateScheduleResponse>;
    /**
     * 删除一个定时调度。
     */
    DeleteSchedule(query: DeleteScheduleRequest): Promise<DeleteScheduleResponse>;
    /**
     * 获取一次执行的状态信息，支持长轮询模式，长轮询最长等待时间由 WaitTimeSeconds 参数指定。
     */
    DescribeExecution(query: DescribeExecutionRequest): Promise<DescribeExecutionResponse>;
    /**
     * 获取一个流程的相关信息。
     */
    DescribeFlow(query: DescribeFlowRequest): Promise<DescribeFlowResponse>;
    /**
     * 获取一个定时调度信息。
     */
    DescribeSchedule(query: DescribeScheduleRequest): Promise<DescribeScheduleResponse>;
    /**
     * 获取指定执行过程中的每个步骤详细信息。
     */
    GetExecutionHistory(query: GetExecutionHistoryRequest): Promise<GetExecutionHistoryResponse>;
    /**
     * 获取一个流程的所有历史执行。
     */
    ListExecutions(query: ListExecutionsRequest): Promise<ListExecutionsResponse>;
    /**
     * 批量查询流程信息。
     */
    ListFlows(query: ListFlowsRequest): Promise<ListFlowsResponse>;
    /**
     * 获取定时调度列表。
     */
    ListSchedules(query: ListSchedulesRequest): Promise<ListSchedulesResponse>;
    /**
     * 汇报指定的任务执行失败。
     */
    ReportTaskFailed(query: ReportTaskFailedRequest): Promise<ReportTaskFailedResponse>;
    /**
     * 汇报指定的任务执行成功。
     */
    ReportTaskSucceeded(query: ReportTaskSucceededRequest): Promise<ReportTaskSucceededResponse>;
    /**
     * 开始一个流程的执行。
     */
    StartExecution(query: StartExecutionRequest): Promise<StartExecutionResponse>;
    /**
     * 停止一个正在执行的流程。
     */
    StopExecution(query: StopExecutionRequest): Promise<StopExecutionResponse>;
    /**
     * 更新一个流程的内容。
     */
    UpdateFlow(query: UpdateFlowRequest): Promise<UpdateFlowResponse>;
    /**
     * 更新一个定时调度。
     */
    UpdateSchedule(query: UpdateScheduleRequest): Promise<UpdateScheduleResponse>;
    /**
     * 同步调用开始一个流程的执行。
     */
    StartSyncExecution(query: StartSyncExecutionRequest): Promise<StartSyncExecutionResponse>;
}
export default FNF;
