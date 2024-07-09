export interface ListFlowControlTaskInvalidItemsRequest {
    /**
     * 实例ID。
     * @example `airec-cn-****`
     */
    "instanceId"?: string;
    /**
     * 流量调控任务ID。
     * @example `1661506482`
     */
    "taskId"?: string;
    /**
     * 请求体参数。
     */
    "body"?: string[];
}
