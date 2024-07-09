export interface GetKillInstanceSessionTaskResultRequest {
    /**
     * 实例ID。
     * @example `rm-2ze1jdv45i7l6****`
     */
    "InstanceId": string;
    /**
     * 节点ID。
     * > 对于PolarDB MySQL版实例，需要提供节点ID。
     * @example `pi-8vbkfj5a756um****`
     */
    "NodeId"?: string;
    /**
     * <props="china">任务ID，调用[CreateKillInstanceSessionTask](~~609246~~)接口时返回的任务ID。</props>
     * <props="intl">任务ID，调用[CreateKillInstanceSessionTask](~~609246~~)接口时返回的任务ID。</props>
     * @example `f77d535b45405bd462b21caa3ee8****`
     */
    "TaskId": string;
}
