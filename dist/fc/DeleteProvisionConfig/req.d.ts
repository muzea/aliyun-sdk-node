export interface DeleteProvisionConfigRequest {
    /**
     * 函数名称
     * @example `my-func`
     */
    "functionName": string;
    /**
     * 函数别名或LATEST
     * @example `LATEST`
     */
    "qualifier"?: string;
}
