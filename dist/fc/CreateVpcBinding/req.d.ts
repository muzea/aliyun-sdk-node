export interface CreateVpcBindingRequest {
    /**
     * 函数名称
     * @example `my-func`
     */
    "functionName": string;
    /**
     * VPC绑定配置
     */
    "body": any;
}
