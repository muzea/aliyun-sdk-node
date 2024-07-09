export interface PutConcurrencyConfigRequest {
    /**
     * 函数名称
     * @example `my-func`
     */
    "functionName": string;
    /**
     * 函数并发度配置信息
     */
    "body": any;
}
