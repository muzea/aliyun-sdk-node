import { StopExecutionRequest } from "./StopExecution/req";
import { StopExecutionResponse } from "./StopExecution/res";
import { StartExecutionRequest } from "./StartExecution/req";
import { StartExecutionResponse } from "./StartExecution/res";
import { DeleteFlowRequest } from "./DeleteFlow/req";
import { DeleteFlowResponse } from "./DeleteFlow/res";
import { ListFlowsRequest } from "./ListFlows/req";
import { ListFlowsResponse } from "./ListFlows/res";
import { ListExecutionsRequest } from "./ListExecutions/req";
import { ListExecutionsResponse } from "./ListExecutions/res";
import { DescribeFlowRequest } from "./DescribeFlow/req";
import { DescribeFlowResponse } from "./DescribeFlow/res";
import { UpdateFlowRequest } from "./UpdateFlow/req";
import { UpdateFlowResponse } from "./UpdateFlow/res";
import { CreateFlowRequest } from "./CreateFlow/req";
import { CreateFlowResponse } from "./CreateFlow/res";
import { DescribeExecutionRequest } from "./DescribeExecution/req";
import { DescribeExecutionResponse } from "./DescribeExecution/res";
import { GetExecutionHistoryRequest } from "./GetExecutionHistory/req";
import { GetExecutionHistoryResponse } from "./GetExecutionHistory/res";
import { ReportTaskSucceededRequest } from "./ReportTaskSucceeded/req";
import { ReportTaskSucceededResponse } from "./ReportTaskSucceeded/res";
import { ReportTaskFailedRequest } from "./ReportTaskFailed/req";
import { ReportTaskFailedResponse } from "./ReportTaskFailed/res";

interface FNF {
    /**
    * 调用StopExecution停止一个正在执行中的流程。
    */ StopExecution(query: StopExecutionRequest): Promise<StopExecutionResponse>;
    /**
    * 调用StartExecution开始一个流程执行。
    */ StartExecution(query: StartExecutionRequest): Promise<StartExecutionResponse>;
    /**
    * 调用DeleteFlow删除一个已存在的流程。
    */ DeleteFlow(query: DeleteFlowRequest): Promise<DeleteFlowResponse>;
    /**
    * 调用ListFlows批量查询流程信息。
    */ ListFlows(query: ListFlowsRequest): Promise<ListFlowsResponse>;
    /**
    * 调用ListExecutions获取一个流程下面的所有历史执行。
    */ ListExecutions(query: ListExecutionsRequest): Promise<ListExecutionsResponse>;
    /**
    * 调用DescribeFlow获取一个流程的相关信息。
    */ DescribeFlow(query: DescribeFlowRequest): Promise<DescribeFlowResponse>;
    /**
    * 调用UpdateFlow更新一个流程的内容。
    */ UpdateFlow(query: UpdateFlowRequest): Promise<UpdateFlowResponse>;
    /**
    * 调用CreateFlow创建一个流程。
    */ CreateFlow(query: CreateFlowRequest): Promise<CreateFlowResponse>;
    /**
    * 调用DescribeExecution获取一次执行的状态等信息。
    */ DescribeExecution(query: DescribeExecutionRequest): Promise<DescribeExecutionResponse>;
    /**
    * 调用GetExecutionHistory获取执行过程中的每个步骤详细信息。
    */ GetExecutionHistory(query: GetExecutionHistoryRequest): Promise<GetExecutionHistoryResponse>;
    /**
    * 调用ReportTaskSucceeded汇报指定的任务执行成功。
    */ ReportTaskSucceeded(query: ReportTaskSucceededRequest): Promise<ReportTaskSucceededResponse>;
    /**
    * 调用ReportTaskFailed汇报指定的任务执行失败。
    */ ReportTaskFailed(query: ReportTaskFailedRequest): Promise<ReportTaskFailedResponse>;
}
export default FNF;
