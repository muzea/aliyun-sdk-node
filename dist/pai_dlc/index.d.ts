import { CreateJobRequest } from "./CreateJob/req";
import { CreateJobResponse } from "./CreateJob/res";
import { DeleteJobRequest } from "./DeleteJob/req";
import { DeleteJobResponse } from "./DeleteJob/res";
import { GetJobEventsRequest } from "./GetJobEvents/req";
import { GetJobEventsResponse } from "./GetJobEvents/res";
import { GetJobRequest } from "./GetJob/req";
import { GetJobResponse } from "./GetJob/res";
import { StopJobRequest } from "./StopJob/req";
import { StopJobResponse } from "./StopJob/res";
import { ListJobsRequest } from "./ListJobs/req";
import { ListJobsResponse } from "./ListJobs/res";
import { GetPodLogsRequest } from "./GetPodLogs/req";
import { GetPodLogsResponse } from "./GetPodLogs/res";
import { GetPodEventsRequest } from "./GetPodEvents/req";
import { GetPodEventsResponse } from "./GetPodEvents/res";
import { ListEcsSpecsRequest } from "./ListEcsSpecs/req";
import { ListEcsSpecsResponse } from "./ListEcsSpecs/res";
import { GetJobMetricsRequest } from "./GetJobMetrics/req";
import { GetJobMetricsResponse } from "./GetJobMetrics/res";
import { ListTensorboardsRequest } from "./ListTensorboards/req";
import { ListTensorboardsResponse } from "./ListTensorboards/res";
import { GetTensorboardRequest } from "./GetTensorboard/req";
import { GetTensorboardResponse } from "./GetTensorboard/res";
import { CreateTensorboardRequest } from "./CreateTensorboard/req";
import { CreateTensorboardResponse } from "./CreateTensorboard/res";
import { DeleteTensorboardRequest } from "./DeleteTensorboard/req";
import { DeleteTensorboardResponse } from "./DeleteTensorboard/res";
import { GetTokenRequest } from "./GetToken/req";
import { GetTokenResponse } from "./GetToken/res";
import { UpdateTensorboardRequest } from "./UpdateTensorboard/req";
import { UpdateTensorboardResponse } from "./UpdateTensorboard/res";
import { StopTensorboardRequest } from "./StopTensorboard/req";
import { StopTensorboardResponse } from "./StopTensorboard/res";
import { StartTensorboardRequest } from "./StartTensorboard/req";
import { StartTensorboardResponse } from "./StartTensorboard/res";
import { UpdateJobRequest } from "./UpdateJob/req";
import { UpdateJobResponse } from "./UpdateJob/res";
import { GetWebTerminalRequest } from "./GetWebTerminal/req";
import { GetWebTerminalResponse } from "./GetWebTerminal/res";
import { GetTensorboardSharedUrlRequest } from "./GetTensorboardSharedUrl/req";
import { GetTensorboardSharedUrlResponse } from "./GetTensorboardSharedUrl/res";
import { ListJobSanityCheckResultsRequest } from "./ListJobSanityCheckResults/req";
import { ListJobSanityCheckResultsResponse } from "./ListJobSanityCheckResults/res";
import { GetJobSanityCheckResultRequest } from "./GetJobSanityCheckResult/req";
import { GetJobSanityCheckResultResponse } from "./GetJobSanityCheckResult/res";

interface PAI_DLC {
    /**
     * 创建一个任务到集群中运行。您可以指定数据源配置、代码源配置、启动命令以及任务运行的每个节点的计算资源配置等信息。
     */
    CreateJob(query: CreateJobRequest): Promise<CreateJobResponse>;
    /**
     * 删除一个运行结束（或者已停止）的任务。
     */
    DeleteJob(query: DeleteJobRequest): Promise<DeleteJobResponse>;
    /**
     * 获取一个任务的系统事件。
     */
    GetJobEvents(query: GetJobEventsRequest): Promise<GetJobEventsResponse>;
    /**
     * 获取一个任务的详细配置和运行时信息。
     */
    GetJob(query: GetJobRequest): Promise<GetJobResponse>;
    /**
     * 停止一个正在运行的任务。
     */
    StopJob(query: StopJobRequest): Promise<StopJobResponse>;
    /**
     * 获取任务列表，支持分页、排序和按条件过滤。
     */
    ListJobs(query: ListJobsRequest): Promise<ListJobsResponse>;
    /**
     * 获取（或者下载）任务某个节点的日志，日志来源于系统和用户脚本的stdout和stderr。
     */
    GetPodLogs(query: GetPodLogsRequest): Promise<GetPodLogsResponse>;
    /**
     * 获取一个任务中某个节点的系统事件。
     */
    GetPodEvents(query: GetPodEventsRequest): Promise<GetPodEventsResponse>;
    /**
     * 查询当前支持的机器资源配置列表。
     */
    ListEcsSpecs(query: ListEcsSpecsRequest): Promise<ListEcsSpecsResponse>;
    /**
     * 获取一个任务的监控数据，包括CPU、GPU、Memory的使用率、Network、Disk读写速率等。
     */
    GetJobMetrics(query: GetJobMetricsRequest): Promise<GetJobMetricsResponse>;
    /**
     * 查询已创建的Tensorboard列表。
     */
    ListTensorboards(query: ListTensorboardsRequest): Promise<ListTensorboardsResponse>;
    /**
     * 获取一个Tensorboard的详细信息。
     */
    GetTensorboard(query: GetTensorboardRequest): Promise<GetTensorboardResponse>;
    /**
     * 创建一个Tensorboard，可以通过一个任务或者指定数据源配置来创建。
     */
    CreateTensorboard(query: CreateTensorboardRequest): Promise<CreateTensorboardResponse>;
    /**
     * 删除一个已经停止的Tensorboard。
     */
    DeleteTensorboard(query: DeleteTensorboardRequest): Promise<DeleteTensorboardResponse>;
    /**
     * 获取用户Token。
     */
    GetToken(query: GetTokenRequest): Promise<GetTokenResponse>;
    /**
     * 更新一个Tensorboard。
     */
    UpdateTensorboard(query: UpdateTensorboardRequest): Promise<UpdateTensorboardResponse>;
    /**
     * 停止一个Tensorboard。
     */
    StopTensorboard(query: StopTensorboardRequest): Promise<StopTensorboardResponse>;
    /**
     * 启动一个Tensorboard。
     */
    StartTensorboard(query: StartTensorboardRequest): Promise<StartTensorboardResponse>;
    /**
     * 更新一个任务的配置信息，例如修改一个排队中任务的优先级。
     */
    UpdateJob(query: UpdateJobRequest): Promise<UpdateJobResponse>;
    /**
     * 获取进入容器的连接。
     */
    GetWebTerminal(query: GetWebTerminalRequest): Promise<GetWebTerminalResponse>;
    /**
     * 获得Tensorboard的分享链接。该链接中包含数字令牌。使用该分享链接可以访问被分享的Tensorboard任务。
     */
    GetTensorboardSharedUrl(query: GetTensorboardSharedUrlRequest): Promise<GetTensorboardSharedUrlResponse>;
    /**
     * 获取某个DLC任务所有算力健康检测的检测结果。
     */
    ListJobSanityCheckResults(query: ListJobSanityCheckResultsRequest): Promise<ListJobSanityCheckResultsResponse>;
    /**
     * 获取DLC任务某次算力健康检测结果。
     */
    GetJobSanityCheckResult(query: GetJobSanityCheckResultRequest): Promise<GetJobSanityCheckResultResponse>;
}
export default PAI_DLC;
