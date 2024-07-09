export interface CreateTriggerRequest {
    /**
     * 函数名称
     * @example `my-func`
     */
    "functionName": string;
    /**
     * 触发器配置
     */
    "body": any;
}
