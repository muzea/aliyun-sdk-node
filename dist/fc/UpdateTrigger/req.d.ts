export interface UpdateTriggerRequest {
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
    /**
     * 触发器配置
     */
    "body": any;
}
