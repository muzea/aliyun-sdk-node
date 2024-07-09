export interface DeleteTriggerRequest {
    /**
     * 函数名称
     * @example `my-func`
     */
    "functionName": string;
    /**
     * 触发器名称
     * @example `my-trigger`
     */
    "triggerName": string;
}
