export interface GetStorageAnalysisResultRequest {
    /**
     * 实例ID。
     * @example `rm-2ze1jdv45i7l6****`
     */
    "InstanceId": string;
    /**
     * 节点ID。
     * > 预留参数。
     * @example `None`
     */
    "NodeId"?: string;
    /**
     * 任务ID，调用[CreateStorageAnalysisTask](~~2639140~~)接口返回的任务ID。
     * @example `910f83f4b96df0524ddc5749f615****`
     */
    "TaskId": string;
}
