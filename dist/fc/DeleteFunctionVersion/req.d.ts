export interface DeleteFunctionVersionRequest {
    /**
     * 函数名称
     * @example `my-func`
     */
    "functionName": string;
    /**
     * 函数版本
     * @example `1`
     */
    "versionId": number;
}
