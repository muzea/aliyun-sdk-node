export interface PublishFunctionVersionRequest {
    /**
     * 函数名称
     * @example `my-func`
     */
    "functionName": string;
    /**
     * 函数版本信息
     */
    "body": any;
}
