import { ListPipelinesRequest } from "./ListPipelines/req";
import { ListPipelinesResponse } from "./ListPipelines/res";
import { GetPipelineRequest } from "./GetPipeline/req";
import { GetPipelineResponse } from "./GetPipeline/res";
import { CreatePipelineRequest } from "./CreatePipeline/req";
import { CreatePipelineResponse } from "./CreatePipeline/res";
import { DeletePipelineRequest } from "./DeletePipeline/req";
import { DeletePipelineResponse } from "./DeletePipeline/res";
import { UpdatePipelineRequest } from "./UpdatePipeline/req";
import { UpdatePipelineResponse } from "./UpdatePipeline/res";
import { ListPipelineRunNodeStatusRequest } from "./ListPipelineRunNodeStatus/req";
import { ListPipelineRunNodeStatusResponse } from "./ListPipelineRunNodeStatus/res";
import { ListPipelineRunsStatusRequest } from "./ListPipelineRunsStatus/req";
import { ListPipelineRunsStatusResponse } from "./ListPipelineRunsStatus/res";
import { TerminatePipelineRunRequest } from "./TerminatePipelineRun/req";
import { TerminatePipelineRunResponse } from "./TerminatePipelineRun/res";
import { DeletePipelineRunRequest } from "./DeletePipelineRun/req";
import { DeletePipelineRunResponse } from "./DeletePipelineRun/res";
import { ListPipelineRunNodeOutputsRequest } from "./ListPipelineRunNodeOutputs/req";
import { ListPipelineRunNodeOutputsResponse } from "./ListPipelineRunNodeOutputs/res";
import { ListPipelineRunNodeLogsRequest } from "./ListPipelineRunNodeLogs/req";
import { ListPipelineRunNodeLogsResponse } from "./ListPipelineRunNodeLogs/res";
import { StartPipelineRunRequest } from "./StartPipelineRun/req";
import { StartPipelineRunResponse } from "./StartPipelineRun/res";
import { UpdatePipelineRunRequest } from "./UpdatePipelineRun/req";
import { UpdatePipelineRunResponse } from "./UpdatePipelineRun/res";
import { GetPipelineRunNodeRequest } from "./GetPipelineRunNode/req";
import { GetPipelineRunNodeResponse } from "./GetPipelineRunNode/res";
import { GetPipelineRunRequest } from "./GetPipelineRun/req";
import { GetPipelineRunResponse } from "./GetPipelineRun/res";
import { CreatePipelineRunRequest } from "./CreatePipelineRun/req";
import { CreatePipelineRunResponse } from "./CreatePipelineRun/res";
import { ListPipelineRunsRequest } from "./ListPipelineRuns/req";
import { ListPipelineRunsResponse } from "./ListPipelineRuns/res";
import { RerunPipelineRunRequest } from "./RerunPipelineRun/req";
import { RerunPipelineRunResponse } from "./RerunPipelineRun/res";

interface PAIFLOW {
    /**
     * 获取工作流列表。
     */
    ListPipelines(query: ListPipelinesRequest): Promise<ListPipelinesResponse>;
    /**
     * 获取Pipeline信息。
     */
    GetPipeline(query: GetPipelineRequest): Promise<GetPipelineResponse>;
    /**
     * 创建工作流（Pipeline）。工作流是由一系列节点组成的有向无环图，定义了一个机器学习流程。
     */
    CreatePipeline(query: CreatePipelineRequest): Promise<CreatePipelineResponse>;
    /**
     * 删除工作流。
     */
    DeletePipeline(query: DeletePipelineRequest): Promise<DeletePipelineResponse>;
    /**
     * 更新工作流的定义。
     */
    UpdatePipeline(query: UpdatePipelineRequest): Promise<UpdatePipelineResponse>;
    /**
     * 获取工作流任务节点运行状态。
     */
    ListPipelineRunNodeStatus(query: ListPipelineRunNodeStatusRequest): Promise<ListPipelineRunNodeStatusResponse>;
    /**
     * 批量获取工作流任务或节点的状态。
     */
    ListPipelineRunsStatus(query: ListPipelineRunsStatusRequest): Promise<ListPipelineRunsStatusResponse>;
    /**
     * 终止工作流任务。
     */
    TerminatePipelineRun(query: TerminatePipelineRunRequest): Promise<TerminatePipelineRunResponse>;
    /**
     * 删除工作流任务。
     */
    DeletePipelineRun(query: DeletePipelineRunRequest): Promise<DeletePipelineRunResponse>;
    /**
     * 获取工作流任务节点输出。
     */
    ListPipelineRunNodeOutputs(query: ListPipelineRunNodeOutputsRequest): Promise<ListPipelineRunNodeOutputsResponse>;
    /**
     * 获取工作流任务节点运行产生的日志。
     */
    ListPipelineRunNodeLogs(query: ListPipelineRunNodeLogsRequest): Promise<ListPipelineRunNodeLogsResponse>;
    /**
     * 启动工作流任务。
     */
    StartPipelineRun(query: StartPipelineRunRequest): Promise<StartPipelineRunResponse>;
    /**
     * 更新工作流任务。目前仅支持修改工作流任务名称。
     */
    UpdatePipelineRun(query: UpdatePipelineRunRequest): Promise<UpdatePipelineRunResponse>;
    /**
     * 工作流任务中包含多个节点，通过该接口获取节点的详细信息。
     */
    GetPipelineRunNode(query: GetPipelineRunNodeRequest): Promise<GetPipelineRunNodeResponse>;
    /**
     * 获取工作流任务详情信息。
     */
    GetPipelineRun(query: GetPipelineRunRequest): Promise<GetPipelineRunResponse>;
    /**
     * 创建工作流任务。
     */
    CreatePipelineRun(query: CreatePipelineRunRequest): Promise<CreatePipelineRunResponse>;
    /**
     * 获取工作流任务列表，支持过滤、排序和分页查询。
     */
    ListPipelineRuns(query: ListPipelineRunsRequest): Promise<ListPipelineRunsResponse>;
    /**
     * 重新执行工作流任务。
     */
    RerunPipelineRun(query: RerunPipelineRunRequest): Promise<RerunPipelineRunResponse>;
}
export default PAIFLOW;
