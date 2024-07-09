import { QueryAsyncJobListRequest } from "./QueryAsyncJobList/req";
import { QueryAsyncJobListResponse } from "./QueryAsyncJobList/res";
import { GetAsyncJobResultRequest } from "./GetAsyncJobResult/req";
import { GetAsyncJobResultResponse } from "./GetAsyncJobResult/res";
import { CancelWaitingAsyncJobRequest } from "./CancelWaitingAsyncJob/req";
import { CancelWaitingAsyncJobResponse } from "./CancelWaitingAsyncJob/res";

interface VIAPI {
    /**
     * 在您成功提交异步任务以后，可以通过QueryAsyncJobList来查询已经提交的任务信息列表。
     */
    QueryAsyncJobList(query: QueryAsyncJobListRequest): Promise<QueryAsyncJobListResponse>;
    /**
     * 针对异步接口，调用API接口后，返回的并不是真正的请求结果，您需要保存返回结果中的RequestId，然后调用GetAsyncJobResult来获取真正的请求结果。
     */
    GetAsyncJobResult(query: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse>;
    /**
     * 通过CancelWaitingAsyncJob可以取消任务状态为QUEUING（排队中）的异步任务，任务状态为PROCESSING（已经开始处理的任务）无法取消。取消后任务状态为JOB_CANCELED（任务取消），已经取消的任务不会再次执行。
     */
    CancelWaitingAsyncJob(query: CancelWaitingAsyncJobRequest): Promise<CancelWaitingAsyncJobResponse>;
}
export default VIAPI;
