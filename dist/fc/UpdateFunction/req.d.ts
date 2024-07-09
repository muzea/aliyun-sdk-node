export interface UpdateFunctionRequest {
    /**
     * 函数名称
     * @example `my-func`
     */
    "functionName": string;
    /**
     * 函数信息
     */
    "body": any;
}
