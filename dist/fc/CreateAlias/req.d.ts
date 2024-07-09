export interface CreateAliasRequest {
    /**
     * 函数名称
     * @example `my-func`
     */
    "functionName": string;
    /**
     * 创建别名的请求参数
     */
    "body": any;
}
