export interface StopInvocationRequest {
    /**
     * 命令执行ID。
     * @example `f-hz044748dzepds0`
     */
    "InvokeId": string;
    /**
     * 节点列表。
     */
    "NodeIdList"?: string[];
}
